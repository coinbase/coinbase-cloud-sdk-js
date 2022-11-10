import { CoinbaseCloudSettings } from '../types/types';
import { AdvancedApis } from './advanced/advanced';
import { CoinbaseCloudConfig } from './coinbase-cloud-config';
import { CoinbaseCloudProvider } from './coinbase-cloud-provider';
import { JsonRpcProvider } from '@ethersproject/providers';

/**
 * The CoinbaseCloud ethers.js SDK client.
 *
 * Each SDK instance is associated with a network, an API username and the corresponding API password.
 *
 * @public
 */
export class CoinbaseCloud {
  /**
   * The JsonRpcProvider used to interact with the network.
   * This can be extracted and used as any other ethers.js JsonRpcProvider.
   */
  readonly provider: JsonRpcProvider;

  /** The configuration settings used by this SDK instance. */
  readonly config: CoinbaseCloudConfig;

  /** Advanced can be used to query Coinbase Cloud's Advanced Data APIs */
  readonly advanced: AdvancedApis;

  /**
   * @param {CoinbaseCloudSettings} [settings] - The CoinbaseCloud configuration
   * @public
   */
  constructor(settings: CoinbaseCloudSettings) {
    this.config = new CoinbaseCloudConfig(settings);
    this.provider = new CoinbaseCloudProvider(this.config);
    this.advanced = new AdvancedApis(this.provider);
  }
}
