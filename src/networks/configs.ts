/**
 * Network configurations for EIP-3009 compatible networks
 *
 * IMPORTANT: Only networks with EIP-3009 USDC support are included
 * Celo Mainnet: ✅ EIP-3009 confirmed and tested
 * Celo Sepolia: ✅ EIP-3009 confirmed (testnet)
 * Arbitrum One: ✅ EIP-3009 supported (native Circle USDC)
 * Avalanche C-Chain: ✅ EIP-3009 supported (native Circle USDC)
 * Base Mainnet: ✅ EIP-3009 supported (native Circle USDC)
 * Ethereum Mainnet: ✅ EIP-3009 supported (native Circle USDC)
 */

import type { NetworkConfig } from "./types.js";

export const CELO_MAINNET: NetworkConfig = {
  chainId: 42220,
  name: "celo",
  usdcAddress: "0xcebA9300f2b948710d2653dD7B07f33A8B32118C",
  usdcName: "USDC",
  rpcUrl: "https://forno.celo.org",
  blockExplorer: "https://celoscan.io",
  isTestnet: false,
};

export const CELO_SEPOLIA: NetworkConfig = {
  chainId: 11142220,
  name: "celo-sepolia",
  usdcAddress: "0x01C5C0122039549AD1493B8220cABEdD739BC44E",
  usdcName: "USDC",
  rpcUrl: "https://celo-sepolia.g.alchemy.com/v2/demo",
  blockExplorer: "https://celo-sepolia.blockscout.com",
  isTestnet: true,
};

export const ARBITRUM_ONE: NetworkConfig = {
  chainId: 42161,
  name: "arbitrum",
  usdcAddress: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
  usdcName: "USDC",
  rpcUrl: "https://arb1.arbitrum.io/rpc",
  blockExplorer: "https://arbiscan.io",
  isTestnet: false,
};

export const AVALANCHE_C_CHAIN: NetworkConfig = {
  chainId: 43114,
  name: "avalanche",
  usdcAddress: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
  usdcName: "USDC",
  rpcUrl: "https://api.avax.network/ext/bc/C/rpc",
  blockExplorer: "https://snowtrace.io",
  isTestnet: false,
};

export const BASE_MAINNET: NetworkConfig = {
  chainId: 8453,
  name: "base",
  usdcAddress: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
  usdcName: "USDC",
  rpcUrl: "https://mainnet.base.org",
  blockExplorer: "https://basescan.org",
  isTestnet: false,
};

export const ETHEREUM_MAINNET: NetworkConfig = {
  chainId: 1,
  name: "ethereum",
  usdcAddress: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
  usdcName: "USDC",
  rpcUrl: "https://eth.llamarpc.com",
  blockExplorer: "https://etherscan.io",
  isTestnet: false,
};

/**
 * Network registry - map network names to configurations
 */
export const networks: Record<string, NetworkConfig> = {
  celo: CELO_MAINNET,
  "celo-mainnet": CELO_MAINNET,
  "celo-sepolia": CELO_SEPOLIA,
  "celo-testnet": CELO_SEPOLIA,
  arbitrum: ARBITRUM_ONE,
  "arbitrum-one": ARBITRUM_ONE,
  avalanche: AVALANCHE_C_CHAIN,
  "avalanche-c-chain": AVALANCHE_C_CHAIN,
  avax: AVALANCHE_C_CHAIN,
  base: BASE_MAINNET,
  "base-mainnet": BASE_MAINNET,
  ethereum: ETHEREUM_MAINNET,
  "ethereum-mainnet": ETHEREUM_MAINNET,
  eth: ETHEREUM_MAINNET,
};
