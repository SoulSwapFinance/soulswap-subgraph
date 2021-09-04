import { Address, BigDecimal, BigInt } from "@graphprotocol/graph-ts";

export const NULL_CALL_RESULT_VALUE =
  "0x0000000000000000000000000000000000000000000000000000000000000001";

export const ADDRESS_ZERO = Address.fromString(
  "0x0000000000000000000000000000000000000000"
);

export const BIG_DECIMAL_1E6 = BigDecimal.fromString("1e6");

export const BIG_DECIMAL_1E12 = BigDecimal.fromString("1e12");

export const BIG_DECIMAL_1E18 = BigDecimal.fromString("1e18");

export const BIG_DECIMAL_ZERO = BigDecimal.fromString("0");

export const BIG_DECIMAL_ONE = BigDecimal.fromString("1");

export const BIG_INT_ONE = BigInt.fromI32(1);

export const BIG_INT_TWO = BigInt.fromI32(2);

export const BIG_INT_ONE_HUNDRED = BigInt.fromI32(100);

export const BIG_INT_ONE_DAY_SECONDS = BigInt.fromI32(86400);

export const BIG_INT_ZERO = BigInt.fromI32(0);

export const LOCKUP_POOL_NUMBER = BigInt.fromI32(29);

export const LOCKUP_BLOCK_NUMBER = BigInt.fromI32(10959148);

export const SOUL_SUMMONER_START_BLOCK = BigInt.fromI32(10750000);

export const ACC_SOUL_PRECISION = BigInt.fromString("1000000000000");

export const FACTORY_ADDRESS = Address.fromString("0x1120e150dA9def6Fe930f4fEDeD18ef57c0CA7eF");

export const SOUL_SUMMONER_ADDRESS = Address.fromString(
  ""
);

export const SOUL_ETH_PAIR_FIRST_LIQUDITY_BLOCK = BigInt.fromI32(16110304);


export const SPELL_BOUND_ADDRESS = Address.fromString("");

export const SOUL_REAPER_ADDRESS = Address.fromString(
  ""
);

export const SOUL_ADDRESS = Address.fromString(
  "0xe2fb177009FF39F52C0134E8007FA0e4BaAcBd07"
);

export const SOUL_FUSD_PAIR_ADDRESS = Address.fromString(
  ""
);

export const SEANCE_USDC_PAIR_ADDRESS = Address.fromString(
  ""
);

export const SEANCE_WETH_PAIR_ADDRESS = Address.fromString(
  ""
);

export const SOUL_DISTRIBUTOR_ADDRESS = Address.fromString(
  ""
);

export const USDC_WETH_PAIR = "0x160653F02b6597E7Db00BA8cA826cf43D2f39556"; // TODO: insert all addresses

export const DAI_WETH_PAIR = "0xF3d6E8Ecece8647B456d57375Ce0B51B8F0cD40b";

export const FUSD_WETH_PAIR = "0x1AE16105a7d4bE7DFD9737FD13D9A50AEFed1437";

export const SOUL_FUSD_PAIR = "0x9e7711eaeb652d0da577c1748844407f8db44a10";

// minimum liquidity required to count towards tracked volume for pairs with small # of Lps
export const MINIMUM_USD_THRESHOLD_NEW_PAIRS = BigDecimal.fromString(
  "3000"
);

// minimum liquidity for price to get tracked
export const MINIMUM_LIQUIDITY_THRESHOLD_ETH = BigDecimal.fromString(
  "10"
);

export const WETH_ADDRESS = Address.fromString("0x74b23882a30290451a17c44f4f05243b6b58c76d");

export const FUSD_ADDRESS = Address.fromString("0xad84341756bf337f5a0164515b1f6f993d194e1f");

export const NATIVE = Address.fromString("0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83");

export const USDC = "0x04068da6c83afcfa0e13ba15a6696662335d5b75";

export const FUSD = "0xad84341756bf337f5a0164515b1f6f993d194e1f";

export const DAI = "0x8d11ec38a3eb5e956b052f67da8bdc9bef8abf3e";

export const WHITELIST: string[] = ",".split(",");
// const CUSTOM_BASES = new Map<string,string>();
