<template>
  <router-link :to>
    <div class="card">
      <div class="title">{{ title }}</div>
      <div class="details">
        <div class="description">{{ description }}</div>
        <div class="address">
          <div class="address-label">
            {{ address }}
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<Contract>();

const to = computed(() => {
  return `/contract/${props.address}`;
});
</script>

<script lang="ts">
interface Contract {
  title: string;
  description: string;
  address: string;
}

export type { Contract };
</script>

<style scoped>
a {
  color: inherit;
  text-decoration: none;
}

.card {
  display: flex;
  gap: 12px;
  flex-direction: column;
  padding: 14px;
  transition: all 0.25s ease-in-out;
  border: 1px solid var(--color-border-primary);
  border-radius: var(--border-radius-medium);
  opacity: 0.6;
  cursor: pointer;
}

.card:hover {
  opacity: 1;
}

.title {
  font-size: var(--font-size-medium);
}

.details {
  display: flex;
  gap: 10px;
  flex-direction: column;
}

.description {
  --line-height: 1.25em;
  --max-lines: 3;

  height: calc(var(--line-height) * var(--max-lines));
  color: var(--color-text-secondary);
  font-size: var(--font-size-small);
  line-height: var(--line-height);
}

.address {
  display: flex;
}

.address-label {
  padding: 2px 4px;
  border-radius: var(--border-radius-tiny);
  background: var(--color-background-tertiary);
  color: var(--color-text-tertiary);
  font-family: var(--font-mono);
  font-size: var(--font-size-tiny);
}
</style>
