[coinbase-cloud-sdk](../README.md) / [Exports](../modules.md) / GetBalancesResponse

# Interface: GetBalancesResponse

GetBalancesResponse represents data returned from the GetBalances Advanced API.

## Table of contents

### Properties

- [balances](GetBalancesResponse.md#balances)

## Properties

### balances

• `Readonly` **balances**: [`MultiTokenBalance`](MultiTokenBalance.md)[]

A list of balance amounts for the given token identifiers and block range in which
the balances were computed. Note that the start block is always genesis for this method.

#### Defined in

src/api/advanced/balances.ts:24
