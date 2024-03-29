/* tslint:disable */
/* eslint-disable */
/**
 * Jellyfin API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 10.8.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * The server discovery info model.
 * @export
 * @interface ServerDiscoveryInfo
 */
export interface ServerDiscoveryInfo {
    /**
     * Gets the address.
     * @type {string}
     * @memberof ServerDiscoveryInfo
     */
    'Address'?: string;
    /**
     * Gets the server identifier.
     * @type {string}
     * @memberof ServerDiscoveryInfo
     */
    'Id'?: string;
    /**
     * Gets the name.
     * @type {string}
     * @memberof ServerDiscoveryInfo
     */
    'Name'?: string;
    /**
     * Gets the endpoint address.
     * @type {string}
     * @memberof ServerDiscoveryInfo
     */
    'EndpointAddress'?: string | null;
}

