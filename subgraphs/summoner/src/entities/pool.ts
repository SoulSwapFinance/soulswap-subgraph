import { Pool } from '../../generated/schema'
import { BigInt, Address, dataSource, ethereum } from '@graphprotocol/graph-ts'
import { BIG_INT_ZERO, ADDRESS_ZERO } from 'const'
import { getSummoner } from './summoner'

export function getPool(pid: BigInt, block: ethereum.Block): Pool {
  const summoner = getSummoner(block)

  let pool = Pool.load(pid.toString())

  if (pool === null) {
    pool = new Pool(pid.toString())
    pool.summoner = summoner.id
    pool.pair = ADDRESS_ZERO
    pool.allocPoint = BIG_INT_ZERO
    pool.lastRewardTime = BIG_INT_ZERO
    pool.accSoulPerShare = BIG_INT_ZERO
    pool.slpBalance = BIG_INT_ZERO
    pool.userCount = BIG_INT_ZERO
  }

  pool.timestamp = block.timestamp
  pool.block = block.number
  pool.save()

  return pool as Pool
}
