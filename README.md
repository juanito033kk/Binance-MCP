# Binance MCP Server

[![Status](https://img.shields.io/badge/status-100%25%20complete-brightgreen)]()
[![Tools](https://img.shields.io/badge/tools-478+-blue)]()

A comprehensive Model Context Protocol (MCP) server for the **Binance.com** global exchange API.

## Overview

This MCP server provides **478+ tools** covering the **complete** Binance.com API including:

- **Spot Trading** - Market data, orders, account info ✅
- **Margin Trading** - Cross & Isolated margin ✅
- **Futures (USD-M)** - Perpetual futures trading ✅
- **Options** - Options trading ✅
- **Portfolio Margin** - Unified margin account ✅
- **Wallet** - Deposits, withdrawals, transfers ✅
- **Sub-Account** - Sub-account management ✅
- **Staking** - ETH & SOL staking operations ✅
- **Simple Earn** - Flexible/locked products ✅
- **Auto-Invest** - DCA & recurring buys ✅
- **Convert** - Asset conversion ✅
- **Mining** - Pool mining operations ✅
- **Algo Trading** - TWAP, VP algorithms ✅
- **VIP Loan** - Institutional lending ✅
- **Crypto Loans** - Flexible loans ✅
- **NFT** - NFT transactions ✅
- **Pay** - Binance Pay ✅
- **Gift Card** - Gift card creation & redemption ✅
- **Copy Trading** - Lead trader features ✅
- **Dual Investment** - Structured products ✅
- **C2C/P2P** - Peer-to-peer trading ✅
- **Fiat** - Fiat deposit/withdrawal ✅
- **Rebate** - Referral rebates ✅

## Installation

```bash
cd binance-mcp-server
npm install
```

## Configuration

Create a `.env` file or set environment variables:

```env
BINANCE_API_KEY=your_api_key
BINANCE_API_SECRET=your_api_secret
```

## Usage

### STDIO Transport (Claude Desktop, Cursor)

```bash
npm run start
# or
npx ts-node src/index.ts
```

### SSE Transport (ChatGPT, Web Apps)

```bash
npm run start:sse
# or
npx ts-node src/index.ts --sse
```

## Project Structure

```
binance-mcp-server/
├── src/
│   ├── index.ts              # Entry point
│   ├── binance.ts            # Module registration
│   ├── config/
│   │   ├── binanceClient.ts  # API client with signing
│   │   └── client.ts         # HTTP client
│   ├── server/
│   │   ├── base.ts           # Base server setup
│   │   ├── stdio.ts          # STDIO transport
│   │   └── sse.ts            # SSE transport
│   ├── modules/              # All API modules
│   │   ├── spot/             # Spot trading
│   │   ├── margin/           # Cross & Isolated margin
│   │   ├── futures-usdm/     # USD-M futures
│   │   ├── options/          # Options trading
│   │   ├── portfolio-margin/ # Portfolio margin
│   │   ├── wallet/           # Wallet operations
│   │   ├── staking/          # ETH & SOL staking
│   │   ├── simple-earn/      # Flexible & locked products
│   │   ├── auto-invest/      # Auto-invest plans
│   │   ├── convert/          # Asset conversion
│   │   ├── mining/           # Pool mining
│   │   ├── algo/             # TWAP, VP algorithms
│   │   ├── vip-loan/         # VIP lending
│   │   ├── crypto-loans/     # Crypto loans
│   │   ├── nft/              # NFT operations
│   │   ├── pay/              # Binance Pay
│   │   ├── gift-card/        # Gift cards
│   │   ├── copy-trading/     # Copy trading
│   │   ├── dual-investment/  # Dual investment
│   │   ├── c2c/              # P2P trading
│   │   ├── fiat/             # Fiat operations
│   │   └── rebate/           # Referral rebates
│   ├── tools/                # Tool implementations
│   │   ├── binance-spot/
│   │   ├── binance-margin/
│   │   │   ├── cross-margin-api/
│   │   │   └── isolated-margin-api/
│   │   ├── binance-futures-usdm/
│   │   ├── binance-options/
│   │   ├── binance-portfolio-margin/
│   │   ├── binance-sub-account/
│   │   ├── binance-wallet/
│   │   ├── binance-staking/
│   │   ├── binance-simple-earn/
│   │   ├── binance-auto-invest/
│   │   ├── binance-gift-card/
│   │   └── ... (all other modules)
│   └── utils/
│       └── logger.ts
├── package.json
└── tsconfig.json
```

## Module Coverage

| Module | Tools | Status |
|--------|------:|--------|
| Wallet | 40+ | ✅ 100% |
| Spot | 35+ | ✅ 100% |
| Futures (USD-M) | 40+ | ✅ 100% |
| Margin (Cross) | 26 | ✅ 100% |
| Margin (Isolated) | 15 | ✅ 100% |
| Options | 27 | ✅ 100% |
| Portfolio Margin | 15 | ✅ 100% |
| Sub-Account | 22 | ✅ 100% |
| Staking | 22+ | ✅ 100% |
| Simple Earn | 15+ | ✅ 100% |
| Auto-Invest | 13 | ✅ 100% |
| Mining | 13+ | ✅ 100% |
| Algo | 11+ | ✅ 100% |
| VIP Loan | 9+ | ✅ 100% |
| Convert | 9+ | ✅ 100% |
| Dual Investment | 10+ | ✅ 100% |
| NFT | 10+ | ✅ 100% |
| Gift Card | 8 | ✅ 100% |
| Copy Trading | 10+ | ✅ 100% |
| Fiat | 5+ | ✅ 100% |
| Pay | 5+ | ✅ 100% |
| C2C | 5+ | ✅ 100% |
| Rebate | 5+ | ✅ 100% |
| Crypto Loans | 5+ | ✅ 100% |

**Total: 478+ tools** - Full Binance API Coverage

## API Coverage

🎉 **All major Binance APIs are now fully implemented!**

- ✅ Margin Trading (Cross & Isolated)
- ✅ Futures Trading (USD-M)
- ✅ Options Trading
- ✅ Portfolio Margin
- ✅ Auto-Invest
- ✅ Crypto Loans
- ✅ Sub-Account Management
- ✅ Gift Card
- ✅ All other trading & utility APIs

## Claude Desktop Configuration

Add to `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "binance": {
      "command": "npx",
      "args": ["ts-node", "/path/to/binance-mcp-server/src/index.ts"],
      "env": {
        "BINANCE_API_KEY": "your_key",
        "BINANCE_API_SECRET": "your_secret"
      }
    }
  }
}
```

## Example Tools

### Get Account Info
```
Tool: binance_account_info
```

### Place Spot Order
```
Tool: binance_spot_new_order
Parameters:
  - symbol: "BTCUSDT"
  - side: "BUY"
  - type: "LIMIT"
  - quantity: 0.001
  - price: 50000
  - timeInForce: "GTC"
```

### Get Order Book
```
Tool: binance_order_book
Parameters:
  - symbol: "BTCUSDT"
  - limit: 100
```

## Development

### Build
```bash
npm run build
```

### Type Check
```bash
npx tsc --noEmit
```

### Add New Tool

1. Create file in appropriate module folder
2. Export registration function
3. Import in module's `index.ts`
4. Register in `src/binance.ts`

## API Documentation

- [Quick Start Guide](./docs/QUICK_START.md) - Get started in minutes
- [Tools Reference](./docs/TOOLS_REFERENCE.md) - Complete guide to all 478+ tools with examples
- [Binance API Docs](https://developers.binance.com/docs/binance-spot-api-docs)

## License

MIT
