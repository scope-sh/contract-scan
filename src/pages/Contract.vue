<template>
  <div class="page">
    <div class="content">
      <div class="header">
        <div class="subtitle">Contract</div>
        <div class="title">
          <h1>{{ address }}</h1>
          <ButtonCopy :value="address" />
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
import {
  mainnet,
  goerli,
  sepolia,
  optimism,
  optimismGoerli,
  optimismSepolia,
  base,
  baseSepolia,
  polygon,
  polygonMumbai,
  polygonAmoy,
} from 'viem/chains';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import BlockInfo from '@/components/contract/BlockInfo.vue';
import ButtonCopy from '@/components/contract/ButtonCopy.vue';
import ChainList, { Chain } from '@/components/contract/ChainList.vue';

const route = useRoute();

const address = computed(() => route.params.address as string);

const chains: Chain[] = [
  {
    id: mainnet.id,
    getExplorerUrl: (address: string) =>
      `https://etherscan.io/address/${address}`,
    status: 'success',
  },
  {
    id: goerli.id,
    getExplorerUrl: (address: string) =>
      `https://goerli.etherscan.io/address/${address}`,
    status: 'success',
  },
  {
    id: sepolia.id,
    getExplorerUrl: (address: string) =>
      `https://sepolia.etherscan.io/address/${address}`,
    status: 'success',
  },
  {
    id: optimism.id,
    getExplorerUrl: (address: string) =>
      `https://optimistic.etherscan.io/address/${address}`,
    status: 'warning',
  },
  {
    id: optimismGoerli.id,
    getExplorerUrl: (address: string) =>
      `https://goerli-optimism.etherscan.io/address/${address}`,
    status: 'warning',
  },
  {
    id: optimismSepolia.id,
    getExplorerUrl: (address: string) =>
      `https://sepolia-optimism.etherscan.io/address/${address}`,
    status: 'warning',
  },
  {
    id: base.id,
    getExplorerUrl: (address: string) =>
      `https://basescan.org/address/${address}`,
    status: 'empty',
  },
  {
    id: baseSepolia.id,
    getExplorerUrl: (address: string) =>
      `https://sepolia.basescan.org/address/${address}`,
    status: 'empty',
  },
  {
    id: polygon.id,
    getExplorerUrl: (address: string) =>
      `https://polygonscan.com/address/${address}`,
    status: 'progress',
  },
  {
    id: polygonMumbai.id,
    getExplorerUrl: (address: string) =>
      `https://mumbai.polygonscan.com/address/${address}`,
    status: 'progress',
  },
  {
    id: polygonAmoy.id,
    getExplorerUrl: (address: string) =>
      `https://www.oklink.com/amoy/address/${address}`,
    status: 'progress',
  },
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
