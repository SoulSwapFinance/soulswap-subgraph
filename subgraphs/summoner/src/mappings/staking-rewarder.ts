import { Address, BigInt, log } from '@graphprotocol/graph-ts'

import { StakingRewardsSoul as StakingRewardsContract} from '../../generated/templates/StakingRewardsSoul/StakingRewardsSoul'
import { RewardAdded } from '../../generated/templates/StakingRewardsSoul/StakingRewardsSoul'
import { getRewarder } from '../entities'

export function rewardAdded(event: RewardAdded): void {
  log.info('[Summoner:StakingRewarder] Log Reward Added {}', [
    event.params.reward.toString()
  ])
  const rewarderContract = StakingRewardsContract.bind(event.address)

  const rewarder = getRewarder(event.address, event.block)
  rewarder.rewardPerSecond = rewarderContract.rewardPerSecond()
  rewarder.save()
}
