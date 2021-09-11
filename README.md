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
yarn codegen
yarn run v1.22.10
$ graph codegen subgraph.yaml
  Skip migration: Bump mapping apiVersion from 0.0.1 to 0.0.2
  Skip migration: Bump mapping apiVersion from 0.0.2 to 0.0.3
  Skip migration: Bump mapping apiVersion from 0.0.3 to 0.0.4
  Skip migration: Bump mapping specVersion from 0.0.1 to 0.0.2
✔ Apply migrations
✔ Load subgraph from subgraph.yaml
  Load contract ABI from abis/factory.json
  Load contract ABI from abis/ERC20.json
  Load contract ABI from abis/ERC20SymbolBytes.json
  Load contract ABI from abis/ERC20NameBytes.json
  Load contract ABI from abis/staking-rewards-factory.json
✔ Load contract ABIs
  Generate types for contract ABI: Factory (abis/factory.json)
  Write types to generated/Factory/Factory.ts
  Generate types for contract ABI: ERC20 (abis/ERC20.json)
  Write types to generated/Factory/ERC20.ts
  Generate types for contract ABI: ERC20SymbolBytes (abis/ERC20SymbolBytes.json)
  Write types to generated/Factory/ERC20SymbolBytes.ts
  Generate types for contract ABI: ERC20NameBytes (abis/ERC20NameBytes.json)
  Write types to generated/Factory/ERC20NameBytes.ts
  Generate types for contract ABI: StakingRewardsFactory (abis/staking-rewards-factory.json)
  Write types to generated/StakingRewardsFactory/StakingRewardsFactory.ts
✔ Generate types for contract ABIs
  Generate types for data source template Pair
  Generate types for data source template Distribution
  Write types for templates to generated/templates.ts
✔ Generate types for data source templates
  Load data source template ABI from abis/pair.json
  Load data source template ABI from abis/factory.json
  Load data source template ABI from abis/staking-rewards-distribution.json
✔ Load data source template ABIs
  Generate types for data source template ABI: Pair > Pair (abis/pair.json)
  Write types to generated/templates/Pair/Pair.ts
  Generate types for data source template ABI: Pair > Factory (abis/factory.json)
  Write types to generated/templates/Pair/Factory.ts
  Generate types for data source template ABI: Distribution > StakingRewardsDistribution (abis/staking-rewards-distribution.json)
  Write types to generated/templates/Distribution/StakingRewardsDistribution.ts
✔ Generate types for data source template ABIs
✔ Load GraphQL schema from schema.graphql
  Write types to generated/schema.ts
✔ Generate types for GraphQL schema

Types generated successfully

✨  Done in 2.83s.
yarn build
yarn run v1.22.10
$ graph build subgraph.yaml
  Skip migration: Bump mapping apiVersion from 0.0.1 to 0.0.2
  Skip migration: Bump mapping apiVersion from 0.0.2 to 0.0.3
  Skip migration: Bump mapping apiVersion from 0.0.3 to 0.0.4
  Skip migration: Bump mapping specVersion from 0.0.1 to 0.0.2
✔ Apply migrations
✔ Load subgraph from subgraph.yaml
  Compile data source: Factory => build/Factory/Factory.wasm
  Compile data source: StakingRewardsFactory => build/StakingRewardsFactory/StakingRewardsFactory.wasm
  Compile data source template: Pair => build/templates/Pair/Pair.wasm
  Compile data source template: Distribution => build/StakingRewardsFactory/StakingRewardsFactory.wasm (already compiled)
✔ Compile subgraph
  Copy schema file build/schema.graphql
  Write subgraph file build/Factory/abis/factory.json
  Write subgraph file build/Factory/abis/ERC20.json
  Write subgraph file build/Factory/abis/ERC20SymbolBytes.json
  Write subgraph file build/Factory/abis/ERC20NameBytes.json
  Write subgraph file build/StakingRewardsFactory/abis/staking-rewards-factory.json
  Write subgraph file build/Pair/abis/pair.json
  Write subgraph file build/Pair/abis/factory.json
  Write subgraph file build/Distribution/abis/staking-rewards-distribution.json
  Write subgraph manifest build/subgraph.yaml
✔ Write compiled subgraph to build/

Build completed: /Users/unico/Documents/GitHub/soulswap/soulswap-subgraph/build/subgraph.yaml

