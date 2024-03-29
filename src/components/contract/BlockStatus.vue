<template>
  <div
    class="status"
    :class="{
      success: status === 'success',
      warning: status === 'warning',
      empty: status === 'empty',
      progress: status === 'progress',
    }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{ status: Status }>();
</script>

<script lang="ts">
type Status = 'success' | 'warning' | 'empty' | 'progress';

export type { Status };
</script>

<style scoped>
.success {
  color: #4dbf8c;
}

.warning {
  color: #c8b866;
}

.empty {
  color: #4f4f4f;
}

.progress {
  color: #818181;
}
</style>
