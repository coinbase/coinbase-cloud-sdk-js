import { CoinbaseCloud, Network } from '../../../src';
import { API_CREDENTIALS } from './const';

export function initializeCoinbaseCloud(network: Network): CoinbaseCloud {
  return new CoinbaseCloud({
    apiUsername: API_CREDENTIALS[network].apiUsername,
    apiPassword: API_CREDENTIALS[network].apiPassword,
    network,
  });
}
