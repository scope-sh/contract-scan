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
  fantomSonicTestnet,
  moonbaseAlpha,
  moonbeam,
  moonriver,
  flare,
  flareTestnet,
  immutableZkEvm,
  immutableZkEvmTestnet,
  aurora,
  auroraTestnet,
  opBNB,
  opBNBTestnet,
  manta,
  mantaTestnet,
  kava,
  kavaTestnet,
  taikoKatla,
  palm,
  palmTestnet,
  boba,
  astarZkEVM,
  klaytn,
  klaytnBaobab,
  harmonyOne,
  cronos,
  lukso,
  luksoTestnet,
  telos,
  telosTestnet,
  kroma,
  kromaSepolia,
  dfk,
  fraxtal,
  fraxtalTestnet,
  fuse,
  fuseSparknet,
  zetachain,
  zetachainAthensTestnet,
  beam,
  beamTestnet,
  edgeware,
  edgewareTestnet,
  hedera,
  hederaTestnet,
  iotex,
  iotexTestnet,
  meter,
  meterTestnet,
  metis,
  neonMainnet,
  neonDevnet,
  pgn,
  pgnTestnet,
  rollux,
  rolluxTestnet,
  sapphire,
  sapphireTestnet,
  syscoin,
  syscoinTestnet,
  taraxa,
  taraxaTestnet,
  wanchain,
  wanchainTestnet,
  xdc,
  xdcTestnet,
  zilliqa,
  zilliqaTestnet,
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
const FANTOM_SONIC = fantomSonicTestnet.id;
const MOONBASE_ALPHA = moonbaseAlpha.id;
const MOONBEAM = moonbeam.id;
const MOONRIVER = moonriver.id;
const FLARE = flare.id;
const FLARE_TESTNET = flareTestnet.id;
const MANTA_PACIFIC = manta.id;
const MANTA_PACIFIC_TESTNET = mantaTestnet.id;
const KAVA = kava.id;
const KAVA_TESTNET = kavaTestnet.id;
const TAIKO_KATLA = taikoKatla.id;
const PALM = palm.id;
const PALM_TESTNET = palmTestnet.id;
const IMMUTABLE_ZKEVM = immutableZkEvm.id;
const IMMUTABLE_ZKEVM_TESTNET = immutableZkEvmTestnet.id;
const BOBA_ETHEREUM = boba.id;
const ASTAR_ZKEVM = astarZkEVM.id;
const KLAYTN = klaytn.id;
const KLAYTN_BAOBAB = klaytnBaobab.id;
const AURORA = aurora.id;
const AURORA_TESTNET = auroraTestnet.id;
const HARMONY = harmonyOne.id;
const CRONOS = cronos.id;
const OP_BNB = opBNB.id;
const OP_BNB_TESTNET = opBNBTestnet.id;
const LUKSO = lukso.id;
const LUKSO_TESTNET = luksoTestnet.id;
const TELOS = telos.id;
const TELOS_TESTNET = telosTestnet.id;
const KROMA = kroma.id;
const KROMA_SEPOLIA = kromaSepolia.id;
const DFK_CHAIN = dfk.id;
const FRAXTAL = fraxtal.id;
const FRAXTAL_TESTNET = fraxtalTestnet.id;
const FUSE = fuse.id;
const FUSE_SPARKNET = fuseSparknet.id;
const ZETACHAIN = zetachain.id;
const ZETACHAIN_ATHENS = zetachainAthensTestnet.id;
const BEAM = beam.id;
const BEAM_TESTNET = beamTestnet.id;
const EDGEWARE = edgeware.id;
const EDGEWARE_TESTNET = edgewareTestnet.id;
const HEDERA = hedera.id;
const HEDERA_TESTNET = hederaTestnet.id;
const IOTEX = iotex.id;
const IOTEX_TESTNET = iotexTestnet.id;
const METER = meter.id;
const METER_TESTNET = meterTestnet.id;
const METIS = metis.id;
const NEON = neonMainnet.id;
const NEON_DEVNET = neonDevnet.id;
const PGN = pgn.id;
const PGN_TESTNET = pgnTestnet.id;
const ROLLUX = rollux.id;
const ROLLUX_TESTNET = rolluxTestnet.id;
const SAPPHIRE = sapphire.id;
const SAPPHIRE_TESTNET = sapphireTestnet.id;
const SYSCOIN = syscoin.id;
const SYSCOIN_TESTNET = syscoinTestnet.id;
const TARAXA = taraxa.id;
const TARAXA_TESTNET = taraxaTestnet.id;
const WANCHAIN = wanchain.id;
const WANCHAIN_TESTNET = wanchainTestnet.id;
const XDC = xdc.id;
const XDC_TESTNET = xdcTestnet.id;
const ZILLIQA = zilliqa.id;
const ZILLIQA_TESTNET = zilliqaTestnet.id;

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
  | typeof FANTOM_SONIC
  | typeof MOONBASE_ALPHA
  | typeof MOONBEAM
  | typeof MOONRIVER
  | typeof FLARE
  | typeof FLARE_TESTNET
  | typeof MANTA_PACIFIC
  | typeof MANTA_PACIFIC_TESTNET
  | typeof KAVA
  | typeof KAVA_TESTNET
  | typeof TAIKO_KATLA
  | typeof PALM
  | typeof PALM_TESTNET
  | typeof IMMUTABLE_ZKEVM
  | typeof IMMUTABLE_ZKEVM_TESTNET
  | typeof BOBA_ETHEREUM
  | typeof ASTAR_ZKEVM
  | typeof KLAYTN
  | typeof KLAYTN_BAOBAB
  | typeof AURORA
  | typeof AURORA_TESTNET
  | typeof HARMONY
  | typeof CRONOS
  | typeof OP_BNB
  | typeof OP_BNB_TESTNET
  | typeof LUKSO
  | typeof LUKSO_TESTNET
  | typeof TELOS
  | typeof TELOS_TESTNET
  | typeof KROMA
  | typeof KROMA_SEPOLIA
  | typeof DFK_CHAIN
  | typeof FRAXTAL
  | typeof FRAXTAL_TESTNET
  | typeof FUSE
  | typeof FUSE_SPARKNET
  | typeof ZETACHAIN
  | typeof ZETACHAIN_ATHENS
  | typeof BEAM
  | typeof BEAM_TESTNET
  | typeof EDGEWARE
  | typeof EDGEWARE_TESTNET
  | typeof HEDERA
  | typeof HEDERA_TESTNET
  | typeof IOTEX
  | typeof IOTEX_TESTNET
  | typeof METER
  | typeof METER_TESTNET
  | typeof METIS
  | typeof NEON
  | typeof NEON_DEVNET
  | typeof PGN
  | typeof PGN_TESTNET
  | typeof ROLLUX
  | typeof ROLLUX_TESTNET
  | typeof SAPPHIRE
  | typeof SAPPHIRE_TESTNET
  | typeof SYSCOIN
  | typeof SYSCOIN_TESTNET
  | typeof TARAXA
  | typeof TARAXA_TESTNET
  | typeof WANCHAIN
  | typeof WANCHAIN_TESTNET
  | typeof XDC
  | typeof XDC_TESTNET
  | typeof ZILLIQA
  | typeof ZILLIQA_TESTNET;

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
  FANTOM_SONIC,
  MOONBASE_ALPHA,
  MOONBEAM,
  MOONRIVER,
  FLARE,
  FLARE_TESTNET,
  MANTA_PACIFIC,
  MANTA_PACIFIC_TESTNET,
  KAVA,
  KAVA_TESTNET,
  TAIKO_KATLA,
  PALM,
  PALM_TESTNET,
  IMMUTABLE_ZKEVM,
  IMMUTABLE_ZKEVM_TESTNET,
  BOBA_ETHEREUM,
  ASTAR_ZKEVM,
  KLAYTN,
  KLAYTN_BAOBAB,
  AURORA,
  AURORA_TESTNET,
  HARMONY,
  CRONOS,
  OP_BNB,
  OP_BNB_TESTNET,
  LUKSO,
  LUKSO_TESTNET,
  TELOS,
  TELOS_TESTNET,
  KROMA,
  KROMA_SEPOLIA,
  DFK_CHAIN,
  FRAXTAL,
  FRAXTAL_TESTNET,
  FUSE,
  FUSE_SPARKNET,
  ZETACHAIN,
  ZETACHAIN_ATHENS,
  BEAM,
  BEAM_TESTNET,
  EDGEWARE,
  EDGEWARE_TESTNET,
  HEDERA,
  HEDERA_TESTNET,
  IOTEX,
  IOTEX_TESTNET,
  METER,
  METER_TESTNET,
  METIS,
  NEON,
  NEON_DEVNET,
  PGN,
  PGN_TESTNET,
  ROLLUX,
  ROLLUX_TESTNET,
  SAPPHIRE,
  SAPPHIRE_TESTNET,
  SYSCOIN,
  SYSCOIN_TESTNET,
  TARAXA,
  TARAXA_TESTNET,
  WANCHAIN,
  WANCHAIN_TESTNET,
  XDC,
  XDC_TESTNET,
  ZILLIQA,
  ZILLIQA_TESTNET,
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
    case FANTOM_SONIC:
      return fantomSonicTestnet;
    case MOONBASE_ALPHA:
      return moonbaseAlpha;
    case MOONBEAM:
      return moonbeam;
    case MOONRIVER:
      return moonriver;
    case FLARE:
      return flare;
    case FLARE_TESTNET:
      return flareTestnet;
    case MANTA_PACIFIC:
      return manta;
    case MANTA_PACIFIC_TESTNET:
      return mantaTestnet;
    case KAVA:
      return kava;
    case KAVA_TESTNET:
      return kavaTestnet;
    case TAIKO_KATLA:
      return taikoKatla;
    case PALM:
      return palm;
    case PALM_TESTNET:
      return palmTestnet;
    case IMMUTABLE_ZKEVM:
      return immutableZkEvm;
    case IMMUTABLE_ZKEVM_TESTNET:
      return immutableZkEvmTestnet;
    case BOBA_ETHEREUM:
      return boba;
    case ASTAR_ZKEVM:
      return astarZkEVM;
    case KLAYTN:
      return klaytn;
    case KLAYTN_BAOBAB:
      return klaytnBaobab;
    case AURORA:
      return aurora;
    case AURORA_TESTNET:
      return auroraTestnet;
    case HARMONY:
      return harmonyOne;
    case CRONOS:
      return cronos;
    case OP_BNB:
      return opBNB;
    case OP_BNB_TESTNET:
      return opBNBTestnet;
    case LUKSO:
      return lukso;
    case LUKSO_TESTNET:
      return luksoTestnet;
    case TELOS:
      return telos;
    case TELOS_TESTNET:
      return telosTestnet;
    case KROMA:
      return kroma;
    case KROMA_SEPOLIA:
      return kromaSepolia;
    case DFK_CHAIN:
      return dfk;
    case FRAXTAL:
      return fraxtal;
    case FRAXTAL_TESTNET:
      return fraxtalTestnet;
    case FUSE:
      return fuse;
    case FUSE_SPARKNET:
      return fuseSparknet;
    case ZETACHAIN:
      return zetachain;
    case ZETACHAIN_ATHENS:
      return zetachainAthensTestnet;
    case BEAM:
      return beam;
    case BEAM_TESTNET:
      return beamTestnet;
    case EDGEWARE:
      return edgeware;
    case EDGEWARE_TESTNET:
      return edgewareTestnet;
    case HEDERA:
      return hedera;
    case HEDERA_TESTNET:
      return hederaTestnet;
    case IOTEX:
      return iotex;
    case IOTEX_TESTNET:
      return iotexTestnet;
    case METER:
      return meter;
    case METER_TESTNET:
      return meterTestnet;
    case METIS:
      return metis;
    case NEON:
      return neonMainnet;
    case NEON_DEVNET:
      return neonDevnet;
    case PGN:
      return pgn;
    case PGN_TESTNET:
      return pgnTestnet;
    case ROLLUX:
      return rollux;
    case ROLLUX_TESTNET:
      return rolluxTestnet;
    case SAPPHIRE:
      return sapphire;
    case SAPPHIRE_TESTNET:
      return sapphireTestnet;
    case SYSCOIN:
      return syscoin;
    case SYSCOIN_TESTNET:
      return syscoinTestnet;
    case TARAXA:
      return taraxa;
    case TARAXA_TESTNET:
      return taraxaTestnet;
    case WANCHAIN:
      return wanchain;
    case WANCHAIN_TESTNET:
      return wanchainTestnet;
    case XDC:
      return xdc;
    case XDC_TESTNET:
      return xdcTestnet;
    case ZILLIQA:
      return zilliqa;
    case ZILLIQA_TESTNET:
      return zilliqaTestnet;
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
    case FANTOM_SONIC:
      return `https://public-sonic.fantom.network/address/${address}`;
    case MOONBASE_ALPHA:
      return `https://moonbase.moonscan.io/address/${address}`;
    case MOONBEAM:
      return `https://moonbeam.moonscan.io/address/${address}`;
    case MOONRIVER:
      return `https://moonriver.moonscan.io/address/${address}`;
    case FLARE:
      return `https://flare-explorer.flare.network/address/${address}`;
    case FLARE_TESTNET:
      return `https://coston2-explorer.flare.network/address/${address}`;
    case MANTA_PACIFIC:
      return `https://pacific-explorer.manta.network/address/${address}`;
    case MANTA_PACIFIC_TESTNET:
      return `https://pacific-explorer.sepolia-testnet.manta.network/address/${address}`;
    case KAVA:
      return `https://kavascan.com/address/${address}`;
    case KAVA_TESTNET:
      return `https://testnet.kavascan.com/address/${address}`;
    case TAIKO_KATLA:
      return `https://explorer.katla.taiko.xyz/address/${address}`;
    case PALM:
      return `https://palm.chainlens.com/nfts/${address}`;
    case PALM_TESTNET:
      return `https://testnet.palm.chainlens.com/contracts/${address}`;
    case IMMUTABLE_ZKEVM:
      return `https://explorer.immutable.com/address/${address}`;
    case IMMUTABLE_ZKEVM_TESTNET:
      return `https://explorer.testnet.immutable.com/address/${address}`;
    case BOBA_ETHEREUM:
      return `https://bobascan.com/address/${address}`;
    case ASTAR_ZKEVM:
      return `https://astar-zkevm.explorer.startale.com/address/${address}`;
    case KLAYTN:
      return `https://klaytnscope.com/account/${address}`;
    case KLAYTN_BAOBAB:
      return `https://baobab.klaytnscope.com/account/${address}`;
    case AURORA:
      return `https://explorer.aurora.dev/address/${address}`;
    case AURORA_TESTNET:
      return `https://explorer.testnet.aurora.dev/address/${address}`;
    case HARMONY:
      return `https://explorer.harmony.one/address/${address}`;
    case CRONOS:
      return `https://explorer.cronos.org/address/${address}`;
    case OP_BNB:
      return `https://opbnb.bscscan.com/address/${address}`;
    case OP_BNB_TESTNET:
      return `https://opbnb-testnet.bscscan.com/address/${address}`;
    case LUKSO:
      return `https://explorer.execution.mainnet.lukso.network/address/${address}`;
    case LUKSO_TESTNET:
      return `https://explorer.execution.testnet.lukso.network/address/${address}`;
    case TELOS:
      return `https://www.teloscan.io/address/${address}`;
    case TELOS_TESTNET:
      return `https://testnet.teloscan.io/address/${address}`;
    case KROMA:
      return `https://blockscout.kroma.network/address/${address}`;
    case KROMA_SEPOLIA:
      return `https://blockscout.sepolia.kroma.network/address/${address}`;
    case DFK_CHAIN:
      return `https://explorer.dfkchain.com/address/${address}`;
    case FRAXTAL:
      return `https://fraxscan.com/address/${address}`;
    case FRAXTAL_TESTNET:
      return `https://holesky.fraxscan.com/address/${address}`;
    case FUSE:
      return `https://explorer.fuse.io/address/${address}`;
    case FUSE_SPARKNET:
      return `https://explorer.fusespark.io/address/${address}`;
    case ZETACHAIN:
      return `https://explorer.zetachain.com/address/${address}`;
    case ZETACHAIN_ATHENS:
      return `https://athens.explorer.zetachain.com/address/${address}`;
    case BEAM:
      return `https://subnets.avax.network/beam/address/${address}`;
    case BEAM_TESTNET:
      return `https://subnets-test.avax.network/beam/address/${address}`;
    // TODO
    case EDGEWARE:
    case EDGEWARE_TESTNET:
    case HEDERA:
    case HEDERA_TESTNET:
    case IOTEX:
    case IOTEX_TESTNET:
    case METER:
    case METER_TESTNET:
    case METIS:
    case NEON:
    case NEON_DEVNET:
    case PGN:
    case PGN_TESTNET:
    case ROLLUX:
    case ROLLUX_TESTNET:
    case SAPPHIRE:
    case SAPPHIRE_TESTNET:
    case SYSCOIN:
    case SYSCOIN_TESTNET:
    case TARAXA:
    case TARAXA_TESTNET:
    case WANCHAIN:
    case WANCHAIN_TESTNET:
    case XDC:
    case XDC_TESTNET:
    case ZILLIQA:
    case ZILLIQA_TESTNET:
      return null;
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