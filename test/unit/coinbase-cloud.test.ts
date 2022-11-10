import { CoinbaseCloud, Network } from '../../src';
import { DEFAULT_NETWORK } from '../../src/const';

describe('CoinbaseCloud class', () => {
  it.each([[Network.ETH_MAINNET], [Network.ETH_GOERLI]])('initializes provider for %s', async (network: Network) => {
    const coinbaseCloud = new CoinbaseCloud({
      apiUsername: 'user',
      apiPassword: 'pw',
      network,
    });

    expect(coinbaseCloud.provider).toBeDefined();
  });

  it('initializes to default values', () => {
    const coinbaseCloud = new CoinbaseCloud({
      apiUsername: 'user',
      apiPassword: 'password',
    });
    expect(coinbaseCloud.config.network).toEqual(DEFAULT_NETWORK);
  });
});
