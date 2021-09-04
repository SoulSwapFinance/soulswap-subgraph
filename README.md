# SoulSwap Subgraph

Aims to deliver analytics & historical data for SoulSwap. Still a work in progress. Feel free to contribute!

The Graph exposes a GraphQL endpoint to query the events and entities within the SoulSwap ecosytem.

Current subgraph locations:

1. **EXCHANGE**: Includes all SoulSwap Exchange data with Price Data, Volume, Users, etc:
   + https://thegraph.com/explorer/subgraph/soulswap/fantom-exchange (ftm)

2. **SOUL SUMMONER**: Indexes all Soul Summoner staking data: https://thegraph.com/explorer/subgraph/soulswap/soul-summoner

3. **SOUL REAPER**: Indexes the Soul Reaper contract, that handles the reaping of exchange fees to the SpellBound: https://thegraph.com/explorer/subgraph/soulswap/soul-reaper

4. **SOUL TIMELOCKS**: Includes all of the timelock transactions queued, executed, and cancelled: https://thegraph.com/explorer/subgraph/soulswap/soul-timelock

5. **SPELL BOUND**: Indexes the SpellBound, includes data related to the bound: https://thegraph.com/explorer/subgraph/soulswap/spell-bound


## DEPLOYMENT

For any of the subgraphs: `soulswap` or `bound` as `[subgraph]`

1. Run the `yarn run codegen:[subgraph]` command to prepare the TypeScript sources for the GraphQL (generated/schema) and the ABIs (generated/[ABI]/\*)
2. [Optional] run the `yarn run build:[subgraph]` command to build the subgraph. Can be used to check compile errors before deploying.
3. Run `graph auth https://api.thegraph.com/deploy/ <ACCESS_TOKEN>`
4. Deploy via `yarn run deploy:[subgraph]`.

## To query these subgraphs

Please use our node utility: [soul-data](https://github.com/SoulSwapFinance/soul-data).

Note: This is in on-going development.

## Example Queries

We will add to this as development progresses.

### Reaper

```graphql
{
  reaper(id: "0x6684977bbed67e101bb80fc07fccfba655c0a64f") {
    id
    reapings(orderBy: timestamp) {
      id
      reaper {
        id
      }
      tx
      pair
      token0
      token1
      soulReaped
      block
      timestamp
    }
  }
  reapers {
    id
    soulReaped
    reapings(orderBy: timestamp) {
      id
      reaper {
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

# COMMUNITY SUBGRAPHS
- Always welcome (encouraged)

Build completed: QmTjRQdiiRiddevaHEeecUmVAV3Jd8gyvGUNhnCS4aLe5r

Deployed to https://thegraph.com/studio/subgraph/soulswap

Subgraph endpoints:
Queries (HTTP):     https://api.studio.thegraph.com/query/3838/soulswap/v0.1.0
Subscriptions (WS): https://api.studio.thegraph.com/query/3838/soulswap/v0.1.0