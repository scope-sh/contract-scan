<template>
  <div class="page">
    <div class="content">
      <div class="header">
        <router-link to="/">
          <div class="link">← Go Back</div>
        </router-link>
        <div class="header-details">
          <div class="subtitle">Bundle</div>
          <div class="title">
            <h1>{{ name }}</h1>
          </div>
        </div>
      </div>
      <div class="details">
        <AddressList :addresses />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Address } from 'viem';
import { useRoute } from 'vue-router';

import AddressList from '@/components/bundle/AddressList.vue';

const route = useRoute();

const name = computed(() => route.query.name);

const addresses = computed<Address[]>(() => {
  const addressString = route.query.addresses as string;
  return addressString.split(',').map((address) => address as Address);
});
</script>

<style scoped>
.page {
  display: flex;
  justify-content: center;
  min-height: 100%;
  margin: 0 16px;
}

.content {
  display: flex;
  gap: 60px;
  flex-direction: column;
  width: 840px;
  max-width: 100%;
  height: 100%;
  padding-top: 24px;
}

@media (width >= 768px) {
  .content {
    gap: 150px;
    padding-top: 96px;
  }
}

.header {
  display: flex;
  gap: 24px;
  flex-direction: column;
}

a {
  text-decoration: none;
}

.link {
  opacity: 0.6;
  color: var(--color-text-secondary);
  font-size: var(--font-size-tiny);
  cursor: pointer;
}

.link:hover {
  opacity: 1;
}

.header-details {
  display: flex;
  gap: 8px;
  flex-direction: column;
}

.subtitle {
  color: var(--color-text-secondary);
  font-size: var(--font-size-small);
}

.title {
  display: flex;
  gap: 8px;
  align-items: center;
}

h1 {
  margin: 0;
  font-family: var(--font-mono);
  font-size: var(--font-size-medium);
  font-weight: normal;
}

@media (width >= 768px) {
  h1 {
    font-size: var(--font-size-big);
  }
}

.details {
  display: flex;
  gap: 30px;
  flex-direction: column;
}
</style>
