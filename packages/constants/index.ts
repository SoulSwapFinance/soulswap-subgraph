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

export const FACTORY_ADDRESS = Address.fromString("");

export const SOUL_SUMMONER_ADDRESS = Address.fromString(
  ""
);

export const SPELL_BOUND_ADDRESS = Address.fromString("");

export const SOUL_REAPER_ADDRESS = Address.fromString(
  ""
);

export const SOUL_POWER_ADDRESS = Address.fromString(
  ""
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

export const USDC_WETH_PAIR = ""; // TODO: insert all addresses

export const DAI_WETH_PAIR = "";

export const FUSD_WETH_PAIR = "";

export const SOUL_FUSD_PAIR = "";

// minimum liquidity required to count towards tracked volume for pairs with small # of Lps
export const MINIMUM_USD_THRESHOLD_NEW_PAIRS = BigDecimal.fromString(
  "3000"
);

// minimum liquidity for price to get tracked
export const MINIMUM_LIQUIDITY_THRESHOLD_ETH = BigDecimal.fromString(
  "10"
);

export const WETH_ADDRESS = Address.fromString("");

export const SOULSWAP_WETH_FUSD_PAIR_ADDRESS = Address.fromString(
  ""
);

export const FUSD_ADDRESS = Address.fromString("");

export const COMPLEX_REWARDER = Address.fromString(
  "0x0000000000000000000000000000000000000000"
);

export const CONVEX_REWARDERS: Array<Address> = [Address.fromString(''), Address.fromString('')]

export const ALCX_REWARDER = Address.fromString('')

export const LIDO_REWARDER = Address.fromString('')

export const NATIVE = Address.fromString("");

export const USDC = "";

export const FUSD = "";

export const DAI = "";

export const WHITELIST: string[] = ",".split(",");

const CUSTOM_BASES = new Map<string,string>();
