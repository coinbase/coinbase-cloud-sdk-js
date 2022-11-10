[coinbase-cloud-sdk](../README.md) / [Exports](../modules.md) / CoinbaseCloudConfig

# Class: CoinbaseCloudConfig

CoinbaseCloudConfig defines the configuration needed to create an instance of
the CoinbaseCloud SDK.

## Table of contents

### Constructors

- [constructor](CoinbaseCloudConfig.md#constructor)

### Properties

- [apiPassword](CoinbaseCloudConfig.md#apipassword)
- [apiUsername](CoinbaseCloudConfig.md#apiusername)
- [network](CoinbaseCloudConfig.md#network)

## Constructors

### constructor

• **new CoinbaseCloudConfig**(`config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`CoinbaseCloudSettings`](../interfaces/CoinbaseCloudSettings.md) |

#### Defined in

src/api/coinbase-cloud-config.ts:20

## Properties

### apiPassword

• `Readonly` **apiPassword**: `string`

The CoinbaseCloud API password associated with the username.

#### Defined in

src/api/coinbase-cloud-config.ts:15

___

### apiUsername

• `Readonly` **apiUsername**: `string`

The CoinbaseCloud API username. This can be found in your Node project's settings.

#### Defined in

src/api/coinbase-cloud-config.ts:12

___

### network

• `Readonly` **network**: [`Network`](../enums/Network.md)

The Network that you want the SDK to interact with.

#### Defined in

src/api/coinbase-cloud-config.ts:18
