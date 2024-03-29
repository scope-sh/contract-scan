<template>
  <div class="list">
    <ChainItem
      v-for="chain in props.chains"
      :key="chain.id"
      :chain="chain.id"
      :status="chain.status"
      :address="props.address"
    />
  </div>
</template>

<script setup lang="ts">
import { Address } from 'viem';

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
</script>

<style scoped>
.list {
  display: flex;
  gap: 8px;
  flex-direction: column;
}
</style>
