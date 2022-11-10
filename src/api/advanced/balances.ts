/**
 * {@link https://docs.cloud.coinbase.com/node/reference/advanced-api-reference#addressandcontract }
 *
 * @public
 */
export interface AddressAndContract {
  /** REQUIRED. Account address. */
  readonly address: string;

  /** REQUIRED. Token identifier. */
  readonly contract: string;
}

/**
 * GetBalancesResponse represents data returned from the GetBalances Advanced API.
 *
 * @public
 */
export interface GetBalancesResponse {
  /**
   * A list of balance amounts for the given token identifiers and block range in which
   * the balances were computed. Note that the start block is always genesis for this method.
   */
  readonly balances: MultiTokenBalance[];
}

/**
 * GetBalancesResponse represents data returned from the GetSingleBalance Advanced API.
 * {@link https://docs.cloud.coinbase.com/node/reference/advanced-api-reference#singlebalance }
 *
 * @public
 */
export interface GetSingleBalanceResponse {
  /** REQUIRED. The end block in which the balances were computed. The start block is genesis */
  readonly blockHeight: string;

  /** REQUIRED. Account address. */
  readonly address: string;

  /**
   * REQUIRED. Balance of the native cryptocurrency (ETH, BTC, etc) for the blockchain and network.
   * Balance is returned in the smallest possible unit. 1 ETH = 10^18 Wei.
   */
  readonly nativeAmount: string;

  /** REQUIRED. Unit the balance is returned in. Currently Wei-only. */
  readonly nativeUnit: string;

  /** The token balance. */
  readonly tokenBalance?: TokenBalance;
}

/** {@link https://docs.cloud.coinbase.com/node/reference/advanced-api-reference#tokenbalance } */
export interface TokenBalance {
  /** REQUIRED. Token identifier. */
  readonly contract: string;

  /** REQUIRED. Balance Amount (For ERC-721 it is the number of tokens). */
  readonly amount: string;

  /** REQUIRED. Unit (decimals for ERC-20). */
  readonly decimals: number;
}

/** {@link https://docs.cloud.coinbase.com/node/reference/advanced-api-reference#multitokenbalance } */
export interface MultiTokenBalance {
  /** REQUIRED. The end block in which the balances were computed. The start block is genesis. */
  readonly blockHeight: string;

  /** REQUIRED. Account address. */
  readonly address: string;

  /**
   * REQUIRED. Balance of the native cryptocurrency (ETH, BTC, etc) for the blockchain and network.
   * Balance is returned in the smallest possible unit. 1 ETH = 10^18 Wei.
   */
  readonly nativeAmount: string;

  /** REQUIRED. Unit the balance is returned in. Currently Wei-only. */
  readonly nativeUnit: string;

  /** REQUIRED. The token balances. */
  readonly tokenBalances: TokenBalance[];
}
