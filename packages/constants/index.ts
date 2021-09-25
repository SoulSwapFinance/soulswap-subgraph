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
export const SUMMONER_START_TIME = BigInt.fromI32(1632170016); // 23 SEP

export const ACC_SOUL_PRECISION = BigInt.from(1000000000000);

export const PAIR_ADD_COLLATERAL = "addCollateral";
export const PAIR_REMOVE_COLLATERAL = "removeCollateral";
export const PAIR_ADD_ASSET = "addAsset";
export const PAIR_REMOVE_ASSET = "removeAsset";
export const PAIR_BORROW = "borrow";
export const PAIR_REPAY = "repay";

export const FACTORY_ADDRESS = Address.fromString("0x1120e150dA9def6Fe930f4fEDeD18ef57c0CA7eF"); // 23 SEP
export const SUMMONER_ADDRESS = Address.fromString("0xce6ccbB1EdAD497B4d53d829DF491aF70065AB5B");

export const SPELL_BOUND_ADDRESS = Address.fromString("0xF4799d8269b061C43236A6D2ad5415589f984F84");
export const SEANCE_CIRCLE_ADDRESS = Address.fromString("0x124B06C5ce47De7A6e9EFDA71a946717130079E6");
export const SOUL_REAPER_ADDRESS = Address.fromString("0x0000000000000000000000000000000000000000");
export const SOUL_ADDRESS = Address.fromString("0xe2fb177009FF39F52C0134E8007FA0e4BaAcBd07");

export const SOUL_USDT_PAIR_ADDRESS = Address.fromString("0xe27cc06a7f34892bc17a5474303b91b2c9f3f21a");
export const SEANCE_USDC_PAIR_ADDRESS = Address.fromString("0x98C678d3C7ebeD4a36B84666700d8b5b5Ddc1f79");
export const SEANCE_WETH_PAIR_ADDRESS = Address.fromString("0x8542beac34282afe5bb6951eb6dce0b3783b7fab");
export const SOUL_DISTRIBUTOR_ADDRESS = Address.fromString("0x0000000000000000000000000000000000000000");

export const USDC_WETH_PAIR = "0x160653F02b6597E7Db00BA8cA826cf43D2f39556";
export const DAI_WETH_PAIR = "0xF3d6E8Ecece8647B456d57375Ce0B51B8F0cD40b";
export const USDT_WETH_PAIR = "0xdC24814AD654986928F8E4aec48D37fa30bBC5BB";
export const SOUL_USDT_PAIR = "0xe27cc06a7f34892bc17a5474303b91b2c9f3f21a";

// minimum liquidity required to count towards tracked volume for pairs with small # of Lps
export const MINIMUM_USD_THRESHOLD_NEW_PAIRS = BigDecimal.fromString("100");

// minimum liquidity for price to get tracked
export const MINIMUM_LIQUIDITY_THRESHOLD_ETH = BigDecimal.fromString("100");

export const WETH_ADDRESS = Address.fromString("0x74b23882a30290451a17c44f4f05243b6b58c76d");
export const SOULSWAP_WETH_USDT_PAIR_ADDRESS = Address.fromString("0xdC24814AD654986928F8E4aec48D37fa30bBC5BB");

export const USDT_ADDRESS = Address.fromString("0x049d68029688eabf473097a2fc38ef61633a3c7a");
export const NATIVE = Address.fromString("0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83");
export const USDC = "0x04068da6c83afcfa0e13ba15a6696662335d5b75";
export const USDT = "0x049d68029688eabf473097a2fc38ef61633a3c7a";
export const DAI = "0x8d11ec38a3eb5e956b052f67da8bdc9bef8abf3e";

export const WHITELIST: string[] = "0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83,0xad84341756bf337f5a0164515b1f6f993d194e1f,0x8d11ec38a3eb5e956b052f67da8bdc9bef8abf3e,0x74b23882a30290451a17c44f4f05243b6b58c76d,0x04068da6c83afcfa0e13ba15a6696662335d5b75,0x049d68029688eabf473097a2fc38ef61633a3c7a".split(",");

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CUSTOM_BASES = new Map<string,string>();
