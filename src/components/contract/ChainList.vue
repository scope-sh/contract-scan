<template>
  <div class="list">
    <div
      v-for="chain in chains"
      :key="chain.id"
    >
      <BlockStatus :status="chain.status">
        <div class="item-details">
          {{ getChainName(chain.id) }}
          <a
            :href="chain.getExplorerUrl(address)"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconExternalLink class="icon" />
          </a>
        </div>
      </BlockStatus>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Chain as ChainData } from 'viem';
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

import IconExternalLink from '@/components/__common/icon/ExternalLink.vue';

import BlockStatus, { Status } from './BlockStatus.vue';

defineProps<{ address: string; chains: Chain[] }>();

function getChainName(chainId: number): string | null {
  const chainData = getChainData(chainId);
  return chainData ? chainData.name : null;
}

function getChainData(chainId: number): ChainData | null {
  switch (chainId) {
    case mainnet.id:
      return mainnet;
    case goerli.id:
      return goerli;
    case sepolia.id:
      return sepolia;
    case optimism.id:
      return optimism;
    case optimismGoerli.id:
      return optimismGoerli;
    case optimismSepolia.id:
      return optimismSepolia;
    case base.id:
      return base;
    case baseSepolia.id:
      return baseSepolia;
    case polygon.id:
      return polygon;
    case polygonMumbai.id:
      return polygonMumbai;
    case polygonAmoy.id:
      return polygonAmoy;
  }
  return null;
}
</script>

<script lang="ts">
interface Chain {
  id: number;
  getExplorerUrl: (address: string) => string | undefined;
  status: Status;
}

export type { Chain };
</script>

<style scoped>
.list {
  display: flex;
  gap: 8px;
  flex-direction: column;
}

.item-details {
  display: flex;
  gap: 8px;
  align-items: center;
}

a {
  color: inherit;
  text-decoration: none;
}

.icon {
  width: 15px;
  height: 15px;
}
</style>
