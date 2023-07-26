import {
    ADDRESS_ZERO,
    BIG_DECIMAL_1E18,
    BIG_DECIMAL_1E6,
    BIG_DECIMAL_ZERO,
    ENCHANT_ADDRESS,
    SEANCE_CIRCLE_ADDRESS,
    SEANCE_USDC_PAIR_ADDRESS,
  } from 'const'
  import { Address, BigDecimal, BigInt, dataSource, ethereum, log } from '@graphprotocol/graph-ts'
  import { Enchantment, History, User } from '../generated/schema'
  import { Enchantment as EnchantmentContract, Transfer as TransferEvent } from '../generated/Enchantment/Enchantment'
  
  import { Pair as PairContract } from '../generated/Enchantment/Pair'
  import { SeanceToken as SeanceTokenContract } from '../generated/Enchantment/SeanceToken'
  
  // TODO: Get averages of multiple seance stablecoin pairs
  function getSeancePrice(): BigDecimal {
    const pair = PairContract.bind(SEANCE_USDC_PAIR_ADDRESS)
    const reserves = pair.getReserves()
    // return reserves.value1.toBigDecimal().times(BIG_DECIMAL_1E18).div(reserves.value0.toBigDecimal()).div(BIG_DECIMAL_1E6)
    return reserves.value0.toBigDecimal().times(BIG_DECIMAL_1E18).div(reserves.value1.toBigDecimal()).div(BIG_DECIMAL_1E6) // USDC / SEANCE
  }
  
  function createEnchantment(block: ethereum.Block): Enchantment {
    const contract = EnchantmentContract.bind(dataSource.address())
    const enchantment = new Enchantment(dataSource.address().toHex())
    enchantment.decimals = contract.decimals()
    enchantment.name = contract.name()
    enchantment.seance = contract.seance()
    enchantment.symbol = contract.symbol()
    enchantment.totalSupply = BIG_DECIMAL_ZERO
    enchantment.seanceStaked = BIG_DECIMAL_ZERO
    enchantment.seanceStakedUSD = BIG_DECIMAL_ZERO
    enchantment.seanceHarvested = BIG_DECIMAL_ZERO
    enchantment.seanceHarvestedUSD = BIG_DECIMAL_ZERO
    enchantment.enchantMinted = BIG_DECIMAL_ZERO
    enchantment.enchantBurned = BIG_DECIMAL_ZERO
    enchantment.enchantAge = BIG_DECIMAL_ZERO
    enchantment.enchantAgeDestroyed = BIG_DECIMAL_ZERO
    enchantment.ratio = BIG_DECIMAL_ZERO
    enchantment.updatedAt = block.timestamp

    enchantment.save()
  
    return enchantment as Enchantment
  }
  
  function getEnchantment(block: ethereum.Block): Enchantment {
    let enchantment = Enchantment.load(dataSource.address().toHex())
  
    if (enchantment === null) {
      enchantment = createEnchantment(block)
    }
  
    return enchantment as Enchantment
  }
  
  function createUser(address: Address, block: ethereum.Block): User {
    const user = new User(address.toHex())
  
    // Set relation to enchantment
    user.enchantment = dataSource.address().toHex()
  
    user.enchant = BIG_DECIMAL_ZERO
    user.enchantMinted = BIG_DECIMAL_ZERO
    user.enchantBurned = BIG_DECIMAL_ZERO
  
    user.seanceStaked = BIG_DECIMAL_ZERO
    user.seanceStakedUSD = BIG_DECIMAL_ZERO
  
    user.seanceHarvested = BIG_DECIMAL_ZERO
    user.seanceHarvestedUSD = BIG_DECIMAL_ZERO
  
    // In/Out
    user.enchantOut = BIG_DECIMAL_ZERO
    user.seanceOut = BIG_DECIMAL_ZERO
    user.usdOut = BIG_DECIMAL_ZERO
  
    user.enchantIn = BIG_DECIMAL_ZERO
    user.seanceIn = BIG_DECIMAL_ZERO
    user.usdIn = BIG_DECIMAL_ZERO
  
    user.enchantAge = BIG_DECIMAL_ZERO
    user.enchantAgeDestroyed = BIG_DECIMAL_ZERO
  
    user.enchantOffset = BIG_DECIMAL_ZERO
    user.seanceOffset = BIG_DECIMAL_ZERO
    user.usdOffset = BIG_DECIMAL_ZERO
    user.updatedAt = block.timestamp
  
    return user as User
  }
  
  function getUser(address: Address, block: ethereum.Block): User {
    let user = User.load(address.toHex())
  
    if (user === null) {
      user = createUser(address, block)
    }
  
    return user as User
  }
  
  function getHistory(block: ethereum.Block): History {
    const day = block.timestamp.toI32() / 86400
  
    const id = BigInt.fromI32(day).toString()
  
    let history = History.load(id)
  
    if (history === null) {
      const date = day * 86400
      history = new History(id)
      history.date = date
      history.timeframe = 'Day'
      history.seanceStaked = BIG_DECIMAL_ZERO
      history.seanceStakedUSD = BIG_DECIMAL_ZERO
      history.seanceHarvested = BIG_DECIMAL_ZERO
      history.seanceHarvestedUSD = BIG_DECIMAL_ZERO
      history.enchantAge = BIG_DECIMAL_ZERO
      history.enchantAgeDestroyed = BIG_DECIMAL_ZERO
      history.enchantMinted = BIG_DECIMAL_ZERO
      history.enchantBurned = BIG_DECIMAL_ZERO
      history.enchantSupply = BIG_DECIMAL_ZERO
      history.ratio = BIG_DECIMAL_ZERO
    }
  
    return history as History
  }
  
  export function transfer(event: TransferEvent): void {
    // Convert to BigDecimal with 18 places, 1e18.
    const value = event.params.value.divDecimal(BIG_DECIMAL_1E18)
  
    // If value is zero, do nothing.
    if (value.equals(BIG_DECIMAL_ZERO)) {
      log.warning('Transfer zero value! Value: {} Tx: {}', [
        event.params.value.toString(),
        event.transaction.hash.toHex(),
      ])
      return
    }
  
    const enchantment = getEnchantment(event.block)
    const enchantmentContract = EnchantmentContract.bind(ENCHANT_ADDRESS)
  
    const seancePrice = getSeancePrice()
  
    enchantment.totalSupply = enchantmentContract.totalSupply().divDecimal(BIG_DECIMAL_1E18)
    enchantment.seanceStaked = SeanceTokenContract.bind(SEANCE_CIRCLE_ADDRESS)
      .balanceOf(ENCHANT_ADDRESS)
      .divDecimal(BIG_DECIMAL_1E18)
    enchantment.ratio = enchantment.seanceStaked.div(enchantment.totalSupply)
  
    const what = value.times(enchantment.ratio)
  
    // Minted ENCHANT
    if (event.params.from == ADDRESS_ZERO) {
      const user = getUser(event.params.to, event.block)
  
      log.info('{} minted {} enchant in exchange for {} seance - seanceStaked before {} seanceStaked after {}', [
        event.params.to.toHex(),
        value.toString(),
        what.toString(),
        user.seanceStaked.toString(),
        user.seanceStaked.plus(what).toString(),
      ])
  
      if (user.enchant == BIG_DECIMAL_ZERO) {
        log.info('{} entered the enchantment', [user.id])
        user.enchantment = enchantment.id
      }
  
      user.enchantMinted = user.enchantMinted.plus(value)
  
      const seanceStakedUSD = what.times(seancePrice)
  
      user.seanceStaked = user.seanceStaked.plus(what)
      user.seanceStakedUSD = user.seanceStakedUSD.plus(seanceStakedUSD)
  
      const days = event.block.timestamp.minus(user.updatedAt).divDecimal(BigDecimal.fromString('86400'))
  
      const enchantAge = days.times(user.enchant)
  
      user.enchantAge = user.enchantAge.plus(enchantAge)
  
      // Update last
      user.enchant = user.enchant.plus(value)
  
      user.updatedAt = event.block.timestamp
  
      user.save()
  
      const enchantmentDays = event.block.timestamp.minus(enchantment.updatedAt).divDecimal(BigDecimal.fromString('86400'))
      const enchantmentXseance = enchantment.enchantMinted.minus(enchantment.enchantBurned)
      enchantment.enchantMinted = enchantment.enchantMinted.plus(value)
      enchantment.enchantAge = enchantment.enchantAge.plus(enchantmentDays.times(enchantmentXseance))
      enchantment.seanceStaked = enchantment.seanceStaked.plus(what)
      enchantment.seanceStakedUSD = enchantment.seanceStakedUSD.plus(seanceStakedUSD)
      enchantment.updatedAt = event.block.timestamp
  
      const history = getHistory(event.block)
      history.enchantAge = enchantment.enchantAge
      history.enchantMinted = history.enchantMinted.plus(value)
      history.enchantSupply = enchantment.totalSupply
      history.seanceStaked = history.seanceStaked.plus(what)
      history.seanceStakedUSD = history.seanceStakedUSD.plus(seanceStakedUSD)
      history.ratio = enchantment.ratio
      history.save()
    }
  
    // Burned ENCHANT
    if (event.params.to == ADDRESS_ZERO) {
      log.info('{} burned {} enchant', [event.params.from.toHex(), value.toString()])
  
      const user = getUser(event.params.from, event.block)
  
      user.enchantBurned = user.enchantBurned.plus(value)
  
      user.seanceHarvested = user.seanceHarvested.plus(what)
  
      const seanceHarvestedUSD = what.times(seancePrice)
  
      user.seanceHarvestedUSD = user.seanceHarvestedUSD.plus(seanceHarvestedUSD)
  
      const days = event.block.timestamp.minus(user.updatedAt).divDecimal(BigDecimal.fromString('86400'))
  
      const enchantAge = days.times(user.enchant)
  
      user.enchantAge = user.enchantAge.plus(enchantAge)
  
      const enchantAgeDestroyed = user.enchantAge.div(user.enchant).times(value)
  
      user.enchantAgeDestroyed = user.enchantAgeDestroyed.plus(enchantAgeDestroyed)
  
      // remove enchantAge
      user.enchantAge = user.enchantAge.minus(enchantAgeDestroyed)
      // Update enchant last
      user.enchant = user.enchant.minus(value)
  
      if (user.enchant == BIG_DECIMAL_ZERO) {
        log.info('{} left the enchantment', [user.id])
        user.enchantment = null
      }
  
      user.updatedAt = event.block.timestamp
  
      user.save()
  
      const enchantmentDays = event.block.timestamp.minus(enchantment.updatedAt).divDecimal(BigDecimal.fromString('86400'))
      const enchantmentXseance = enchantment.enchantMinted.minus(enchantment.enchantBurned)
      enchantment.enchantBurned = enchantment.enchantBurned.plus(value)
      enchantment.enchantAge = enchantment.enchantAge.plus(enchantmentDays.times(enchantmentXseance)).minus(enchantAgeDestroyed)
      enchantment.enchantAgeDestroyed = enchantment.enchantAgeDestroyed.plus(enchantAgeDestroyed)
      enchantment.seanceHarvested = enchantment.seanceHarvested.plus(what)
      enchantment.seanceHarvestedUSD = enchantment.seanceHarvestedUSD.plus(seanceHarvestedUSD)
      enchantment.updatedAt = event.block.timestamp
  
      const history = getHistory(event.block)
      history.enchantSupply = enchantment.totalSupply
      history.enchantBurned = history.enchantBurned.plus(value)
      history.enchantAge = enchantment.enchantAge
      history.enchantAgeDestroyed = history.enchantAgeDestroyed.plus(enchantAgeDestroyed)
      history.seanceHarvested = history.seanceHarvested.plus(what)
      history.seanceHarvestedUSD = history.seanceHarvestedUSD.plus(seanceHarvestedUSD)
      history.ratio = enchantment.ratio
      history.save()
    }
  
    // If transfer from address to address and not known enchant pools.
    if (event.params.from != ADDRESS_ZERO && event.params.to != ADDRESS_ZERO) {
      log.info('transfered {} enchant from {} to {}', [
        value.toString(),
        event.params.from.toHex(),
        event.params.to.toHex(),
      ])
  
      const fromUser = getUser(event.params.from, event.block)
  
      const fromUserDays = event.block.timestamp.minus(fromUser.updatedAt).divDecimal(BigDecimal.fromString('86400'))
  
      // Recalc enchant age first
      fromUser.enchantAge = fromUser.enchantAge.plus(fromUserDays.times(fromUser.enchant))
      // Calculate enchantAge being transfered
      const enchantAgeTranfered = fromUser.enchantAge.div(fromUser.enchant).times(value)
      // Subtract from enchantAge
      fromUser.enchantAge = fromUser.enchantAge.minus(enchantAgeTranfered)
      fromUser.updatedAt = event.block.timestamp
  
      fromUser.enchant = fromUser.enchant.minus(value)
      fromUser.enchantOut = fromUser.enchantOut.plus(value)
      fromUser.seanceOut = fromUser.seanceOut.plus(what)
      fromUser.usdOut = fromUser.usdOut.plus(what.times(seancePrice))
  
      if (fromUser.enchant == BIG_DECIMAL_ZERO) {
        log.info('{} left the enchantment by transfer OUT', [fromUser.id])
        fromUser.enchantment = null
      }
  
      fromUser.save()
  
      const toUser = getUser(event.params.to, event.block)
  
      if (toUser.enchantment === null) {
        log.info('{} entered the enchantment by transfer IN', [fromUser.id])
        toUser.enchantment = enchantment.id
      }
  
      // Recalculate enchant age and add incoming enchantAgeTransfered
      const toUserDays = event.block.timestamp.minus(toUser.updatedAt).divDecimal(BigDecimal.fromString('86400'))
  
      toUser.enchantAge = toUser.enchantAge.plus(toUserDays.times(toUser.enchant)).plus(enchantAgeTranfered)
      toUser.updatedAt = event.block.timestamp
  
      toUser.enchant = toUser.enchant.plus(value)
      toUser.enchantIn = toUser.enchantIn.plus(value)
      toUser.seanceIn = toUser.seanceIn.plus(what)
      toUser.usdIn = toUser.usdIn.plus(what.times(seancePrice))
  
      const difference = toUser.enchantIn.minus(toUser.enchantOut).minus(toUser.enchantOffset)
  
      // If difference of seance in - seance out - offset > 0, then add on the difference
      // in staked seance based on enchant:Seance ratio at time of reciept.
      if (difference.gt(BIG_DECIMAL_ZERO)) {
        const seance = toUser.seanceIn.minus(toUser.seanceOut).minus(toUser.seanceOffset)
        const usd = toUser.usdIn.minus(toUser.usdOut).minus(toUser.usdOffset)
  
        log.info('{} recieved a transfer of {} enchant from {}, seance value of transfer is {}', [
          toUser.id,
          value.toString(),
          fromUser.id,
          what.toString(),
        ])
  
        toUser.seanceStaked = toUser.seanceStaked.plus(seance)
        toUser.seanceStakedUSD = toUser.seanceStakedUSD.plus(usd)
  
        toUser.enchantOffset = toUser.enchantOffset.plus(difference)
        toUser.seanceOffset = toUser.seanceOffset.plus(seance)
        toUser.usdOffset = toUser.usdOffset.plus(usd)
      }
  
      toUser.save()
    }
  
    enchantment.save()
  }