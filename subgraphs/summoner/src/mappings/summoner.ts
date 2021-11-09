
import {
  Deposit,
  Withdraw,
  // Harvest,
  // LogPoolAddition,
  // LogSetPool,
  PoolSet
  } from '../../generated/Summoner/Summoner'
  
  import { Address, BigDecimal, BigInt, dataSource, ethereum, log } from '@graphprotocol/graph-ts'
  import {
    BIG_DECIMAL_1E12,
    BIG_DECIMAL_1E18,
    BIG_DECIMAL_ZERO,
    BIG_INT_ONE,
    BIG_INT_ONE_DAY_SECONDS,
    BIG_INT_ZERO,
    SUMMONER_ADDRESS,
    ACC_SOUL_PRECISION
  } from 'const'
  import { Summoner, Pool, User, Rewarder } from '../../generated/schema'
  
  import {
    getSummoner,
    getPool,
    getRewarder,
    getUser,
    updateRewarder
  } from '../entities'
  
  import { ERC20 as ERC20Contract } from '../../generated/Summoner/ERC20'
  
// export function logPoolAddition(event: LogPoolAddition): void {
//   log.info('[MasterChefV2] Log Pool Addition {} {} {} {}', [
//     event.params.pid.toString(),
//     event.params.allocPoint.toString(),
//     event.params.lpToken.toHex(),
//     event.params.rewarder.toHex()
//   ])
  
//     const summoner = getSummoner(event.block)
//     const pool = getPool(event.params.pid, event.block)
//     const rewarder = getRewarder(event.params.rewarder, event.block)
  
//     pool.pair = event.params.lpToken
//     pool.rewarder = rewarder.id
//     pool.allocPoint = event.params.allocPoint
//     pool.save()
  
//     summoner.totalAllocPoint = summoner.totalAllocPoint.plus(pool.allocPoint)
//     summoner.poolCount = summoner.poolCount.plus(BIG_INT_ONE)
//     summoner.save()
//   }
  
  // export function logSetPool(event: LogSetPool): void {
  //   log.info('[Summoner] Log Set Pool {} {} {} {}', [
  //     event.params.pid.toString(),
  //     event.params.allocPoint.toString(),
  //     event.params.rewarder.toHex(),
  //     event.params.overwrite == true ? 'true' : 'false'
  //   ])
  
  //   const summoner = getSummoner(event.block)
  //   const pool = getPool(event.params.pid, event.block)
  
  //   if (event.params.overwrite == true) {
  //      const rewarder = getRewarder(event.params.rewarder, event.block)
  //      pool.rewarder = rewarder.id
  //   }
  
  //   summoner.totalAllocPoint = summoner.totalAllocPoint.plus(event.params.allocPoint.minus(pool.allocPoint))
  //   summoner.save()
  
  //   pool.allocPoint = event.params.allocPoint
  //   pool.save()
  // }
  
  export function poolSet(event: PoolSet): void {
    log.info('[Summoner] Log Update Pool {} {}', [
      event.params.pid.toString(),
      event.params.allocPoint.toString(),
      // event.params.lastRewardTime.toString(),
      // event.params.lpSupply.toString(),
      // event.params.accSoulPerShare.toString()
    ])
  
    const summoner = getSummoner(event.block)
    const pool = getPool(event.params.pid, event.block)
    updateRewarder(Address.fromString(pool.rewarder))
  
    // pool.accSoulPerShare = event.params.accSoulPerShare
    // pool.lastRewardTime = event.params.lastRewardTime
    pool.save()
  }
  
  export function deposit(event: Deposit): void {
    log.info('[Summoner] Log Deposit {} {} {} {}', [
      event.params.user.toHex(),
      event.params.pid.toString(),
      event.params.amount.toString(),
      // event.params.to.toHex()
    ])
  
    const summoner = getSummoner(event.block)
    const pool = getPool(event.params.pid, event.block)
    // const user = getUser(event.params.to, event.params.pid, event.block)
    const user = getUser(event.params.user, event.params.pid, event.block)
  
    pool.slpBalance = pool.slpBalance.plus(event.params.amount)
    pool.save()
  
    user.amount = user.amount.plus(event.params.amount)
    user.rewardDebt = user.rewardDebt.plus(event.params.amount.times(pool.accSoulPerShare).div(ACC_SOUL_PRECISION))
    user.save()
  }
  
  export function withdraw(event: Withdraw): void {
    log.info('[Summoner] Log Withdraw {} {} {} {}', [
      event.params.user.toHex(),
      event.params.pid.toString(),
      event.params.amount.toString(),
      event.params.timeStamp.toString(),
      // event.params.to.toHex()
    ])
  
    const summoner = getSummoner(event.block)
    const pool = getPool(event.params.pid, event.block)
    const user = getUser(event.params.user, event.params.pid, event.block)
  
    pool.slpBalance = pool.slpBalance.minus(event.params.amount)
    pool.save()
  
    user.amount = user.amount.minus(event.params.amount)
    user.rewardDebt = user.rewardDebt.minus(event.params.amount.times(pool.accSoulPerShare).div(ACC_SOUL_PRECISION))
    user.save()
  }
