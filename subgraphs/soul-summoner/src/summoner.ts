import {
  AddPoolCall,
  Deposit,
  MassUpdatePoolsCall,
  SoulSummoner as SoulSummonerContract,
  MigrateCall,
  SetCall,
  SetMigratorCall,
  UpdatePoolCall,
  Withdraw,
} from '../generated/SoulSummoner/SoulSummoner'
import { Address, BigDecimal, BigInt, dataSource, ethereum, log } from '@graphprotocol/graph-ts'
import {
  BIG_DECIMAL_1E12,
  BIG_DECIMAL_1E18,
  BIG_DECIMAL_ZERO,
  BIG_INT_ONE,
  BIG_INT_ONE_DAY_SECONDS,
  BIG_INT_ZERO,
  SUMMONER_ADDRESS,
  SUMMONER_START_TIME,
} from 'const'
import { History, SoulSummoner, Pool, PoolHistory, User } from '../generated/schema'
import { getSoulPrice, getUSDRate } from 'pricing'

import { ERC20 as ERC20Contract } from '../generated/SoulSummoner/ERC20'
import { Pair as PairContract } from '../generated/SoulSummoner/Pair'

function getSoulSummoner(block: ethereum.Block): SoulSummoner {
  let soulSummoner = SoulSummoner.load(SUMMONER_ADDRESS.toHex())

  if (soulSummoner === null) {
    const contract = SoulSummonerContract.bind(SUMMONER_ADDRESS)
    soulSummoner = new SoulSummoner(SUMMONER_ADDRESS.toHex())
    // soulSummoner.bonusMultiplier = contract.bonusMultiplier()
    soulSummoner.migrator = contract.migrator()
    soulSummoner.supreme = contract.supreme()

    // poolInfo ...
    soulSummoner.startTime = contract.startTime()
    soulSummoner.soul = contract.soul()
    soulSummoner.soulPerSecond = contract.soulPerSecond()
    soulSummoner.totalAllocPoint = contract.totalAllocPoint()

    // userInfo ...
    soulSummoner.poolCount = BIG_INT_ZERO

    soulSummoner.slpBalance = BIG_DECIMAL_ZERO
    soulSummoner.slpAge = BIG_DECIMAL_ZERO
    soulSummoner.slpAgeRemoved = BIG_DECIMAL_ZERO
    soulSummoner.slpDeposited = BIG_DECIMAL_ZERO
    soulSummoner.slpWithdrawn = BIG_DECIMAL_ZERO

    soulSummoner.updatedAt = block.timestamp

    soulSummoner.save()
  }

  return soulSummoner as SoulSummoner
}

export function getPool(id: BigInt, block: ethereum.Block): Pool {
  let pool = Pool.load(id.toString())
  
  if (pool === null) {
    const soulSummoner = getSoulSummoner(block)

    const soulSummonerContract = SoulSummonerContract.bind(SUMMONER_ADDRESS)
    const poolLength = soulSummonerContract.poolLength()

    if (id >= poolLength) {
      return null
    }

    // Create new pool.
    pool = new Pool(id.toString())

    // Set relation
    pool.owner = soulSummoner.id

    const poolInfo = soulSummonerContract.poolInfo(soulSummoner.poolCount)

    pool.pair = poolInfo.value0
    pool.allocPoint = poolInfo.value1
    pool.lastRewardTime = poolInfo.value2
    pool.accSoulPerShare = poolInfo.value3

    // Total supply of LP tokens
    pool.balance = BIG_INT_ZERO
    pool.userCount = BIG_INT_ZERO

    pool.slpBalance = BIG_DECIMAL_ZERO
    pool.slpAge = BIG_DECIMAL_ZERO
    pool.slpAgeRemoved = BIG_DECIMAL_ZERO
    pool.slpDeposited = BIG_DECIMAL_ZERO
    pool.slpWithdrawn = BIG_DECIMAL_ZERO

    pool.timestamp = block.timestamp
    pool.block = block.number

    pool.updatedAt = block.timestamp
    pool.entryUSD = BIG_DECIMAL_ZERO
    pool.exitUSD = BIG_DECIMAL_ZERO
    pool.soulHarvested = BIG_DECIMAL_ZERO
    pool.soulHarvestedUSD = BIG_DECIMAL_ZERO
    pool.save()
  }

  return pool as Pool
}

