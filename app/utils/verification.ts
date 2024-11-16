import ky from 'ky';
import type { Address } from 'viem';

import type { Chain } from '@/utils/chains';

interface CheckVerificationResponse {
  status: 'verified' | 'unverified' | 'error';
}

type VerificationStatus = 'verified' | 'unverified' | 'unknown';

async function checkContractVerification(
  address: Address,
  chain: Chain,
): Promise<VerificationStatus> {
  const checkResponse = await ky
    .get('/api/check-verification', {
      searchParams: {
        chain: chain.toString(),
        address,
      },
    })
    .json<CheckVerificationResponse>();

  if (checkResponse.status === 'error') {
    return 'unknown';
  }
  return checkResponse.status;
}

export { checkContractVerification };
export type { VerificationStatus };
