import { CoinbaseCloud, Network } from '../../src';

describe('CoinbaseCloudProvider unit tests', () => {
  it.each([
    [Network.ETH_MAINNET, 'https://mainnet.ethereum.coinbasecloud.net/'],
    [Network.ETH_GOERLI, 'https://goerli.ethereum.coinbasecloud.net/'],
  ])('initializes connection for %s', async (network: Network, expectedUrl: string) => {
    const coinbaseCloud = new CoinbaseCloud({
      apiUsername: 'user',
      apiPassword: 'pw',
      network,
    });

    const provider = coinbaseCloud.provider;
    expect(provider.connection.url).toEqual(expectedUrl);
  });
});
