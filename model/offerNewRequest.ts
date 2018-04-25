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


export interface OfferNewRequest {
    alias?: string;
    category?: string;
    title?: string;
    quantity?: number;
    price?: number;
    description?: string;
    currency?: string;
    cert_guid?: string;
    payment_options?: string;
    privatevalue?: boolean;
    units?: number;
    offertype?: string;
    auction_expires?: number;
    auction_reserve?: number;
    auction_require_witness?: boolean;
    auction_deposit?: number;
    witness?: string;
}
