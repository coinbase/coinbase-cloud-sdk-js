[coinbase-cloud-sdk](../README.md) / [Exports](../modules.md) / CoinbaseCloudProvider

# Class: CoinbaseCloudProvider

CoinbaseCloudProvider is an extension of ether's.js JsonRpcProvider.

Do not call this constructor directly. Instead, instantiate an instance of
[CoinbaseCloud](CoinbaseCloud.md) and get the provider via [provider](CoinbaseCloud.md#provider).

## Hierarchy

- `JsonRpcProvider`

  ↳ **`CoinbaseCloudProvider`**

## Table of contents

### Properties

- [\_bootstrapPoll](CoinbaseCloudProvider.md#_bootstrappoll)
- [\_emitted](CoinbaseCloudProvider.md#_emitted)
- [\_eventLoopCache](CoinbaseCloudProvider.md#_eventloopcache)
- [\_events](CoinbaseCloudProvider.md#_events)
- [\_fastBlockNumber](CoinbaseCloudProvider.md#_fastblocknumber)
- [\_fastBlockNumberPromise](CoinbaseCloudProvider.md#_fastblocknumberpromise)
- [\_fastQueryDate](CoinbaseCloudProvider.md#_fastquerydate)
- [\_internalBlockNumber](CoinbaseCloudProvider.md#_internalblocknumber)
- [\_isProvider](CoinbaseCloudProvider.md#_isprovider)
- [\_lastBlockNumber](CoinbaseCloudProvider.md#_lastblocknumber)
- [\_maxFilterBlockRange](CoinbaseCloudProvider.md#_maxfilterblockrange)
- [\_maxInternalBlockNumber](CoinbaseCloudProvider.md#_maxinternalblocknumber)
- [\_network](CoinbaseCloudProvider.md#_network)
- [\_networkPromise](CoinbaseCloudProvider.md#_networkpromise)
- [\_nextId](CoinbaseCloudProvider.md#_nextid)
- [\_pendingFilter](CoinbaseCloudProvider.md#_pendingfilter)
- [\_poller](CoinbaseCloudProvider.md#_poller)
- [\_pollingInterval](CoinbaseCloudProvider.md#_pollinginterval)
- [anyNetwork](CoinbaseCloudProvider.md#anynetwork)
- [connection](CoinbaseCloudProvider.md#connection)
- [disableCcipRead](CoinbaseCloudProvider.md#disableccipread)
- [formatter](CoinbaseCloudProvider.md#formatter)

### Accessors

- [\_cache](CoinbaseCloudProvider.md#_cache)
- [blockNumber](CoinbaseCloudProvider.md#blocknumber)
- [network](CoinbaseCloudProvider.md#network)
- [polling](CoinbaseCloudProvider.md#polling)
- [pollingInterval](CoinbaseCloudProvider.md#pollinginterval)
- [ready](CoinbaseCloudProvider.md#ready)

### Methods

- [\_addEventListener](CoinbaseCloudProvider.md#_addeventlistener)
- [\_call](CoinbaseCloudProvider.md#_call)
- [\_getAddress](CoinbaseCloudProvider.md#_getaddress)
- [\_getBlock](CoinbaseCloudProvider.md#_getblock)
- [\_getBlockTag](CoinbaseCloudProvider.md#_getblocktag)
- [\_getFastBlockNumber](CoinbaseCloudProvider.md#_getfastblocknumber)
- [\_getFilter](CoinbaseCloudProvider.md#_getfilter)
- [\_getInternalBlockNumber](CoinbaseCloudProvider.md#_getinternalblocknumber)
- [\_getResolver](CoinbaseCloudProvider.md#_getresolver)
- [\_getTransactionRequest](CoinbaseCloudProvider.md#_gettransactionrequest)
- [\_ready](CoinbaseCloudProvider.md#_ready)
- [\_setFastBlockNumber](CoinbaseCloudProvider.md#_setfastblocknumber)
- [\_startEvent](CoinbaseCloudProvider.md#_startevent)
- [\_startPending](CoinbaseCloudProvider.md#_startpending)
- [\_stopEvent](CoinbaseCloudProvider.md#_stopevent)
- [\_uncachedDetectNetwork](CoinbaseCloudProvider.md#_uncacheddetectnetwork)
- [\_waitForTransaction](CoinbaseCloudProvider.md#_waitfortransaction)
- [\_wrapTransaction](CoinbaseCloudProvider.md#_wraptransaction)
- [addListener](CoinbaseCloudProvider.md#addlistener)
- [call](CoinbaseCloudProvider.md#call)
- [ccipReadFetch](CoinbaseCloudProvider.md#ccipreadfetch)
- [detectNetwork](CoinbaseCloudProvider.md#detectnetwork)
- [emit](CoinbaseCloudProvider.md#emit)
- [estimateGas](CoinbaseCloudProvider.md#estimategas)
- [getAvatar](CoinbaseCloudProvider.md#getavatar)
- [getBalance](CoinbaseCloudProvider.md#getbalance)
- [getBlock](CoinbaseCloudProvider.md#getblock)
- [getBlockNumber](CoinbaseCloudProvider.md#getblocknumber)
- [getBlockWithTransactions](CoinbaseCloudProvider.md#getblockwithtransactions)
- [getCode](CoinbaseCloudProvider.md#getcode)
- [getEtherPrice](CoinbaseCloudProvider.md#getetherprice)
- [getFeeData](CoinbaseCloudProvider.md#getfeedata)
- [getGasPrice](CoinbaseCloudProvider.md#getgasprice)
- [getLogs](CoinbaseCloudProvider.md#getlogs)
- [getNetwork](CoinbaseCloudProvider.md#getnetwork)
- [getResolver](CoinbaseCloudProvider.md#getresolver)
- [getSigner](CoinbaseCloudProvider.md#getsigner)
- [getStorageAt](CoinbaseCloudProvider.md#getstorageat)
- [getTransaction](CoinbaseCloudProvider.md#gettransaction)
- [getTransactionCount](CoinbaseCloudProvider.md#gettransactioncount)
- [getTransactionReceipt](CoinbaseCloudProvider.md#gettransactionreceipt)
- [getUncheckedSigner](CoinbaseCloudProvider.md#getuncheckedsigner)
- [listAccounts](CoinbaseCloudProvider.md#listaccounts)
- [listenerCount](CoinbaseCloudProvider.md#listenercount)
- [listeners](CoinbaseCloudProvider.md#listeners)
- [lookupAddress](CoinbaseCloudProvider.md#lookupaddress)
- [off](CoinbaseCloudProvider.md#off)
- [on](CoinbaseCloudProvider.md#on)
- [once](CoinbaseCloudProvider.md#once)
- [perform](CoinbaseCloudProvider.md#perform)
- [poll](CoinbaseCloudProvider.md#poll)
- [prepareRequest](CoinbaseCloudProvider.md#preparerequest)
- [removeAllListeners](CoinbaseCloudProvider.md#removealllisteners)
- [removeListener](CoinbaseCloudProvider.md#removelistener)
- [resetEventsBlock](CoinbaseCloudProvider.md#reseteventsblock)
- [resolveName](CoinbaseCloudProvider.md#resolvename)
- [send](CoinbaseCloudProvider.md#send)
- [sendTransaction](CoinbaseCloudProvider.md#sendtransaction)
- [waitForTransaction](CoinbaseCloudProvider.md#waitfortransaction)
- [defaultUrl](CoinbaseCloudProvider.md#defaulturl)
- [getFormatter](CoinbaseCloudProvider.md#getformatter)
- [getNetwork](CoinbaseCloudProvider.md#getnetwork-1)
- [hexlifyTransaction](CoinbaseCloudProvider.md#hexlifytransaction)
- [isProvider](CoinbaseCloudProvider.md#isprovider)

## Properties

### \_bootstrapPoll

• **\_bootstrapPoll**: `Timer`

#### Inherited from

JsonRpcProvider.\_bootstrapPoll

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:66

___

### \_emitted

• **\_emitted**: `Object`

#### Index signature

▪ [eventName: `string`]: `number` \| ``"pending"``

#### Inherited from

JsonRpcProvider.\_emitted

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:61

___

### \_eventLoopCache

• **\_eventLoopCache**: `Record`<`string`, `Promise`<`any`\>\>

#### Inherited from

JsonRpcProvider.\_eventLoopCache

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:32

___

### \_events

• **\_events**: `Event`[]

#### Inherited from

JsonRpcProvider.\_events

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:59

___

### \_fastBlockNumber

• **\_fastBlockNumber**: `number`

#### Inherited from

JsonRpcProvider.\_fastBlockNumber

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:69

___

### \_fastBlockNumberPromise

• **\_fastBlockNumberPromise**: `Promise`<`number`\>

#### Inherited from

JsonRpcProvider.\_fastBlockNumberPromise

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:70

___

### \_fastQueryDate

• **\_fastQueryDate**: `number`

#### Inherited from

JsonRpcProvider.\_fastQueryDate

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:71

___

### \_internalBlockNumber

• **\_internalBlockNumber**: `Promise`<{ `blockNumber`: `number` ; `reqTime`: `number` ; `respTime`: `number`  }\>

#### Inherited from

JsonRpcProvider.\_internalBlockNumber

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:73

___

### \_isProvider

• `Readonly` **\_isProvider**: `boolean`

#### Inherited from

JsonRpcProvider.\_isProvider

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:152

___

### \_lastBlockNumber

• **\_lastBlockNumber**: `number`

#### Inherited from

JsonRpcProvider.\_lastBlockNumber

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:67

___

### \_maxFilterBlockRange

• **\_maxFilterBlockRange**: `number`

#### Inherited from

JsonRpcProvider.\_maxFilterBlockRange

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:68

___

### \_maxInternalBlockNumber

• **\_maxInternalBlockNumber**: `number`

#### Inherited from

JsonRpcProvider.\_maxInternalBlockNumber

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:72

___

### \_network

• **\_network**: `Network`

#### Inherited from

JsonRpcProvider.\_network

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:58

___

### \_networkPromise

• **\_networkPromise**: `Promise`<`Network`\>

#### Inherited from

JsonRpcProvider.\_networkPromise

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:57

___

### \_nextId

• **\_nextId**: `number`

#### Inherited from

JsonRpcProvider.\_nextId

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:31

___

### \_pendingFilter

• **\_pendingFilter**: `Promise`<`number`\>

#### Inherited from

JsonRpcProvider.\_pendingFilter

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:30

___

### \_poller

• **\_poller**: `Timer`

#### Inherited from

JsonRpcProvider.\_poller

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:65

___

### \_pollingInterval

• **\_pollingInterval**: `number`

#### Inherited from

JsonRpcProvider.\_pollingInterval

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:64

___

### anyNetwork

• `Readonly` **anyNetwork**: `boolean`

#### Inherited from

JsonRpcProvider.anyNetwork

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:78

___

### connection

• `Readonly` **connection**: `ConnectionInfo`

#### Inherited from

JsonRpcProvider.connection

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:29

___

### disableCcipRead

• **disableCcipRead**: `boolean`

#### Inherited from

JsonRpcProvider.disableCcipRead

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:79

___

### formatter

• **formatter**: `Formatter`

#### Inherited from

JsonRpcProvider.formatter

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:60

## Accessors

### \_cache

• `get` **_cache**(): `Record`<`string`, `Promise`<`any`\>\>

#### Returns

`Record`<`string`, `Promise`<`any`\>\>

#### Inherited from

JsonRpcProvider.\_cache

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:33

___

### blockNumber

• `get` **blockNumber**(): `number`

#### Returns

`number`

#### Inherited from

JsonRpcProvider.blockNumber

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:101

___

### network

• `get` **network**(): `Network`

#### Returns

`Network`

#### Inherited from

JsonRpcProvider.network

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:98

___

### polling

• `get` **polling**(): `boolean`

#### Returns

`boolean`

#### Inherited from

JsonRpcProvider.polling

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:102

• `set` **polling**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

JsonRpcProvider.polling

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:103

___

### pollingInterval

• `get` **pollingInterval**(): `number`

#### Returns

`number`

#### Inherited from

JsonRpcProvider.pollingInterval

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:104

• `set` **pollingInterval**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

JsonRpcProvider.pollingInterval

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:105

___

### ready

• `get` **ready**(): `Promise`<`Network`\>

#### Returns

`Promise`<`Network`\>

#### Inherited from

JsonRpcProvider.ready

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:91

## Methods

### \_addEventListener

▸ **_addEventListener**(`eventName`, `listener`, `once`): [`CoinbaseCloudProvider`](CoinbaseCloudProvider.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `EventType` |
| `listener` | `Listener` |
| `once` | `boolean` |

#### Returns

[`CoinbaseCloudProvider`](CoinbaseCloudProvider.md)

#### Inherited from

JsonRpcProvider.\_addEventListener

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:147

___

### \_call

▸ **_call**(`transaction`, `blockTag`, `attempt`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | `TransactionRequest` |
| `blockTag` | `BlockTag` |
| `attempt` | `number` |

#### Returns

`Promise`<`string`\>

#### Inherited from

JsonRpcProvider.\_call

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:127

___

### \_getAddress

▸ **_getAddress**(`addressOrName`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` \| `Promise`<`string`\> |

#### Returns

`Promise`<`string`\>

#### Inherited from

JsonRpcProvider.\_getAddress

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:130

___

### \_getBlock

▸ **_getBlock**(`blockHashOrBlockTag`, `includeTransactions?`): `Promise`<`Block` \| `BlockWithTransactions`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockHashOrBlockTag` | `BlockTag` \| `Promise`<`BlockTag`\> |
| `includeTransactions?` | `boolean` |

#### Returns

`Promise`<`Block` \| `BlockWithTransactions`\>

#### Inherited from

JsonRpcProvider.\_getBlock

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:131

___

### \_getBlockTag

▸ **_getBlockTag**(`blockTag`): `Promise`<`BlockTag`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockTag` | `BlockTag` \| `Promise`<`BlockTag`\> |

#### Returns

`Promise`<`BlockTag`\>

#### Inherited from

JsonRpcProvider.\_getBlockTag

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:138

___

### \_getFastBlockNumber

▸ **_getFastBlockNumber**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Inherited from

JsonRpcProvider.\_getFastBlockNumber

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:106

___

### \_getFilter

▸ **_getFilter**(`filter`): `Promise`<`Filter` \| `FilterByBlockHash`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | `Filter` \| `FilterByBlockHash` \| `Promise`<`Filter` \| `FilterByBlockHash`\> |

#### Returns

`Promise`<`Filter` \| `FilterByBlockHash`\>

#### Inherited from

JsonRpcProvider.\_getFilter

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:126

___

### \_getInternalBlockNumber

▸ **_getInternalBlockNumber**(`maxAge`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `maxAge` | `number` |

#### Returns

`Promise`<`number`\>

#### Inherited from

JsonRpcProvider.\_getInternalBlockNumber

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:95

___

### \_getResolver

▸ **_getResolver**(`name`, `operation?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `operation?` | `string` |

#### Returns

`Promise`<`string`\>

#### Inherited from

JsonRpcProvider.\_getResolver

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:140

___

### \_getTransactionRequest

▸ **_getTransactionRequest**(`transaction`): `Promise`<`Transaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | `Deferrable`<`TransactionRequest`\> |

#### Returns

`Promise`<`Transaction`\>

#### Inherited from

JsonRpcProvider.\_getTransactionRequest

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:125

___

### \_ready

▸ **_ready**(): `Promise`<`Network`\>

#### Returns

`Promise`<`Network`\>

#### Inherited from

JsonRpcProvider.\_ready

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:90

___

### \_setFastBlockNumber

▸ **_setFastBlockNumber**(`blockNumber`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockNumber` | `number` |

#### Returns

`void`

#### Inherited from

JsonRpcProvider.\_setFastBlockNumber

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:107

___

### \_startEvent

▸ **_startEvent**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Event` |

#### Returns

`void`

#### Inherited from

JsonRpcProvider.\_startEvent

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:44

___

### \_startPending

▸ **_startPending**(): `void`

#### Returns

`void`

#### Inherited from

JsonRpcProvider.\_startPending

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:45

___

### \_stopEvent

▸ **_stopEvent**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Event` |

#### Returns

`void`

#### Inherited from

JsonRpcProvider.\_stopEvent

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:46

___

### \_uncachedDetectNetwork

▸ **_uncachedDetectNetwork**(): `Promise`<`Network`\>

#### Returns

`Promise`<`Network`\>

#### Inherited from

JsonRpcProvider.\_uncachedDetectNetwork

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:37

___

### \_waitForTransaction

▸ **_waitForTransaction**(`transactionHash`, `confirmations`, `timeout`, `replaceable`): `Promise`<`TransactionReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionHash` | `string` |
| `confirmations` | `number` |
| `timeout` | `number` |
| `replaceable` | `Object` |
| `replaceable.data` | `string` |
| `replaceable.from` | `string` |
| `replaceable.nonce` | `number` |
| `replaceable.startBlock` | `number` |
| `replaceable.to` | `string` |
| `replaceable.value` | `BigNumber` |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Inherited from

JsonRpcProvider.\_waitForTransaction

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:109

___

### \_wrapTransaction

▸ **_wrapTransaction**(`tx`, `hash?`, `startBlock?`): `TransactionResponse`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | `Transaction` |
| `hash?` | `string` |
| `startBlock?` | `number` |

#### Returns

`TransactionResponse`

#### Inherited from

JsonRpcProvider.\_wrapTransaction

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:123

___

### addListener

▸ **addListener**(`eventName`, `listener`): `Provider`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `EventType` |
| `listener` | `Listener` |

#### Returns

`Provider`

#### Inherited from

JsonRpcProvider.addListener

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:149

___

### call

▸ **call**(`transaction`, `blockTag?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | `Deferrable`<`TransactionRequest`\> |
| `blockTag?` | `BlockTag` \| `Promise`<`BlockTag`\> |

#### Returns

`Promise`<`string`\>

#### Inherited from

JsonRpcProvider.call

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:128

___

### ccipReadFetch

▸ **ccipReadFetch**(`tx`, `calldata`, `urls`): `Promise`<``null`` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | `Transaction` |
| `calldata` | `string` |
| `urls` | `string`[] |

#### Returns

`Promise`<``null`` \| `string`\>

#### Inherited from

JsonRpcProvider.ccipReadFetch

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:94

___

### detectNetwork

▸ **detectNetwork**(): `Promise`<`Network`\>

#### Returns

`Promise`<`Network`\>

#### Inherited from

JsonRpcProvider.detectNetwork

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:36

___

### emit

▸ **emit**(`eventName`, ...`args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `EventType` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

JsonRpcProvider.emit

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:150

___

### estimateGas

▸ **estimateGas**(`transaction`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | `Deferrable`<`TransactionRequest`\> |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

JsonRpcProvider.estimateGas

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:129

___

### getAvatar

▸ **getAvatar**(`nameOrAddress`): `Promise`<``null`` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrAddress` | `string` |

#### Returns

`Promise`<``null`` \| `string`\>

#### Inherited from

JsonRpcProvider.getAvatar

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:143

___

### getBalance

▸ **getBalance**(`addressOrName`, `blockTag?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` \| `Promise`<`string`\> |
| `blockTag?` | `BlockTag` \| `Promise`<`BlockTag`\> |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

JsonRpcProvider.getBalance

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:119

___

### getBlock

▸ **getBlock**(`blockHashOrBlockTag`): `Promise`<`Block`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockHashOrBlockTag` | `BlockTag` \| `Promise`<`BlockTag`\> |

#### Returns

`Promise`<`Block`\>

#### Inherited from

JsonRpcProvider.getBlock

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:132

___

### getBlockNumber

▸ **getBlockNumber**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Inherited from

JsonRpcProvider.getBlockNumber

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:117

___

### getBlockWithTransactions

▸ **getBlockWithTransactions**(`blockHashOrBlockTag`): `Promise`<`BlockWithTransactions`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockHashOrBlockTag` | `BlockTag` \| `Promise`<`BlockTag`\> |

#### Returns

`Promise`<`BlockWithTransactions`\>

#### Inherited from

JsonRpcProvider.getBlockWithTransactions

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:133

___

### getCode

▸ **getCode**(`addressOrName`, `blockTag?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` \| `Promise`<`string`\> |
| `blockTag?` | `BlockTag` \| `Promise`<`BlockTag`\> |

#### Returns

`Promise`<`string`\>

#### Inherited from

JsonRpcProvider.getCode

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:121

___

### getEtherPrice

▸ **getEtherPrice**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Inherited from

JsonRpcProvider.getEtherPrice

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:137

___

### getFeeData

▸ **getFeeData**(): `Promise`<`FeeData`\>

#### Returns

`Promise`<`FeeData`\>

#### Inherited from

JsonRpcProvider.getFeeData

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:127

___

### getGasPrice

▸ **getGasPrice**(): `Promise`<`BigNumber`\>

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

JsonRpcProvider.getGasPrice

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:118

___

### getLogs

▸ **getLogs**(`filter`): `Promise`<`Log`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | `Filter` \| `FilterByBlockHash` \| `Promise`<`Filter` \| `FilterByBlockHash`\> |

#### Returns

`Promise`<`Log`[]\>

#### Inherited from

JsonRpcProvider.getLogs

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:136

___

### getNetwork

▸ **getNetwork**(): `Promise`<`Network`\>

#### Returns

`Promise`<`Network`\>

#### Inherited from

JsonRpcProvider.getNetwork

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:100

___

### getResolver

▸ **getResolver**(`name`): `Promise`<``null`` \| `Resolver`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Promise`<``null`` \| `Resolver`\>

#### Inherited from

JsonRpcProvider.getResolver

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:139

___

### getSigner

▸ **getSigner**(`addressOrIndex?`): `JsonRpcSigner`

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrIndex?` | `string` \| `number` |

#### Returns

`JsonRpcSigner`

#### Inherited from

JsonRpcProvider.getSigner

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:38

___

### getStorageAt

▸ **getStorageAt**(`addressOrName`, `position`, `blockTag?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` \| `Promise`<`string`\> |
| `position` | `BigNumberish` \| `Promise`<`BigNumberish`\> |
| `blockTag?` | `BlockTag` \| `Promise`<`BlockTag`\> |

#### Returns

`Promise`<`string`\>

#### Inherited from

JsonRpcProvider.getStorageAt

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:122

___

### getTransaction

▸ **getTransaction**(`transactionHash`): `Promise`<`TransactionResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionHash` | `string` \| `Promise`<`string`\> |

#### Returns

`Promise`<`TransactionResponse`\>

#### Inherited from

JsonRpcProvider.getTransaction

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:134

___

### getTransactionCount

▸ **getTransactionCount**(`addressOrName`, `blockTag?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` \| `Promise`<`string`\> |
| `blockTag?` | `BlockTag` \| `Promise`<`BlockTag`\> |

#### Returns

`Promise`<`number`\>

#### Inherited from

JsonRpcProvider.getTransactionCount

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:120

___

### getTransactionReceipt

▸ **getTransactionReceipt**(`transactionHash`): `Promise`<`TransactionReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionHash` | `string` \| `Promise`<`string`\> |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Inherited from

JsonRpcProvider.getTransactionReceipt

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:135

___

### getUncheckedSigner

▸ **getUncheckedSigner**(`addressOrIndex?`): `UncheckedJsonRpcSigner`

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrIndex?` | `string` \| `number` |

#### Returns

`UncheckedJsonRpcSigner`

#### Inherited from

JsonRpcProvider.getUncheckedSigner

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:39

___

### listAccounts

▸ **listAccounts**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Inherited from

JsonRpcProvider.listAccounts

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:40

___

### listenerCount

▸ **listenerCount**(`eventName?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `EventType` |

#### Returns

`number`

#### Inherited from

JsonRpcProvider.listenerCount

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:151

___

### listeners

▸ **listeners**(`eventName?`): `Listener`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `EventType` |

#### Returns

`Listener`[]

#### Inherited from

JsonRpcProvider.listeners

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:152

___

### lookupAddress

▸ **lookupAddress**(`address`): `Promise`<``null`` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` \| `Promise`<`string`\> |

#### Returns

`Promise`<``null`` \| `string`\>

#### Inherited from

JsonRpcProvider.lookupAddress

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:142

___

### off

▸ **off**(`eventName`, `listener?`): [`CoinbaseCloudProvider`](CoinbaseCloudProvider.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `EventType` |
| `listener?` | `Listener` |

#### Returns

[`CoinbaseCloudProvider`](CoinbaseCloudProvider.md)

#### Inherited from

JsonRpcProvider.off

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:153

___

### on

▸ **on**(`eventName`, `listener`): [`CoinbaseCloudProvider`](CoinbaseCloudProvider.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `EventType` |
| `listener` | `Listener` |

#### Returns

[`CoinbaseCloudProvider`](CoinbaseCloudProvider.md)

#### Inherited from

JsonRpcProvider.on

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:148

___

### once

▸ **once**(`eventName`, `listener`): [`CoinbaseCloudProvider`](CoinbaseCloudProvider.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `EventType` |
| `listener` | `Listener` |

#### Returns

[`CoinbaseCloudProvider`](CoinbaseCloudProvider.md)

#### Inherited from

JsonRpcProvider.once

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:149

___

### perform

▸ **perform**(`method`, `params`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | `string` |
| `params` | `any` |

#### Returns

`Promise`<`any`\>

#### Inherited from

JsonRpcProvider.perform

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:43

___

### poll

▸ **poll**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

JsonRpcProvider.poll

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:96

___

### prepareRequest

▸ **prepareRequest**(`method`, `params`): [`string`, `any`[]]

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | `string` |
| `params` | `any` |

#### Returns

[`string`, `any`[]]

#### Inherited from

JsonRpcProvider.prepareRequest

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:42

___

### removeAllListeners

▸ **removeAllListeners**(`eventName?`): [`CoinbaseCloudProvider`](CoinbaseCloudProvider.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `EventType` |

#### Returns

[`CoinbaseCloudProvider`](CoinbaseCloudProvider.md)

#### Inherited from

JsonRpcProvider.removeAllListeners

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:154

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): `Provider`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `EventType` |
| `listener` | `Listener` |

#### Returns

`Provider`

#### Inherited from

JsonRpcProvider.removeListener

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:150

___

### resetEventsBlock

▸ **resetEventsBlock**(`blockNumber`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockNumber` | `number` |

#### Returns

`void`

#### Inherited from

JsonRpcProvider.resetEventsBlock

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:97

___

### resolveName

▸ **resolveName**(`name`): `Promise`<``null`` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` \| `Promise`<`string`\> |

#### Returns

`Promise`<``null`` \| `string`\>

#### Inherited from

JsonRpcProvider.resolveName

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:141

___

### send

▸ **send**(`method`, `params`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | `string` |
| `params` | `any`[] |

#### Returns

`Promise`<`any`\>

#### Inherited from

JsonRpcProvider.send

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:41

___

### sendTransaction

▸ **sendTransaction**(`signedTransaction`): `Promise`<`TransactionResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `signedTransaction` | `string` \| `Promise`<`string`\> |

#### Returns

`Promise`<`TransactionResponse`\>

#### Inherited from

JsonRpcProvider.sendTransaction

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:124

___

### waitForTransaction

▸ **waitForTransaction**(`transactionHash`, `confirmations?`, `timeout?`): `Promise`<`TransactionReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionHash` | `string` |
| `confirmations?` | `number` |
| `timeout?` | `number` |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Inherited from

JsonRpcProvider.waitForTransaction

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:108

___

### defaultUrl

▸ `Static` **defaultUrl**(): `string`

#### Returns

`string`

#### Inherited from

JsonRpcProvider.defaultUrl

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:35

___

### getFormatter

▸ `Static` **getFormatter**(): `Formatter`

#### Returns

`Formatter`

#### Inherited from

JsonRpcProvider.getFormatter

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:92

___

### getNetwork

▸ `Static` **getNetwork**(`network`): `Network`

#### Parameters

| Name | Type |
| :------ | :------ |
| `network` | `Networkish` |

#### Returns

`Network`

#### Inherited from

JsonRpcProvider.getNetwork

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:93

___

### hexlifyTransaction

▸ `Static` **hexlifyTransaction**(`transaction`, `allowExtra?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | `TransactionRequest` |
| `allowExtra?` | `Object` |

#### Returns

`Object`

#### Inherited from

JsonRpcProvider.hexlifyTransaction

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:47

___

### isProvider

▸ `Static` **isProvider**(`value`): value is Provider

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is Provider

#### Inherited from

JsonRpcProvider.isProvider

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:154
