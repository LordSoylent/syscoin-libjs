/**
 * Syscoin API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.1.4
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { SinceBlockTransactionEntry } from './sinceBlockTransactionEntry';


export interface ListSinceBlockResponse {
    transactions?: Array<SinceBlockTransactionEntry>;
    /**
     * The hash of the last block
     */
    lastblock?: string;
}
