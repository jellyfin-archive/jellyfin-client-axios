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
 * Stores the state of an quick connect request.
 * @export
 * @interface QuickConnectResult
 */
export interface QuickConnectResult {
    /**
     * Gets or sets a value indicating whether this request is authorized.
     * @type {boolean}
     * @memberof QuickConnectResult
     */
    'Authenticated'?: boolean;
    /**
     * Gets the secret value used to uniquely identify this request. Can be used to retrieve authentication information.
     * @type {string}
     * @memberof QuickConnectResult
     */
    'Secret'?: string;
    /**
     * Gets the user facing code used so the user can quickly differentiate this request from others.
     * @type {string}
     * @memberof QuickConnectResult
     */
    'Code'?: string;
    /**
     * Gets the requesting device id.
     * @type {string}
     * @memberof QuickConnectResult
     */
    'DeviceId'?: string;
    /**
     * Gets the requesting device name.
     * @type {string}
     * @memberof QuickConnectResult
     */
    'DeviceName'?: string;
    /**
     * Gets the requesting app name.
     * @type {string}
     * @memberof QuickConnectResult
     */
    'AppName'?: string;
    /**
     * Gets the requesting app version.
     * @type {string}
     * @memberof QuickConnectResult
     */
    'AppVersion'?: string;
    /**
     * Gets or sets the DateTime that this request was created.
     * @type {string}
     * @memberof QuickConnectResult
     */
    'DateAdded'?: string;
}

