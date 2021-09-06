# SoulSwap Exchange Subgraph

Subgraph designed to enable users to view transactional data from the blockchain.

[SoulSwap](https://soulswap.finance/) is a decentralized protocol for automated token exchange on Fantom.

This subgraph dynamically tracks any pair created by the SoulSwap factory. It tracks of the current state of SoulSwap contracts, and contains derived stats for things like historical data and USD prices.

- aggregated data across pairs and tokens,
- data on individual pairs and tokens,
- data on transactions
- data on liquidity providers
- historical data on SoulSwap, pairs or tokens, aggregated by day

## Running Locally

Make sure to update package.json settings to point to your own graph account.

## Queries

Below are a few ways to show how to query the soulswap-subgraph for data. The queries show most of the information that is queryable, but there are many other filtering options that can be used, just check out the [querying api](https://thegraph.com/docs/graphql-api). These queries can be used locally or in The Graph Explorer playground.

## Key Entity Overviews

#### SoulSwapFactory

Contains data across all of SoulSwap. This entity tracks important things like total liquidity (in ETH and USD, see below), all time volume, transaction count, number of pairs and more.

#### Token

Contains data on a specific token. This token specific data is aggregated across all pairs, and is updated whenever there is a transaction involving that token.

#### Pair

Contains data on a specific pair.

#### Transaction

Every transaction on SoulSwap is stored. Each transaction contains an array of mints, burns, and swaps that occured within it.

#### Mint, Burn, Swap

These contain specifc information about a transaction. Things like which pair triggered the transaction, amounts, sender, recipient, and more. Each is linked to a parent Transaction entity.

## Example Queries

### Querying Aggregated SoulSwap Data

This query fetches aggredated data from all soulswap pairs and tokens, to give a view into how much activity is happening within the whole protocol.

```graphql
{
  soulSwapFactories(first: 1) {
    totalPairs
    totalVolumeUSD
    totalLiquidityUSD
  }
}
```

## Output
```
Deploy key set for https://api.thegraph.com/deploy/
Unis-MBP:soulswap-subgraph unico$ graph deploy --product hosted-service soulswapfinance/exchange-fantom
  Skip migration: Bump mapping apiVersion from 0.0.1 to 0.0.2
  Skip migration: Bump mapping apiVersion from 0.0.2 to 0.0.3
  Skip migration: Bump mapping apiVersion from 0.0.3 to 0.0.4
  Skip migration: Bump mapping specVersion from 0.0.1 to 0.0.2
✔ Apply migrations
✔ Load subgraph from subgraph.yaml
  Compile data source: Factory => build/Factory/Factory.wasm
  Compile data source template: Pair => build/templates/Pair/Pair.wasm
✔ Compile subgraph
  Copy schema file build/schema.graphql
  Write subgraph file build/Factory/abis/factory.json
  Write subgraph file build/Factory/abis/ERC20.json
  Write subgraph file build/Factory/abis/ERC20SymbolBytes.json
  Write subgraph file build/Factory/abis/ERC20NameBytes.json
  Write subgraph file build/Pair/abis/pair.json
  Write subgraph file build/Pair/abis/factory.json
  Write subgraph manifest build/subgraph.yaml
✔ Write compiled subgraph to build/
  Add file to IPFS build/schema.graphql
                .. QmaQdcHnNgWwEQo3sEChEoQT1mUyDyxvp56vLNRtXPM5TE
  Add file to IPFS build/Factory/abis/factory.json
                .. QmXj1p6rKNSYF78nHcuAFfBnSyyHgxF6d2itS2S18gwiaA
  Add file to IPFS build/Factory/abis/ERC20.json
                .. QmXuTbDkNrN27VydxbS2huvKRk62PMgUTdPDWkxcr2w7j2
  Add file to IPFS build/Factory/abis/ERC20SymbolBytes.json
                .. QmbHnhUFZa6qqqRyubUYhXntox1TCBxqryaBM1iNGqVJzT
  Add file to IPFS build/Factory/abis/ERC20NameBytes.json
                .. QmQCP6Pdp1MqpwRv2qoPHuUTwZGy7Q3eDHg4w5kzwE9mBj
  Add file to IPFS build/Factory/Factory.wasm
                .. QmQsrWP8oJQq4RMg5Ckc8sDoUoz62Mnf1p6vPq2etq8b4X
  Add file to IPFS build/Pair/abis/pair.json
                .. QmbPLMADBP8L6LBVP3ZBQ8RgG7ghamD8DvbdUxHAjZrLgm
  Add file to IPFS build/Pair/abis/factory.json
                .. QmXj1p6rKNSYF78nHcuAFfBnSyyHgxF6d2itS2S18gwiaA (already uploaded)
  Add file to IPFS build/templates/Pair/Pair.wasm
                .. QmT5PxDTBaXGkPsXgo3WctHX45b5atRpqUrnpXfFKBvCNB
✔ Upload subgraph to IPFS

Build completed: QmY2vKEAXZz17JRDgg26vrXGBvGepzQfkXt26CyxLVgqcs

Deployed to https://thegraph.com/explorer/subgraph/soulswapfinance/exchange-fantom

Subgraph endpoints:
Queries (HTTP):     https://api.thegraph.com/subgraphs/name/soulswapfinance/exchange-fantom
Subscriptions (WS): wss://api.thegraph.com/subgraphs/name/soulswapfinance/exchange-fantom

```

## Graph Commands

### **Installation**
* `npm install -g @graphprotocol/graph-cli`
<br>
* `yarn global add @graphprotocol/graph-cli`
<br>
### **Initialization**
* `npm install -gg @graphprotocol/graph/cli`
<br>
* `yarn global add @graphprotocol/graphcli`
<br>

### **Deployment**
* `graph auth --product hosted-service <ACCESS_TOKEN>
`
<br>
* `graph deploy --product hosted-service <GITHUB_USER>/<SUBGRAPH NAME>`

### Redeployment
