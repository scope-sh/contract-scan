<template>
  <div class="list">
    <div
      v-for="address in addresses"
      :key="address"
    >
      <AddressItem :address />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Address } from 'viem';

import AddressItem from './AddressItem.vue';

defineProps<{
  addresses: Address[];
}>();
</script>

<style scoped>
.list {
  display: flex;
  gap: 8px;
  flex-direction: column;
}
</style>
