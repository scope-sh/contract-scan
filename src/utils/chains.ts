import { Address, Chain as ChainData } from 'viem';
import {
  mainnet,
  goerli,
  sepolia,
  optimism,
  optimismGoerli,
  optimismSepolia,
  base,
  baseSepolia,
  polygon,
  polygonMumbai,
  polygonAmoy,
} from 'viem/chains';

const ETHEREUM = mainnet.id;
const GOERLI = goerli.id;
const SEPOLIA = sepolia.id;
const OPTIMISM = optimism.id;
const OPTIMISM_GOERLI = optimismGoerli.id;
const OPTIMISM_SEPOLIA = optimismSepolia.id;
const BASE = base.id;
const BASE_SEPOLIA = baseSepolia.id;
const POLYGON = polygon.id;
const POLYGON_MUMBAI = polygonMumbai.id;
const POLYGON_AMOY = polygonAmoy.id;

type Chain =
  | typeof ETHEREUM
  | typeof GOERLI
  | typeof SEPOLIA
  | typeof OPTIMISM
  | typeof OPTIMISM_GOERLI
  | typeof OPTIMISM_SEPOLIA
  | typeof BASE
  | typeof BASE_SEPOLIA
  | typeof POLYGON
  | typeof POLYGON_MUMBAI
  | typeof POLYGON_AMOY;

const CHAINS: Chain[] = [
  ETHEREUM,
  GOERLI,
  SEPOLIA,
  OPTIMISM,
  OPTIMISM_GOERLI,
  OPTIMISM_SEPOLIA,
  BASE,
  BASE_SEPOLIA,
  POLYGON,
  POLYGON_MUMBAI,
  POLYGON_AMOY,
];

function getChainName(chain: Chain): string | null {
  const chainData = getChainData(chain);
  return chainData ? chainData.name : null;
}

function getChainData(chain: Chain): ChainData | null {
  switch (chain) {
    case ETHEREUM:
      return mainnet;
    case GOERLI:
      return goerli;
    case SEPOLIA:
      return sepolia;
    case OPTIMISM:
      return optimism;
    case OPTIMISM_GOERLI:
      return optimismGoerli;
    case OPTIMISM_SEPOLIA:
      return optimismSepolia;
    case BASE:
      return base;
    case BASE_SEPOLIA:
      return baseSepolia;
    case POLYGON:
      return polygon;
    case POLYGON_MUMBAI:
      return polygonMumbai;
    case POLYGON_AMOY:
      return polygonAmoy;
  }
  return null;
}

function getAddressExplorerUrl(chain: Chain, address: Address): string {
  switch (chain) {
    case ETHEREUM:
      return `https://etherscan.io/address/${address}`;
    case GOERLI:
      return `https://goerli.etherscan.io/address/${address}`;
    case SEPOLIA:
      return `https://sepolia.etherscan.io/address/${address}`;
    case OPTIMISM:
      return `https://optimistic.etherscan.io/address/${address}`;
    case OPTIMISM_GOERLI:
      return `https://goerli-optimism.etherscan.io/address/${address}`;
    case OPTIMISM_SEPOLIA:
      return `https://sepolia-optimism.etherscan.io/address/${address}`;
    case BASE:
      return `https://basescan.org/address/${address}`;
    case BASE_SEPOLIA:
      return `https://sepolia.basescan.org/address/${address}`;
    case POLYGON:
      return `https://polygonscan.com/address/${address}`;
    case POLYGON_MUMBAI:
      return `https://mumbai.polygonscan.com/address/${address}`;
    case POLYGON_AMOY:
      return `https://www.oklink.com/amoy/address/${address}`;
  }
}

export {
  CHAINS,
  ETHEREUM,
  GOERLI,
  SEPOLIA,
  OPTIMISM,
  OPTIMISM_GOERLI,
  OPTIMISM_SEPOLIA,
  BASE,
  BASE_SEPOLIA,
  POLYGON,
  POLYGON_MUMBAI,
  POLYGON_AMOY,
  getChainName,
  getAddressExplorerUrl,
};
export type { Chain };
