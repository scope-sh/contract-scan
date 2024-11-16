<template>
  <div class="root">
    <div class="block">
      <BlockStatus status="success">exact bytecode match</BlockStatus>
      <BlockStatus status="warning">different bytecode</BlockStatus>
      <BlockStatus status="error">failed to get code</BlockStatus>
      <BlockStatus status="empty">not deployed (no code)</BlockStatus>
      <BlockStatus status="progress">querying</BlockStatus>
    </div>
    <div class="block">
      <div class="block-part"><IconCheck class="icon" /> verified</div>
      <div class="block-part"><IconCross class="icon" /> unverified</div>
      <div class="block-part"><IconQuestionMark class="icon" /> unknown</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BlockStatus from './BlockStatus.vue';

import IconCheck from '@/components/__common/icon/Check.vue';
import IconCross from '@/components/__common/icon/Cross.vue';
import IconQuestionMark from '@/components/__common/icon/QuestionMark.vue';
</script>

<style scoped>
.root {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding: 12px 9px;
  border: 1px solid var(--color-border-primary);
  border-radius: var(--border-radius-medium);
  background: var(--color-background-secondary);
}

.block {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

@media (width >= 768px) {
  .block {
    gap: 20px;
  }
}

.block-part {
  display: flex;
  gap: 4px;
  align-items: center;
}

.icon {
  width: 16px;
  height: 16px;
}
</style>
