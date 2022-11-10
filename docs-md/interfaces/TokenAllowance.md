[coinbase-cloud-sdk](../README.md) / [Exports](../modules.md) / TokenAllowance

# Interface: TokenAllowance

[https://docs.cloud.coinbase.com/node/reference/advanced-api-reference#tokenallowance](https://docs.cloud.coinbase.com/node/reference/advanced-api-reference#tokenallowance)

## Table of contents

### Properties

- [blockHeight](TokenAllowance.md#blockheight)
- [owner](TokenAllowance.md#owner)
- [spender](TokenAllowance.md#spender)
- [tokenAllowances](TokenAllowance.md#tokenallowances)

## Properties

### blockHeight

• `Readonly` **blockHeight**: `string`

REQUIRED. The end block in which the balances were computed. The start block is genesis.

#### Defined in

src/api/advanced/allowances.ts:18

___

### owner

• `Readonly` **owner**: `string`

REQUIRED. The owner address.

#### Defined in

src/api/advanced/allowances.ts:21

___

### spender

• `Readonly` **spender**: `string`

REQUIRED. The spender address.

#### Defined in

src/api/advanced/allowances.ts:24

___

### tokenAllowances

• `Readonly` **tokenAllowances**: [`TokenBalance`](TokenBalance.md)[]

REQUIRED. List of token balances

#### Defined in

src/api/advanced/allowances.ts:27
