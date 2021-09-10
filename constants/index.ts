import { Address, BigDecimal, BigInt } from "@graphprotocol/graph-ts";

export const NATIVE = Address.fromString("0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83");
export const FACTORY_ADDRESS = Address.fromString('0x1120e150dA9def6Fe930f4fEDeD18ef57c0CA7eF');

// minimum liquidity required to count towards tracked volume for pairs with small # of Lps
export const MINIMUM_USD_THRESHOLD_NEW_PAIRS = BigDecimal.fromString(
    "500"
  );
  
  // minimum liquidity for price to get tracked
  export const MINIMUM_LIQUIDITY_THRESHOLD_ETH = BigDecimal.fromString(
    "100"
  );

export const ADDRESS_ZERO = Address.fromString("0x0000000000000000000000000000000000000000");

export const BIG_DECIMAL_1E18 = BigDecimal.fromString("1e18");
export const BIG_DECIMAL_ZERO = BigDecimal.fromString("0");
export const BIG_DECIMAL_ONE = BigDecimal.fromString("1");

export const BIG_INT_ONE = BigInt.fromI32(1);
export const BIG_INT_TWO = BigInt.fromI32(2);
export const BIG_INT_ONE_HUNDRED = BigInt.fromI32(100);
export const BIG_INT_ONE_DAY_SECONDS = BigInt.fromI32(86400);
export const BIG_INT_ZERO = BigInt.fromI32(0);

export const FUSD = "0xad84341756bf337f5a0164515b1f6f993d194e1f";
export const DAI = "0x8d11ec38a3eb5e956b052f67da8bdc9bef8abf3e";
export const USDC = "0x04068da6c83afcfa0e13ba15a6696662335d5b75";
export const SOUL = "0xe2fb177009FF39F52C0134E8007FA0e4BaAcBd07";

export const FUSD_WETH_PAIR = "0x1AE16105a7d4bE7DFD9737FD13D9A50AEFed1437";
export const DAI_WETH_PAIR = "0xF3d6E8Ecece8647B456d57375Ce0B51B8F0cD40b";
export const USDC_WETH_PAIR = "0x160653F02b6597E7Db00BA8cA826cf43D2f39556";
export const SOUL_WETH_PAIR = "0xa2527Af9DABf3E3B4979d7E0493b5e2C6e63dC57";
export const SOUL_FUSD_PAIR = "0x9e7711eAeb652d0da577C1748844407f8Db44a10";

export const WHITELIST: string[] = ",".split(",");

export const NULL_CALL_RESULT_VALUE =
  "0x0000000000000000000000000000000000000000000000000000000000000001";

  export const SOUL_SUMMONER_ADDRESS = Address.fromString(
    "0x0000000000000000000000000000000000000000"
  );