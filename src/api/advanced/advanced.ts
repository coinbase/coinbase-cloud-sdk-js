import { Allowance, GetTokenAllowancesResponse } from './allowances';
import { AddressAndContract, GetBalancesResponse, GetSingleBalanceResponse } from './balances';
import {
  DEFAULT_ADDRESS_FILTER,
  DEFAULT_BLOCK_END,
  DEFAULT_EVENT_SIGNATURE_HASHES,
  DEFAULT_PAGE_NUMBER,
  DEFAULT_PAGE_SIZE,
  DEFAULT_SORTING_PREFERENCE,
} from './const';
import { GetTokenContractMetadataResponse, GetTokenStandardEventsResponse } from './contracts';
import {
  GetTokenTransfersByAddressResponse,
  GetTransactionByHashResponse,
  GetTransactionsByAddressResponse,
} from './transfers';
import { JsonRpcProvider } from '@ethersproject/providers';

/**
 * The Advanced API simplifies access to blockchain data by offering data cuts which
 * are hard to get via the native Ethereum API, and offers aggregated and filtered
 * data in a single API call. The Advanced API provides access to token balances for
 * accounts, transactions and transfers for accounts, smart contract event logs, and more.
 *
 * {@link https://docs.cloud.coinbase.com/node/reference/advanced-api-overview}
 */
export class AdvancedApis {
  /**
   * The JsonRpcProvider used to interact with the network.
   *
   * @internal
   */
  readonly provider: JsonRpcProvider;

  /** @internal */
  constructor(provider: JsonRpcProvider) {
    this.provider = provider;
  }

  /**
   * Get an accurate balance for a single token and a single account address.
   *
   * The balance takes into account transactions, internal transfers, and any
   * supported token transfers. The caller can expect low latency from this
   * method compared to the getBalances method.
   *
   * {@link https://docs.cloud.coinbase.com/node/reference/advanced-api-reference#coinbasecloud_getsinglebalance}
   *
   * @param address - An account address or a contract address.
   * @param contract - Token identifier. For Ethereum the token identifier is the token contract address.
   * @public
   */
  getSingleBalance(address: string, contract: string): Promise<GetSingleBalanceResponse> {
    return this.provider.send('coinbaseCloud_getSingleBalance', [address, contract]);
  }

  /**
   * Get balance for multiple account addresses across one or more tokens within a single blockchain and network.
   *
   * The balance incorporates transactions, internal transfers and all supported token transfers.
   * Supports ERC-20 and ERC-721. This API is meant to be our primary API to get balances.
   * A more simple and lower latency API that just fetches balance for a single address and token is getSingleBalance.
   *
   * {@link https://docs.cloud.coinbase.com/node/reference/advanced-api-reference#coinbasecloud_getbalances}
   *
   * @param addressesAndContracts - List of account or contract addresses and token identifiers.
   * 	For Ethereum the token identifier is the token contract address.
   * @public
   */
  getBalances(addressesAndContracts: AddressAndContract[]): Promise<GetBalancesResponse> {
    return this.provider.send('coinbaseCloud_getBalances', [addressesAndContracts]);
  }

  /**
   * Get allowances for a specified owner and spender across one or more tokens.
   *
   * {@link https://docs.cloud.coinbase.com/node/reference/advanced-api-reference#coinbasecloud_gettokenallowances}
   *
   * @param allowances - List of owner addresses, spender addresses, and token identifiers.
   * 	For Ethereum, the token identifier is the token contract address.
   * @public
   */
  getTokenAllowances(allowances: Allowance[]): Promise<GetTokenAllowancesResponse> {
    return this.provider.send('coinbaseCloud_getTokenAllowances', [allowances]);
  }

  /**
   * Get detailed information about a transaction, including all internal transactions and
   * token transfers that were triggered by the transaction.
   *
   * {@link https://docs.cloud.coinbase.com/node/reference/advanced-api-reference#coinbasecloud_gettransactionbyhash}
   *
   * @param transactionHash - Transaction hash.
   * @public
   */
  getTransactionByHash(transactionHash: string): Promise<GetTransactionByHashResponse> {
    return this.provider.send('coinbaseCloud_getTransactionByHash', [transactionHash]);
  }

  /**
   * Get external transactions, internal transactions (triggered by smart contracts) and
   * token transfers for a given address. Includes activity from and to the input address.
   * Transactions are returned in reverse chronological order.
   *
   * {@link https://docs.cloud.coinbase.com/node/reference/advanced-api-reference#coinbasecloud_gettransactionsbyaddress}
   *
   * @param address - Account address.
   * @param blockStart - Start of block range to scan for transactions.
   * @param blockEnd - End of block range to scan for transactions. Defaults to latest.
   * @param addressFilter - Filter transactions by SENDER_ONLY, RECEIVER_ONLY, or
   * 	SENDER_OR_RECEIVER. Defaults to SENDER_OR_RECEIVER.
   * @param sort - The sorting preference, use asc to sort by ascending and desc to sort by descending.
   *  The default is desc. Tip: Specify a smaller blockStart and blockEnd range for faster search results.
   * @param pageSize - The number of transactions displayed per page. The default and max value are 1000.
   *  See [Handle pagination]{@link https://docs.cloud.coinbase.com/node/reference/advanced-api-quickstart#handle-pagination}.
   * @param pageNumber - The integer page number, if pagination is enabled. It starts with 1.
   *  See [Handle pagination]{@link https://docs.cloud.coinbase.com/node/reference/advanced-api-quickstart#handle-pagination}.
   * @public
   */
  getTransactionsByAddress(
    address: string,
    blockStart: string,
    blockEnd = DEFAULT_BLOCK_END,
    addressFilter = DEFAULT_ADDRESS_FILTER,
    sort = DEFAULT_SORTING_PREFERENCE,
    pageSize = DEFAULT_PAGE_SIZE,
    pageNumber = DEFAULT_PAGE_NUMBER,
  ): Promise<GetTransactionsByAddressResponse> {
    return this.provider.send('coinbaseCloud_getTransactionsByAddress', [
      address,
      blockStart,
      blockEnd,
      addressFilter,
      sort,
      pageSize,
      pageNumber,
    ]);
  }

