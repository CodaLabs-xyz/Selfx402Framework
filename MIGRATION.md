# Migration Guide: v1.0.x → v1.1.0

## Overview

**selfx402-framework v1.1.0** adds multi-chain support with **zero breaking changes**. All v1.0.x code continues to work without modifications.

## What's New

### 5 New Networks Added

| Network | Chain ID | Status |
|---------|----------|--------|
| Ethereum Mainnet | 1 | ✅ Production Ready |
| Base Mainnet | 8453 | ✅ Production Ready |
| Arbitrum One | 42161 | ✅ Production Ready |
| Avalanche C-Chain | 43114 | ✅ Production Ready |
| Celo Mainnet | 42220 | ✅ Existing (Enhanced) |
| Celo Sepolia | 11142220 | ✅ Testnet |

## Installation

```bash
npm install selfx402-framework@latest
# or
npm install selfx402-framework@1.1.0
```

## Breaking Changes

**None** - This is a backward-compatible feature release.

## New Exports

```typescript
// Before (v1.0.x) - Still works!
import { CELO_MAINNET, CELO_SEPOLIA } from "selfx402-framework/networks";

// After (v1.1.0) - New exports available
import {
  ETHEREUM_MAINNET,  // ✨ New
  BASE_MAINNET,      // ✨ New
  ARBITRUM_ONE,      // ✨ New
  AVALANCHE_C_CHAIN, // ✨ New
  CELO_MAINNET,      // ✅ Existing
  CELO_SEPOLIA       // ✅ Existing
} from "selfx402-framework/networks";
```

## Migration Examples

### Example 1: Using Arbitrum One

**Before (v1.0.x - Would fail)**:
```typescript
import { Facilitator } from "selfx402-framework";
import { networks } from "selfx402-framework/networks";

const facilitator = new Facilitator({
  network: networks.arbitrum,  // ❌ Error: Unsupported chain ID
  wallet: createWalletClient({ privateKey, network: networks.arbitrum })
});
```

**After (v1.1.0 - Works!)**:
```typescript
import { Facilitator } from "selfx402-framework";
import { networks, ARBITRUM_ONE } from "selfx402-framework/networks";

// Option 1: String name
const facilitator = new Facilitator({
  network: networks.arbitrum,  // ✅ Works!
  wallet: createWalletClient({ privateKey, network: networks.arbitrum })
});

// Option 2: Direct constant
const facilitator = new Facilitator({
  network: ARBITRUM_ONE,  // ✅ Also works!
  wallet: createWalletClient({ privateKey, network: ARBITRUM_ONE })
});
```

### Example 2: Multi-Network Support

```typescript
import { Facilitator } from "selfx402-framework";
import {
  networks,
  ETHEREUM_MAINNET,
  BASE_MAINNET,
  ARBITRUM_ONE
} from "selfx402-framework/networks";

// Create facilitators for multiple networks
const facilitators = {
  ethereum: new Facilitator({
    network: ETHEREUM_MAINNET,
    wallet: createWalletClient({ privateKey, network: ETHEREUM_MAINNET })
  }),
  base: new Facilitator({
    network: BASE_MAINNET,
    wallet: createWalletClient({ privateKey, network: BASE_MAINNET })
  }),
  arbitrum: new Facilitator({
    network: ARBITRUM_ONE,
    wallet: createWalletClient({ privateKey, network: ARBITRUM_ONE })
  })
};

// Handle payments for any network
async function handlePayment(network: keyof typeof facilitators, envelope: any) {
  const facilitator = facilitators[network];
  return await facilitator.settlePayment(envelope);
}
```

### Example 3: Dynamic Network Selection

```typescript
const networkName = process.env.NETWORK || "arbitrum";

const networkMap = {
  ethereum: ETHEREUM_MAINNET,
  base: BASE_MAINNET,
  arbitrum: ARBITRUM_ONE,
  avalanche: AVALANCHE_C_CHAIN,
  celo: CELO_MAINNET
};

const facilitator = new Facilitator({
  network: networkMap[networkName],
  wallet: createWalletClient({ 
    privateKey, 
    network: networkMap[networkName] 
  })
});
```

## Network Aliases

All networks support multiple name formats:

```typescript
// Arbitrum
networks.arbitrum
networks["arbitrum-one"]

// Avalanche
networks.avalanche
networks["avalanche-c-chain"]
networks.avax

// Base
networks.base
networks["base-mainnet"]

// Ethereum
networks.ethereum
networks["ethereum-mainnet"]
networks.eth

// Celo
networks.celo
networks["celo-mainnet"]
networks["celo-sepolia"]
networks["celo-testnet"]
```

## USDC Contract Addresses

All networks use native Circle USDC with EIP-3009 support:

```typescript
const usdcAddresses = {
  ethereum: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
  base: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
  arbitrum: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
  avalanche: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
  celo: "0xcebA9300f2b948710d2653dD7B07f33A8B32118C"
};

// All contracts support transferWithAuthorization (EIP-3009)
// Gasless transfers where payer signs, facilitator executes
```

## TypeScript Support

Full type safety with updated `SupportedNetwork` type:

```typescript
import type { SupportedNetwork } from "selfx402-framework/networks";

const network: SupportedNetwork = "arbitrum"; // ✅ Valid
const network: SupportedNetwork = "polygon";  // ❌ Type error
```

## Common Issues

### Issue: "Unsupported chain ID" error

**Solution**: Update to v1.1.0
```bash
npm install selfx402-framework@latest
```

### Issue: Network name not recognized

**Solution**: Check supported aliases in [NETWORKS.md](NETWORKS.md)

### Issue: Import errors after update

**Solution**: Clear node_modules and reinstall
```bash
rm -rf node_modules package-lock.json
npm install
```

## Testing Your Migration

```typescript
import { getViemChain } from "selfx402-framework/networks";

// Test all networks
const chains = [1, 8453, 42161, 42220, 43114, 11142220];
chains.forEach(chainId => {
  try {
    const chain = getViemChain(chainId);
    console.log(`✅ Chain ${chainId}: ${chain.name}`);
  } catch (error) {
    console.error(`❌ Chain ${chainId} not supported`);
  }
});
```

## Rollback (if needed)

```bash
npm install selfx402-framework@1.0.1
```

## Support

- **Issues**: https://github.com/JulioMCruz/Self-x402/issues
- **Documentation**: [README.md](README.md)
- **Network Details**: [NETWORKS.md](NETWORKS.md)
- **Changelog**: [CHANGELOG.md](CHANGELOG.md)

## Next Steps

1. Update package: `npm install selfx402-framework@latest`
2. Review network options: [NETWORKS.md](NETWORKS.md)
3. Test with new networks
4. Deploy to production

**No code changes required for existing Celo integrations!**
