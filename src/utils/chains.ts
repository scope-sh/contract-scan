import { Address, Chain as ChainData } from 'viem';
import {
  mainnet,
  sepolia,
  holesky,
  arbitrum,
  arbitrumNova,
  arbitrumSepolia,
  optimism,
  optimismSepolia,
  base,
  baseSepolia,
  zora,
  zoraSepolia,
  polygon,
  polygonMumbai,
  polygonAmoy,
  polygonZkEvm,
  polygonZkEvmTestnet,
  avalanche,
  avalancheFuji,
  gnosis,
  gnosisChiado,
  scroll,
  scrollSepolia,
  zkSync,
  zkSyncTestnet,
  zkSyncSepoliaTestnet,
  celo,
  celoAlfajores,
  linea,
  lineaTestnet,
  blast,
  blastSepolia,
  mantle,
  mantleTestnet,
  mode,
  modeTestnet,
  bsc,
  bscTestnet,
  fantom,
  fantomTestnet,
  moonbaseAlpha,
  moonbeam,
  moonriver,
  flare,
  immutableZkEvm,
  immutableZkEvmTestnet,
  aurora,
  auroraTestnet,
  opBNB,
  opBNBTestnet,
  manta,
  mantaTestnet,
} from 'viem/chains';

const ETHEREUM = mainnet.id;
const SEPOLIA = sepolia.id;
const HOLESKY = holesky.id;
const ARBITRUM = arbitrum.id;
const ARBITRUM_NOVA = arbitrumNova.id;
const ARBITRUM_SEPOLIA = arbitrumSepolia.id;
const OPTIMISM = optimism.id;
const OPTIMISM_SEPOLIA = optimismSepolia.id;
const BASE = base.id;
const BASE_SEPOLIA = baseSepolia.id;
const ZORA = zora.id;
const ZORA_SEPOLIA = zoraSepolia.id;
const POLYGON = polygon.id;
const POLYGON_MUMBAI = polygonMumbai.id;
const POLYGON_AMOY = polygonAmoy.id;
const POLYGON_ZKEVM = polygonZkEvm.id;
const POLYGON_ZKEVM_TESTNET = polygonZkEvmTestnet.id;
const AVALANCHE = avalanche.id;
const AVALANCHE_FUJI = avalancheFuji.id;
const GNOSIS = gnosis.id;
const GNOSIS_CHIADO = gnosisChiado.id;
const SCROLL = scroll.id;
const SCROLL_SEPOLIA = scrollSepolia.id;
const ZKSYNC_ERA = zkSync.id;
const ZKSYNC_ERA_GOERLI = zkSyncTestnet.id;
const ZKSYNC_ERA_SEPOLIA = zkSyncSepoliaTestnet.id;
const CELO = celo.id;
const CELO_ALFAJORES = celoAlfajores.id;
const LINEA = linea.id;
const LINEA_GOERLI = lineaTestnet.id;
const BLAST = blast.id;
const BLAST_SEPOLIA = blastSepolia.id;
const MANTLE = mantle.id;
const MANTLE_GOERLI = mantleTestnet.id;
const MODE = mode.id;
const MODE_SEPOLIA = modeTestnet.id;
const BSC = bsc.id;
const BSC_TESTNET = bscTestnet.id;
const FANTOM = fantom.id;
const FANTOM_TESTNET = fantomTestnet.id;
const MOONBASE_ALPHA = moonbaseAlpha.id;
const MOONBEAM = moonbeam.id;
const MOONRIVER = moonriver.id;
const FLARE = flare.id;
const IMMUTABLE_ZKEVM = immutableZkEvm.id;
const IMMUTABLE_ZKEVM_TESTNET = immutableZkEvmTestnet.id;
const AURORA = aurora.id;
const AURORA_TESTNET = auroraTestnet.id;
const OP_BNB = opBNB.id;
const OP_BNB_TESTNET = opBNBTestnet.id;
const MANTA_PACIFIC = manta.id;
const MANTA_PACIFIC_SEPOLIA = mantaTestnet.id;

