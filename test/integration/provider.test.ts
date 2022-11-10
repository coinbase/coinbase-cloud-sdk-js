import { Network } from '../../src';
import { initializeCoinbaseCloud } from './util/util';

jest.setTimeout(50000);
describe('CoinbaseCloudProvider E2E tests', () => {
  it.each([[Network.ETH_MAINNET], [Network.ETH_GOERLI]])('getBlockNumber() for %s', async (network: Network) => {
    const coinbaseCloud = initializeCoinbaseCloud(network);

    const block = await coinbaseCloud.provider.getBlockNumber();
    expect(block).toBeDefined();
  });
});
