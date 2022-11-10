/**
 * Options object used to configure the CoinbaseCloud SDK.
 *
 * @public
 */
export interface CoinbaseCloudSettings {
  /** The CoinbaseCloud API username. This can be found in your Node project's settings. */
  readonly apiUsername: string;

  /** The CoinbaseCloud API password associated with the username. */
  readonly apiPassword: string;

  /** The name of the network for the SDK to interact with. */
  readonly network?: Network;
}

/**
 * The supported networks by CoinbaseCloud. Note that some functions are not available
 * on all networks. Please refer to the CoinbaseCloud documentation for more details
 * {@link https://docs.cloud.coinbase.com/node/reference/welcome-to-node}
 *
 * @public
 */
export enum Network {
  ETH_MAINNET = 'eth-mainnet',
  ETH_GOERLI = 'eth-goerli',
}