function getHistory(supreme: string, block: ethereum.Block): History {
  const day = block.timestamp.div(BIG_INT_ONE_DAY_SECONDS)
  const id = supreme.concat(day.toString())

  let history = History.load(id)

  if (history === null) {
    history = new History(id)
    history.owner = supreme
    history.slpBalance = BIG_DECIMAL_ZERO
    history.slpAge = BIG_DECIMAL_ZERO
    history.slpAgeRemoved = BIG_DECIMAL_ZERO
    history.slpDeposited = BIG_DECIMAL_ZERO
    history.slpWithdrawn = BIG_DECIMAL_ZERO
    history.timestamp = block.timestamp
    history.block = block.number
  }

  return history as History
}

function getPoolHistory(pool: Pool, block: ethereum.Block): PoolHistory {
  const day = block.timestamp.div(BIG_INT_ONE_DAY_SECONDS)

  const id = pool.id.concat(day.toString())

  let history = PoolHistory.load(id)

  if (history === null) {
    history = new PoolHistory(id)
    history.pool = pool.id
    history.slpBalance = BIG_DECIMAL_ZERO
    history.slpAge = BIG_DECIMAL_ZERO
    history.slpAgeRemoved = BIG_DECIMAL_ZERO
    history.slpDeposited = BIG_DECIMAL_ZERO
    history.slpWithdrawn = BIG_DECIMAL_ZERO
    history.timestamp = block.timestamp
    history.block = block.number
    history.entryUSD = BIG_DECIMAL_ZERO
    history.exitUSD = BIG_DECIMAL_ZERO
    history.soulHarvested = BIG_DECIMAL_ZERO
    history.soulHarvestedUSD = BIG_DECIMAL_ZERO
  }

  return history as PoolHistory
}

export function getUser(pid: BigInt, address: Address, block: ethereum.Block): User {
  const uid = address.toHex()
  const id = pid.toString().concat('-').concat(uid)

  let user = User.load(id)

  if (user === null) {
    user = new User(id)
    user.pool = null
    user.address = address
    user.amount = BIG_INT_ZERO
    user.rewardDebt = BIG_INT_ZERO
    user.soulHarvested = BIG_DECIMAL_ZERO
    user.soulHarvestedUSD = BIG_DECIMAL_ZERO
    user.entryUSD = BIG_DECIMAL_ZERO
    user.exitUSD = BIG_DECIMAL_ZERO
    user.timestamp = block.timestamp
    user.block = block.number
    user.save()
  }

  return user as User
}

export function addPool(event: AddPoolCall): void {
  const soulSummoner = getSoulSummoner(event.block)

  log.info('Add pool #{}', [soulSummoner.poolCount.toString()])

  const pool = getPool(soulSummoner.poolCount, event.block)

  if (pool === null) {
    log.error('Pool added with id greater than poolLength, pool #{}', [soulSummoner.poolCount.toString()])
    return
  }

  // Update SoulSummoner.
  soulSummoner.totalAllocPoint = soulSummoner.totalAllocPoint.plus(pool.allocPoint)
  soulSummoner.poolCount = soulSummoner.poolCount.plus(BIG_INT_ONE)
  soulSummoner.save()
}

