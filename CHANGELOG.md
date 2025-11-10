# Changelog

All notable changes to selfx402-framework will be documented in this file.

## [1.1.0] - 2025-01-10

### Added
- **Multi-chain Support**: Added 4 new EVM networks with native Circle USDC:
  - Ethereum Mainnet (Chain ID: 1)
  - Base Mainnet (Chain ID: 8453)
  - Arbitrum One (Chain ID: 42161)
  - Avalanche C-Chain (Chain ID: 43114)
- **Network Exports**: New constants for all networks:
  - `ETHEREUM_MAINNET`
  - `BASE_MAINNET`
  - `ARBITRUM_ONE`
  - `AVALANCHE_C_CHAIN`
- **Network Documentation**: Added `NETWORKS.md` with comprehensive network details
- **Viem Chain Imports**: Leverages viem's built-in chain definitions for Arbitrum, Avalanche, Base, and Ethereum

### Changed
- Updated `getViemChain()` to support all 6 networks with improved error messages
- Enhanced `SupportedNetwork` type to include all network aliases
- Updated network registry with multiple aliases per network

### Fixed
- Network restriction error when using Arbitrum One
- Chain ID validation now supports all major EVM networks

### Migration Guide
No breaking changes - fully backward compatible with v1.0.x

**Before (v1.0.x)**:
```typescript
import { networks } from "selfx402-framework/networks";
const facilitator = new Facilitator({
  network: networks.celo,  // Only Celo supported
  wallet: createWalletClient({ privateKey, network: networks.celo })
});
```

**After (v1.1.0)**:
```typescript
import { networks } from "selfx402-framework/networks";
const facilitator = new Facilitator({
  network: networks.arbitrum,  // Now supports: ethereum, base, arbitrum, avalanche, celo
  wallet: createWalletClient({ privateKey, network: networks.arbitrum })
});
```

## [1.0.1] - 2025-01-09

### Added
- Initial npm package release
- Complete x402 facilitator implementation
- Self Protocol integration
- Deferred payment scheme (x402 PR #426)
- Celo Mainnet and Sepolia support

### Features
- EIP-712 signature verification
- EIP-3009 on-chain settlement
- Zero-knowledge proof verification
- Nullifier management
- Database integration (Supabase/PostgreSQL)
- TypeScript type definitions

## [1.0.0] - 2025-01-08

### Added
- Initial framework implementation
- Core facilitator engine
- Network configurations
- Wallet client utilities
- Self Protocol verifier
- Deferred payment utilities
