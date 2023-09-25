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
export const FACTORY_START_BLOCK = BigInt.fromI32(17149268); // √
export const ACC_SOUL_PRECISION = BigInt.fromString("1000000000000")

export const FACTORY_ADDRESS = Address.fromString(
  "0x5bb2a9984de4a69c05c996f7ef09597ac8c9d63a" // √
)

export const SUMMONER_ADDRESS = Address.fromString(
  "0xb1e330401c920077ddf157aba5594238d36b54b1"  // √
)

export const SOUL_ADDRESS = Address.fromString(
  "0x11d6dd25c1695764e64f439e32cc7746f3945543"   // √
)

export const USDC_ADDRESS = Address.fromString(
  "0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e"  // √
)

export const SOUL_USDC_PAIR_ADDRESS = Address.fromString(
  "0x922fcada825dc669798206a35d2d2b455f9a64e7"  // √
)

export const CONVEX_REWARDERS: Array<Address> = [
  Address.fromString('0x9e01aac4b3e8781a85b21d9d9f848e72af77b362'),
  Address.fromString('0x1fd97b5e5a257b0b9b9a42a96bb8870cbdd1eb79'),
]

export const USDC_WETH_PAIR = "0x864384a54ea644852603778c0c200ef2d6f2ac2f"  // √
export const SOUL_USDC_PAIR = "0x922fcada825dc669798206a35d2d2b455f9a64e7"  // √

// minimum liquidity required to count towards tracked volume for pairs with small # of Lps
export const MINIMUM_USD_THRESHOLD_NEW_PAIRS = BigDecimal.fromString(
  '10'  // √
)

// minimum liquidity for price to get tracked
export const MINIMUM_LIQUIDITY_THRESHOLD_ETH = BigDecimal.fromString('1') // √

export const WETH_ADDRESS = Address.fromString(
  "0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7"  // √
)

export const SOULSWAP_WETH_USDC_PAIR_ADDRESS = Address.fromString(
  "0x922fcada825dc669798206a35d2d2b455f9a64e7"  // √
)

export const NATIVE = Address.fromString("0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7")  // √
export const USDC = "0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e"  // √

export const WHITELIST: string[] 
// wavax, soul, usdc
= "0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7,0x11d6dd25c1695764e64f439e32cc7746f3945543,0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e".split(",")

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CUSTOM_BASES = new Map<string, string>()
