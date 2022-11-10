[coinbase-cloud-sdk](../README.md) / [Exports](../modules.md) / InternalTransaction

# Interface: InternalTransaction

[https://docs.cloud.coinbase.com/node/reference/advanced-api-reference#internaltransaction](https://docs.cloud.coinbase.com/node/reference/advanced-api-reference#internaltransaction)

## Table of contents

### Properties

- [from](InternalTransaction.md#from)
- [gasLimit](InternalTransaction.md#gaslimit)
- [to](InternalTransaction.md#to)
- [traceType](InternalTransaction.md#tracetype)
- [value](InternalTransaction.md#value)

## Properties

### from

• `Readonly` **from**: `string`

REQUIRED. The origin address.

#### Defined in

src/api/advanced/transfers.ts:40

___

### gasLimit

• `Optional` `Readonly` **gasLimit**: `string`

The maximum gas limit of a transaction.

#### Defined in

src/api/advanced/transfers.ts:49

___

### to

• `Readonly` **to**: `string`

REQUIRED. The destination address.

#### Defined in

src/api/advanced/transfers.ts:43

___

### traceType

• `Readonly` **traceType**: `string`

REQUIRED. Type of internal transaction, e.g. CREATE, CALL, CALLCODE, DELEGATECALL, SUICIDE

#### Defined in

src/api/advanced/transfers.ts:37

___

### value

• `Readonly` **value**: `string`

REQUIRED. The value in native blockchain currency.

#### Defined in

src/api/advanced/transfers.ts:46
