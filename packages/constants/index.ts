import { Address, BigDecimal, BigInt } from "@graphprotocol/graph-ts"

export const NULL_CALL_RESULT_VALUE = "0x0000000000000000000000000000000000000000000000000000000000000001"

export const ADDRESS_ZERO = Address.fromString("0x0000000000000000000000000000000000000000")

export const BIG_DECIMAL_1E6 = BigDecimal.fromString("1e6")
export const BIG_DECIMAL_1E12 = BigDecimal.fromString("1e12")
export const BIG_DECIMAL_1E18 = BigDecimal.fromString("1e18")
export const BIG_DECIMAL_ZERO = BigDecimal.fromString('0')
export const BIG_DECIMAL_ONE = BigDecimal.fromString('1')

export const BIG_INT_ONE = BigInt.fromI32(1)
export const BIG_INT_TWO = BigInt.fromI32(2)
export const BIG_INT_ONE_HUNDRED = BigInt.fromI32(100)
export const BIG_INT_ONE_DAY_SECONDS = BigInt.fromI32(86400)
export const BIG_INT_ZERO = BigInt.fromI32(0)

export const SUMMONER_START_BLOCK = BigInt.fromI32(17337870); // 23 SEP
export const SUMMONER_START_TIME = BigInt.fromI32(1632170016); // 23 SEP
export const FACTORY_START_BLOCK = BigInt.fromI32(16108819); // 23 SEP
export const ACC_SOUL_PRECISION = BigInt.fromString("1000000000000")

export const PAIR_ADD_COLLATERAL = "addCollateral"
export const PAIR_REMOVE_COLLATERAL = "removeCollateral"
export const PAIR_ADD_ASSET = "addAsset"
export const PAIR_REMOVE_ASSET = "removeAsset"
export const PAIR_BORROW = "borrow"
export const PAIR_REPAY = "repay"

export const FACTORY_ADDRESS = Address.fromString(
  "0x1120e150da9def6fe930f4feded18ef57c0ca7ef"
)

export const SUMMONER_ADDRESS = Address.fromString(
  "0xce6ccbb1edad497b4d53d829df491af70065ab5b"
)

export const ENCHANT_ADDRESS = Address.fromString(
  "0x6a1a8368d607c7a808f7bba4f7aed1d9ebde147a"
)

export const SEANCE_CIRCLE_ADDRESS = Address.fromString(
  "0x124b06c5ce47de7a6e9efda71a946717130079e6"
)

export const SEANCE_TOKEN_ADDRESS = Address.fromString(
  "0x124b06c5ce47de7a6e9efda71a946717130079e6"
)

export const SOUL_REAPER_ADDRESS = Address.fromString(
  "0x0000000000000000000000000000000000000000"
)

export const SOUL_ADDRESS = Address.fromString(
  "0xe2fb177009ff39f52c0134e8007fa0e4baacbd07"
)

export const SOUL_USDT_PAIR_ADDRESS = Address.fromString(
  "0xe27cc06a7f34892bc17a5474303b91b2c9f3f21a"
)

export const SEANCE_USDC_PAIR_ADDRESS = Address.fromString(
  "0x98c678d3c7ebed4a36b84666700d8b5b5ddc1f79"
)

export const SEANCE_WETH_PAIR_ADDRESS = Address.fromString(
  "0x8542beac34282afe5bb6951eb6dce0b3783b7fab"
)

export const SOUL_DISTRIBUTOR_ADDRESS = Address.fromString(
  "0x0000000000000000000000000000000000000000"
)

// MiniChef
export const MINI_CHEF_ADDRESS = Address.fromString(
  '{{ minichef_address }}{{^minichef_address}}0x0000000000000000000000000000000000000000{{/minichef_address}}'
)

export const COMPLEX_REWARDER = Address.fromString(
  '{{ complex_rewarder_address }}{{^complex_rewarder_address}}0x0000000000000000000000000000000000000000{{/complex_rewarder_address}}'
)

export const CONVEX_REWARDERS: Array<Address> = [
  Address.fromString('0x9e01aac4b3e8781a85b21d9d9f848e72af77b362'),
  Address.fromString('0x1fd97b5e5a257b0b9b9a42a96bb8870cbdd1eb79'),
]

export const ALCX_REWARDER = Address.fromString('0x7519c93fc5073e15d89131fd38118d73a72370f8')

export const LIDO_REWARDER = Address.fromString('0x75ff3dd673ef9fc459a52e1054db5df2a1101212')


export const USDC_WETH_PAIR =
  "0x160653f02b6597e7db00ba8ca826cf43d2f39556"

export const DAI_WETH_PAIR =
  "0xf3d6e8ecece8647b456d57375ce0b51b8f0cd40b"

export const USDT_WETH_PAIR =
  "0xdc24814ad654986928f8e4aec48d37fa30bbc5bb"

export const SOUL_USDT_PAIR =
  "0xe27cc06a7f34892bc17a5474303b91b2c9f3f21a"

// minimum liquidity required to count towards tracked volume for pairs with small # of Lps
export const MINIMUM_USD_THRESHOLD_NEW_PAIRS = BigDecimal.fromString(
  '100'
)

// minimum liquidity for price to get tracked
export const MINIMUM_LIQUIDITY_THRESHOLD_ETH = BigDecimal.fromString('100')

export const WETH_ADDRESS = Address.fromString(
  "0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83"
)

export const SOULSWAP_WETH_USDT_PAIR_ADDRESS = Address.fromString(
  "0xdc24814ad654986928f8e4aec48d37fa30bbc5bb"
)

export const USDT_ADDRESS = Address.fromString(
  "0x049d68029688eabf473097a2fc38ef61633a3c7a"
)

export const NATIVE = Address.fromString("0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83")
export const USDC = "0x04068da6c83afcfa0e13ba15a6696662335d5b75"
export const USDT = "0x049d68029688eabf473097a2fc38ef61633a3c7a"
export const DAI = "0x8d11ec38a3eb5e956b052f67da8bdc9bef8abf3e"

export const WHITELIST: string[] = "0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83,0xad84341756bf337f5a0164515b1f6f993d194e1f,0x8d11ec38a3eb5e956b052f67da8bdc9bef8abf3e,0x74b23882a30290451a17c44f4f05243b6b58c76d,0x04068da6c83afcfa0e13ba15a6696662335d5b75,0x049d68029688eabf473097a2fc38ef61633a3c7a".split(",")

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CUSTOM_BASES = new Map<string, string>()
