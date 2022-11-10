[coinbase-cloud-sdk](../README.md) / [Exports](../modules.md) / TokenBalance

# Interface: TokenBalance

[https://docs.cloud.coinbase.com/node/reference/advanced-api-reference#tokenbalance](https://docs.cloud.coinbase.com/node/reference/advanced-api-reference#tokenbalance)

## Table of contents

### Properties

- [amount](TokenBalance.md#amount)
- [contract](TokenBalance.md#contract)
- [decimals](TokenBalance.md#decimals)

## Properties

### amount

• `Readonly` **amount**: `string`

REQUIRED. Balance Amount (For ERC-721 it is the number of tokens).

#### Defined in

src/api/advanced/balances.ts:59

___

### contract

• `Readonly` **contract**: `string`

REQUIRED. Token identifier.

#### Defined in

src/api/advanced/balances.ts:56

___

### decimals

• `Readonly` **decimals**: `number`

REQUIRED. Unit (decimals for ERC-20).

#### Defined in

src/api/advanced/balances.ts:62
