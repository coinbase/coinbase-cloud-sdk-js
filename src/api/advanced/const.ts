/**
 * Currently, the Advanced APIs either expect optional parameters to have the correct format
 * or not be present at all. This does not work well with how the JsonRpcProvider sends JSON-RPC
 * requests since it will send those as null. To work around that, we define the default values
 * for these optional parameters here in the client SDK.
 */
export const DEFAULT_ADDRESS_FILTER = 'SENDER_OR_RECEIVER';
/**
 * 1 Trillion. This should be the same as the default value of 'latest' block.
 */
export const DEFAULT_BLOCK_END = '0x174876e800';
export const DEFAULT_SORTING_PREFERENCE = 'desc';
export const DEFAULT_PAGE_SIZE = 1000;
export const DEFAULT_PAGE_NUMBER = 1;
export const DEFAULT_EVENT_SIGNATURE_HASHES: string[] = [];