type Chain =
  | typeof ETHEREUM
  | typeof SEPOLIA
  | typeof HOLESKY
  | typeof ARBITRUM
  | typeof ARBITRUM_NOVA
  | typeof ARBITRUM_SEPOLIA
  | typeof OPTIMISM
  | typeof OPTIMISM_SEPOLIA
  | typeof BASE
  | typeof BASE_SEPOLIA
  | typeof ZORA
  | typeof ZORA_SEPOLIA
  | typeof POLYGON
  | typeof POLYGON_MUMBAI
  | typeof POLYGON_AMOY
  | typeof POLYGON_ZKEVM
  | typeof POLYGON_ZKEVM_TESTNET
  | typeof AVALANCHE
  | typeof AVALANCHE_FUJI
  | typeof GNOSIS
  | typeof GNOSIS_CHIADO
  | typeof SCROLL
  | typeof SCROLL_SEPOLIA
  | typeof ZKSYNC_ERA
  | typeof ZKSYNC_ERA_GOERLI
  | typeof ZKSYNC_ERA_SEPOLIA
  | typeof CELO
  | typeof CELO_ALFAJORES
  | typeof LINEA
  | typeof LINEA_GOERLI
  | typeof BLAST
  | typeof BLAST_SEPOLIA
  | typeof MANTLE
  | typeof MANTLE_GOERLI
  | typeof MODE
  | typeof MODE_SEPOLIA
  | typeof BSC
  | typeof BSC_TESTNET
  | typeof FANTOM
  | typeof FANTOM_TESTNET
  | typeof MOONBASE_ALPHA
  | typeof MOONBEAM
  | typeof MOONRIVER
  | typeof FLARE
  | typeof IMMUTABLE_ZKEVM
  | typeof IMMUTABLE_ZKEVM_TESTNET
  | typeof AURORA
  | typeof AURORA_TESTNET
  | typeof OP_BNB
  | typeof OP_BNB_TESTNET
  | typeof MANTA_PACIFIC
  | typeof MANTA_PACIFIC_SEPOLIA;

const CHAINS: Chain[] = [
  ETHEREUM,
  SEPOLIA,
  HOLESKY,
  ARBITRUM,
  ARBITRUM_NOVA,
  ARBITRUM_SEPOLIA,
  OPTIMISM,
  OPTIMISM_SEPOLIA,
  BASE,
  BASE_SEPOLIA,
  ZORA,
  ZORA_SEPOLIA,
  POLYGON,
  POLYGON_MUMBAI,
  POLYGON_AMOY,
  POLYGON_ZKEVM,
  POLYGON_ZKEVM_TESTNET,
  AVALANCHE,
  AVALANCHE_FUJI,
  GNOSIS,
  GNOSIS_CHIADO,
  SCROLL,
  SCROLL_SEPOLIA,
  ZKSYNC_ERA,
  ZKSYNC_ERA_GOERLI,
  ZKSYNC_ERA_SEPOLIA,
  CELO,
  CELO_ALFAJORES,
  LINEA,
  LINEA_GOERLI,
  BLAST,
  BLAST_SEPOLIA,
  MANTLE,
  MANTLE_GOERLI,
  MODE,
  MODE_SEPOLIA,
  BSC,
  BSC_TESTNET,
  FANTOM,
  FANTOM_TESTNET,
  MOONBASE_ALPHA,
  MOONBEAM,
  MOONRIVER,
  FLARE,
  IMMUTABLE_ZKEVM,
  IMMUTABLE_ZKEVM_TESTNET,
  AURORA,
  AURORA_TESTNET,
  OP_BNB,
  OP_BNB_TESTNET,
  MANTA_PACIFIC,
  MANTA_PACIFIC_SEPOLIA,
];

function getChainEndpointUrl(chain: Chain): string | null {
  const chainData = getChainData(chain);
  return chainData.rpcUrls.default.http[0] || null;
}

function getChainName(chain: Chain): string {
  const chainData = getChainData(chain);
  return chainData.name;
}

