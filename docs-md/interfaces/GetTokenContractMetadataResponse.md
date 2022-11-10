[coinbase-cloud-sdk](../README.md) / [Exports](../modules.md) / GetTokenContractMetadataResponse

# Interface: GetTokenContractMetadataResponse

GetTokenContractMetadataResponse represents data returned from the GetTokenContractMetadata Advanced API.

Token metadata (ERC-20 or ERC-721) based on the input.

[https://docs.cloud.coinbase.com/node/reference/advanced-api-reference#tokencontractmetadata](https://docs.cloud.coinbase.com/node/reference/advanced-api-reference#tokencontractmetadata)

## Table of contents

### Properties

- [blockHeight](GetTokenContractMetadataResponse.md#blockheight)
- [tokenMetadata](GetTokenContractMetadataResponse.md#tokenmetadata)

## Properties

### blockHeight

• `Readonly` **blockHeight**: `string`

REQUIRED. The end block in which the balances were computed. The start block is genesis.

#### Defined in

src/api/advanced/contracts.ts:96

___

### tokenMetadata

• `Readonly` **tokenMetadata**: [`TokenMetadata`](TokenMetadata.md)

REQUIRED. Metadata for a token.

#### Defined in

src/api/advanced/contracts.ts:99
