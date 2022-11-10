/**
 * GetTokenTransfersByAddressResponse represents data returned from the GetTokenTransfersByAddress Advanced API.
 * {@link https://docs.cloud.coinbase.com/node/reference/advanced-api-reference#tokentransfersbyaddress}
 *
 * @public
 */
export interface GetTokenTransfersByAddressResponse {
  /** REQUIRED. List of blocks and their associated token transfers. */
  readonly tokenTransfers: TokenTransfer[];
}

/**
 * GetTransactionByHashResponse represents data returned from the GetTransactionByHash Advanced API.
 * {@link https://docs.cloud.coinbase.com/node/reference/advanced-api-reference#coinbasecloud_gettransactionbyhash}
 *
 * @public
 */
export interface GetTransactionByHashResponse {
  /** The given transaction with all associated internal transactions and token transfers. */
  readonly transaction: Transaction;
}

/**
 * GetTransactionsByAddressResponse represents data returned from the GetTransactionsByAddress Advanced API.
 * {@link https://docs.cloud.coinbase.com/node/reference/advanced-api-reference#coinbasecloud_gettransactionsbyaddress}
 *
 * @public
 */
export interface GetTransactionsByAddressResponse {
  /** REQUIRED. List of transactions */
  readonly transactions: Transaction[];
}

/** {@link https://docs.cloud.coinbase.com/node/reference/advanced-api-reference#internaltransaction} */
export interface InternalTransaction {
  /** REQUIRED. Type of internal transaction, e.g. CREATE, CALL, CALLCODE, DELEGATECALL, SUICIDE */
  readonly traceType: string;

  /** REQUIRED. The origin address. */
  readonly from: string;

  /** REQUIRED. The destination address. */
  readonly to: string;

  /** REQUIRED. The value in native blockchain currency. */
  readonly value: string;

  /** 	The maximum gas limit of a transaction. */
  readonly gasLimit?: string;
}

/** {@link https://docs.cloud.coinbase.com/node/reference/advanced-api-reference#tokentransfer} */
export interface TokenTransfer {
  /** REQUIRED. Address location for the token contract */
  readonly tokenAddress: string;

  /** REQUIRED. "erc20" or "erc721" */
  readonly tokenType: string;

  /** REQUIRED. The origin address. */
  readonly from: string;

  /** REQUIRED. The destination address. */
  readonly to: string;

  /**
   * REQUIRED. For ERC-20, gives quantity of tokens transferred.
   * For ERC-721, gives list of token IDs of the token transferred
   */
  readonly value: string;

  /** REQUIRED. The transaction's identifying hash */
  readonly transactionHash: string;

  /** REQUIRED. The transaction's index position */
  readonly transactionIndex: string;

  /** REQUIRED. The block hash. */
  readonly blockHash: string;

  /** REQUIRED. the block number. */
  readonly blockNumber: string;

  /** REQUIRED. Timestamp of when block was mined. */
  readonly blockTimestamp: string;
}

/** {@link https://docs.cloud.coinbase.com/node/reference/advanced-api-reference#transaction} */
export interface Transaction {
  /** REQUIRED. The transaction's identifying hash */
  readonly transactionHash: string;

  /** REQUIRED. The transaction's index position */
  readonly transactionIndex: string;

  /** REQUIRED. The origin address. */
  readonly from: string;

  /** REQUIRED. The destination address. */
  readonly to: string;

  /** REQUIRED. The value in native blockchain currency. */
  readonly value: string;

  /** REQUIRED. The maximum gas limit of a transaction. */
  readonly gasLimit: string;

  /** REQUIRED. Transaction's cost per unit of gas in native blockchain currency. */
  readonly gasPrice: string;

  /** REQUIRED. Amount of gas actually used in transaction. */
  readonly gasUsed: string;

  /** REQUIRED. Total amount of gas used in the block of the transaction. */
  readonly cumulativeGasUsed: string;

  /** REQUIRED. "1": Success, "0": Fail, Other return codes: Unknown. */
  readonly status: string;

  /** 	REQUIRED. Transaction's input data. */
  readonly input: string;

  /** REQUIRED. Transaction's nonce. */
  readonly nonce: string;

  /** REQUIRED. The block hash. */
  readonly blockHash: string;

  /** REQUIRED. the block number. */
  readonly blockNumber: string;

  /** REQUIRED. Timestamp of when block was mined. */
  readonly blockTimestamp: string;

  /** List of internal transactions. */
  readonly internalTransactions?: InternalTransaction[];

  /** List of token transfers. */
  readonly tokenTransfers?: TokenTransfer[];
}