// Calls
export function set(call: SetCall): void {
  log.info('Set pool id: {} allocPoint: {} withUpdate: {}', [
    call.inputs.pid.toString(),
    call.inputs.allocPoint.toString(),
    call.inputs.withUpdate ? 'true' : 'false',
  ])

  const pool = getPool(call.inputs.pid, call.block)

  const soulSummoner = getSoulSummoner(call.block)

  // Update soulsummoner
  soulSummoner.totalAllocPoint = soulSummoner.totalAllocPoint.plus(call.inputs.allocPoint.minus(pool.allocPoint))
  soulSummoner.save()

  // Update pool
  pool.allocPoint = call.inputs.allocPoint
  pool.save()
}

export function setMigrator(call: SetMigratorCall): void {
  log.info('Set migrator to {}', [call.inputs._migrator.toHex()])

  const soulSummoner = getSoulSummoner(call.block)
  soulSummoner.migrator = call.inputs._migrator
  soulSummoner.save()
}

export function migrate(call: MigrateCall): void {
  const soulSummonerContract = SoulSummonerContract.bind(SUMMONER_ADDRESS)

  const pool = getPool(call.inputs.pid, call.block)

  const poolInfo = soulSummonerContract.poolInfo(call.inputs.pid)

  const pair = poolInfo.value0

  const pairContract = PairContract.bind(pair as Address)

  pool.pair = pair

  const balance = pairContract.balanceOf(SUMMONER_ADDRESS)

  pool.balance = balance

  pool.save()
}

export function massUpdatePools(call: MassUpdatePoolsCall): void {
  log.info('Mass update pools', [])
}

export function updatePool(call: UpdatePoolCall): void {
  log.info('Update pool id {}', [call.inputs.pid.toString()])

  const soulSummoner = SoulSummonerContract.bind(SUMMONER_ADDRESS)
  const poolInfo = soulSummoner.poolInfo(call.inputs.pid)
  const pool = getPool(call.inputs.pid, call.block)
  pool.lastRewardTime = poolInfo.value2
  pool.accSoulPerShare = poolInfo.value3
  pool.save()
}

// export function dev(call: DevCall): void {
//   log.info('Dev changed to {}', [call.inputs._devaddr.toHex()])

//   const soulSummoner = getSoulSummoner(call.block)

//   soulSummoner.supreme = call.inputs.supreme

//   soulSummoner.save()
// }

