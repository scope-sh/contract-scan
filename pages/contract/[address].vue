<template>
  <div class="page">
    <div class="content">
      <div class="header">
        <router-link to="/">
          <div class="link">← Go Back</div>
        </router-link>
        <div class="header-details">
          <div class="subtitle">{{ label }}</div>
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
          :chains
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { keccak256, type Address, type Hex } from 'viem';
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

import BlockInfo from '@/components/contract/BlockInfo.vue';
import type { Status } from '@/components/contract/BlockStatus.vue';
import ButtonCopy from '@/components/contract/ButtonCopy.vue';
import ChainList from '@/components/contract/ChainList.vue';
import addresses from '@/data/addresses.json';
import cache from '@/data/cache.json';
import { type Chain, CHAINS, getCode as getChainCode } from '@/utils/chains';

const route = useRoute();

const address = computed(
  () => (route.params.address as Address).toLowerCase() as Address,
);
const label = computed(
  () =>
    (addresses as Record<Address, string | undefined>)[address.value] ||
    'Contract',
);

// eslint-disable-next-line no-undef
useHead({
  meta: [
    {
      property: 'og:image',
      content: `https://contractscan.xyz/api/og?address=${address.value}`,
    },
    {
      property: 'twitter:image',
      content: `https://contractscan.xyz/api/og?address=${address.value}`,
    },
  ],
});

const chains = ref(getInitialChainStatus());

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

async function getCodeHash(chain: Chain): Promise<Hex | null | undefined> {
  const cachedCodeHash =
    (cache as Record<Address, Partial<Record<Chain, Hex>>>)[address.value]?.[
      chain
    ] || null;
  if (cachedCodeHash) {
    return cachedCodeHash;
  }
  const code = await getChainCode(chain, address.value);
  if (code) {
    return keccak256(code);
  }
  return code;
}

async function fetchCode(): Promise<void> {
  function processCodeHash(
    chain: Chain,
    codeHash: Hex | null | undefined,
  ): void {
    if (!referenceCodeHash && codeHash) {
      referenceCodeHash = codeHash;
    }
    const status = codeHash
      ? referenceCodeHash === codeHash
        ? 'success'
        : 'warning'
      : codeHash === null
        ? 'empty'
        : 'error';
    const chainIndex = chains.value.findIndex(
      (chainStatus) => chainStatus.id === chain,
    );
    const chainValue = chains.value[chainIndex];
    if (chainValue) {
      chainValue.status = status;
    }
  }
  let referenceCodeHash: Hex | null = null;
  // Get cached code first
  const cachedCodeHashes = (
    cache as Record<Address, Partial<Record<Chain, Hex>>>
  )[address.value];
  for (const chainKey in cachedCodeHashes) {
    const chain = parseInt(chainKey) as Chain;
    const codeHash = cachedCodeHashes[chain];
    processCodeHash(chain, codeHash);
  }
  // Split chains into batches to query contract code in parallel
  const batchSize = 10;
  const batchedChains: Chain[][] = [];
  for (let i = 0; i < chains.value.length; i += batchSize) {
    batchedChains.push(
      chains.value.slice(i, i + batchSize).map((chain) => chain.id),
    );
  }
  // Fetch contract code
  for (const batch of batchedChains) {
    await Promise.all(
      batch.map(async (chain) => {
        const codeHash = await getCodeHash(chain);
        processCodeHash(chain, codeHash);
      }),
    );
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
  margin: 0 16px;
}

.content {
  display: flex;
  gap: 60px;
  flex-direction: column;
  width: 840px;
  max-width: 100%;
  height: 100%;
  padding-top: 24px;
}

@media (width >= 768px) {
  .content {
    gap: 150px;
    padding-top: 96px;
  }
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
  font-size: var(--font-size-medium);
  font-weight: normal;
}

@media (width >= 768px) {
  h1 {
    font-size: var(--font-size-big);
  }
}

.details {
  display: flex;
  gap: 30px;
  flex-direction: column;
}
</style>
