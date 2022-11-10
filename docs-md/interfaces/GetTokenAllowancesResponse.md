[coinbase-cloud-sdk](../README.md) / [Exports](../modules.md) / GetTokenAllowancesResponse

# Interface: GetTokenAllowancesResponse

GetTokenAllowancesResponse represents data returned from the GetTokenAllowances Advanced API.
[https://docs.cloud.coinbase.com/node/reference/advanced-api-reference#coinbasecloud_gettokenallowances](https://docs.cloud.coinbase.com/node/reference/advanced-api-reference#coinbasecloud_gettokenallowances)

## Table of contents

### Properties

- [allowances](GetTokenAllowancesResponse.md#allowances)

## Properties

### allowances

• `Readonly` **allowances**: [`TokenAllowance`](TokenAllowance.md)[]

List of allowances, including owner address, spender address, the block range in which the balances were
computed (start block is genesis), and a list of allowance information.

#### Defined in

src/api/advanced/allowances.ts:41
