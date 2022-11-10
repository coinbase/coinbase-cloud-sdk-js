[coinbase-cloud-sdk](../README.md) / [Exports](../modules.md) / TokenEvent

# Interface: TokenEvent

[https://docs.cloud.coinbase.com/node/reference/advanced-api-reference#tokenevent](https://docs.cloud.coinbase.com/node/reference/advanced-api-reference#tokenevent)

## Table of contents

### Properties

- [blockHash](TokenEvent.md#blockhash)
- [blockNumber](TokenEvent.md#blocknumber)
- [blockTimestamp](TokenEvent.md#blocktimestamp)
- [data](TokenEvent.md#data)
- [eventType](TokenEvent.md#eventtype)
- [signature](TokenEvent.md#signature)
- [signatureHash](TokenEvent.md#signaturehash)
- [transactionHash](TokenEvent.md#transactionhash)
- [transactionIndex](TokenEvent.md#transactionindex)

## Properties

### blockHash

• `Readonly` **blockHash**: `string`

REQUIRED. The block hash.

#### Defined in

src/api/advanced/contracts.ts:43

___

### blockNumber

• `Readonly` **blockNumber**: `string`

REQUIRED. the block number.

#### Defined in

src/api/advanced/contracts.ts:46

___

### blockTimestamp

• `Readonly` **blockTimestamp**: `string`

REQUIRED. Timestamp of when block was mined.

#### Defined in

src/api/advanced/contracts.ts:49

___

### data

• `Readonly` **data**: [`TokenEventData`](TokenEventData.md)

REQUIRED. Data returned for specific transaction.
Returns different properties based on event type, see examples.

#### Defined in

src/api/advanced/contracts.ts:28

___

### eventType

• `Readonly` **eventType**: `string`

REQUIRED. Transfer (ERC-20 and ERC-721), Approval (ERC-20 and ERC-721), or ApprovalForAll (ERC-721 only).
Defaults to hashed signature if not one of the previous.

#### Defined in

src/api/advanced/contracts.ts:34

___

### signature

• `Readonly` **signature**: `string`

REQUIRED. Method signature for the event type

#### Defined in

src/api/advanced/contracts.ts:37

___

### signatureHash

• `Readonly` **signatureHash**: `string`

REQUIRED. Hash of the event signature

#### Defined in

src/api/advanced/contracts.ts:40

___

### transactionHash

• `Readonly` **transactionHash**: `string`

REQUIRED. The transaction hash.

#### Defined in

src/api/advanced/contracts.ts:19

___

### transactionIndex

• `Optional` `Readonly` **transactionIndex**: `string`

The transaction index.

#### Defined in

src/api/advanced/contracts.ts:22