// Events
export function deposit(event: Deposit): void {
  if (event.params.amount == BIG_INT_ZERO) {
    log.info('Deposit zero transaction, input {} hash {}', [
      event.transaction.input.toHex(),
      event.transaction.hash.toHex(),
    ])
  }

  const amount = event.params.amount.divDecimal(BIG_DECIMAL_1E18)

  log.info('{} has deposited {} slp tokens to pool #{}', [
    event.params.user.toHex(),
    event.params.amount.toString(),
    event.params.pid.toString(),
  ])

  const soulSummonerContract = SoulSummonerContract.bind(SUMMONER_ADDRESS)

  const poolInfo = soulSummonerContract.poolInfo(event.params.pid)

  const pool = getPool(event.params.pid, event.block)

  const poolHistory = getPoolHistory(pool, event.block)

  const pairContract = PairContract.bind(poolInfo.value0)
  pool.balance = pairContract.balanceOf(SUMMONER_ADDRESS)

  pool.lastRewardTime = poolInfo.value2
  pool.accSoulPerShare = poolInfo.value3

  const poolDays = event.block.timestamp.minus(pool.updatedAt).divDecimal(BigDecimal.fromString('86400'))
  pool.slpAge = pool.slpAge.plus(poolDays.times(pool.slpBalance))

  pool.slpDeposited = pool.slpDeposited.plus(amount)
  pool.slpBalance = pool.slpBalance.plus(amount)

  pool.updatedAt = event.block.timestamp

  const userInfo = soulSummonerContract.userInfo(event.params.pid, event.params.user)

  const user = getUser(event.params.pid, event.params.user, event.block)

  // If not currently in pool and depositing SLP
  if (!user.pool && event.params.amount.gt(BIG_INT_ZERO)) {
    user.pool = pool.id
    pool.userCount = pool.userCount.plus(BIG_INT_ONE)
  }

  // Calculate SOUL being paid out
  if (event.block.timestamp.gt(SUMMONER_START_TIME) && user.amount.gt(BIG_INT_ZERO)) {
    const pending = user.amount
      .toBigDecimal()
      .times(pool.accSoulPerShare.toBigDecimal())
      .div(BIG_DECIMAL_1E12)
      .minus(user.rewardDebt.toBigDecimal())
      .div(BIG_DECIMAL_1E18)
    // log.info('Deposit: User amount is more than zero, we should harvest {} soul', [pending.toString()])
    if (pending.gt(BIG_DECIMAL_ZERO)) {
      // log.info('Harvesting {} SOUL', [pending.toString()])
      const soulHarvestedUSD = pending.times(getSoulPrice(event.block))
      user.soulHarvested = user.soulHarvested.plus(pending)
      user.soulHarvestedUSD = user.soulHarvestedUSD.plus(soulHarvestedUSD)
      pool.soulHarvested = pool.soulHarvested.plus(pending)
      pool.soulHarvestedUSD = pool.soulHarvestedUSD.plus(soulHarvestedUSD)
      poolHistory.soulHarvested = pool.soulHarvested
      poolHistory.soulHarvestedUSD = pool.soulHarvestedUSD
    }
  }

  user.amount = userInfo.value0
  user.rewardDebt = userInfo.value1

  if (event.params.amount.gt(BIG_INT_ZERO)) {
    const reservesResult = pairContract.try_getReserves()
    if (!reservesResult.reverted) {
      const totalSupply = pairContract.totalSupply()

      const share = amount.div(totalSupply.toBigDecimal())

      const token0Amount = reservesResult.value.value0.toBigDecimal().times(share)

      const token1Amount = reservesResult.value.value1.toBigDecimal().times(share)

      const token0PriceUSD = getUSDRate(pairContract.token0(), event.block)

      const token1PriceUSD = getUSDRate(pairContract.token1(), event.block)

      const token0USD = token0Amount.times(token0PriceUSD)

      const token1USD = token1Amount.times(token1PriceUSD)

      const entryUSD = token0USD.plus(token1USD)

      log.info(
        'Token {} priceUSD: {} reserve: {} amount: {} / Token {} priceUSD: {} reserve: {} amount: {} - slp amount: {} total supply: {} share: {}',
        [
          // pairContract.token0.symbol(),
          token0PriceUSD.toString(),
          reservesResult.value.value0.toString(),
          token0Amount.toString(),
          // pairContract.token1.symbol(),
          token1PriceUSD.toString(),
          reservesResult.value.value1.toString(),
          token1Amount.toString(),
          amount.toString(),
          totalSupply.toString(),
          share.toString(),
        ]
      )

      log.info('User {} has deposited {} SLP tokens {} {} (${}) and {} {} (${}) at a combined value of ${}', [
        user.address.toHex(),
        amount.toString(),
        token0Amount.toString(),
        // pairContract.token0.symbol(),
        token0USD.toString(),
        token1Amount.toString(),
        // pairContract.token1.symbol(),
        token1USD.toString(),
        entryUSD.toString(),
      ])

      user.entryUSD = user.entryUSD.plus(entryUSD)

      pool.entryUSD = pool.entryUSD.plus(entryUSD)

      poolHistory.entryUSD = pool.entryUSD
    }
  }

  user.save()
  pool.save()

  const soulSummoner = getSoulSummoner(event.block)

  const soulSummonerDays = event.block.timestamp.minus(soulSummoner.updatedAt).divDecimal(BigDecimal.fromString('86400'))
  soulSummoner.slpAge = soulSummoner.slpAge.plus(soulSummonerDays.times(soulSummoner.slpBalance))

  soulSummoner.slpDeposited = soulSummoner.slpDeposited.plus(amount)
  soulSummoner.slpBalance = soulSummoner.slpBalance.plus(amount)
  soulSummoner.updatedAt = event.block.timestamp
  soulSummoner.save()

  const history = getHistory(SUMMONER_ADDRESS.toHex(), event.block)
  history.slpAge = soulSummoner.slpAge
  history.slpBalance = soulSummoner.slpBalance
  history.slpDeposited = history.slpDeposited.plus(amount)
  history.save()

  poolHistory.slpAge = pool.slpAge
  poolHistory.slpBalance = pool.balance.divDecimal(BIG_DECIMAL_1E18)
  poolHistory.slpDeposited = poolHistory.slpDeposited.plus(amount)
  poolHistory.userCount = pool.userCount
  poolHistory.save()
}

