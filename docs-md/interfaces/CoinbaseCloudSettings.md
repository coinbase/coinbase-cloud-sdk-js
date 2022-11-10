[coinbase-cloud-sdk](../README.md) / [Exports](../modules.md) / CoinbaseCloudSettings

# Interface: CoinbaseCloudSettings

Options object used to configure the CoinbaseCloud SDK.

## Table of contents

### Properties

- [apiPassword](CoinbaseCloudSettings.md#apipassword)
- [apiUsername](CoinbaseCloudSettings.md#apiusername)
- [network](CoinbaseCloudSettings.md#network)

## Properties

### apiPassword

• `Readonly` **apiPassword**: `string`

The CoinbaseCloud API password associated with the username.

#### Defined in

src/types/types.ts:11

___

### apiUsername

• `Readonly` **apiUsername**: `string`

The CoinbaseCloud API username. This can be found in your Node project's settings.

#### Defined in

src/types/types.ts:8

___

### network

• `Optional` `Readonly` **network**: [`Network`](../enums/Network.md)

The name of the network for the SDK to interact with.

#### Defined in

src/types/types.ts:14
