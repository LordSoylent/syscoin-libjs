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


export interface CertTransferRequest {
    /**
     * Certificate guidkey.
     */
    guid: string;
    /**
     * Alias to transfer this certificate to.
     */
    alias: string;
    /**
     * public data, 256 characters max.
     */
    publicvalue?: string;
    /**
     * Set new access flags for new owner for this certificate, 0 for read-only, 1 for edit, 2 for edit and transfer access. Default is 2.
     */
    accessflags?: number;
    /**
     * Witness alias name that will sign for web-of-trust notarization of this transaction.
     */
    witness?: string;
}
