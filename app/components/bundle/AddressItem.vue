<template>
  <div class="item-details">
    <router-link :to> {{ label }} </router-link>
  </div>
</template>

<script setup lang="ts">
import type { Address } from 'viem';
import { computed } from 'vue';

import labels from '@/data/labels.json';

const { address } = defineProps<{
  address: Address;
}>();

const to = computed(() => `/contract/${address}`);

const labelsFlattened = computed(() => {
  // Flatten the A -> B -> C -> D map into a C -> D map
  const result: Record<string, string> = {};
  for (const [key, value] of Object.entries(labels)) {
    if (typeof value === 'string') {
      result[key] = value;
    } else {
      for (const [key2, value2] of Object.entries(value)) {
        if (typeof value2 === 'string') {
          result[key2] = value2;
        } else {
          for (const [key3, value3] of Object.entries(value2)) {
            result[key3] = value3;
          }
        }
      }
    }
  }
  return result;
});
const label = computed(() => labelsFlattened.value[address] || address);
</script>

<style scoped>
.item-details {
  display: flex;
  gap: 8px;
  align-items: center;
}

a {
  color: var(--color-text-secondary);
  text-decoration: none;

  &:hover {
    color: var(--color-text-primary);
  }
}
</style>