✨  Done in 4.52s.
yarn deploy soulswapfinance/fantom-exchange
yarn run v1.22.10
$ graph deploy --node https://api.thegraph.com/deploy/ --ipfs https://api.thegraph.com/ipfs/ soulswapfinance/fantom-exchange subgraph.yaml soulswapfinance/fantom-exchange
  Skip migration: Bump mapping apiVersion from 0.0.1 to 0.0.2
  Skip migration: Bump mapping apiVersion from 0.0.2 to 0.0.3
  Skip migration: Bump mapping apiVersion from 0.0.3 to 0.0.4
  Skip migration: Bump mapping specVersion from 0.0.1 to 0.0.2
✔ Apply migrations
✔ Load subgraph from subgraph.yaml
  Compile data source: Factory => build/Factory/Factory.wasm
  Compile data source: StakingRewardsFactory => build/StakingRewardsFactory/StakingRewardsFactory.wasm
  Compile data source template: Pair => build/templates/Pair/Pair.wasm
  Compile data source template: Distribution => build/StakingRewardsFactory/StakingRewardsFactory.wasm (already compiled)
✔ Compile subgraph
  Copy schema file build/schema.graphql
  Write subgraph file build/Factory/abis/factory.json
  Write subgraph file build/Factory/abis/ERC20.json
  Write subgraph file build/Factory/abis/ERC20SymbolBytes.json
  Write subgraph file build/Factory/abis/ERC20NameBytes.json
  Write subgraph file build/StakingRewardsFactory/abis/staking-rewards-factory.json
  Write subgraph file build/Pair/abis/pair.json
  Write subgraph file build/Pair/abis/factory.json
  Write subgraph file build/Distribution/abis/staking-rewards-distribution.json
  Write subgraph manifest build/subgraph.yaml
✔ Write compiled subgraph to build/
  Add file to IPFS build/schema.graphql
                .. QmbrMqtgnwxNCCRuuJrjx73L1anFKh4V4w1XoSoCBzoP8W
  Add file to IPFS build/Factory/abis/factory.json
                .. QmeFnsAz1cHPYSp8F3n5JxZr463X2tc3pdoztFxv2eTV4C
  Add file to IPFS build/Factory/abis/ERC20.json
                .. QmXuTbDkNrN27VydxbS2huvKRk62PMgUTdPDWkxcr2w7j2
  Add file to IPFS build/Factory/abis/ERC20SymbolBytes.json
                .. QmbHnhUFZa6qqqRyubUYhXntox1TCBxqryaBM1iNGqVJzT
  Add file to IPFS build/Factory/abis/ERC20NameBytes.json
                .. QmQCP6Pdp1MqpwRv2qoPHuUTwZGy7Q3eDHg4w5kzwE9mBj
  Add file to IPFS build/StakingRewardsFactory/abis/staking-rewards-factory.json
                .. QmSNix2i5kYVQYPjS4BhDJadEjfpzNwAX5a6AfhSvWSPWn
  Add file to IPFS build/Factory/Factory.wasm
                .. QmRR4j8EnRbB6RYewyTRM4ygk4HcURGtmiCV2QcBTwCnr8
  Add file to IPFS build/StakingRewardsFactory/StakingRewardsFactory.wasm
                .. QmQpx5jnbFFufwBT4JEngeRDBo62vdbfNmnVSk32x8ft7g
  Add file to IPFS build/Pair/abis/pair.json
                .. QmbPLMADBP8L6LBVP3ZBQ8RgG7ghamD8DvbdUxHAjZrLgm
  Add file to IPFS build/Pair/abis/factory.json
                .. QmeFnsAz1cHPYSp8F3n5JxZr463X2tc3pdoztFxv2eTV4C (already uploaded)
  Add file to IPFS build/templates/Pair/Pair.wasm
                .. QmTkXRYKQaMy7oDao9qZLAFQ7Stkje13FqdsNDy9snP2UU
  Add file to IPFS build/Distribution/abis/staking-rewards-distribution.json
                .. QmY2V85fudar6uvbacFV5WuioVN3QUXQEYEyeW8LbsvpuE
  Add file to IPFS build/StakingRewardsFactory/StakingRewardsFactory.wasm
                .. QmQpx5jnbFFufwBT4JEngeRDBo62vdbfNmnVSk32x8ft7g (already uploaded)
✔ Upload subgraph to IPFS

Build completed: QmSXAa8mPZb2QsnMw1NMZWDpDo94ZVo442vF8YFDP16HBL

Deployed to https://thegraph.com/explorer/subgraph/soulswapfinance/fantom-exchange

Subgraph endpoints:
Queries (HTTP):     https://api.thegraph.com/subgraphs/name/soulswapfinance/fantom-exchange
Subscriptions (WS): wss://api.thegraph.com/subgraphs/name/soulswapfinance/fantom-exchange


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
