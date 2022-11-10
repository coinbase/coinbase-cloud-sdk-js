[coinbase-cloud-sdk](../README.md) / [Exports](../modules.md) / CoinbaseCloud

# Class: CoinbaseCloud

The CoinbaseCloud ethers.js SDK client.

Each SDK instance is associated with a network, an API username and the corresponding API password.

## Table of contents

### Constructors

- [constructor](CoinbaseCloud.md#constructor)

### Properties

- [advanced](CoinbaseCloud.md#advanced)
- [config](CoinbaseCloud.md#config)
- [provider](CoinbaseCloud.md#provider)

## Constructors

### constructor

• **new CoinbaseCloud**(`settings?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `settings?` | [`CoinbaseCloudSettings`](../interfaces/CoinbaseCloudSettings.md) | The CoinbaseCloud configuration |

#### Defined in

src/api/coinbase-cloud.ts:31

## Properties

### advanced

• `Readonly` **advanced**: [`AdvancedApis`](AdvancedApis.md)

Advanced can be used to query Coinbase Cloud's Advanced Data APIs

#### Defined in

src/api/coinbase-cloud.ts:25

___

### config

• `Readonly` **config**: [`CoinbaseCloudConfig`](CoinbaseCloudConfig.md)

The configuration settings used by this SDK instance.

#### Defined in

src/api/coinbase-cloud.ts:22

___

### provider

• `Readonly` **provider**: `JsonRpcProvider`

The JsonRpcProvider used to interact with the network.
This can be extracted and used as any other ethers.js JsonRpcProvider.

#### Defined in

src/api/coinbase-cloud.ts:19