export function withdraw(event: Withdraw): void {
  // if (event.params.amount == BIG_INT_ZERO && User.load(event.params.user.toHex()) !== null) {
  //   log.info('Withdrawal zero transaction, input {} hash {}', [
  //     event.transaction.input.toHex(),
  //     event.transaction.hash.toHex(),
  //   ])
  // }

  const amount = event.params.amount.divDecimal(BIG_DECIMAL_1E18)

  // log.info('{} has withdrawn {} slp tokens from pool #{}', [
  //   event.params.user.toHex(),
  //   amount.toString(),
  //   event.params.pid.toString(),
  // ])

  const soulSummonerContract = SoulSummonerContract.bind(SUMMONER_ADDRESS)

  const poolInfo = soulSummonerContract.poolInfo(event.params.pid)

  const pool = getPool(event.params.pid, event.block)

  const poolHistory = getPoolHistory(pool, event.block)

  const pairContract = PairContract.bind(poolInfo.value0)
  pool.balance = pairContract.balanceOf(SUMMONER_ADDRESS)
  pool.lastRewardTime = poolInfo.value2
  pool.accSoulPerShare = poolInfo.value3

  const poolDays = event.block.timestamp.minus(pool.updatedAt).divDecimal(BigDecimal.fromString('86400'))
  const poolAge = pool.slpAge.plus(poolDays.times(pool.slpBalance))
  const poolAgeRemoved = poolAge.div(pool.slpBalance).times(amount)
  pool.slpAge = poolAge.minus(poolAgeRemoved)
  pool.slpAgeRemoved = pool.slpAgeRemoved.plus(poolAgeRemoved)
  pool.slpWithdrawn = pool.slpWithdrawn.plus(amount)
  pool.slpBalance = pool.slpBalance.minus(amount)
  pool.updatedAt = event.block.timestamp

  const user = getUser(event.params.pid, event.params.user, event.block)

  if (event.block.number.gt(SUMMONER_START_TIME) && user.amount.gt(BIG_INT_ZERO)) {
    const pending = user.amount
      .toBigDecimal()
      .times(pool.accSoulPerShare.toBigDecimal())
      .div(BIG_DECIMAL_1E12)
      .minus(user.rewardDebt.toBigDecimal())
      .div(BIG_DECIMAL_1E18)
    // log.info('Withdraw: User amount is more than zero, we should harvest {} soul - block: {}', [
    //   pending.toString(),
    //   event.block.number.toString(),
    // ])
    // log.info('SOUL PRICE {}', [getSoulPrice(event.block).toString()])
    if (pending.gt(BIG_DECIMAL_ZERO)) {
      // log.info('Harvesting {} SOUL (CURRENT SOUL PRICE {})', [
      //   pending.toString(),
      //   getSoulPrice(event.block).toString(),
      // ])
      const soulHarvestedUSD = pending.times(getSoulPrice(event.block))
      if(soulHarvestedUSD !== null) {
      user.soulHarvested = user.soulHarvested.plus(pending)
      user.soulHarvestedUSD = user.soulHarvestedUSD.plus(soulHarvestedUSD)
      pool.soulHarvested = pool.soulHarvested.plus(pending)
      pool.soulHarvestedUSD = pool.soulHarvestedUSD.plus(soulHarvestedUSD)
      poolHistory.soulHarvested = pool.soulHarvested
      poolHistory.soulHarvestedUSD = pool.soulHarvestedUSD
      }
    }
  }

  const userInfo = soulSummonerContract.userInfo(event.params.pid, event.params.user)

  user.amount = userInfo.value0
  user.rewardDebt = userInfo.value1

  if (event.params.amount.gt(BIG_INT_ZERO)) {
    const reservesResult = pairContract.try_getReserves()

    if (!reservesResult.reverted) {
      const totalSupply = pairContract.totalSupply()

      const share = amount.div(totalSupply.toBigDecimal())

      const token0Amount = reservesResult.value.value0.toBigDecimal().times(share)

      const token1Amount = reservesResult.value.value1.toBigDecimal().times(share)

      const token0PriceUSD = getUSDRate(pairContract.token0(), event.block)

      const token1PriceUSD = getUSDRate(pairContract.token1(), event.block)

      const token0USD = token0Amount.times(token0PriceUSD)

      const token1USD = token1Amount.times(token1PriceUSD)

      const exitUSD = token0USD.plus(token1USD)

      pool.exitUSD = pool.exitUSD.plus(exitUSD)

      poolHistory.exitUSD = pool.exitUSD

      // log.info('User {} has withdrwn {} SLP tokens {} {} (${}) and {} {} (${}) at a combined value of ${}', [
      //   user.address.toHex(),
      //   amount.toString(),
      //   token0Amount.toString(),
      //   token0USD.toString(),
      //   pairContract.token0().toHex(),
      //   token1Amount.toString(),
      //   token1USD.toString(),
      //   pairContract.token1().toHex(),
      //   exitUSD.toString(),
      // ])

      user.exitUSD = user.exitUSD.plus(exitUSD)
    } else {
      log.info("Withdraw couldn't get reserves for pair {}", [poolInfo.value0.toHex()])
    }
  }

  // If SLP amount equals zero, remove from pool and reduce userCount
  if (user.amount.equals(BIG_INT_ZERO)) {
    user.pool = null
    pool.userCount = pool.userCount.minus(BIG_INT_ONE)
  }

  user.save()
  pool.save()

  const soulSummoner = getSoulSummoner(event.block)

  const days = event.block.timestamp.minus(soulSummoner.updatedAt).divDecimal(BigDecimal.fromString('86400'))
  const slpAge = soulSummoner.slpAge.plus(days.times(soulSummoner.slpBalance))
  const slpAgeRemoved = slpAge.div(soulSummoner.slpBalance).times(amount)
  soulSummoner.slpAge = slpAge.minus(slpAgeRemoved)
  soulSummoner.slpAgeRemoved = soulSummoner.slpAgeRemoved.plus(slpAgeRemoved)

  soulSummoner.slpWithdrawn = soulSummoner.slpWithdrawn.plus(amount)
  soulSummoner.slpBalance = soulSummoner.slpBalance.minus(amount)
  soulSummoner.updatedAt = event.block.timestamp
  soulSummoner.save()

  const history = getHistory(SUMMONER_ADDRESS.toHex(), event.block)
  history.slpAge = soulSummoner.slpAge
  history.slpAgeRemoved = history.slpAgeRemoved.plus(slpAgeRemoved)
  history.slpBalance = soulSummoner.slpBalance
  history.slpWithdrawn = history.slpWithdrawn.plus(amount)
  history.save()

  poolHistory.slpAge = pool.slpAge
  poolHistory.slpAgeRemoved = poolHistory.slpAgeRemoved.plus(slpAgeRemoved)
  poolHistory.slpBalance = pool.balance.divDecimal(BIG_DECIMAL_1E18)
  poolHistory.slpWithdrawn = poolHistory.slpWithdrawn.plus(amount)
  poolHistory.userCount = pool.userCount
  poolHistory.save()

}
