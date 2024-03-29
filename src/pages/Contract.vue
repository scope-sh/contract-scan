<template>
  <div class="page">
    <div class="content">
      <div class="header">
        <router-link to="/">
          <div class="link">← Go Back</div>
        </router-link>
        <div class="header-details">
          <div class="subtitle">Contract</div>
          <div class="title">
            <h1>{{ address }}</h1>
            <ButtonCopy :value="address" />
          </div>
        </div>
      </div>
      <div class="details">
        <BlockInfo />
        <ChainList
          :address
          :chains="sortedChains"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Address, Hex, createPublicClient, http } from 'viem';
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

import BlockInfo from '@/components/contract/BlockInfo.vue';
import { Status } from '@/components/contract/BlockStatus.vue';
import ButtonCopy from '@/components/contract/ButtonCopy.vue';
import ChainList from '@/components/contract/ChainList.vue';
import {
  CHAINS,
  Chain,
  getChainData,
  getChainEndpointUrl,
} from '@/utils/chains';

const route = useRoute();

const address = computed(() => route.params.address as Address);

const chains = ref(getInitialChainStatus());
const sortedChains = computed(() => {
  function statusToPriority(status: Status): number {
    switch (status) {
      case 'success':
        return 0;
      case 'warning':
        return 1;
      case 'progress':
        return 2;
      case 'empty':
        return 3;
    }
  }

  const sortedChains = [...chains.value];
  return sortedChains.sort((a, b) => {
    return statusToPriority(a.status) - statusToPriority(b.status);
  });
});

watch(
  address,
  () => {
    chains.value = getInitialChainStatus();
    fetchCode();
  },
  {
    immediate: true,
  },
);

async function fetchCode(): Promise<void> {
  let referenceBytecode: Hex | null = null;
  // Fetch contract code
  for (const chain of CHAINS) {
    const endpointUrl = getChainEndpointUrl(chain);
    if (!endpointUrl) {
      continue;
    }
    const chainClient = createPublicClient({
      chain: getChainData(chain),
      transport: http(endpointUrl),
    });
    const chainCode = await chainClient.getBytecode({
      address: address.value,
    });
    if (!referenceBytecode && chainCode) {
      referenceBytecode = chainCode;
    }
    const status = chainCode
      ? referenceBytecode === chainCode
        ? 'success'
        : 'warning'
      : 'empty';
    const chainIndex = chains.value.findIndex(
      (chainStatus) => chainStatus.id === chain,
    );
    const chainValue = chains.value[chainIndex];
    if (chainValue) {
      chainValue.status = status;
    }
  }
}

function getInitialChainStatus(): {
  id: Chain;
  status: Status;
}[] {
  return CHAINS.map((chain) => ({
    id: chain,
    status: 'progress',
  }));
}
</script>

<style scoped>
.page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100%;
}

.content {
  display: flex;
  gap: 150px;
  flex-direction: column;
  width: 840px;
  max-width: 100%;
  height: 100%;
  padding-top: 96px;
}

.header {
  display: flex;
  gap: 24px;
  flex-direction: column;
}

a {
  text-decoration: none;
}

.link {
  opacity: 0.6;
  color: var(--color-text-secondary);
  font-size: var(--font-size-tiny);
  cursor: pointer;
}

.link:hover {
  opacity: 1;
}

.header-details {
  display: flex;
  gap: 8px;
  flex-direction: column;
}

.subtitle {
  color: var(--color-text-secondary);
  font-size: var(--font-size-small);
}

.title {
  display: flex;
  gap: 8px;
  align-items: center;
}

h1 {
  margin: 0;
  font-family: var(--font-mono);
  font-size: var(--font-size-big);
  font-weight: normal;
}

.details {
  display: flex;
  gap: 30px;
  flex-direction: column;
}
</style>
