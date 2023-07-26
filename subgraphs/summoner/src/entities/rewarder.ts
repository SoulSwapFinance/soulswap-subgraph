import {
    ADDRESS_ZERO,
    BIG_INT_ZERO,
    CONVEX_REWARDERS,
  } from 'const'
  import { Address, ethereum } from '@graphprotocol/graph-ts'
  
  import { ComplexRewarder as ComplexRewarderContract } from '../../generated/Summoner/ComplexRewarder'
  import { ConvexRewarder as ConvexRewarderContract } from '../../generated/Summoner/ConvexRewarder'
  import { CloneRewarderTime as CloneRewarderTimeContract } from '../../generated/templates/CloneRewarderTime/CloneRewarderTime'
  import { CloneRewarderTime as CloneRewarderTimeTemplate } from '../../generated/templates'
  import { StakingRewardsSoul as StakingRewardsContract} from '../../generated/templates/StakingRewardsSoul/StakingRewardsSoul'
  import { StakingRewardsSoul as StakingRewardsTemplate } from '../../generated/templates'
  import { Rewarder } from '../../generated/schema'
  
  export function getRewarder(address: Address, block: ethereum.Block): Rewarder {
    let rewarder = Rewarder.load(address.toHex())
  
    if (rewarder === null) {
      rewarder = new Rewarder(address.toHex())
      rewarder.rewardToken = ADDRESS_ZERO
      rewarder.rewardPerSecond = BIG_INT_ZERO
  
      // rewarders that need token to be hardcoded
      if (CONVEX_REWARDERS.includes(address)) {
        rewarder.rewardToken = Address.fromString('0x4e3fbd56cd56c3e72c1403e103b45db9da5b9d2b')
      }
      else {
        const rewarderContract = CloneRewarderTimeContract.bind(address)
        let rewardTokenResult = rewarderContract.try_rewardToken()
        let rewardRateResult = rewarderContract.try_rewardPerSecond()
  
        if (!rewardTokenResult.reverted) {
          rewarder.rewardToken = rewardTokenResult.value
        }
        if (!rewardRateResult.reverted) {
          rewarder.rewardPerSecond = rewardRateResult.value
          CloneRewarderTimeTemplate.create(address);
        }
      }
    }
  
    rewarder.timestamp = block.timestamp
    rewarder.block = block.number
    rewarder.save()
  
    updateRewarder(address)
  
    return rewarder as Rewarder
  }
  
  export function updateRewarder(address: Address): void {
    let rewarder = Rewarder.load(address.toHex())
  
    // rewarders that need to be updated through contract calls
    if (CONVEX_REWARDERS.includes(address)) {
      const rewarderContract = ConvexRewarderContract.bind(address)
      let rewardRate = rewarderContract.rewardRate()
      rewarder.rewardPerSecond = rewardRate
    }
  
    rewarder.save()
  }
