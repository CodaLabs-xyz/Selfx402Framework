# Supported Networks

**selfx402-framework v1.1.0** now supports 6 EVM networks with native Circle USDC and EIP-3009 support.

## Usage

```typescript
import { networks, ETHEREUM_MAINNET, BASE_MAINNET, ARBITRUM_ONE, AVALANCHE_C_CHAIN, CELO_MAINNET } from "selfx402-framework/networks";

// Option 1: Use network name
const facilitator = new Facilitator({
  network: networks.arbitrum,  // or "arbitrum", "base", "ethereum", "avalanche", "celo"
  wallet: createWalletClient({ privateKey, network: networks.arbitrum })
});

// Option 2: Use direct import
const facilitator = new Facilitator({
  network: ARBITRUM_ONE,
  wallet: createWalletClient({ privateKey, network: ARBITRUM_ONE })
});
```

## Network Details

| Network | Chain ID | USDC Address | Network Name | Aliases |
|---------|----------|--------------|--------------|---------|
| **Ethereum Mainnet** | 1 | `0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48` | `ethereum` | `ethereum-mainnet`, `eth` |
| **Base Mainnet** | 8453 | `0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913` | `base` | `base-mainnet` |
| **Arbitrum One** | 42161 | `0xaf88d065e77c8cC2239327C5EDb3A432268e5831` | `arbitrum` | `arbitrum-one` |
| **Celo Mainnet** | 42220 | `0xcebA9300f2b948710d2653dD7B07f33A8B32118C` | `celo` | `celo-mainnet` |
| **Avalanche C-Chain** | 43114 | `0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E` | `avalanche` | `avalanche-c-chain`, `avax` |
| **Celo Sepolia** | 11142220 | `0x01C5C0122039549AD1493B8220cABEdD739BC44E` | `celo-sepolia` | `celo-testnet` |

## RPC Endpoints

- **Ethereum**: `https://eth.llamarpc.com`
- **Base**: `https://mainnet.base.org`
- **Arbitrum**: `https://arb1.arbitrum.io/rpc`
- **Celo**: `https://forno.celo.org`
- **Avalanche**: `https://api.avax.network/ext/bc/C/rpc`
- **Celo Sepolia**: `https://celo-sepolia.g.alchemy.com/v2/demo`

## Block Explorers

- **Ethereum**: https://etherscan.io
- **Base**: https://basescan.org
- **Arbitrum**: https://arbiscan.io
- **Celo**: https://celoscan.io
- **Avalanche**: https://snowtrace.io
- **Celo Sepolia**: https://celo-sepolia.blockscout.com

## EIP-3009 Support

All networks use **native Circle USDC** with `transferWithAuthorization` support (EIP-3009):
- ✅ Gasless transfers (payer signs, facilitator executes)
- ✅ Production-ready and battle-tested
- ✅ No bridged/wrapped tokens

## Migration from v1.0.x

**Breaking Changes**: None - fully backward compatible

**New Exports**:
```typescript
import {
  ETHEREUM_MAINNET,  // New
  BASE_MAINNET,      // New
  ARBITRUM_ONE,      // New
  AVALANCHE_C_CHAIN, // New
  CELO_MAINNET,      // Existing
  CELO_SEPOLIA       // Existing
} from "selfx402-framework/networks";
```

## Custom Network Configuration

You can also provide custom network configurations:

```typescript
const customNetwork: NetworkConfig = {
  chainId: 42161,
  name: "arbitrum-custom",
  usdcAddress: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
  usdcName: "USDC",
  rpcUrl: "https://your-custom-rpc.com",
  blockExplorer: "https://arbiscan.io",
  isTestnet: false
};

const facilitator = new Facilitator({
  network: customNetwork,
  wallet: createWalletClient({ privateKey, network: customNetwork })
});
```

## Network Selection Best Practices

**Choose based on your needs**:
- **Ethereum**: Maximum security, highest liquidity, higher gas fees
- **Base**: Low fees, fast, Coinbase ecosystem
- **Arbitrum**: Low fees, fast, high TVL, mature ecosystem
- **Celo**: Mobile-first, very low fees, Self Protocol support
- **Avalanche**: Fast finality, subnets, gaming/DeFi focus
- **Celo Sepolia**: Testing only

**Gas Cost Comparison** (approximate):
- Ethereum: ~$5-20 per settlement
- Base: ~$0.01-0.05 per settlement
- Arbitrum: ~$0.02-0.10 per settlement
- Celo: ~$0.001-0.01 per settlement
- Avalanche: ~$0.05-0.20 per settlement

**Recommendation for production**:
- **High value, security critical**: Ethereum Mainnet
- **General purpose, cost-effective**: Base or Arbitrum
- **Mobile/Self Protocol apps**: Celo Mainnet
- **DeFi/gaming**: Avalanche C-Chain
