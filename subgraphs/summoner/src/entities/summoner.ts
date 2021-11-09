import { Summoner } from '../../generated/schema'
import { dataSource, ethereum } from '@graphprotocol/graph-ts'
import { BIG_INT_ZERO } from 'const'

export function getSummoner(block: ethereum.Block): Summoner {
  let summoner = Summoner.load(dataSource.address().toHex())

  if (summoner === null) {
    summoner = new Summoner(dataSource.address().toHex())
    summoner.totalAllocPoint = BIG_INT_ZERO
    summoner.poolCount = BIG_INT_ZERO
  }

  summoner.timestamp = block.timestamp
  summoner.block = block.number
  summoner.save()

  return summoner as Summoner
}
