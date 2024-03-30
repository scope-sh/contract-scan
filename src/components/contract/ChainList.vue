<template>
  <div class="list">
    <ChainItem
      v-for="chain in sortedChains"
      :key="chain.id"
      :chain="chain.id"
      :status="chain.status"
      :address="props.address"
    />
  </div>
</template>

<script setup lang="ts">
import { Address } from 'viem';
import { computed } from 'vue';

import { Chain } from '@/utils/chains';

import { Status } from './BlockStatus.vue';
import ChainItem from './ChainItem.vue';

const props = defineProps<{
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

  const sortedChains = [...props.chains];
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
