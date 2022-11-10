[coinbase-cloud-sdk](../README.md) / [Exports](../modules.md) / AdvancedApis

# Class: AdvancedApis

The Advanced API simplifies access to blockchain data by offering data cuts which
are hard to get via the native Ethereum API, and offers aggregated and filtered
data in a single API call. The Advanced API provides access to token balances for
accounts, transactions and transfers for accounts, smart contract event logs, and more.

[https://docs.cloud.coinbase.com/node/reference/advanced-api-overview](https://docs.cloud.coinbase.com/node/reference/advanced-api-overview)

## Table of contents

### Methods

- [getBalances](AdvancedApis.md#getbalances)
- [getSingleBalance](AdvancedApis.md#getsinglebalance)
- [getTokenAllowances](AdvancedApis.md#gettokenallowances)
- [getTokenMetadata](AdvancedApis.md#gettokenmetadata)
- [getTokenStandardEvents](AdvancedApis.md#gettokenstandardevents)
- [getTokenTransfersByAddress](AdvancedApis.md#gettokentransfersbyaddress)
- [getTransactionByHash](AdvancedApis.md#gettransactionbyhash)
- [getTransactionsByAddress](AdvancedApis.md#gettransactionsbyaddress)

## Methods

### getBalances

▸ **getBalances**(`addressesAndContracts`): `Promise`<[`GetBalancesResponse`](../interfaces/GetBalancesResponse.md)\>

Get balance for multiple account addresses across one or more tokens within a single blockchain and network.

The balance incorporates transactions, internal transfers and all supported token transfers.
Supports ERC-20 and ERC-721. This API is meant to be our primary API to get balances.
A more simple and lower latency API that just fetches balance for a single address and token is getSingleBalance.

[https://docs.cloud.coinbase.com/node/reference/advanced-api-reference#coinbasecloud_getbalances](https://docs.cloud.coinbase.com/node/reference/advanced-api-reference#coinbasecloud_getbalances)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `addressesAndContracts` | [`AddressAndContract`](../interfaces/AddressAndContract.md)[] | List of account or contract addresses and token identifiers.  For Ethereum the token identifier is the token contract address. |

#### Returns

`Promise`<[`GetBalancesResponse`](../interfaces/GetBalancesResponse.md)\>

#### Defined in

src/api/advanced/advanced.ts:70

___

### getSingleBalance

▸ **getSingleBalance**(`address`, `contract`): `Promise`<[`GetSingleBalanceResponse`](../interfaces/GetSingleBalanceResponse.md)\>

Get an accurate balance for a single token and a single account address.

The balance takes into account transactions, internal transfers, and any
supported token transfers. The caller can expect low latency from this
method compared to the getBalances method.

[https://docs.cloud.coinbase.com/node/reference/advanced-api-reference#coinbasecloud_getsinglebalance](https://docs.cloud.coinbase.com/node/reference/advanced-api-reference#coinbasecloud_getsinglebalance)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | An account address or a contract address. |
| `contract` | `string` | Token identifier. For Ethereum the token identifier is the token contract address. |

#### Returns

`Promise`<[`GetSingleBalanceResponse`](../interfaces/GetSingleBalanceResponse.md)\>

#### Defined in

src/api/advanced/advanced.ts:53

___

### getTokenAllowances

▸ **getTokenAllowances**(`allowances`): `Promise`<[`GetTokenAllowancesResponse`](../interfaces/GetTokenAllowancesResponse.md)\>

Get allowances for a specified owner and spender across one or more tokens.

[https://docs.cloud.coinbase.com/node/reference/advanced-api-reference#coinbasecloud_gettokenallowances](https://docs.cloud.coinbase.com/node/reference/advanced-api-reference#coinbasecloud_gettokenallowances)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `allowances` | [`Allowance`](../interfaces/Allowance.md)[] | List of owner addresses, spender addresses, and token identifiers.  For Ethereum, the token identifier is the token contract address. |

#### Returns

`Promise`<[`GetTokenAllowancesResponse`](../interfaces/GetTokenAllowancesResponse.md)\>

#### Defined in

src/api/advanced/advanced.ts:83

___

### getTokenMetadata

▸ **getTokenMetadata**(`contract`): `Promise`<[`GetTokenContractMetadataResponse`](../interfaces/GetTokenContractMetadataResponse.md)\>

Get metadata for the given token contract address.

[https://docs.cloud.coinbase.com/node/reference/advanced-api-reference#coinbasecloud_gettokenmetadata](https://docs.cloud.coinbase.com/node/reference/advanced-api-reference#coinbasecloud_gettokenmetadata)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `contract` | `string` | The token contract. |

#### Returns

`Promise`<[`GetTokenContractMetadataResponse`](../interfaces/GetTokenContractMetadataResponse.md)\>

#### Defined in

src/api/advanced/advanced.ts:229

___

### getTokenStandardEvents

▸ **getTokenStandardEvents**(`contract`, `blockStart`, `blockEnd?`, `eventSignatureHashes?`, `sort?`, `pageSize?`, `pageNumber?`): `Promise`<[`GetTokenStandardEventsResponse`](../interfaces/GetTokenStandardEventsResponse.md)\>

Get events triggered by the given token contract.
The event data is returned in an easy-to-read format.
Only supports events defined by Ethereum standards for ERC-20 and ERC-721 tokens.

Different event types will return different event data.

[https://docs.cloud.coinbase.com/node/reference/advanced-api-reference#coinbasecloud_gettokenstandardevents](https://docs.cloud.coinbase.com/node/reference/advanced-api-reference#coinbasecloud_gettokenstandardevents)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `contract` | `string` | `undefined` | Account address. |
| `blockStart` | `string` | `undefined` | Start of block range to scan for events. |
| `blockEnd` | `string` | `DEFAULT_BLOCK_END` | End of block range to scan for events. Defaults to latest. |
| `eventSignatureHashes` | `string`[] | `DEFAULT_EVENT_SIGNATURE_HASHES` | List of event signature hashes. Defaults to all  standard events for ERC-20/ERC-721 (Transfer, Approval, ApprovalForAll) |
| `sort` | `string` | `DEFAULT_SORTING_PREFERENCE` | The sorting preference, use asc to sort by ascending and desc to sort by descending.  The default is desc. Tip: Specify a smaller blockStart and blockEnd range for faster search results. |
| `pageSize` | `number` | `DEFAULT_PAGE_SIZE` | The number of events displayed per page. The default and max value are 1000.  See [Handle pagination][https://docs.cloud.coinbase.com/node/reference/advanced-api-quickstart#handle-pagination](https://docs.cloud.coinbase.com/node/reference/advanced-api-quickstart#handle-pagination). |
| `pageNumber` | `number` | `DEFAULT_PAGE_NUMBER` | The integer page number, if pagination is enabled. It starts with 1.  See [Handle pagination][https://docs.cloud.coinbase.com/node/reference/advanced-api-quickstart#handle-pagination](https://docs.cloud.coinbase.com/node/reference/advanced-api-quickstart#handle-pagination). |

#### Returns

`Promise`<[`GetTokenStandardEventsResponse`](../interfaces/GetTokenStandardEventsResponse.md)\>

#### Defined in

src/api/advanced/advanced.ts:201

___

### getTokenTransfersByAddress

▸ **getTokenTransfersByAddress**(`address`, `blockStart`, `blockEnd?`, `addressFilter?`, `sort?`, `pageSize?`, `pageNumber?`): `Promise`<[`GetTokenTransfersByAddressResponse`](../interfaces/GetTokenTransfersByAddressResponse.md)\>

Get token transfers for a given address (in reverse chronological order).
Includes activity from and to the input address.

[https://docs.cloud.coinbase.com/node/reference/advanced-api-reference#coinbasecloud_gettokentransfersbyaddress](https://docs.cloud.coinbase.com/node/reference/advanced-api-reference#coinbasecloud_gettokentransfersbyaddress)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `address` | `string` | `undefined` | Account address. |
| `blockStart` | `string` | `undefined` | Inclusive of specified block. |
| `blockEnd` | `string` | `DEFAULT_BLOCK_END` | Inclusive of specified block. Defaults to latest. |
| `addressFilter` | `string` | `DEFAULT_ADDRESS_FILTER` | Filter transfers by SENDER_ONLY, RECEIVER_ONLY, or  SENDER_OR_RECEIVER. Defaults to SENDER_OR_RECEIVER. |
| `sort` | `string` | `DEFAULT_SORTING_PREFERENCE` | The sorting preference, use asc to sort by ascending and desc to sort by descending.  The default is desc. Tip: Specify a smaller blockStart and blockEnd range for faster search results. |
| `pageSize` | `number` | `DEFAULT_PAGE_SIZE` | The number of transfers displayed per page. The default and max value are 1000.  See [Handle pagination][https://docs.cloud.coinbase.com/node/reference/advanced-api-quickstart#handle-pagination](https://docs.cloud.coinbase.com/node/reference/advanced-api-quickstart#handle-pagination). |
| `pageNumber` | `number` | `DEFAULT_PAGE_NUMBER` | The integer page number, if pagination is enabled. It starts with 1.  See [Handle pagination][https://docs.cloud.coinbase.com/node/reference/advanced-api-quickstart#handle-pagination](https://docs.cloud.coinbase.com/node/reference/advanced-api-quickstart#handle-pagination). |

#### Returns

`Promise`<[`GetTokenTransfersByAddressResponse`](../interfaces/GetTokenTransfersByAddressResponse.md)\>

#### Defined in

src/api/advanced/advanced.ts:159

___

### getTransactionByHash

▸ **getTransactionByHash**(`transactionHash`): `Promise`<[`GetTransactionByHashResponse`](../interfaces/GetTransactionByHashResponse.md)\>

Get detailed information about a transaction, including all internal transactions and
token transfers that were triggered by the transaction.

[https://docs.cloud.coinbase.com/node/reference/advanced-api-reference#coinbasecloud_gettransactionbyhash](https://docs.cloud.coinbase.com/node/reference/advanced-api-reference#coinbasecloud_gettransactionbyhash)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transactionHash` | `string` | Transaction hash. |

#### Returns

`Promise`<[`GetTransactionByHashResponse`](../interfaces/GetTransactionByHashResponse.md)\>

#### Defined in

src/api/advanced/advanced.ts:96

___

### getTransactionsByAddress

▸ **getTransactionsByAddress**(`address`, `blockStart`, `blockEnd?`, `addressFilter?`, `sort?`, `pageSize?`, `pageNumber?`): `Promise`<[`GetTransactionsByAddressResponse`](../interfaces/GetTransactionsByAddressResponse.md)\>

Get external transactions, internal transactions (triggered by smart contracts) and
token transfers for a given address. Includes activity from and to the input address.
Transactions are returned in reverse chronological order.

[https://docs.cloud.coinbase.com/node/reference/advanced-api-reference#coinbasecloud_gettransactionsbyaddress](https://docs.cloud.coinbase.com/node/reference/advanced-api-reference#coinbasecloud_gettransactionsbyaddress)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `address` | `string` | `undefined` | Account address. |
| `blockStart` | `string` | `undefined` | Start of block range to scan for transactions. |
| `blockEnd` | `string` | `DEFAULT_BLOCK_END` | End of block range to scan for transactions. Defaults to latest. |
| `addressFilter` | `string` | `DEFAULT_ADDRESS_FILTER` | Filter transactions by SENDER_ONLY, RECEIVER_ONLY, or  SENDER_OR_RECEIVER. Defaults to SENDER_OR_RECEIVER. |
| `sort` | `string` | `DEFAULT_SORTING_PREFERENCE` | The sorting preference, use asc to sort by ascending and desc to sort by descending.  The default is desc. Tip: Specify a smaller blockStart and blockEnd range for faster search results. |
| `pageSize` | `number` | `DEFAULT_PAGE_SIZE` | The number of transactions displayed per page. The default and max value are 1000.  See [Handle pagination][https://docs.cloud.coinbase.com/node/reference/advanced-api-quickstart#handle-pagination](https://docs.cloud.coinbase.com/node/reference/advanced-api-quickstart#handle-pagination). |
| `pageNumber` | `number` | `DEFAULT_PAGE_NUMBER` | The integer page number, if pagination is enabled. It starts with 1.  See [Handle pagination][https://docs.cloud.coinbase.com/node/reference/advanced-api-quickstart#handle-pagination](https://docs.cloud.coinbase.com/node/reference/advanced-api-quickstart#handle-pagination). |

#### Returns

`Promise`<[`GetTransactionsByAddressResponse`](../interfaces/GetTransactionsByAddressResponse.md)\>

#### Defined in

src/api/advanced/advanced.ts:120
