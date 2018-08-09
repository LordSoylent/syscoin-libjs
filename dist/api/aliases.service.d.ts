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
import { Alias } from '../model/alias';
import { AliasHistoryEntry } from '../model/aliasHistoryEntry';
import { AliasNewRequest } from '../model/aliasNewRequest';
import { AliasPayRequest } from '../model/aliasPayRequest';
import { AliasUpdateRequest } from '../model/aliasUpdateRequest';
import { Configuration } from '../configuration';
export declare class AliasesService {
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
     * list affiliations with merchant offers.
     */
    aliasaffiliates(extraHttpRequestParams?: any): Observable<Array<any>>;
    /**
     * Authenticates an alias with a provided password and returns the private key if successful. Warning: Calling this function over a public network can lead to someone reading your password/private key in plain text.
     * @param alias
     * @param password
     */
    aliasauthenticate(alias: string, password: string, extraHttpRequestParams?: any): Observable<Array<any>>;
    /**
     * Returns the total amount received by the given alias in transactions with at least minconf confirmations.
     * @param alias The syscoin alias for transactions
     * @param minconf ﻿Only include transactions confirmed at least this many times. default&#x3D;1.
     */
    aliasbalance(alias: string, minconf?: number, extraHttpRequestParams?: any): Observable<number>;
    /**
     * Count aliases that an array of aliases own.
     */
    aliascount(extraHttpRequestParams?: any): Observable<number>;
    /**
     * Scan and filter aliases aliasfilter \"\" 5 # list aliases updated in last 5 blocks aliasfilter \"^alias\" # list all aliases starting with \"alias\" aliasfilter 36000 0 0 stat # display stats (number of aliases) on active aliases
     * @param regexp apply [regexp] on aliases, empty means all aliases
     * @param from show results from this GUID [from], empty means first
     * @param count number of results to return.
     * @param safesearch shows all aliases that are safe to display (not on the ban list)
     */
    aliasfilter(regexp?: string, from?: string, count?: string, safesearch?: string, extraHttpRequestParams?: any): Observable<Array<Alias>>;
    /**
     * List all stored values of an alias.
     * @param aliasname
     */
    aliashistory(aliasname: string, extraHttpRequestParams?: any): Observable<Array<AliasHistoryEntry>>;
    /**
     * Show values of an alias.
     * @param aliasname
     */
    aliasinfo(aliasname: string, extraHttpRequestParams?: any): Observable<Alias>;
    /**
     * List my own aliases.
     * @param aliasname Alias name to use as filter.
     * @param count The number of results to return
     * @param from The number of results to skip
     */
    aliaslist(aliasname?: string, count?: number, from?: number, extraHttpRequestParams?: any): Observable<Array<Alias>>;
    /**
     * Creates a new Syscoin Alias. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    aliasnew(request: AliasNewRequest, extraHttpRequestParams?: any): Observable<Array<string>>;
    /**
     * Send multiple times from an alias. Amounts are double-precision floating point numbers.
     * @param request
     */
    aliaspay(request: AliasPayRequest, extraHttpRequestParams?: any): Observable<Array<string>>;
    /**
     * Update and possibly transfer an alias. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    aliasupdate(request: AliasUpdateRequest, extraHttpRequestParams?: any): Observable<Array<string>>;
    /**
     *
     * list affiliations with merchant offers.
     */
    aliasaffiliatesWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Authenticates an alias with a provided password and returns the private key if successful. Warning: Calling this function over a public network can lead to someone reading your password/private key in plain text.
     * @param alias
     * @param password
     */
    aliasauthenticateWithHttpInfo(alias: string, password: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Returns the total amount received by the given alias in transactions with at least minconf confirmations.
     * @param alias The syscoin alias for transactions
     * @param minconf ﻿Only include transactions confirmed at least this many times. default&#x3D;1.
     */
    aliasbalanceWithHttpInfo(alias: string, minconf?: number, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Count aliases that an array of aliases own.
     */
    aliascountWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Scan and filter aliases aliasfilter \&quot;\&quot; 5 # list aliases updated in last 5 blocks aliasfilter \&quot;^alias\&quot; # list all aliases starting with \&quot;alias\&quot; aliasfilter 36000 0 0 stat # display stats (number of aliases) on active aliases
     * @param regexp apply [regexp] on aliases, empty means all aliases
     * @param from show results from this GUID [from], empty means first
     * @param count number of results to return.
     * @param safesearch shows all aliases that are safe to display (not on the ban list)
     */
    aliasfilterWithHttpInfo(regexp?: string, from?: string, count?: string, safesearch?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * List all stored values of an alias.
     * @param aliasname
     */
    aliashistoryWithHttpInfo(aliasname: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Show values of an alias.
     * @param aliasname
     */
    aliasinfoWithHttpInfo(aliasname: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * List my own aliases.
     * @param aliasname Alias name to use as filter.
     * @param count The number of results to return
     * @param from The number of results to skip
     */
    aliaslistWithHttpInfo(aliasname?: string, count?: number, from?: number, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Creates a new Syscoin Alias. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    aliasnewWithHttpInfo(request: AliasNewRequest, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Send multiple times from an alias. Amounts are double-precision floating point numbers.
     * @param request
     */
    aliaspayWithHttpInfo(request: AliasPayRequest, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Update and possibly transfer an alias. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    aliasupdateWithHttpInfo(request: AliasUpdateRequest, extraHttpRequestParams?: any): Observable<Response>;
}