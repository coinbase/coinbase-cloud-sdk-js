[coinbase-cloud-sdk](../README.md) / [Exports](../modules.md) / GetTokenStandardEventsResponse

# Interface: GetTokenStandardEventsResponse

GetTokenStandardEventsResponse represents data returned from the GetTokenStandardEvents Advanced API.

A list of parent transactions in the given block range, each with a sub-list of events that occurred as
part of the parent transaction. Note: The output does not specify the token type (ERC20 vs ERC721).

[https://docs.cloud.coinbase.com/node/reference/advanced-api-reference#tokenstandardevents](https://docs.cloud.coinbase.com/node/reference/advanced-api-reference#tokenstandardevents)

## Table of contents

### Properties

- [events](GetTokenStandardEventsResponse.md#events)

## Properties

### events

• `Readonly` **events**: [`TokenEvent`](TokenEvent.md)[]

REQUIRED. List of token events.

#### Defined in

src/api/advanced/contracts.ts:13
