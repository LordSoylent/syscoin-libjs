/**
 * Syscoin API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.3
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import '../rxjs-operators';
import { Escrow } from '../model/escrow';
import { EscrowClaimRefundRequest } from '../model/escrowClaimRefundRequest';
import { EscrowClaimReleaseRequest } from '../model/escrowClaimReleaseRequest';
import { EscrowCompleteRefundRequest } from '../model/escrowCompleteRefundRequest';
import { EscrowCompleteReleaseRequest } from '../model/escrowCompleteReleaseRequest';
import { EscrowFeedbackRequest } from '../model/escrowFeedbackRequest';
import { EscrowNewRequest } from '../model/escrowNewRequest';
import { EscrowRefundRequest } from '../model/escrowRefundRequest';
import { EscrowReleaseRequest } from '../model/escrowReleaseRequest';
import { GenerateEscrowMultisigRequest } from '../model/generateEscrowMultisigRequest';
import { Configuration } from '../configuration';
export declare class EscrowService {
    protected http: Http;
    protected basePath: string;
    defaultHeaders: Headers;
    configuration: Configuration;
    constructor(http: Http, basePath: string, configuration: Configuration);
    /**
     *
     * Extends object by coping non-existing properties.
     * @param objA object to be extended
     * @param objB source object
     */
    private extendObj;
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm;
    /**
     * Acknowledge escrow payment as seller of offer. Deducts qty of offer and increases number of sold inventory.
     * @param escrowguid
     */
    escrowacknowledge(escrowguid: string, extraHttpRequestParams?: any): Observable<Array<string>>;
    /**
     * Claim escrow funds released from seller or arbiter using escrowrefund. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    escrowclaimrefund(request: EscrowClaimRefundRequest, extraHttpRequestParams?: any): Observable<Array<string>>;
    /**
     * Claim escrow funds released from buyer or arbiter using escrowrelease. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    escrowclaimrelease(request: EscrowClaimReleaseRequest, extraHttpRequestParams?: any): Observable<Array<string>>;
    /**
     * Completes an escrow refund by creating the escrow complete refund transaction on syscoin blockchain.
     * @param request
     */
    escrowcompleterefund(request: EscrowCompleteRefundRequest, extraHttpRequestParams?: any): Observable<Array<string>>;
    /**
     * Completes an escrow release by creating the escrow complete release transaction on syscoin blockchain.
     * @param request
     */
    escrowcompleterelease(request: EscrowCompleteReleaseRequest, extraHttpRequestParams?: any): Observable<Array<string>>;
    /**
     * Count escrows that an set of aliases are involved in.
     * @param buyerAliases
     * @param sellerAliases
     * @param arbiterAliases
     */
    escrowcount(buyerAliases?: Array<string>, sellerAliases?: Array<string>, arbiterAliases?: Array<string>, extraHttpRequestParams?: any): Observable<number>;
    /**
     * Send feedback for primary and secondary users in escrow, depending on who you are. Ratings are numbers from 1 to 5. User Role is either 'buyer', 'seller', 'reseller', or 'arbiter'. If you are the buyer, feedbackprimary is for seller and feedbacksecondary is for arbiter. If you are the seller, feedbackprimary is for buyer and feedbacksecondary is for arbiter. If you are the arbiter, feedbackprimary is for buyer and feedbacksecondary is for seller. If arbiter didn't do any work for this escrow you can leave his feedback empty and rating as a 0.
     * @param request
     */
    escrowfeedback(request: EscrowFeedbackRequest, extraHttpRequestParams?: any): Observable<Array<string>>;
    /**
     * scan and filter escrows
     * @param regexp Apply [regexp] on escrows, empty means all escrows
     * @param from Show results from this GUID [from], 0 means first.
     * @param count the number of results to return
     */
    escrowfilter(regexp?: string, from?: string, count?: number, extraHttpRequestParams?: any): Observable<Array<Escrow>>;
    /**
     * List all stored values of an escrow.
     * @param escrow GUID of escrow
     */
    escrowhistory(escrow: string, extraHttpRequestParams?: any): Observable<Array<Escrow>>;
    /**
     * Show stored values of a single escrow
     * @param escrow GUID of escrow
     */
    escrowinfo(escrow: string, extraHttpRequestParams?: any): Observable<Escrow>;
    /**
     * List escrows that an array of aliases are involved in.
     * @param buyerAliases List of buyer aliases to display escrows from
     * @param sellerAliases List of seller aliases to display escrows from
     * @param arbiterAliases List of arbiter aliases to display escrows from
     * @param escrow GUID of escrow
     * @param count The number of results to return
     * @param from The number of results to skip
     */
    escrowlist(buyerAliases?: Array<string>, sellerAliases?: Array<string>, arbiterAliases?: Array<string>, escrow?: string, count?: number, from?: number, extraHttpRequestParams?: any): Observable<Array<Escrow>>;
    /**
     * Create new arbitrated Syscoin escrow.
     * @param request
     */
    escrownew(request: EscrowNewRequest, extraHttpRequestParams?: any): Observable<Array<string>>;
    /**
     * Refunds escrow funds back to buyer, buyer needs to sign the output transaction and send to the network. User role represents either 'seller' or 'arbiter'. Enter in rawTx if this is an external payment refund.
     * @param request
     */
    escrowrefund(request: EscrowRefundRequest, extraHttpRequestParams?: any): Observable<Array<string>>;
    /**
     * Releases escrow funds to seller, seller needs to sign the output transaction and send to the network. User role represents either 'buyer' or 'arbiter'. Enter in rawTx if this is an external payment release.
     * @param request
     */
    escrowrelease(request: EscrowReleaseRequest, extraHttpRequestParams?: any): Observable<Array<string>>;
    /**
     * Generates a multisignature escrow transaction
     * @param request
     */
    generateescrowmultisig(request: GenerateEscrowMultisigRequest, extraHttpRequestParams?: any): Observable<Array<string>>;
    /**
     *
     * Acknowledge escrow payment as seller of offer. Deducts qty of offer and increases number of sold inventory.
     * @param escrowguid
     */
    escrowacknowledgeWithHttpInfo(escrowguid: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Claim escrow funds released from seller or arbiter using escrowrefund. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    escrowclaimrefundWithHttpInfo(request: EscrowClaimRefundRequest, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Claim escrow funds released from buyer or arbiter using escrowrelease. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    escrowclaimreleaseWithHttpInfo(request: EscrowClaimReleaseRequest, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Completes an escrow refund by creating the escrow complete refund transaction on syscoin blockchain.
     * @param request
     */
    escrowcompleterefundWithHttpInfo(request: EscrowCompleteRefundRequest, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Completes an escrow release by creating the escrow complete release transaction on syscoin blockchain.
     * @param request
     */
    escrowcompletereleaseWithHttpInfo(request: EscrowCompleteReleaseRequest, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Count escrows that an set of aliases are involved in.
     * @param buyerAliases
     * @param sellerAliases
     * @param arbiterAliases
     */
    escrowcountWithHttpInfo(buyerAliases?: Array<string>, sellerAliases?: Array<string>, arbiterAliases?: Array<string>, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Send feedback for primary and secondary users in escrow, depending on who you are. Ratings are numbers from 1 to 5. User Role is either &#39;buyer&#39;, &#39;seller&#39;, &#39;reseller&#39;, or &#39;arbiter&#39;. If you are the buyer, feedbackprimary is for seller and feedbacksecondary is for arbiter. If you are the seller, feedbackprimary is for buyer and feedbacksecondary is for arbiter. If you are the arbiter, feedbackprimary is for buyer and feedbacksecondary is for seller. If arbiter didn&#39;t do any work for this escrow you can leave his feedback empty and rating as a 0.
     * @param request
     */
    escrowfeedbackWithHttpInfo(request: EscrowFeedbackRequest, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * scan and filter escrows
     * @param regexp Apply [regexp] on escrows, empty means all escrows
     * @param from Show results from this GUID [from], 0 means first.
     * @param count the number of results to return
     */
    escrowfilterWithHttpInfo(regexp?: string, from?: string, count?: number, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * List all stored values of an escrow.
     * @param escrow GUID of escrow
     */
    escrowhistoryWithHttpInfo(escrow: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Show stored values of a single escrow
     * @param escrow GUID of escrow
     */
    escrowinfoWithHttpInfo(escrow: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * List escrows that an array of aliases are involved in.
     * @param buyerAliases List of buyer aliases to display escrows from
     * @param sellerAliases List of seller aliases to display escrows from
     * @param arbiterAliases List of arbiter aliases to display escrows from
     * @param escrow GUID of escrow
     * @param count The number of results to return
     * @param from The number of results to skip
     */
    escrowlistWithHttpInfo(buyerAliases?: Array<string>, sellerAliases?: Array<string>, arbiterAliases?: Array<string>, escrow?: string, count?: number, from?: number, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Create new arbitrated Syscoin escrow.
     * @param request
     */
    escrownewWithHttpInfo(request: EscrowNewRequest, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Refunds escrow funds back to buyer, buyer needs to sign the output transaction and send to the network. User role represents either &#39;seller&#39; or &#39;arbiter&#39;. Enter in rawTx if this is an external payment refund.
     * @param request
     */
    escrowrefundWithHttpInfo(request: EscrowRefundRequest, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Releases escrow funds to seller, seller needs to sign the output transaction and send to the network. User role represents either &#39;buyer&#39; or &#39;arbiter&#39;. Enter in rawTx if this is an external payment release.
     * @param request
     */
    escrowreleaseWithHttpInfo(request: EscrowReleaseRequest, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Generates a multisignature escrow transaction
     * @param request
     */
    generateescrowmultisigWithHttpInfo(request: GenerateEscrowMultisigRequest, extraHttpRequestParams?: any): Observable<Response>;
}
