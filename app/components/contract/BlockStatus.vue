<template>
  <div
    class="status"
    :class="{
      success: status === 'success',
      warning: status === 'warning',
      empty: status === 'empty',
      progress: status === 'progress',
      error: status === 'error',
    }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{ status: Status }>();
</script>

<script lang="ts">
type Status = 'success' | 'warning' | 'empty' | 'progress' | 'error';

// eslint-disable-next-line import/prefer-default-export
export type { Status };
</script>

<style scoped>
.success {
  color: #4dbf8c;
}

.warning {
  color: #b7fbca;
}

.empty {
  color: #4f4f4f;
}

.progress {
  animation: glow 2s infinite;
  color: #8e8e8e;
}

.error {
  color: #c4655a;
}

@keyframes glow {
  0% {
    opacity: 0.7;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0.7;
  }
}
</style>
