import { TokenBalance } from './balances';

/** {@link https://docs.cloud.coinbase.com/node/reference/advanced-api-reference#allowance } */
export interface Allowance {
  /** REQUIRED. The owner address. */
  readonly owner: string;

  /** REQUIRED. The spender address. */
  readonly spender: string;

  /** REQUIRED. List of contract addresses. */
  readonly contracts: string[];
}

/** {@link https://docs.cloud.coinbase.com/node/reference/advanced-api-reference#tokenallowance } */
export interface TokenAllowance {
  /** REQUIRED. The end block in which the balances were computed. The start block is genesis. */
  readonly blockHeight: string;

  /** REQUIRED. The owner address. */
  readonly owner: string;

  /** REQUIRED. The spender address. */
  readonly spender: string;

  /** REQUIRED. List of token balances */
  readonly tokenAllowances: TokenBalance[];
}

/**
 * GetTokenAllowancesResponse represents data returned from the GetTokenAllowances Advanced API.
 * {@link https://docs.cloud.coinbase.com/node/reference/advanced-api-reference#coinbasecloud_gettokenallowances}
 *
 * @public
 */
export interface GetTokenAllowancesResponse {
  /**
   * List of allowances, including owner address, spender address, the block range in which the balances were
   * computed (start block is genesis), and a list of allowance information.
   */
  readonly allowances: TokenAllowance[];
}
