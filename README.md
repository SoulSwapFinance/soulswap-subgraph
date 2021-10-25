# SoulSwap Subgraph

Aims to deliver analytics & historical data for SoulSwap. Still a work in progress. Feel free to contribute!

The Graph exposes a GraphQL endpoint to query the events and entities within the SoulSwap ecosytem.

Current subgraph locations:

1. **Exchange**: Includes all SoulSwap Exchange data with Price Data, Volume, Users, etc:
   + https://thegraph.com/explorer/subgraph/SoulSwapFinance/fantom-exchange (ftm)

2. **Soul Summoner**: Indexes all SoulSummoner staking data: https://thegraph.com/explorer/subgraph/SoulSwapFinance/soul-summoner

3. **Soul Reaper**: Indexes the SoulReaper contract, that handles the serving of exchange fees to the SpellBound: https://thegraph.com/explorer/subgraph/SoulSwapFinance/soul-reaper

4. **Spell Bound**: Indexes the SpellBound, includes data related to the bound: https://thegraph.com/explorer/subgraph/SoulSwapFinance/spell-bound

## To setup and deploy

For any of the subgraphs: `soulswap` or `bound` as `[subgraph]`

1. Run the `yarn run codegen:[subgraph]` command to prepare the TypeScript sources for the GraphQL (generated/schema) and the ABIs (generated/[ABI]/\*)
2. [Optional] run the `yarn run build:[subgraph]` command to build the subgraph. Can be used to check compile errors before deploying.
3. Run `graph auth https://api.thegraph.com/deploy/ <ACCESS_TOKEN>`
4. Deploy via `yarn run deploy:[subgraph]`.

## To query these subgraphs

Please use our node utility: [soul-data](https://github.com/soulswap/soul-data).

Note: This is in on going development as well.

## Example Queries

We will add to this as development progresses.

### Reaper

```graphql
{
  reaper(id: "0x6684977bbed67e101bb80fc07fccfba655c0a64f") {
    id
    servings(orderBy: timestamp) {
      id
      server {
        id
      }
      tx
      pair
      token0
      token1
      soulServed
      block
      timestamp
    }
  }
  servers {
    id
    soulServed
    servings(orderBy: timestamp) {
      id
      server {
        id
      }
      tx
      pair
      token0
      token1
      soul
      block
      timestamp
    }
  }
}
```

# Community Subgraphs

1) croco-finance fork of this repo with slight modifications - [deployment](https://thegraph.com/explorer/subgraph/benesjan/sushi-swap), [code](https://github.com/croco-finance/sushiswap-subgraph)

2) croco-finance dex-rewards-subgraph which tracks SLPs in MasterChef and all the corresponding rewards individually. (can be used for analysis of user's positions) - [deployment](https://thegraph.com/explorer/subgraph/benesjan/dex-rewards-subgraph), [code](https://github.com/croco-finance/dex-rewards-subgraph)


Subgraph endpoints:
Queries (HTTP):     https://api.thegraph.com/subgraphs/name/soulswapfinance/soul-summoner

Subgraph endpoints:
Queries (HTTP):     https://api.thegraph.com/subgraphs/name/soulswapfinance/exchange-fantom