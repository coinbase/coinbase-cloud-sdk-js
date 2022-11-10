[coinbase-cloud-sdk](../README.md) / [Exports](../modules.md) / TokenTransfer

# Interface: TokenTransfer

[https://docs.cloud.coinbase.com/node/reference/advanced-api-reference#tokentransfer](https://docs.cloud.coinbase.com/node/reference/advanced-api-reference#tokentransfer)

## Table of contents

### Properties

- [blockHash](TokenTransfer.md#blockhash)
- [blockNumber](TokenTransfer.md#blocknumber)
- [blockTimestamp](TokenTransfer.md#blocktimestamp)
- [from](TokenTransfer.md#from)
- [to](TokenTransfer.md#to)
- [tokenAddress](TokenTransfer.md#tokenaddress)
- [tokenType](TokenTransfer.md#tokentype)
- [transactionHash](TokenTransfer.md#transactionhash)
- [transactionIndex](TokenTransfer.md#transactionindex)
- [value](TokenTransfer.md#value)

## Properties

### blockHash

• `Readonly` **blockHash**: `string`

REQUIRED. The block hash.

#### Defined in

src/api/advanced/transfers.ts:79

___

### blockNumber

• `Readonly` **blockNumber**: `string`

REQUIRED. the block number.

#### Defined in

src/api/advanced/transfers.ts:82

___

### blockTimestamp

• `Readonly` **blockTimestamp**: `string`

REQUIRED. Timestamp of when block was mined.

#### Defined in

src/api/advanced/transfers.ts:85

___

### from

• `Readonly` **from**: `string`

REQUIRED. The origin address.

#### Defined in

src/api/advanced/transfers.ts:61

___

### to

• `Readonly` **to**: `string`

REQUIRED. The destination address.

#### Defined in

src/api/advanced/transfers.ts:64

___

### tokenAddress

• `Readonly` **tokenAddress**: `string`

REQUIRED. Address location for the token contract

#### Defined in

src/api/advanced/transfers.ts:55

___

### tokenType

• `Readonly` **tokenType**: `string`

REQUIRED. "erc20" or "erc721"

#### Defined in

src/api/advanced/transfers.ts:58

___

### transactionHash

• `Readonly` **transactionHash**: `string`

REQUIRED. The transaction's identifying hash

#### Defined in

src/api/advanced/transfers.ts:73

___

### transactionIndex

• `Readonly` **transactionIndex**: `string`

REQUIRED. The transaction's index position

#### Defined in

src/api/advanced/transfers.ts:76

___

### value

• `Readonly` **value**: `string`

REQUIRED. For ERC-20, gives quantity of tokens transferred.
For ERC-721, gives list of token IDs of the token transferred

#### Defined in

src/api/advanced/transfers.ts:70
