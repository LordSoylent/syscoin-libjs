/**
 * Syscoin API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.1.2
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
import { LoginResponse } from '../model/loginResponse';
import { StoreDataRequest } from '../model/storeDataRequest';
import { StoreDataResponse } from '../model/storeDataResponse';
import { Configuration } from '../configuration';
export declare class BlockmarketService {
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
     * Returns a session token for use with subsquent protected calls.
     * @param auth SHA1 hash of the user&#39;s authentication information- usernamepassword.
     */
    login(auth: string, extraHttpRequestParams?: any): Observable<LoginResponse>;
    /**
     * Store an arbitrary piece of data on a decentralized network of data storage warehouses and return the client an array of URLs through which the data can be accessed.
     * @param request
     */
    storedata(request: StoreDataRequest, extraHttpRequestParams?: any): Observable<StoreDataResponse>;
    /**
     *
     * Returns a session token for use with subsquent protected calls.
     * @param auth SHA1 hash of the user&#39;s authentication information- usernamepassword.
     */
    loginWithHttpInfo(auth: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Store an arbitrary piece of data on a decentralized network of data storage warehouses and return the client an array of URLs through which the data can be accessed.
     * @param request
     */
    storedataWithHttpInfo(request: StoreDataRequest, extraHttpRequestParams?: any): Observable<Response>;
}
