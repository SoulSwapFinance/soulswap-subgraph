import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts'

export const NULL_CALL_RESULT_VALUE = '0x0000000000000000000000000000000000000000000000000000000000000001'

export const ADDRESS_ZERO = Address.fromString('0x0000000000000000000000000000000000000000')

export const BIG_DECIMAL_1E6 = BigDecimal.fromString('1e6')
export const BIG_DECIMAL_1E12 = BigDecimal.fromString('1e12')
export const BIG_DECIMAL_1E18 = BigDecimal.fromString('1e18')
export const BIG_DECIMAL_ZERO = BigDecimal.fromString('0')
export const BIG_DECIMAL_ONE = BigDecimal.fromString('1')

export const BIG_INT_ONE = BigInt.fromI32(1)
export const BIG_INT_TWO = BigInt.fromI32(2)
export const BIG_INT_ONE_HUNDRED = BigInt.fromI32(100)
export const BIG_INT_ONE_DAY_SECONDS = BigInt.fromI32(86400)
export const BIG_INT_ZERO = BigInt.fromI32(0)

export const SUMMONER_START_BLOCK = BigInt.fromI32(17337870); // 23 SEP
export const FACTORY_START_BLOCK = BigInt.fromI32(16108819); // 23 SEP
export const ACC_SOUL_PRECISION = BigInt.fromString('1000000000000')

export const PAIR_ADD_COLLATERAL = 'addCollateral'
export const PAIR_REMOVE_COLLATERAL = 'removeCollateral'
export const PAIR_ADD_ASSET = 'addAsset'
export const PAIR_REMOVE_ASSET = 'removeAsset'
export const PAIR_BORROW = 'borrow'
export const PAIR_REPAY = 'repay'

export const FACTORY_ADDRESS = Address.fromString(
  '{{ factory_address }}{{^factory_address}}0x0000000000000000000000000000000000000000{{/factory_address}}'
)

export const SUMMONER_ADDRESS = Address.fromString(
  '{{ summoner_address }}{{^summoner_address}}0x0000000000000000000000000000000000000000{{/masterchef_address}}'
)

export const SPELL_BOUND_ADDRESS = Address.fromString(
  '{{ spell_bound_address }}{{^spell_bound_address}}0x0000000000000000000000000000000000000000{{/spell_bound_address}}'
)

export const SEANCE_CIRCLE_ADDRESS = Address.fromString(
  '{{ seance_circle_address }}{{^seance_circle_address}}0x0000000000000000000000000000000000000000{{/seance_circle_address}}'
)

export const SOUL_REAPER_ADDRESS = Address.fromString(
  '{{ soul_reaper_address }}{{^soul_reaper_address}}0x0000000000000000000000000000000000000000{{/soul_reaper_address}}'
)

export const SOUL_ADDRESS = Address.fromString(
  '{{ soul_address }}{{^soul_address}}0x0000000000000000000000000000000000000000{{/soul_address}}'
)

export const SOUL_USDT_PAIR_ADDRESS = Address.fromString(
  '{{ soul_usdt_pair_address }}{{^soul_usdt_pair_address}}0x0000000000000000000000000000000000000000{{/soul_usdt_pair_address}}'
)

export const SEANCE_USDC_PAIR_ADDRESS = Address.fromString(
  '{{ seance_usdc_pair_address }}{{^seance_usdc_pair_address}}0x0000000000000000000000000000000000000000{{/seance_usdc_pair_address}}'
)

export const SEANCE_WETH_PAIR_ADDRESS = Address.fromString(
  '{{ seance_weth_pair_address }}{{^seance_weth_pair_address}}0x0000000000000000000000000000000000000000{{/seance_weth_pair_address}}'
)

export const SOUL_DISTRIBUTOR_ADDRESS = Address.fromString(
  '{{ soul_distributor_address }}{{^soul_distributor_address}}0x0000000000000000000000000000000000000000{{/soul_distributor_address}}'
)

export const USDC_WETH_PAIR =
  '{{ usdc_weth_pair }}{{^usdc_weth_pair}}0x0000000000000000000000000000000000000000{{/usdc_weth_pair}}'

export const DAI_WETH_PAIR =
  '{{ dai_weth_pair }}{{^dai_weth_pair}}0x0000000000000000000000000000000000000000{{/dai_weth_pair}}'

export const USDT_WETH_PAIR =
  '{{ usdt_weth_pair }}{{^usdt_weth_pair}}0x0000000000000000000000000000000000000000{{/usdt_weth_pair}}'

export const SOUL_USDT_PAIR =
  '{{ soul_usdt_pair }}{{^soul_usdt_pair}}0x0000000000000000000000000000000000000000{{/soul_usdt_pair}}'

// minimum liquidity required to count towards tracked volume for pairs with small # of Lps
export const MINIMUM_USD_THRESHOLD_NEW_PAIRS = BigDecimal.fromString(
  '{{ minimum_usd_threshold_new_pairs }}{{^minimum_usd_threshold_new_pairs}}3000{{/minimum_usd_threshold_new_pairs}}'
)

// minimum liquidity for price to get tracked
export const MINIMUM_LIQUIDITY_THRESHOLD_ETH = BigDecimal.fromString('{{ minimum_liquidity_threshold_eth }}')

export const WETH_ADDRESS = Address.fromString(
  '{{ weth_address }}{{^weth_address}}0x0000000000000000000000000000000000000000{{/weth_address}}'
)

export const SOULSWAP_WETH_USDT_PAIR_ADDRESS = Address.fromString(
  '{{ soulswap_weth_usdt_pair_address }}{{^soulswap_weth_usdt_pair_address}}0x0000000000000000000000000000000000000000{{/soulswap_weth_usdt_pair_address}}'
)

export const USDT_ADDRESS = Address.fromString(
  '{{ usdt_address }}{{^usdt_address}}0x0000000000000000000000000000000000000000{{/usdt_address}}'
)

export const NATIVE = Address.fromString('{{ native_address }}{{^native_address}}0x0000000000000000000000000000000000000000{{/native_address}}')
export const USDC = '{{ usdc_address }}{{^usdc_address}}0x0000000000000000000000000000000000000000{{/usdc_address}}'
export const USDT = '{{ usdt_address }}{{^usdt_address}}0x0000000000000000000000000000000000000000{{/usdt_address}}'
export const DAI = '{{ dai_address }}{{^dai_address}}0x0000000000000000000000000000000000000000{{/dai_address}}'

export const WHITELIST: string[] = '{{ whitelist }}'.split(',')

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CUSTOM_BASES = new Map<string, string>()
