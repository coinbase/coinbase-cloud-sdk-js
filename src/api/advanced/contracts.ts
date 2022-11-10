/**
 * GetTokenStandardEventsResponse represents data returned from the GetTokenStandardEvents Advanced API.
 *
 * A list of parent transactions in the given block range, each with a sub-list of events that occurred as
 * part of the parent transaction. Note: The output does not specify the token type (ERC20 vs ERC721).
 *
 * {@link https://docs.cloud.coinbase.com/node/reference/advanced-api-reference#tokenstandardevents}
 *
 * @public
 */
export interface GetTokenStandardEventsResponse {
  /** REQUIRED. List of token events. */
  readonly events: TokenEvent[];
}

/** {@link https://docs.cloud.coinbase.com/node/reference/advanced-api-reference#tokenevent} */
export interface TokenEvent {
  /** REQUIRED. The transaction hash. */
  readonly transactionHash: string;

  /** The transaction index. */
  readonly transactionIndex?: string;

  /**
   * REQUIRED. Data returned for specific transaction.
   * Returns different properties based on event type, see examples.
   */
  readonly data: TokenEventData;

  /**
   * REQUIRED. Transfer (ERC-20 and ERC-721), Approval (ERC-20 and ERC-721), or ApprovalForAll (ERC-721 only).
   * Defaults to hashed signature if not one of the previous.
   */
  readonly eventType: string;

  /** REQUIRED. Method signature for the event type */
  readonly signature: string;

  /** REQUIRED. Hash of the event signature */
  readonly signatureHash: string;

  /** REQUIRED. The block hash. */
  readonly blockHash: string;

  /** REQUIRED. the block number. */
  readonly blockNumber: string;

  /** REQUIRED. Timestamp of when block was mined. */
  readonly blockTimestamp: string;
}

/** {@link https://docs.cloud.coinbase.com/node/reference/advanced-api-reference#tokeneventdata} */
export interface TokenEventData {
  /** For ERC-20 this represents the value. For ERC-721 this represents the token id. */
  readonly data?: string;

  /** The origin address. */
  readonly from?: string;

  /** For ERC-20 this represents the value. For ERC-721 this represents the token id. */
  readonly name: string;

  /**	The destination address. */
  readonly to?: string;

  /** Token owner address. */
  readonly owner?: string;

  /** Token spender address. */
  readonly spender?: string;

  /** Token operator address. */
  readonly operator?: string;

  /** true when operator receives approval, false when approval is revoked. */
  readonly approved?: boolean;

  /**
   * Stringified array. topics[0] is the hashed event signature.
   * Other entries in the array may include to and from addresses.
   */
  readonly topics?: string;
}

/**
 * GetTokenContractMetadataResponse represents data returned from the GetTokenContractMetadata Advanced API.
 *
 * Token metadata (ERC-20 or ERC-721) based on the input.
 *
 * {@link https://docs.cloud.coinbase.com/node/reference/advanced-api-reference#tokencontractmetadata}
 *
 * @public
 */
export interface GetTokenContractMetadataResponse {
  /** REQUIRED. The end block in which the balances were computed. The start block is genesis. */
  readonly blockHeight: string;

  /** REQUIRED. Metadata for a token. */
  readonly tokenMetadata: TokenMetadata;
}

/** {@link https://docs.cloud.coinbase.com/node/reference/advanced-api-reference#tokenmetadata} */
export interface TokenMetadata {
  /** REQUIRED. Name of token */
  readonly name: string;

  /** REQUIRED. Symbol for token */
  readonly symbol: string;

  /** REQUIRED. Total amount of token */
  readonly totalSupply: string;

  /** Number of decimals */
  readonly decimals?: number;
}