  /**
   * Get token transfers for a given address (in reverse chronological order).
   * Includes activity from and to the input address.
   *
   * {@link https://docs.cloud.coinbase.com/node/reference/advanced-api-reference#coinbasecloud_gettokentransfersbyaddress}
   *
   * @param address - Account address.
   * @param blockStart - Inclusive of specified block.
   * @param blockEnd - Inclusive of specified block. Defaults to latest.
   * @param addressFilter - Filter transfers by SENDER_ONLY, RECEIVER_ONLY, or
   * 	SENDER_OR_RECEIVER. Defaults to SENDER_OR_RECEIVER.
   * @param sort - The sorting preference, use asc to sort by ascending and desc to sort by descending.
   *  The default is desc. Tip: Specify a smaller blockStart and blockEnd range for faster search results.
   * @param pageSize - The number of transfers displayed per page. The default and max value are 1000.
   *  See [Handle pagination]{@link https://docs.cloud.coinbase.com/node/reference/advanced-api-quickstart#handle-pagination}.
   * @param pageNumber - The integer page number, if pagination is enabled. It starts with 1.
   *  See [Handle pagination]{@link https://docs.cloud.coinbase.com/node/reference/advanced-api-quickstart#handle-pagination}.
   * @public
   */
  getTokenTransfersByAddress(
    address: string,
    blockStart: string,
    blockEnd = DEFAULT_BLOCK_END,
    addressFilter = DEFAULT_ADDRESS_FILTER,
    sort = DEFAULT_SORTING_PREFERENCE,
    pageSize = DEFAULT_PAGE_SIZE,
    pageNumber = DEFAULT_PAGE_NUMBER,
  ): Promise<GetTokenTransfersByAddressResponse> {
    return this.provider.send('coinbaseCloud_getTokenTransfersByAddress', [
      address,
      blockStart,
      blockEnd,
      addressFilter,
      sort,
      pageSize,
      pageNumber,
    ]);
  }

  /**
   * Get events triggered by the given token contract.
   * The event data is returned in an easy-to-read format.
   * Only supports events defined by Ethereum standards for ERC-20 and ERC-721 tokens.
   *
   * Different event types will return different event data.
   *
   * {@link https://docs.cloud.coinbase.com/node/reference/advanced-api-reference#coinbasecloud_gettokenstandardevents}
   *
   * @param contract - Account address.
   * @param blockStart - Start of block range to scan for events.
   * @param blockEnd - End of block range to scan for events. Defaults to latest.
   * @param eventSignatureHashes - List of event signature hashes. Defaults to all
   * 	standard events for ERC-20/ERC-721 (Transfer, Approval, ApprovalForAll)
   * @param sort - The sorting preference, use asc to sort by ascending and desc to sort by descending.
   *  The default is desc. Tip: Specify a smaller blockStart and blockEnd range for faster search results.
   * @param pageSize - The number of events displayed per page. The default and max value are 1000.
   *  See [Handle pagination]{@link https://docs.cloud.coinbase.com/node/reference/advanced-api-quickstart#handle-pagination}.
   * @param pageNumber - The integer page number, if pagination is enabled. It starts with 1.
   *  See [Handle pagination]{@link https://docs.cloud.coinbase.com/node/reference/advanced-api-quickstart#handle-pagination}.
   * @public
   */
  getTokenStandardEvents(
    contract: string,
    blockStart: string,
    blockEnd = DEFAULT_BLOCK_END,
    eventSignatureHashes = DEFAULT_EVENT_SIGNATURE_HASHES,
    sort = DEFAULT_SORTING_PREFERENCE,
    pageSize = DEFAULT_PAGE_SIZE,
    pageNumber = DEFAULT_PAGE_NUMBER,
  ): Promise<GetTokenStandardEventsResponse> {
    return this.provider.send('coinbaseCloud_getTokenStandardEvents', [
      contract,
      blockStart,
      blockEnd,
      eventSignatureHashes,
      sort,
      pageSize,
      pageNumber,
    ]);
  }

  /**
   * Get metadata for the given token contract address.
   *
   * {@link https://docs.cloud.coinbase.com/node/reference/advanced-api-reference#coinbasecloud_gettokenmetadata}
   *
   * @param contract - The token contract.
   * @public
   */
  getTokenMetadata(contract: string): Promise<GetTokenContractMetadataResponse> {
    return this.provider.send('coinbaseCloud_getTokenMetadata', [contract]);
  }
}
