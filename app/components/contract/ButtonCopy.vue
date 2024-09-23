<template>
  <div
    class="button"
    @click="copy"
  >
    <IconCopy
      v-if="ready"
      class="icon"
    />
    <IconCheck
      v-else
      class="icon"
    />
  </div>
</template>

<script setup lang="ts">
import { useTimeout } from '@vueuse/core';
import { onMounted } from 'vue';

import IconCheck from '@/components/__common/icon/Check.vue';
import IconCopy from '@/components/__common/icon/Copy.vue';

const { value } = defineProps<{
  value: string;
}>();

onMounted(() => {
  stop();
});

const { ready, start, stop } = useTimeout(2000, { controls: true });

function copy(): void {
  navigator.clipboard.writeText(value);
  start();
}
</script>

<style scoped>
.button {
  padding: 4px;
  border: 1px solid var(--color-border-tertiary);
  border-radius: var(--border-radius-m);
  cursor: pointer;
}

.button:hover {
  border: 1px solid var(--color-border-quaternary);
}

.icon {
  width: 16px;
  height: 16px;
}
</style>
