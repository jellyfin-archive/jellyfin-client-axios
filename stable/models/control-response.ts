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
 * 
 * @export
 * @interface ControlResponse
 */
export interface ControlResponse {
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof ControlResponse
     */
    'Headers'?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof ControlResponse
     */
    'Xml'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ControlResponse
     */
    'IsSuccessful'?: boolean;
}

