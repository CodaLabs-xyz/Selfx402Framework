/**
 * Multi-chain Example - selfx402-framework v1.1.0
 * 
 * Demonstrates how to use the framework across different networks
 */

import { Facilitator } from "selfx402-framework";
import {
  networks,
  ETHEREUM_MAINNET,
  BASE_MAINNET,
  ARBITRUM_ONE,
  AVALANCHE_C_CHAIN,
  CELO_MAINNET
} from "selfx402-framework/networks";
import { createWalletClient } from "selfx402-framework/wallets";

// Example 1: Using network registry with string names
async function exampleWithNetworkNames() {
  const privateKey = process.env.PRIVATE_KEY as `0x${string}`;
  
  // Arbitrum One
  const arbitrumFacilitator = new Facilitator({
    network: networks.arbitrum,
    wallet: createWalletClient({ privateKey, network: networks.arbitrum })
  });

  // Base Mainnet
  const baseFacilitator = new Facilitator({
    network: networks.base,
    wallet: createWalletClient({ privateKey, network: networks.base })
  });

  // Ethereum Mainnet
  const ethereumFacilitator = new Facilitator({
    network: networks.ethereum,
    wallet: createWalletClient({ privateKey, network: networks.ethereum })
  });
}

// Example 2: Using direct network imports
async function exampleWithDirectImports() {
  const privateKey = process.env.PRIVATE_KEY as `0x${string}`;
  
  const facilitator = new Facilitator({
    network: ARBITRUM_ONE,
    wallet: createWalletClient({ privateKey, network: ARBITRUM_ONE })
  });

  const paymentEnvelope = {
    network: "arbitrum",
    authorization: {
      from: "0xPayer" as `0x${string}`,
      to: "0xPayee" as `0x${string}`,
      value: "1000000", // 1 USDC (6 decimals)
      validAfter: 0,
      validBefore: Math.floor(Date.now() / 1000) + 3600,
      nonce: "0x..." as `0x${string}`
    },
    signature: "0x..." as `0x${string}`
  };

  // Verify payment
  const verification = await facilitator.verifyPayment(
    paymentEnvelope,
    "0xPayee" as `0x${string}`,
    "1000000"
  );

  if (verification.valid) {
    // Settle on-chain
    const settlement = await facilitator.settlePayment(paymentEnvelope);
    console.log(`Settlement TX: ${settlement.transactionHash}`);
  }
}
