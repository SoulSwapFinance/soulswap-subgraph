/* eslint-disable prefer-const */
import { dataSource, log } from '@graphprotocol/graph-ts'

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'

export function getFactoryAddress(): string {
  let network = dataSource.network() as string
  // not using a switch-case because using strings is not yet supported (only u32)
  // if (network == 'mainnet') return '0xd34971BaB6E5E356fd250715F5dE0492BB070452'
  if (network == 'fantom') return '0x1120e150dA9def6Fe930f4fEDeD18ef57c0CA7eF'
  log.warning('no factory address for unsupported network {}', [network])
  return ADDRESS_ZERO
}

export function getStakingRewardsFactoryAddress(): string {
  let network = dataSource.network() as string
  // not using a switch-case because using strings is not yet supported (only u32)
  // if (network == 'mainnet') return '0x156f0568a6ce827e5d39f6768a5d24b694e1ea7b'
  if (network == 'fantom') return ''
  log.warning('no staking rewards factory address for unsupported network {}', [network])
  return ADDRESS_ZERO
}

export function getNativeCurrencyWrapperAddress(): string {
  let network = dataSource.network() as string
  // not using a switch-case because using strings is not yet supported (only u32)
  // if (network == 'mainnet') return '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
    if (network == 'fantom') return '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83'
  log.warning('no native currency wrapper address for unsupported network {}', [network])
  return ADDRESS_ZERO
}

export function getLiquidityTrackingTokenAddresses(): string[] {
  let network = dataSource.network() as string
  // not using a switch-case because using strings is not yet supported (only u32)
  // if (network == 'mainnet') {
  //   return [
  //     '0xa1d65e8fb6e87b60feccbc582f7f97804b725521', // DXD
  //     '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2', // WETH
  //     '0x6b175474e89094c44da98b954eedeac495271d0f', // DAI
  //     '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', // USDC
  //     '0xdac17f958d2ee523a2206206994597c13d831ec7', // FUSD
  //     '0x0000000000085d4780b73119b644ae5ecd22b376', // TUSD
  //     '0x5d3a536e4d6dbd6114cc1ead35777bab948e3643', // cDAI
  //     '0x39aa39c021dfbae8fac545936693ac917d5e7563', // cUSDC
  //     '0x0ae055097c6d159879521c384f1d2123d1f195e6', // STAKE
  //     '0xa117000000f279d81a1d3cc75430faa017fa5a2e', // ANT
  //     '0xd56dac73a4d6766464b38ec6d91eb45ce7457c44', // PAN
  //     '0x86fadb80d8d2cff3c3680819e4da99c10232ba0f', // EBASE
  //     '0x57ab1ec28d129707052df4df418d58a2d46d5f51', // sUSD
  //     '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2', // MKR
  //     '0xc00e94cb662c3520282e6f5717214004a7f26888', // COMP
  //     '0x514910771af9ca656af840dff83e8264ecf986ca', // LINK
  //     '0x960b236a07cf122663c4303350609a66a7b288c0', // ANTyar
  //     '0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f', // SNX
  //     '0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e', // YFI
  //     '0xdf5e0e81dff6faf3a7e52ba697820c5e32d806a8', // yCurv
  //     '0xd533a949740bb3306d119cc777fa900ba034cd52' // CRV
  //   ]
  // }
  // 
  if (network == 'fantom') {
    return [
      '0xe2fb177009FF39F52C0134E8007FA0e4BaAcBd07', // SOUL
      '0x74b23882a30290451a17c44f4f05243b6b58c76d', // WETH
      '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83', // WFTM
      '0x8d11ec38a3eb5e956b052f67da8bdc9bef8abf3e', // DAI
      '0xad84341756bf337f5a0164515b1f6f993d194e1f', // FUSD
      '0x04068da6c83afcfa0e13ba15a6696662335d5b75', // USDC
    ]
  }
  log.warning('no liquidity tracking token address for unsupported network {}', [network])
  return []
}

export function getUsdcNativeCurrencyWrapperPairAddress(): string {
  let network = dataSource.network() as string
  // not using a switch-case because using strings is not yet supported (only u32)
  // if (network == 'mainnet') return '0x98f29f527c8e0ecc67a3c2d5567833bee01f2a12'
  if (network == 'fantom') return '0x160653F02b6597E7Db00BA8cA826cf43D2f39556'
  log.warning('no usdc native currency wrapper pair address for unsupported network {}', [network])
  return ADDRESS_ZERO
}

export function getDaiNativeCurrencyWrapperPairAddress(): string {
  let network = dataSource.network() as string
  // not using a switch-case because using strings is not yet supported (only u32)
  // if (network == 'mainnet') return '0x7515be43d16f871588adc135d58a9c30a71eb34f'
  if (network == 'fantom') return '0xF3d6E8Ecece8647B456d57375Ce0B51B8F0cD40b'
  log.warning('no dai native currency wrapper pair address for unsupported network {}', [network])
  return ADDRESS_ZERO
}

export function getFusdNativeCurrencyWrapperPair(): string {
  let network = dataSource.network() as string
  // not using a switch-case because using strings is not yet supported (only u32)
  // if (network == 'mainnet') return '0x83dd8227c5ef121f2ae99c6f1df0aa9e914448ce'
  if (network == 'fantom') return '0x1AE16105a7d4bE7DFD9737FD13D9A50AEFed1437'
  log.warning('no fusd native currency wrapper pair address for unsupported network {}', [network])
  return ADDRESS_ZERO
}
