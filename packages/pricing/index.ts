import {
  ADDRESS_ZERO,
  BIG_DECIMAL_1E18,
  BIG_DECIMAL_1E6,
  BIG_DECIMAL_ONE,
  BIG_DECIMAL_ZERO,
  FACTORY_ADDRESS,
  SOULSWAP_WETH_FUSD_PAIR_ADDRESS,
  SOUL_TOKEN_ADDRESS,
  SOUL_FUSD_PAIR_ADDRESS,
  SOULSWAP_FACTORY_ADDRESS,
  SOULSWAP_SOUL_ETH_PAIR_FIRST_LIQUDITY_BLOCK,
  SOULSWAP_SOUL_FUSD_PAIR_ADDRESS,
  SOULSWAP_WETH_FUSD_PAIR_ADDRESS,
  FUSD_ADDRESS,
  WETH_ADDRESS,
} from "const";
import {
  Address,
  BigDecimal,
  BigInt,
  ethereum,
  log,
} from "@graphprotocol/graph-ts";

import { Factory as FactoryContract } from "exchange/generated/Factory/Factory";
import { Pair as PairContract } from "exchange/generated/Factory/Pair";

export function getUSDRate(token: Address, block: ethereum.Block): BigDecimal {
  const usdt = BIG_DECIMAL_ONE;

  if (token != FUSD_ADDRESS) {
    const address = block.number.le(BigInt.fromI32(10829344))
      ? SOULSWAP_WETH_FUSD_PAIR_ADDRESS
      : SOULSWAP_WETH_FUSD_PAIR_ADDRESS;

    const tokenPriceETH = getEthRate(token, block);

    const pair = PairContract.bind(address);

    const reserves = pair.getReserves();

    const reserve0 = reserves.value0.toBigDecimal().times(BIG_DECIMAL_1E18);

    const reserve1 = reserves.value1.toBigDecimal().times(BIG_DECIMAL_1E18);

    const ethPriceUSD = reserve1
      .div(reserve0)
      .div(BIG_DECIMAL_1E6)
      .times(BIG_DECIMAL_1E18);

    return ethPriceUSD.times(tokenPriceETH);
  }

  return usdt;
}

export function getEthRate(token: Address, block: ethereum.Block): BigDecimal {
  let eth = BIG_DECIMAL_ONE;

  if (token != WETH_ADDRESS) {
    const factory = FactoryContract.bind(
      block.number.le(BigInt.fromI32(10829344))
        ? SOULSWAP_FACTORY_ADDRESS
        : FACTORY_ADDRESS
    );

    const address = factory.getPair(token, WETH_ADDRESS);

    if (address == ADDRESS_ZERO) {
      log.info("Adress ZERO...", []);
      return BIG_DECIMAL_ZERO;
    }

    const pair = PairContract.bind(address);

    const reserves = pair.getReserves();

    eth =
      pair.token0() == WETH_ADDRESS
        ? reserves.value0
            .toBigDecimal()
            .times(BIG_DECIMAL_1E18)
            .div(reserves.value1.toBigDecimal())
        : reserves.value1
            .toBigDecimal()
            .times(BIG_DECIMAL_1E18)
            .div(reserves.value0.toBigDecimal());

    return eth.div(BIG_DECIMAL_1E18);
  }

  return eth;
}

export function getSoulPrice(block: ethereum.Block): BigDecimal {
  if (block.number.lt(SOULSWAP_SOUL_ETH_PAIR_FIRST_LIQUDITY_BLOCK)) {
    // If before soulswap soul-eth pair creation and liquidity added, return zero
    return BIG_DECIMAL_ZERO;
  } else if (block.number.lt(BigInt.fromI32(10800029))) {
    // Else if before soulswap soul-fusd pair creation (get price from eth soul-eth pair above)
    return getUSDRate(SOUL_TOKEN_ADDRESS, block);
  } else {
    // Else get price from either uni or soul fusd pair depending on space-time
    const pair = PairContract.bind(
      block.number.le(BigInt.fromI32(10829344))
        ? SOULSWAP_SOUL_FUSD_PAIR_ADDRESS
        : SOUL_FUSD_PAIR_ADDRESS
    );
    const reserves = pair.getReserves();
    return reserves.value1
      .toBigDecimal()
      .times(BIG_DECIMAL_1E18)
      .div(reserves.value0.toBigDecimal())
      .div(BIG_DECIMAL_1E6);
  }
}
