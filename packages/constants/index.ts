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

export const SUMMONER_START_BLOCK = BigInt.fromI32(17337870); // 23 SEP

export const ACC_SOUL_PRECISION = BigInt.fromString("1000000000000");

export const PAIR_ADD_COLLATERAL = "addCollateral";

export const PAIR_REMOVE_COLLATERAL = "removeCollateral";

export const PAIR_ADD_ASSET = "addAsset";

export const PAIR_REMOVE_ASSET = "removeAsset";

export const PAIR_BORROW = "borrow";

export const PAIR_REPAY = "repay";

export const FACTORY_ADDRESS = Address.fromString("0x1120e150dA9def6Fe930f4fEDeD18ef57c0CA7eF"); // 23 SEP

export const SUMMONER_ADDRESS = Address.fromString(
  "0x0000000000000000000000000000000000000000"
);

export const SPELL_BOUND_ADDRESS = Address.fromString("0x0000000000000000000000000000000000000000");
export const SEANCE_CIRCLE_ADDRESS = Address.fromString("0x0000000000000000000000000000000000000000");
export const SOUL_REAPER_ADDRESS = Address.fromString("0x0000000000000000000000000000000000000000");

export const SOUL_ADDRESS = Address.fromString(
  "0x0000000000000000000000000000000000000000"
);

export const SOUL_USDT_PAIR_ADDRESS = Address.fromString("0x0000000000000000000000000000000000000000");

export const SEANCE_USDC_PAIR_ADDRESS = Address.fromString(
  "0x0000000000000000000000000000000000000000"
);

export const SEANCE_WETH_PAIR_ADDRESS = Address.fromString(
  "0x0000000000000000000000000000000000000000"
);

export const SOUL_DISTRIBUTOR_ADDRESS = Address.fromString(
  "0x0000000000000000000000000000000000000000"
);

export const USDC_WETH_PAIR = "0xba9ca720e314f42e17e80991c1d0affe47387108";

export const DAI_WETH_PAIR = "0x44f5b873d6b2a2ee8309927e22f3359c7f23d428";

export const USDT_WETH_PAIR = "0xadf3924f44d0ae0242333cde32d75309b30a0fcc";

export const SOUL_USDT_PAIR = "0x0000000000000000000000000000000000000000";

// minimum liquidity required to count towards tracked volume for pairs with small # of Lps
export const MINIMUM_USD_THRESHOLD_NEW_PAIRS = BigDecimal.fromString(
  "3000"
);

// minimum liquidity for price to get tracked
export const MINIMUM_LIQUIDITY_THRESHOLD_ETH = BigDecimal.fromString(
  "15000"
);

export const WETH_ADDRESS = Address.fromString("0xa722c13135930332eb3d749b2f0906559d2c5b99");

export const SOULSWAP_WETH_USDT_PAIR_ADDRESS = Address.fromString(
  "0x0000000000000000000000000000000000000000"
);

export const USDT_ADDRESS = Address.fromString("0xfadbbf8ce7d5b7041be672561bba99f79c532e10");

export const NATIVE = Address.fromString("0x0be9e53fd7edac9f859882afdda116645287c629");

export const USDC = "0x620fd5fa44be6af63715ef4e65ddfa0387ad13f5";

export const USDT = "0xfadbbf8ce7d5b7041be672561bba99f79c532e10";

export const DAI = "0x94ba7a27c7a95863d1bdc7645ac2951e0cca06ba";

export const WHITELIST: string[] = "0x0be9e53fd7edac9f859882afdda116645287c629,0xa722c13135930332eb3d749b2f0906559d2c5b99,0x94ba7a27c7a95863d1bdc7645ac2951e0cca06ba,0xfadbbf8ce7d5b7041be672561bba99f79c532e10,0x33284f95ccb7b948d9d352e1439561cf83d8d00d,0x249be57637d8b013ad64785404b24aebae9b098b".split(",");

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CUSTOM_BASES = new Map<string,string>();
