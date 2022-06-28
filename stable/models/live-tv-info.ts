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


import { LiveTvServiceInfo } from './live-tv-service-info';

/**
 * 
 * @export
 * @interface LiveTvInfo
 */
export interface LiveTvInfo {
    /**
     * Gets or sets the services.
     * @type {Array<LiveTvServiceInfo>}
     * @memberof LiveTvInfo
     */
    'Services'?: Array<LiveTvServiceInfo>;
    /**
     * Gets or sets a value indicating whether this instance is enabled.
     * @type {boolean}
     * @memberof LiveTvInfo
     */
    'IsEnabled'?: boolean;
    /**
     * Gets or sets the enabled users.
     * @type {Array<string>}
     * @memberof LiveTvInfo
     */
    'EnabledUsers'?: Array<string>;
}

