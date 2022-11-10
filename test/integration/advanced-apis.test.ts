import { Network } from '../../src';
import { Allowance } from '../../src/api/advanced/allowances';
import { AddressAndContract } from '../../src/api/advanced/balances';
import { initializeCoinbaseCloud } from './util/util';

jest.setTimeout(50000);

describe('Advanced APIs E2E tests', () => {
  it.each([
    [Network.ETH_MAINNET, '0xa3e90da6c1d5ea0b1b4e881d1eaaaaaaf3c25cc2', '0x5180db8f5c931aae63c74266b211f580155ecac8'],
    [Network.ETH_GOERLI, '0xfd047531721d68736c0b053d57016e8773da01cf', '0xdb5c9bed811d201df5c2eb4e103e6712bc774fcf'],
  ])('getSingleBalance() for %s', async (network: Network, address: string, contract: string) => {
    const coinbaseCloud = initializeCoinbaseCloud(network);

    const response = await coinbaseCloud.advanced.getSingleBalance(address, contract);
    expect(parseInt(response.blockHeight)).toBeGreaterThan(0);

    expect(response).toEqual(
      expect.objectContaining({
        address: expect.any(String),
        blockHeight: expect.any(String),
        nativeAmount: expect.any(String),
        nativeUnit: expect.any(String),
      }),
    );

    if (response.tokenBalance !== undefined) {
      expect(response.tokenBalance).toEqual(
        expect.objectContaining({
          contract,
          amount: expect.any(String),
          decimals: expect.any(Number),
        }),
      );
    }
  });

  it.each([
    [
      Network.ETH_MAINNET,
      [
        {
          address: '0xa3e90da6c1d5ea0b1b4e881d1eaaaaaaf3c25cc2',
          contract: '0x5180db8f5c931aae63c74266b211f580155ecac8',
        },
        {
          address: '0xdf0635793e91d4f8e7426dbd9ed08471186f428d',
          contract: '0x6b175474e89094c44da98b954eedeac495271d0f',
        },
      ],
    ],
    [
      Network.ETH_GOERLI,
      [
        {
          address: '0xfd047531721d68736c0b053d57016e8773da01cf',
          contract: '0xdB5c9beD811D201df5c2EB4e103e6712bc774fCf',
        },
        {
          address: '0x95C5B8864C911e5cAbaA1Fa9A5cb517Ce6563325',
          contract: '0xdB5c9beD811D201df5c2EB4e103e6712bc774fCf',
        },
      ],
    ],
  ])('getBalances() for %s', async (network: Network, addressesAndContracts: AddressAndContract[]) => {
    const coinbaseCloud = initializeCoinbaseCloud(network);
    const response = await coinbaseCloud.advanced.getBalances(addressesAndContracts);

    expect(response.balances.length).toEqual(addressesAndContracts.length);
    for (const balance of response.balances) {
      expect(parseInt(balance.blockHeight)).toBeGreaterThan(0);
      expect(balance).toEqual(
        expect.objectContaining({
          address: expect.any(String),
          blockHeight: expect.any(String),
          nativeAmount: expect.any(String),
          nativeUnit: expect.any(String),
        }),
      );

      expect(balance.tokenBalances.length).toBeGreaterThanOrEqual(1);
      for (const tokenBalance of balance.tokenBalances) {
        expect(tokenBalance).toEqual(
          expect.objectContaining({
            contract: expect.any(String),
            amount: expect.any(String),
            decimals: expect.any(Number),
          }),
        );
      }
    }
  });

  it.each([
    [
      Network.ETH_MAINNET,
      [
        {
          owner: '0xa646147bda82a866eba03568f363fc9c90185c6e',
          spender: '0xadd0e097b961572b2a1f5de572c622eef97e3d82',
          contracts: ['0xdac17f958d2ee523a2206206994597c13d831ec7'],
        },
      ],
    ],
    [
      Network.ETH_GOERLI,
      [
        {
          owner: '0x95C5B8864C911e5cAbaA1Fa9A5cb517Ce6563325',
          spender: '0x95C5B8864C911e5cAbaA1Fa9A5cb517Ce6563325',
          contracts: ['0xdB5c9beD811D201df5c2EB4e103e6712bc774fCf'],
        },
      ],
    ],
  ])('getTokenAllowances() for %s', async (network: Network, allowances: Allowance[]) => {
    const coinbaseCloud = initializeCoinbaseCloud(network);
    const response = await coinbaseCloud.advanced.getTokenAllowances(allowances);

    expect(response.allowances.length).toEqual(allowances.length);
    for (const allowance of response.allowances) {
      expect(parseInt(allowance.blockHeight)).toBeGreaterThan(0);
      expect(allowance).toEqual(
        expect.objectContaining({
          owner: expect.any(String),
          spender: expect.any(String),
        }),
      );

      expect(allowance.tokenAllowances.length).toBeGreaterThanOrEqual(1);
      for (const tokenAllowance of allowance.tokenAllowances) {
        expect(tokenAllowance).toEqual(
          expect.objectContaining({
            amount: expect.any(String),
            contract: expect.any(String),
            decimals: expect.any(Number),
          }),
        );
      }
    }
  });

  it.each([
    [Network.ETH_MAINNET, '0x2be70b2bcff662ba941c3f3c7706ef2c674d0d0ea4a13a91543cbe18862063d4'],
    [Network.ETH_MAINNET, '0x30eda1f9a9d1ec16be8802d2332c7696bd25897eab15ad0269f8e73ed9a9e2b9'],
    [Network.ETH_MAINNET, '0xf21640da131e6cabb14fa291d0d95ca08a8c5aadb6548c5234f11dd8361b3693'],
    [Network.ETH_MAINNET, '0x48db4231fb7de49b624f0860fed5f459ca7231ff1f22ef58f00c1cefd6e454ef'],
    [Network.ETH_GOERLI, '0x33d3227029bb73e03ede66abe92824a09c3ef425c5453eee406b51898f42b5ca'],
  ])('getTransactionByHash() for %s', async (network: Network, transactionHash: string) => {
    const coinbaseCloud = initializeCoinbaseCloud(network);
    const response = await coinbaseCloud.advanced.getTransactionByHash(transactionHash);

    expect(response.transaction).toEqual(
      expect.objectContaining({
        transactionHash,
        transactionIndex: expect.any(String),
        from: expect.any(String),
        to: expect.any(String),
        value: expect.any(String),
        gasLimit: expect.any(String),
        gasPrice: expect.any(String),
        gasUsed: expect.any(String),
        cumulativeGasUsed: expect.any(String),
        status: expect.any(String),
        input: expect.any(String),
        nonce: expect.any(String),
        blockHash: expect.any(String),
        blockNumber: expect.any(String),
        blockTimestamp: expect.any(String),
      }),
    );
  });

  it.each([
    [
      Network.ETH_MAINNET,
      '0xcAfB10eE663f465f9d10588AC44eD20eD608C11e',
      '0x0',
      '0xf183f2',
      'SENDER_OR_RECEIVER',
      'desc',
      100,
      1,
    ],
    [
      Network.ETH_GOERLI,
      '0xdB5c9beD811D201df5c2EB4e103e6712bc774fCf',
      '0x0',
      '0x778a12',
      'SENDER_OR_RECEIVER',
      'asc',
      10,
      1,
    ],
  ])(
    'getTransactionsByAddress() for %s',
    async (
      network: Network,
      address: string,
      blockStart: string,
      blockEnd: string,
      addressFilter: string,
      sort: string,
      pageSize: number,
      pageNumber: number,
    ) => {
      const coinbaseCloud = initializeCoinbaseCloud(network);
      const response = await coinbaseCloud.advanced.getTransactionsByAddress(
        address,
        blockStart,
        blockEnd,
        addressFilter,
        sort,
        pageSize,
        pageNumber,
      );

      expect(response.transactions.length).toBeGreaterThanOrEqual(1);
      for (const transaction of response.transactions) {
        expect(transaction).toEqual(
          expect.objectContaining({
            transactionHash: expect.any(String),
            transactionIndex: expect.any(String),
            from: expect.any(String),
            to: expect.any(String),
            value: expect.any(String),
            gasLimit: expect.any(String),
            gasPrice: expect.any(String),
            gasUsed: expect.any(String),
            cumulativeGasUsed: expect.any(String),
            status: expect.any(String),
            input: expect.any(String),
            nonce: expect.any(String),
            blockHash: expect.any(String),
            blockNumber: expect.any(String),
            blockTimestamp: expect.any(String),
          }),
        );
      }
    },
  );

  it.each([
    [
      Network.ETH_MAINNET,
      '0x7be8076f4ea4a4ad08075c2508e481d6c946d12b',
      '0x0',
      '0xdb0db3',
      'SENDER_OR_RECEIVER',
      'desc',
      50,
      1,
    ],
    [
      Network.ETH_GOERLI,
      '0xFd047531721d68736c0b053d57016e8773Da01CF',
      '0x0',
      '0x778a12',
      'SENDER_OR_RECEIVER',
      'asc',
      3,
      1,
    ],
  ])(
    'getTokenTransfersByAddress() for %s',
    async (
      network: Network,
      address: string,
      blockStart: string,
      blockEnd: string,
      addressFilter: string,
      sort: string,
      pageSize: number,
      pageNumber: number,
    ) => {
      const coinbaseCloud = initializeCoinbaseCloud(network);
      const response = await coinbaseCloud.advanced.getTokenTransfersByAddress(
        address,
        blockStart,
        blockEnd,
        addressFilter,
        sort,
        pageSize,
        pageNumber,
      );

      expect(response.tokenTransfers.length).toBeGreaterThanOrEqual(1);
      for (const tokenTransfer of response.tokenTransfers) {
        expect(tokenTransfer).toEqual(
          expect.objectContaining({
            tokenAddress: expect.any(String),
            tokenType: expect.any(String),
            from: expect.any(String),
            to: expect.any(String),
            value: expect.any(String),
            transactionHash: expect.any(String),
            transactionIndex: expect.any(String),
          }),
        );
      }
    },
  );

  it.each([
    [
      Network.ETH_MAINNET,
      '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
      '0x1',
      '0xdb0db3',
      ['0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'],
      'asc',
      2,
      1,
    ],
    [
      Network.ETH_GOERLI,
      '0xdB5c9beD811D201df5c2EB4e103e6712bc774fCf',
      '0x0',
      '0x778a12',
      ['0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'],
      'asc',
      15,
      1,
    ],
  ])(
    'getTokenStandardEvents() for %s',
    async (
      network: Network,
      contract: string,
      blockStart: string,
      blockEnd: string,
      eventSignatureHashes: string[],
      sort: string,
      pageSize: number,
      pageNumber: number,
    ) => {
      const coinbaseCloud = initializeCoinbaseCloud(network);
      const response = await coinbaseCloud.advanced.getTokenStandardEvents(
        contract,
        blockStart,
        blockEnd,
        eventSignatureHashes,
        sort,
        pageSize,
        pageNumber,
      );

      expect(response.events.length).toBeGreaterThanOrEqual(1);
      for (const tokenEvent of response.events) {
        expect(tokenEvent).toEqual(
          expect.objectContaining({
            transactionHash: expect.any(String),
            eventType: expect.any(String),
            signature: expect.any(String),
            signatureHash: expect.any(String),
            blockHash: expect.any(String),
            blockNumber: expect.any(String),
            blockTimestamp: expect.any(String),
            data: expect.objectContaining({
              name: expect.any(String),
            }),
          }),
        );
      }
    },
  );

  it.each([
    [Network.ETH_MAINNET, '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'],
    [Network.ETH_MAINNET, '0x1A92f7381B9F03921564a437210bB9396471050C'],
    [Network.ETH_GOERLI, '0xdB5c9beD811D201df5c2EB4e103e6712bc774fCf'],
  ])('getTokenMetadata() for %s', async (network: Network, contract: string) => {
    const coinbaseCloud = initializeCoinbaseCloud(network);
    const response = await coinbaseCloud.advanced.getTokenMetadata(contract);

    expect(response).toEqual(
      expect.objectContaining({
        blockHeight: expect.any(String),
        tokenMetadata: expect.objectContaining({
          name: expect.any(String),
          symbol: expect.any(String),
          totalSupply: expect.any(String),
        }),
      }),
    );
  });
});
