[coinbase-cloud-sdk](../README.md) / [Exports](../modules.md) / TokenEventData

# Interface: TokenEventData

[https://docs.cloud.coinbase.com/node/reference/advanced-api-reference#tokeneventdata](https://docs.cloud.coinbase.com/node/reference/advanced-api-reference#tokeneventdata)

## Table of contents

### Properties

- [approved](TokenEventData.md#approved)
- [data](TokenEventData.md#data)
- [from](TokenEventData.md#from)
- [name](TokenEventData.md#name)
- [operator](TokenEventData.md#operator)
- [owner](TokenEventData.md#owner)
- [spender](TokenEventData.md#spender)
- [to](TokenEventData.md#to)
- [topics](TokenEventData.md#topics)

## Properties

### approved

• `Optional` `Readonly` **approved**: `boolean`

true when operator receives approval, false when approval is revoked.

#### Defined in

src/api/advanced/contracts.ts:76

___

### data

• `Optional` `Readonly` **data**: `string`

For ERC-20 this represents the value. For ERC-721 this represents the token id.

#### Defined in

src/api/advanced/contracts.ts:55

___

### from

• `Optional` `Readonly` **from**: `string`

The origin address.

#### Defined in

src/api/advanced/contracts.ts:58

___

### name

• `Readonly` **name**: `string`

For ERC-20 this represents the value. For ERC-721 this represents the token id.

#### Defined in

src/api/advanced/contracts.ts:61

___

### operator

• `Optional` `Readonly` **operator**: `string`

Token operator address.

#### Defined in

src/api/advanced/contracts.ts:73

___

### owner

• `Optional` `Readonly` **owner**: `string`

Token owner address.

#### Defined in

src/api/advanced/contracts.ts:67

___

### spender

• `Optional` `Readonly` **spender**: `string`

Token spender address.

#### Defined in

src/api/advanced/contracts.ts:70

___

### to

• `Optional` `Readonly` **to**: `string`

The destination address.

#### Defined in

src/api/advanced/contracts.ts:64

___

### topics

• `Optional` `Readonly` **topics**: `string`

Stringified array. topics[0] is the hashed event signature.
Other entries in the array may include to and from addresses.

#### Defined in

src/api/advanced/contracts.ts:82
