<template>
  <div class="list">
    <ChainItem
      v-for="chain in sortedChains"
      :key="chain.id"
      :chain="chain.id"
      :status="chain.status"
      :address="address"
    />
  </div>
</template>

<script setup lang="ts">
import type { Address } from 'viem';
import { computed } from 'vue';

import type { Status } from './BlockStatus.vue';
import ChainItem from './ChainItem.vue';

import type { Chain } from '@/utils/chains';

const { chains } = defineProps<{
  address: Address;
  chains: {
    id: Chain;
    status: Status;
  }[];
}>();

const sortedChains = computed(() => {
  function statusToPriority(status: Status): number {
    switch (status) {
      case 'success':
        return 0;
      case 'warning':
        return 1;
      case 'error':
        return 2;
      case 'progress':
        return 3;
      case 'empty':
        return 4;
    }
  }

  const sortedChains = [...chains];
  return sortedChains.sort((a, b) => {
    return statusToPriority(a.status) - statusToPriority(b.status);
  });
});
</script>

<style scoped>
.list {
  display: flex;
  gap: 8px;
  flex-direction: column;
}
</style>
