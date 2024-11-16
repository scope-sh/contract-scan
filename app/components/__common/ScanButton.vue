<template>
  <button :disabled>
    <slot />
  </button>
</template>

<script setup lang="ts">
const { disabled = false } = defineProps<{
  disabled?: boolean;
}>();
</script>

<style scoped>
button {
  padding: 8px 6px;
  border: 1px solid var(--color-border-primary);
  border-radius: var(--border-radius-medium);
  background: var(--color-background-primary);
  color: var(--color-text-primary);
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background: var(--color-background-secondary);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
}
</style>
