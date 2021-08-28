/* tslint:disable */
/* eslint-disable */
/**
 * Jellyfin API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 10.8.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { TrailerInfo } from './trailer-info';

/**
 * 
 * @export
 * @interface TrailerInfoRemoteSearchQuery
 */
export interface TrailerInfoRemoteSearchQuery {
    /**
     * 
     * @type {TrailerInfo}
     * @memberof TrailerInfoRemoteSearchQuery
     */
    SearchInfo?: TrailerInfo;
    /**
     * 
     * @type {string}
     * @memberof TrailerInfoRemoteSearchQuery
     */
    ItemId?: string;
    /**
     * Gets or sets the provider name to search within if set.
     * @type {string}
     * @memberof TrailerInfoRemoteSearchQuery
     */
    SearchProviderName?: string | null;
    /**
     * Gets or sets a value indicating whether disabled providers should be included.
     * @type {boolean}
     * @memberof TrailerInfoRemoteSearchQuery
     */
    IncludeDisabledProviders?: boolean;
}


