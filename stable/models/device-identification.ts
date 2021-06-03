/* tslint:disable */
/* eslint-disable */
/**
 * Jellyfin API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 10.7.6
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { HttpHeaderInfo } from './http-header-info';

/**
 * 
 * @export
 * @interface DeviceIdentification
 */
export interface DeviceIdentification {
    /**
     * Gets or sets the name of the friendly.
     * @type {string}
     * @memberof DeviceIdentification
     */
    FriendlyName?: string | null;
    /**
     * Gets or sets the model number.
     * @type {string}
     * @memberof DeviceIdentification
     */
    ModelNumber?: string | null;
    /**
     * Gets or sets the serial number.
     * @type {string}
     * @memberof DeviceIdentification
     */
    SerialNumber?: string | null;
    /**
     * Gets or sets the name of the model.
     * @type {string}
     * @memberof DeviceIdentification
     */
    ModelName?: string | null;
    /**
     * Gets or sets the model description.
     * @type {string}
     * @memberof DeviceIdentification
     */
    ModelDescription?: string | null;
    /**
     * Gets or sets the model URL.
     * @type {string}
     * @memberof DeviceIdentification
     */
    ModelUrl?: string | null;
    /**
     * Gets or sets the manufacturer.
     * @type {string}
     * @memberof DeviceIdentification
     */
    Manufacturer?: string | null;
    /**
     * Gets or sets the manufacturer URL.
     * @type {string}
     * @memberof DeviceIdentification
     */
    ManufacturerUrl?: string | null;
    /**
     * Gets or sets the headers.
     * @type {Array<HttpHeaderInfo>}
     * @memberof DeviceIdentification
     */
    Headers?: Array<HttpHeaderInfo> | null;
}


