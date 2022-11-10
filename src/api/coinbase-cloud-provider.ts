import { EthersNetwork } from '../const';
import { Network } from '../types/types';
import { VERSION } from '../version';
import { CoinbaseCloudConfig } from './coinbase-cloud-config';
import { JsonRpcProvider } from '@ethersproject/providers';
import { ConnectionInfo } from '@ethersproject/web';

/**
 * CoinbaseCloudProvider is an extension of ether's.js JsonRpcProvider.
 *
 * Do not call this constructor directly. Instead, instantiate an instance of
 * {@link CoinbaseCloud} and get the provider via {@link CoinbaseCloud.provider}.
 *
 * @public
 */
export class CoinbaseCloudProvider extends JsonRpcProvider {
  /** @internal */
  constructor(config: CoinbaseCloudConfig) {
    const connection = getCoinbaseCloudConnectionInfo(config.network, config.apiUsername, config.apiPassword);

    // Convert the CoinbaseCloud Network to a network understandable by ethers.js.
    const ethersNetwork = EthersNetwork[config.network];
    super(connection, ethersNetwork);
  }
}

/**
 * Returns a {@link ConnectionInfo} object compatible with ethers.js that has
 * the correct URL and headers configured for CoinbaseCloud.
 *
 * @internal
 */
function getCoinbaseCloudConnectionInfo(network: Network, user: string, password: string): ConnectionInfo {
  const url = getCoinbaseCloudHttpUrl(network);
  return {
    headers: {
      'CoinbaseCloud-Ethers-Sdk-Version': VERSION,
    },
    url,
    user,
    password,
  };
}

/**
 * Returns the base URL for making CoinbaseCloud API requests.
 *
 * @internal
 */
function getCoinbaseCloudHttpUrl(network: Network): string {
  const networkComponent = encodeURIComponent(EthersNetwork[network]);
  return `https://${networkComponent}.ethereum.coinbasecloud.net/`;
}