function getChainData(chain: Chain): ChainData {
  switch (chain) {
    case ETHEREUM:
      return mainnet;
    case SEPOLIA:
      return sepolia;
    case HOLESKY:
      return holesky;
    case ARBITRUM:
      return arbitrum;
    case ARBITRUM_NOVA:
      return arbitrumNova;
    case ARBITRUM_SEPOLIA:
      return arbitrumSepolia;
    case OPTIMISM:
      return optimism;
    case OPTIMISM_SEPOLIA:
      return optimismSepolia;
    case BASE:
      return base;
    case BASE_SEPOLIA:
      return baseSepolia;
    case ZORA:
      return zora;
    case ZORA_SEPOLIA:
      return zoraSepolia;
    case POLYGON:
      return polygon;
    case POLYGON_MUMBAI:
      return polygonMumbai;
    case POLYGON_AMOY:
      return polygonAmoy;
    case POLYGON_ZKEVM:
      return polygonZkEvm;
    case POLYGON_ZKEVM_TESTNET:
      return polygonZkEvmTestnet;
    case AVALANCHE:
      return avalanche;
    case AVALANCHE_FUJI:
      return avalancheFuji;
    case GNOSIS:
      return gnosis;
    case GNOSIS_CHIADO:
      return gnosisChiado;
    case SCROLL:
      return scroll;
    case SCROLL_SEPOLIA:
      return scrollSepolia;
    case ZKSYNC_ERA:
      return zkSync;
    case ZKSYNC_ERA_GOERLI:
      return zkSyncTestnet;
    case ZKSYNC_ERA_SEPOLIA:
      return zkSyncSepoliaTestnet;
    case CELO:
      return celo;
    case CELO_ALFAJORES:
      return celoAlfajores;
    case LINEA:
      return linea;
    case LINEA_GOERLI:
      return lineaTestnet;
    case BLAST:
      return blast;
    case BLAST_SEPOLIA:
      return blastSepolia;
    case MANTLE:
      return mantle;
    case MANTLE_GOERLI:
      return mantleTestnet;
    case MODE:
      return mode;
    case MODE_SEPOLIA:
      return modeTestnet;
    case BSC:
      return bsc;
    case BSC_TESTNET:
      return bscTestnet;
    case FANTOM:
      return fantom;
    case FANTOM_TESTNET:
      return fantomTestnet;
    case MOONBASE_ALPHA:
      return moonbaseAlpha;
    case MOONBEAM:
      return moonbeam;
    case MOONRIVER:
      return moonriver;
    case FLARE:
      return flare;
    case IMMUTABLE_ZKEVM:
      return immutableZkEvm;
    case IMMUTABLE_ZKEVM_TESTNET:
      return immutableZkEvmTestnet;
    case AURORA:
      return aurora;
    case AURORA_TESTNET:
      return auroraTestnet;
    case OP_BNB:
      return opBNB;
    case OP_BNB_TESTNET:
      return opBNBTestnet;
    case MANTA_PACIFIC:
      return manta;
    case MANTA_PACIFIC_SEPOLIA:
      return mantaTestnet;
  }
}

