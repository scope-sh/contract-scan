<template>
  <div class="page">
    <div class="content">
      <div class="top">
        <div class="header">
          <h1>Contract Scan</h1>
          <div class="subtitle">
            Search deployed contracts across 50+ EVM chains
          </div>
        </div>
        <div class="address">
          <input
            v-model="address"
            :class="{ invalid: !isAddressValid }"
            placeholder="Contract address"
            @keydown.enter="handleAddressInputEnterKeydown"
          />
          <IconArrowRight
            class="icon"
            @click="handleIconClick"
          />
        </div>
      </div>
      <div class="examples">
        <h2>Popular Singletones</h2>
        <div class="example-list">
          <CardContract
            v-for="example in examples"
            :key="example.address"
            class="example"
            :title="example.title"
            :description="example.description"
            :address="example.address"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { isAddress } from 'viem';
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

import IconArrowRight from '@/components/__common/icon/ArrowRight.vue';
import CardContract, {
  type Contract,
} from '@/components/home/CardContract.vue';

const router = useRouter();

const address = ref('');
const isAddressValid = ref(true);
watch(address, () => {
  isAddressValid.value = true;
});

function handleAddressInputEnterKeydown(): void {
  if (!isAddress(address.value)) {
    isAddressValid.value = false;
    return;
  }
  if (address.value) {
    openContractPage(address.value);
  }
}
function handleIconClick(): void {
  if (!isAddress(address.value)) {
    isAddressValid.value = false;
    return;
  }
  if (address.value) {
    openContractPage(address.value);
  }
}

function openContractPage(address: string): void {
  router.push({
    name: 'contract',
    params: {
      address,
    },
  });
}

const examples: Contract[] = [
  {
    title: 'Uniswap V3 Factory',
    description:
      'A protocol that facilitates peer-to-peer market making and swapping of ERC-20 tokens',
    address: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
  },
  {
    title: 'Entry Point 0.7',
    description:
      'Account Abstraction (EIP-4337) contract that verifies and executes the bundles of UserOperations sent to it',
    address: '0x0000000071727De22E5E9d8BAf0edAc6f37da032',
  },
  {
    title: 'Multicall3',
    description: 'Batch contract calls on any chain',
    address: '0xcA11bde05977b3631167028862bE2a173976CA11',
  },
  {
    title: 'CreateX',
    description: 'A Trustless, Universal Contract Deployer',
    address: '0xba5Ed099633D3B313e4D5F7bdc1305d3c28ba5Ed',
  },
  {
    title: 'Safe Factory 1.4.1',
    description: 'A proxy factory to create Safe multisig wallets',
    address: '0x4e1DCf7AD4e460CfD30791CCC4F9c8a4f820ec67',
  },
  {
    title: 'Optimistic WETH',
    description:
      'A wrapped ether (WETH9) contract deployed across OP Stack chains',
    address: '0x4200000000000000000000000000000000000006',
  },
];
</script>

<style scoped>
.page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  margin: 0 16px;
}

.content {
  display: flex;
  gap: 100px;
  flex-direction: column;
  justify-content: space-between;
  width: 972px;
  max-width: 100%;
  height: 100%;
  padding-top: 40px;
}

@media (width >= 768px) {
  .content {
    gap: 120px;
    padding-top: 154px;
  }
}

.top {
  display: flex;
  gap: 40px;
  flex-direction: column;
}

@media (width >= 768px) {
  .top {
    gap: 70px;
  }
}

.header {
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
}

h1 {
  margin: 0;
  font-size: var(--font-size-big);
  font-weight: normal;
}

.subtitle {
  color: var(--color-text-secondary);
  font-size: var(--font-size-medium);
}

.address {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 6px 12px;
  transition: all 0.25s ease-in-out;
  border: 1px solid var(--color-border-primary);
  border-radius: var(--border-radius-small);
}

.address:has(input:focus) {
  border-color: var(--color-border-secondary);
}

.address:has(input.invalid) {
  border-color: var(--color-error);
}

input {
  width: 100%;
  padding: 0;
  border: none;
  outline: none;
  background: transparent;
  color: var(--color-text-secondary);
  font-size: var(--font-size-medium);
}

input::placeholder {
  color: var(--color-text-placeholder);
}

.icon {
  width: 20px;
  height: 20px;
  transition: all 0.25s ease-in-out;
  color: var(--color-border-primary);
  cursor: pointer;
}

input:focus ~ .icon {
  color: var(--color-border-secondary);
}

input.invalid ~ .icon {
  color: var(--color-error);
}

.examples {
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
}

h2 {
  margin: 0;
  color: var(--color-text-secondary);
  font-size: var(--font-size-medium);
  font-weight: normal;
}

.example-list {
  --item-per-row: 1;
  --gap: 12px;

  display: flex;
  flex-wrap: wrap;
  gap: var(--gap);
  width: 100%;
}

@media (width >= 768px) {
  .example-list {
    --item-per-row: 3;
  }
}

.example {
  width: calc(
    (100% - (var(--item-per-row) - 1) * var(--gap)) / var(--item-per-row)
  );
  max-width: 100%;
}
</style>
