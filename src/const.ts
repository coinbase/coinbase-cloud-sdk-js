import { Network } from './types/types';

export const DEFAULT_NETWORK = Network.ETH_MAINNET;

/**
 * Mapping of network names to their corresponding Network strings used to
 * create an ethers.js Provider instance.
 */
export const EthersNetwork = {
  [Network.ETH_MAINNET]: 'mainnet',
  [Network.ETH_GOERLI]: 'goerli',
};
