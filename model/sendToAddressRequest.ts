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


export interface SendToAddressRequest {
    /**
     * The syscoin address to send to.
     */
    syscoinaddress: string;
    /**
     * The amount in SYS to send. eg 0.1
     */
    amount: number;
    /**
     * A comment used to store what the transaction is for. This is not part of the transaction, just kept in your wallet.
     */
    comment?: string;
    /**
     * An optional comment to store the name of the person or organization to which you're sending the transaction. This is not part of the transaction, it is just kept in your wallet.
     */
    commentto?: string;
    /**
     * The fee will be deducted from the amount being sent. The recipient will receive less syscoins than you enter in the amount field.
     */
    subtractfeefromamount?: boolean;
    /**
     * Send this transaction as InstantSend (default: false)
     */
    use_is?: boolean;
    /**
     * Use anonymized funds only (default: false)
     */
    use_ps?: boolean;
}
