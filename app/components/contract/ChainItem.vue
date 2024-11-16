<template>
  <div class="item">
    <IconCheck
      v-if="verification === 'verified'"
      class="verification icon"
    />
    <IconCross
      v-else-if="verification === 'unverified'"
      class="verification icon"
    />
    <IconQuestionMark
      v-else-if="verification === 'unknown'"
      class="verification icon icon-toned-down"
    />
    <BlockStatus
      :status="status"
      class="block"
    >
      <div class="item-details">
        {{ getChainName(chain) }}
        <a
          v-if="explorerUrl"
          :href="explorerUrl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconExternalLink class="icon" />
        </a>
      </div>
    </BlockStatus>
  </div>
</template>

<script setup lang="ts">
import type { Address } from 'viem';
import { computed } from 'vue';

import BlockStatus, { type Status } from './BlockStatus.vue';

import IconCheck from '@/components/__common/icon/Check.vue';
import IconCross from '@/components/__common/icon/Cross.vue';
import IconExternalLink from '@/components/__common/icon/ExternalLink.vue';
import IconQuestionMark from '@/components/__common/icon/QuestionMark.vue';
import {
  type Chain,
  getChainName,
  getAddressExplorerUrl,
} from '@/utils/chains';
import type { VerificationStatus } from '@/utils/verification';

const { address, chain, verification } = defineProps<{
  address: Address;
  chain: Chain;
  status: Status;
  verification: VerificationStatus | null;
}>();

const explorerUrl = computed(() => getAddressExplorerUrl(chain, address));
</script>

<style scoped>
.item {
  display: flex;
  position: relative;
  align-items: center;
}

.item-details {
  display: flex;
  gap: 8px;
  align-items: center;
}

a {
  color: inherit;
  text-decoration: none;
}

.icon {
  width: 15px;
  height: 15px;
}

.icon-toned-down {
  opacity: 0.4;
}

.verification {
  position: absolute;
  left: -20px;
}
</style>
