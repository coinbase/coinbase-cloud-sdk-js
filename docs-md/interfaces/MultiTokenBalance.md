[coinbase-cloud-sdk](../README.md) / [Exports](../modules.md) / MultiTokenBalance

# Interface: MultiTokenBalance

[https://docs.cloud.coinbase.com/node/reference/advanced-api-reference#multitokenbalance](https://docs.cloud.coinbase.com/node/reference/advanced-api-reference#multitokenbalance)

## Table of contents

### Properties

- [address](MultiTokenBalance.md#address)
- [blockHeight](MultiTokenBalance.md#blockheight)
- [nativeAmount](MultiTokenBalance.md#nativeamount)
- [nativeUnit](MultiTokenBalance.md#nativeunit)
- [tokenBalances](MultiTokenBalance.md#tokenbalances)

## Properties

### address

• `Readonly` **address**: `string`

REQUIRED. Account address.

#### Defined in

src/api/advanced/balances.ts:71

___

### blockHeight

• `Readonly` **blockHeight**: `string`

REQUIRED. The end block in which the balances were computed. The start block is genesis.

#### Defined in

src/api/advanced/balances.ts:68

___

### nativeAmount

• `Readonly` **nativeAmount**: `string`

REQUIRED. Balance of the native cryptocurrency (ETH, BTC, etc) for the blockchain and network.
Balance is returned in the smallest possible unit. 1 ETH = 10^18 Wei.

#### Defined in

src/api/advanced/balances.ts:77

___

### nativeUnit

• `Readonly` **nativeUnit**: `string`

REQUIRED. Unit the balance is returned in. Currently Wei-only.

#### Defined in

src/api/advanced/balances.ts:80

___

### tokenBalances

• `Readonly` **tokenBalances**: [`TokenBalance`](TokenBalance.md)[]

REQUIRED. The token balances.

#### Defined in

src/api/advanced/balances.ts:83
