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
          :chains
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Address } from 'viem';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import BlockInfo from '@/components/contract/BlockInfo.vue';
import { Status } from '@/components/contract/BlockStatus.vue';
import ButtonCopy from '@/components/contract/ButtonCopy.vue';
import ChainList from '@/components/contract/ChainList.vue';
import {
  ETHEREUM,
  GOERLI,
  SEPOLIA,
  OPTIMISM,
  OPTIMISM_GOERLI,
  OPTIMISM_SEPOLIA,
  BASE,
  BASE_SEPOLIA,
  POLYGON,
  POLYGON_MUMBAI,
  POLYGON_AMOY,
  Chain,
} from '@/utils/chains';

const route = useRoute();

const address = computed(() => route.params.address as Address);

const chains: {
  id: Chain;
  status: Status;
}[] = [
  { id: ETHEREUM, status: 'success' },
  { id: GOERLI, status: 'success' },
  { id: SEPOLIA, status: 'success' },
  { id: OPTIMISM, status: 'warning' },
  { id: OPTIMISM_GOERLI, status: 'warning' },
  { id: OPTIMISM_SEPOLIA, status: 'warning' },
  { id: BASE, status: 'empty' },
  { id: BASE_SEPOLIA, status: 'empty' },
  { id: POLYGON, status: 'progress' },
  { id: POLYGON_MUMBAI, status: 'progress' },
  { id: POLYGON_AMOY, status: 'progress' },
];
</script>

<style scoped>
.page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.content {
  display: flex;
  gap: 150px;
  flex-direction: column;
  width: 840px;
  max-width: 100%;
  height: 100%;
  padding: 96px 0 32px;
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
