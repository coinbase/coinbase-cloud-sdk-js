[coinbase-cloud-sdk](../README.md) / [Exports](../modules.md) / Transaction

# Interface: Transaction

[https://docs.cloud.coinbase.com/node/reference/advanced-api-reference#transaction](https://docs.cloud.coinbase.com/node/reference/advanced-api-reference#transaction)

## Table of contents

### Properties

- [blockHash](Transaction.md#blockhash)
- [blockNumber](Transaction.md#blocknumber)
- [blockTimestamp](Transaction.md#blocktimestamp)
- [cumulativeGasUsed](Transaction.md#cumulativegasused)
- [from](Transaction.md#from)
- [gasLimit](Transaction.md#gaslimit)
- [gasPrice](Transaction.md#gasprice)
- [gasUsed](Transaction.md#gasused)
- [input](Transaction.md#input)
- [internalTransactions](Transaction.md#internaltransactions)
- [nonce](Transaction.md#nonce)
- [status](Transaction.md#status)
- [to](Transaction.md#to)
- [tokenTransfers](Transaction.md#tokentransfers)
- [transactionHash](Transaction.md#transactionhash)
- [transactionIndex](Transaction.md#transactionindex)
- [value](Transaction.md#value)

## Properties

### blockHash

• `Readonly` **blockHash**: `string`

REQUIRED. The block hash.

#### Defined in

src/api/advanced/transfers.ts:127

___

### blockNumber

• `Readonly` **blockNumber**: `string`

REQUIRED. the block number.

#### Defined in

src/api/advanced/transfers.ts:130

___

### blockTimestamp

• `Readonly` **blockTimestamp**: `string`

REQUIRED. Timestamp of when block was mined.

#### Defined in

src/api/advanced/transfers.ts:133

___

### cumulativeGasUsed

• `Readonly` **cumulativeGasUsed**: `string`

REQUIRED. Total amount of gas used in the block of the transaction.

#### Defined in

src/api/advanced/transfers.ts:115

___

### from

• `Readonly` **from**: `string`

REQUIRED. The origin address.

#### Defined in

src/api/advanced/transfers.ts:97

___

### gasLimit

• `Readonly` **gasLimit**: `string`

REQUIRED. The maximum gas limit of a transaction.

#### Defined in

src/api/advanced/transfers.ts:106

___

### gasPrice

• `Readonly` **gasPrice**: `string`

REQUIRED. Transaction's cost per unit of gas in native blockchain currency.

#### Defined in

src/api/advanced/transfers.ts:109

___

### gasUsed

• `Readonly` **gasUsed**: `string`

REQUIRED. Amount of gas actually used in transaction.

#### Defined in

src/api/advanced/transfers.ts:112

___

### input

• `Readonly` **input**: `string`

REQUIRED. Transaction's input data.

#### Defined in

src/api/advanced/transfers.ts:121

___

### internalTransactions

• `Optional` `Readonly` **internalTransactions**: [`InternalTransaction`](InternalTransaction.md)[]

List of internal transactions.

#### Defined in

src/api/advanced/transfers.ts:136

___

### nonce

• `Readonly` **nonce**: `string`

REQUIRED. Transaction's nonce.

#### Defined in

src/api/advanced/transfers.ts:124

___

### status

• `Readonly` **status**: `string`

REQUIRED. "1": Success, "0": Fail, Other return codes: Unknown.

#### Defined in

src/api/advanced/transfers.ts:118

___

### to

• `Readonly` **to**: `string`

REQUIRED. The destination address.

#### Defined in

src/api/advanced/transfers.ts:100

___

### tokenTransfers

• `Optional` `Readonly` **tokenTransfers**: [`TokenTransfer`](TokenTransfer.md)[]

List of token transfers.

#### Defined in

src/api/advanced/transfers.ts:139

___

### transactionHash

• `Readonly` **transactionHash**: `string`

REQUIRED. The transaction's identifying hash

#### Defined in

src/api/advanced/transfers.ts:91

___

### transactionIndex

• `Readonly` **transactionIndex**: `string`

REQUIRED. The transaction's index position

#### Defined in

src/api/advanced/transfers.ts:94

___

### value

• `Readonly` **value**: `string`

REQUIRED. The value in native blockchain currency.

#### Defined in

src/api/advanced/transfers.ts:103
