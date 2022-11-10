# Coinbase Cloud SDK

[![npm](https://img.shields.io/npm/v/@coinbase/coinbase-cloud-sdk-js)](https://www.npmjs.com/package/@coinbase/coinbase-cloud-sdk)

The Coinbase Cloud SDK is a JavaScript SDK that provides access to Coinbase Cloud's Node APIs.

With the SDK, you can:

- Make requests to native [Ethereum APIs](https://docs.cloud.coinbase.com/node/reference/ethereum-api-overview), using an [ethers.js](https://docs.ethers.io/v5/) compatible `Provider`.
- Make requests to Coinbase Node's [Advanced APIs](https://docs.cloud.coinbase.com/node/reference/advanced-api-overview), providing access to aggregated and filtered blockchain data in a single query.

## Supported Networks

The SDK supports the following blockchain networks:

- **Ethereum**: Mainnet, Goerli

## Prerequisites

A [Coinbase Node](https://www.coinbase.com/cloud/products/node) project is required to use the SDK.

To register and create a project, get started [here](https://www.coinbase.com/cloud/products/node).

## Install

The Coinbase Cloud SDK is available on [npm](https://www.npmjs.com/package/@coinbase/coinbase-cloud-sdk).

To install with `yarn`:

```
yarn add @coinbase/coinbase-cloud-sdk
```

To install with `npm`:

```
npm install @coinbase/coinbase-cloud-sdk
```

## Usage

Once the SDK has been installed, you can import and use it within your project.

### Setup

To initialize the SDK, create an instance of `CoinbaseCloud` and pass it the authentication credentials found within your project's settings.

```ts
import { CoinbaseCloud, Network } from 'coinbase-cloud-sdk';

const settings = {
  apiUsername: 'YOUR_USERNAME', // You can find this in your Node project's settings
  apiPassword: 'YOUR_PASSWORD', // Password associated with the username
  network: Network.ETH_MAINNET
};

const coinbaseCloud = new CoinbaseCloud(settings);

const blockNumber = await coinbaseCloud.provider.getBlockNumber();
const balance = await coinbaseCloud.provider
  .getBalance('0xf977814e90da44bfa03b6295a0616a897441acec');
```

### Making requests

The SDK provides the following namespaces for making requests:

- `provider`: Contains methods for making calls to native [Ethereum APIs](https://docs.cloud.coinbase.com/node/reference/ethereum-api-overview), using an [ethers.js](https://docs.ethers.io/v5/) compatible `Provider`.
- `advanced`: Contains methods for making calls to Coinbase Node's [Advanced APIs](https://docs.cloud.coinbase.com/node/reference/advanced-api-overview).

#### Ethereum API
```ts
// Ethereum API request to get the ETH balance of an address
const balance = await coinbaseCloud.provider
  .getBalance('0xf977814e90da44bfa03b6295a0616a897441acec');
```

#### Advanced API
```ts
// Advanced API request to get multiple ERC-20 token balances of an address
const balances = await coinbaseCloud.advanced
  .getBalances([
    {
      address: '0xdf0635793e91d4f8e7426dbd9ed08471186f428d',
      contract: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
    },
    {
      address: '0xdf0635793e91d4f8e7426dbd9ed08471186f428d',
      contract: '0x6b175474e89094c44da98b954eedeac495271d0f'
    }
  ]);
```

## Examples

Below are a few examples for making requests to Coinbase Node's [Advanced APIs](https://docs.cloud.coinbase.com/node/reference/advanced-api-overview) using the SDK.

For more examples, please visit the Coinbase Node [developer documentation](https://docs.cloud.coinbase.com/node/reference).
 
### Advanced Data APIs

#### Balances

##### GetSingleBalance

```ts
import { GetSingleBalanceResponse } from 'coinbase-cloud-sdk';

const singleBalance: GetSingleBalanceResponse = await coinbaseCloud.advanced
  .getSingleBalance(
    '0x00000000DF0635793e91d4f8e7426dbd9ed08471186f428D',
    '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
  );
```


##### GetBalances

```ts
import { GetBalancesResponse } from 'coinbase-cloud-sdk';

const balances: GetBalancesResponse = await coinbaseCloud.advanced
  .getBalances([
    {
      address: '0x00000000DF0635793e91d4f8e7426dbd9ed08471186f428D',
      contract: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
    },
    {
      address: '0xdf0635793e91d4f8e7426dbd9ed08471186f428d',
      contract: '0x6b175474e89094c44da98b954eedeac495271d0f'
    }
  ]);
```

#### Allowances

##### GetTokenAllowances

```ts
import { GetTokenAllowancesResponse } from 'coinbase-cloud-sdk';

const allowances: GetTokenAllowancesResponse = await coinbaseCloud.advanced
  .getTokenAllowances([
    {
      owner: '0xa646147bda82a866eba03568f363fc9c90185c6e',
      spender: '0xadd0e097b961572b2a1f5de572c622eef97e3d82',
      contracts: ['0xdac17f958d2ee523a2206206994597c13d831ec7']
    }
  ]);
```

#### Transactions & Transfers

##### GetTransactionByHash

```ts
import { GetTransactionByHashResponse } from 'coinbase-cloud-sdk';

const transaction: GetTransactionByHashResponse = await coinbaseCloud.advanced
  .getTransactionByHash(
    '0x2be70b2bcff662ba941c3f3c7706ef2c674d0d0ea4a13a91543cbe18862063d4'
  );
```

##### GetTransactionsByAddress

```ts
import { GetTransactionsByAddressResponse } from 'coinbase-cloud-sdk';

const transactions: GetTransactionsByAddressResponse = await coinbaseCloud.advanced
  .getTransactionsByAddress(
    '0xcAfB10eE663f465f9d10588AC44eD20eD608C11e',
    '0x0',
    '0xf183f2',
    'SENDER_OR_RECEIVER',
    'desc',
    20,
    1
  );
```

##### GetTokenTransfersByAddress

```ts
import { GetTokenTransfersByAddressResponse } from 'coinbase-cloud-sdk';

const tokenTransfers: GetTokenTransfersByAddressResponse = await coinbaseCloud.advanced
  .getTokenTransfersByAddress(
    '0x0000000000000000000000000000000000000000',
    '0xdb0db3',
    '0xea11e0',
    'RECEIVER_ONLY',
    'asc',
    10,
    1
  );
```

#### Contracts

##### GetTokenStandardEvents

```ts
import { GetTokenStandardEventsResponse } from 'coinbase-cloud-sdk';

const tokenEvents: GetTokenStandardEventsResponse = await coinbaseCloud.advanced
  .getTokenStandardEvents(
    '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    '0x1',
    '0xea11e0',
    ['0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'],
    'desc',
    10,
    1
  );
```

##### GetTokenMetadata

```ts
import { GetTokenContractMetadataResponse } from 'coinbase-cloud-sdk';

const tokenMetadata: GetTokenContractMetadataResponse = await coinbaseCloud.advanced
  .getTokenMetadata('0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48');
```

## References

- Coinbase Node [Developer Documentation](https://docs.cloud.coinbase.com/node/reference)
- Questions? Visit our [Developer Forums](https://forums.coinbasecloud.dev/).
- For bugs, please report an issue on Github.

## Contributing

Commit signing is required for contributing to this repo.
For details, see the docs on [contributing](./CONTRIBUTING.md) and [commit-signing](./docs/commit-signing.md).

## License

See [LICENSE](LICENSE).