function getAddressExplorerUrl(chain: Chain, address: Address): string | null {
  switch (chain) {
    case ETHEREUM:
      return `https://etherscan.io/address/${address}`;
    case SEPOLIA:
      return `https://sepolia.etherscan.io/address/${address}`;
    case HOLESKY:
      return `https://holesky.etherscan.io/address/${address}`;
    case ARBITRUM:
      return `https://arbiscan.io/address/${address}`;
    case ARBITRUM_NOVA:
      return `https://nova.arbiscan.io/address/${address}`;
    case ARBITRUM_SEPOLIA:
      return `https://sepolia.arbiscan.io/address/${address}`;
    case OPTIMISM:
      return `https://optimistic.etherscan.io/address/${address}`;
    case OPTIMISM_SEPOLIA:
      return `https://sepolia-optimism.etherscan.io/address/${address}`;
    case BASE:
      return `https://basescan.org/address/${address}`;
    case BASE_SEPOLIA:
      return `https://sepolia.basescan.org/address/${address}`;
    case ZORA:
      return `https://explorer.zora.energy/address/${address}`;
    case ZORA_SEPOLIA:
      return `https://sepolia.explorer.zora.energy/address/${address}`;
    case POLYGON:
      return `https://polygonscan.com/address/${address}`;
    case POLYGON_MUMBAI:
      return `https://mumbai.polygonscan.com/address/${address}`;
    case POLYGON_AMOY:
      return `https://www.oklink.com/amoy/address/${address}`;
    case POLYGON_ZKEVM:
      return `https://zkevm.polygonscan.com/address/${address}`;
    case POLYGON_ZKEVM_TESTNET:
      return `https://testnet-zkevm.polygonscan.com/address/${address}`;
    case AVALANCHE:
      return `https://avascan.info/blockchain/c/address/${address}`;
    case AVALANCHE_FUJI:
      return `https://testnet.snowtrace.io/address/${address}`;
    case GNOSIS:
      return `https://gnosisscan.io/address/${address}`;
    case GNOSIS_CHIADO:
      return `https://gnosis-chiado.blockscout.com/address/${address}`;
    case SCROLL:
      return `https://scrollscan.com/address/${address}`;
    case SCROLL_SEPOLIA:
      return `https://sepolia.scrollscan.com/address/${address}`;
    case ZKSYNC_ERA:
      return `https://era.zksync.network/address/${address}`;
    case ZKSYNC_ERA_GOERLI:
      return `https://goerli.explorer.zksync.io/address/${address}`;
    case ZKSYNC_ERA_SEPOLIA:
      return `https://sepolia-era.zksync.network/address/${address}`;
    case CELO:
      return `https://celoscan.io/address/${address}`;
    case CELO_ALFAJORES:
      return `https://alfajores.celoscan.io/address/${address}`;
    case LINEA:
      return `https://lineascan.build/address/${address}`;
    case LINEA_GOERLI:
      return `https://goerli.lineascan.build/address/${address}`;
    case BLAST:
      return `https://blastscan.io/address/${address}`;
    case BLAST_SEPOLIA:
      return `https://sepolia.blastscan.io/address/${address}`;
    case MANTLE:
      return `https://explorer.mantle.xyz/address/${address}`;
    case MANTLE_GOERLI:
      return `https://explorer.testnet.mantle.xyz/address/${address}`;
    case MODE:
      return `https://explorer.mode.network/address/${address}`;
    case MODE_SEPOLIA:
      return `https://sepolia.explorer.mode.network/address/${address}`;
    case BSC:
      return `https://bscscan.com/address/${address}`;
    case BSC_TESTNET:
      return `https://testnet.bscscan.com/address/${address}`;
    case FANTOM:
      return `https://ftmscan.com/address/${address}`;
    case FANTOM_TESTNET:
      return `https://testnet.ftmscan.com/address/${address}`;
    case MOONBASE_ALPHA:
      return `https://moonbase.moonscan.io/address/${address}`;
    case MOONBEAM:
      return `https://moonbeam.moonscan.io/address/${address}`;
    case MOONRIVER:
      return `https://moonriver.moonscan.io/address/${address}`;
    case FLARE:
      return `https://flare-explorer.flare.network/address/${address}`;
    case IMMUTABLE_ZKEVM:
      return `https://explorer.immutable.com/address/${address}`;
    case IMMUTABLE_ZKEVM_TESTNET:
      return `https://explorer.testnet.immutable.com/address/${address}`;
    case AURORA:
      return `https://explorer.aurora.dev/address/${address}`;
    case AURORA_TESTNET:
      return `https://explorer.testnet.aurora.dev/address/${address}`;
    case OP_BNB:
      return `https://opbnb.bscscan.com/address/${address}`;
    case OP_BNB_TESTNET:
      return `https://opbnb-testnet.bscscan.com/address/${address}`;
    case MANTA_PACIFIC:
      return `https://pacific-explorer.manta.network/address/${address}`;
    case MANTA_PACIFIC_SEPOLIA:
      return `https://pacific-explorer.sepolia-testnet.manta.network/address/${address}`;
  }
}

export {
  CHAINS,
  getChainEndpointUrl,
  getChainName,
  getChainData,
  getAddressExplorerUrl,
};
export type { Chain };
