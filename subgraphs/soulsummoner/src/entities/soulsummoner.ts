import { SoulSummoner } from '../../generated/schema'
import { dataSource, ethereum } from '@graphprotocol/graph-ts'
import { BIG_INT_ZERO } from 'const'

export function getSoulSummoner(block: ethereum.Block): SoulSummoner {
  let soulSummoner = SoulSummoner.load(dataSource.address().toHex())

  if (soulSummoner === null) {
    soulSummoner = new SoulSummoner(dataSource.address().toHex())
    soulSummoner.totalAllocPoint = BIG_INT_ZERO
    soulSummoner.poolCount = BIG_INT_ZERO
  }

  soulSummoner.timestamp = block.timestamp
  soulSummoner.block = block.number
  soulSummoner.save()

  return soulSummoner as SoulSummoner
}
