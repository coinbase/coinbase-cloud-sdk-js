[coinbase-cloud-sdk](../README.md) / [Exports](../modules.md) / GetSingleBalanceResponse

# Interface: GetSingleBalanceResponse

GetBalancesResponse represents data returned from the GetSingleBalance Advanced API.
[https://docs.cloud.coinbase.com/node/reference/advanced-api-reference#singlebalance](https://docs.cloud.coinbase.com/node/reference/advanced-api-reference#singlebalance)

## Table of contents

### Properties

- [address](GetSingleBalanceResponse.md#address)
- [blockHeight](GetSingleBalanceResponse.md#blockheight)
- [nativeAmount](GetSingleBalanceResponse.md#nativeamount)
- [nativeUnit](GetSingleBalanceResponse.md#nativeunit)
- [tokenBalance](GetSingleBalanceResponse.md#tokenbalance)

## Properties

### address

• `Readonly` **address**: `string`

REQUIRED. Account address.

#### Defined in

src/api/advanced/balances.ts:38

___

### blockHeight

• `Readonly` **blockHeight**: `string`

REQUIRED. The end block in which the balances were computed. The start block is genesis

#### Defined in

src/api/advanced/balances.ts:35

___

### nativeAmount

• `Readonly` **nativeAmount**: `string`

REQUIRED. Balance of the native cryptocurrency (ETH, BTC, etc) for the blockchain and network.
Balance is returned in the smallest possible unit. 1 ETH = 10^18 Wei.

#### Defined in

src/api/advanced/balances.ts:44

___

### nativeUnit

• `Readonly` **nativeUnit**: `string`

REQUIRED. Unit the balance is returned in. Currently Wei-only.

#### Defined in

src/api/advanced/balances.ts:47

___

### tokenBalance

• `Optional` `Readonly` **tokenBalance**: [`TokenBalance`](TokenBalance.md)

The token balance.

#### Defined in

src/api/advanced/balances.ts:50
