<template>
  <div>
    <BlockStatus :status="status">
      <div class="item-details">
        {{ getChainName(chain) }}
        <a
          v-if="explorerUrl"
          :href="explorerUrl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconExternalLink class="icon" />
        </a>
      </div>
    </BlockStatus>
  </div>
</template>

<script setup lang="ts">
import type { Address } from 'viem';
import { computed } from 'vue';

import BlockStatus, { type Status } from './BlockStatus.vue';

import IconExternalLink from '@/components/__common/icon/ExternalLink.vue';
import {
  type Chain,
  getChainName,
  getAddressExplorerUrl,
} from '@/utils/chains';

const props = defineProps<{
  address: Address;
  chain: Chain;
  status: Status;
}>();

const explorerUrl = computed(() =>
  getAddressExplorerUrl(props.chain, props.address),
);
</script>

<style scoped>
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
