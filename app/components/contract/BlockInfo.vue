<template>
  <div class="block">
    <BlockStatus status="success">exact bytecode match</BlockStatus>
    <BlockStatus status="warning">different bytecode</BlockStatus>
    <BlockStatus status="error">failed to get code</BlockStatus>
    <BlockStatus status="empty">not deployed (no code)</BlockStatus>
    <BlockStatus status="progress">querying</BlockStatus>
  </div>
</template>

<script setup lang="ts">
import BlockStatus from './BlockStatus.vue';
</script>

<style scoped>
.block {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 12px 9px;
  border: 1px solid var(--color-border-primary);
  border-radius: var(--border-radius-medium);
  background: var(--color-background-secondary);
}

@media (width >= 768px) {
  .block {
    gap: 20px;
  }
}
</style>
