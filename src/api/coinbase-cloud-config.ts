import { DEFAULT_NETWORK } from '../const';
import { CoinbaseCloudSettings, Network } from '../types/types';

/**
 * CoinbaseCloudConfig defines the configuration needed to create an instance of
 * the CoinbaseCloud SDK.
 *
 * @public
 */
export class CoinbaseCloudConfig {
  /** The CoinbaseCloud API username. This can be found in your Node project's settings. */
  readonly apiUsername: string;

  /** The CoinbaseCloud API password associated with the username. */
  readonly apiPassword: string;

  /** The Network that you want the SDK to interact with. */
  readonly network: Network;

  constructor(config: CoinbaseCloudSettings) {
    this.apiUsername = config.apiUsername;
    this.apiPassword = config.apiPassword;
    this.network = config.network || DEFAULT_NETWORK;
  }
}
