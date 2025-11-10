/**
 * Viem chain definitions for EIP-3009 compatible networks
 * Used for wallet client creation
 */

import { defineChain } from "viem";
import { arbitrum, avalanche, base, mainnet } from "viem/chains";

export const celo = defineChain({
  id: 42220,
  name: "Celo",
  nativeCurrency: { name: "CELO", symbol: "CELO", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://forno.celo.org"] },
  },
  blockExplorers: {
    default: { name: "CeloScan", url: "https://celoscan.io" },
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 13112599,
    },
  },
});

export const celoSepolia = defineChain({
  id: 11142220,
  name: "Celo Sepolia",
  nativeCurrency: { name: "CELO", symbol: "CELO", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://celo-sepolia.g.alchemy.com/v2/demo"] },
  },
  blockExplorers: {
    default: {
      name: "Celo Sepolia Explorer",
      url: "https://celo-sepolia.blockscout.com",
    },
  },
  testnet: true,
});

/**
 * Get viem chain definition for a given chain ID
 */
export function getViemChain(chainId: number) {
  switch (chainId) {
    case 42220:
      return celo;
    case 11142220:
      return celoSepolia;
    case 42161:
      return arbitrum;
    case 43114:
      return avalanche;
    case 8453:
      return base;
    case 1:
      return mainnet;
    default:
      throw new Error(
        `Unsupported chain ID: ${chainId}. Supported: 1 (Ethereum), 8453 (Base), 42161 (Arbitrum), 42220 (Celo), 43114 (Avalanche), 11142220 (Celo Sepolia)`
      );
  }
}
