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
            :href="getAddressExplorerUrl(chain.id, address)"
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
import { Address } from 'viem';

import IconExternalLink from '@/components/__common/icon/ExternalLink.vue';
import { Chain, getChainName, getAddressExplorerUrl } from '@/utils/chains';

import BlockStatus, { Status } from './BlockStatus.vue';

defineProps<{
  address: Address;
  chains: {
    id: Chain;
    status: Status;
  }[];
}>();
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
