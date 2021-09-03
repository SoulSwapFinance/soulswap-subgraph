import {
  Deposit,
  Withdraw,
  EmergencyWithdraw,
  Harvest,
  LogPoolAddition,
  LogSetPool,
  LogUpdatePool
} from '../../generated/SoulSummoner/SoulSummoner'

import { Address, BigDecimal, BigInt, dataSource, ethereum, log } from '@graphprotocol/graph-ts'
import {
  BIG_DECIMAL_1E12,
  BIG_DECIMAL_1E18,
  BIG_DECIMAL_ZERO,
  BIG_INT_ONE,
  BIG_INT_ONE_DAY_SECONDS,
  BIG_INT_ZERO,
  SOUL_SUMMONER_ADDRESS,
  ACC_SOUL_PRECISION
} from 'const'
import { SoulSummoner, Pool, User, Rewarder } from '../../generated/schema'

import {
  getSoulSummoner,
  getPool,
  getRewarder,
  getUser,
  updateRewarder
} from '../entities'

import { ERC20 as ERC20Contract } from '../../generated/SoulSummoner/ERC20'

export function logPoolAddition(event: LogPoolAddition): void {
  log.info('[SoulSummoner] Log Pool Addition {} {} {} {}', [
    event.params.pid.toString(),
    event.params.allocPoint.toString(),
    event.params.lpToken.toHex(),
    event.params.rewarder.toHex()
  ])

  const soulSummoner = getSoulSummoner(event.block)
  const pool = getPool(event.params.pid, event.block)
  const rewarder = getRewarder(event.params.rewarder, event.block)

  pool.pair = event.params.lpToken
  pool.rewarder = rewarder.id
  pool.allocPoint = event.params.allocPoint
  pool.save()

  soulSummoner.totalAllocPoint = soulSummoner.totalAllocPoint.plus(pool.allocPoint)
  soulSummoner.poolCount = soulSummoner.poolCount.plus(BIG_INT_ONE)
  soulSummoner.save()
}

export function logSetPool(event: LogSetPool): void {
  log.info('[SoulSummoner] Log Set Pool {} {} {} {}', [
    event.params.pid.toString(),
    event.params.allocPoint.toString(),
    event.params.rewarder.toHex(),
    event.params.overwrite == true ? 'true' : 'false'
  ])

  const soulSummoner = getSoulSummoner(event.block)
  const pool = getPool(event.params.pid, event.block)

  if (event.params.overwrite == true) {
     const rewarder = getRewarder(event.params.rewarder, event.block)
     pool.rewarder = rewarder.id
  }

  soulSummoner.totalAllocPoint = soulSummoner.totalAllocPoint.plus(event.params.allocPoint.minus(pool.allocPoint))
  soulSummoner.save()

  pool.allocPoint = event.params.allocPoint
  pool.save()
}

export function logUpdatePool(event: LogUpdatePool): void {
  log.info('[SoulSummoner] Log Update Pool {} {} {} {}', [
    event.params.pid.toString(),
    event.params.lastRewardBlock.toString(),
    event.params.lpSupply.toString(),
    event.params.accSoulPerShare.toString()
  ])

  const soulSummoner = getSoulSummoner(event.block)
  const pool = getPool(event.params.pid, event.block)
  updateRewarder(Address.fromString(pool.rewarder))

  pool.accSoulPerShare = event.params.accSoulPerShare
  pool.lastRewardBlock = event.params.lastRewardBlock
  pool.save()
}

export function deposit(event: Deposit): void {
  log.info('[SoulSummoner] Log Deposit {} {} {} {}', [
    event.params.user.toHex(),
    event.params.pid.toString(),
    event.params.amount.toString(),
    event.params.to.toHex()
  ])

  const soulSummoner = getSoulSummoner(event.block)
  const pool = getPool(event.params.pid, event.block)
  const user = getUser(event.params.to, event.params.pid, event.block)

  pool.slpBalance = pool.slpBalance.plus(event.params.amount)
  pool.save()

  user.amount = user.amount.plus(event.params.amount)
  user.rewardDebt = user.rewardDebt.plus(event.params.amount.times(pool.accSoulPerShare).div(ACC_SOUL_PRECISION))
  user.save()
}

export function withdraw(event: Withdraw): void {
  log.info('[SoulSummoner] Log Withdraw {} {} {} {}', [
    event.params.user.toHex(),
    event.params.pid.toString(),
    event.params.amount.toString(),
    event.params.to.toHex()
  ])

  const soulSummoner = getSoulSummoner(event.block)
  const pool = getPool(event.params.pid, event.block)
  const user = getUser(event.params.user, event.params.pid, event.block)

  pool.slpBalance = pool.slpBalance.minus(event.params.amount)
  pool.save()

  user.amount = user.amount.minus(event.params.amount)
  user.rewardDebt = user.rewardDebt.minus(event.params.amount.times(pool.accSoulPerShare).div(ACC_SOUL_PRECISION))
  user.save()
}

export function emergencyWithdraw(event: EmergencyWithdraw): void {
  log.info('[SoulSummoner] Log Emergency Withdraw {} {} {} {}', [
    event.params.user.toHex(),
    event.params.pid.toString(),
    event.params.amount.toString(),
    event.params.to.toHex()
  ])

  const soulSummonerV2 = getSoulSummoner(event.block)
  const user = getUser(event.params.user, event.params.pid, event.block)

  user.amount = BIG_INT_ZERO
  user.rewardDebt = BIG_INT_ZERO
  user.save()
}

export function harvest(event: Harvest): void {
  log.info('[SoulSummoner] Log Withdraw {} {} {}', [
    event.params.user.toHex(),
    event.params.pid.toString(),
    event.params.amount.toString()
  ])

  const soulSummoner = getSoulSummoner(event.block)
  const pool = getPool(event.params.pid, event.block)
  const user = getUser(event.params.user, event.params.pid, event.block)

  let accumulatedSoul = user.amount.times(pool.accSoulPerShare).div(ACC_SOUL_PRECISION)

  user.rewardDebt = accumulatedSoul
  user.soulHarvested = user.soulHarvested.plus(event.params.amount)
  user.save()
}
