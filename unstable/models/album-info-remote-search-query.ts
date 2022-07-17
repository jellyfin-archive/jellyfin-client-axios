/* tslint:disable */
/* eslint-disable */
/**
 * Jellyfin API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 10.9.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { AlbumInfo } from './album-info';

/**
 * 
 * @export
 * @interface AlbumInfoRemoteSearchQuery
 */
export interface AlbumInfoRemoteSearchQuery {
    /**
     * 
     * @type {AlbumInfo}
     * @memberof AlbumInfoRemoteSearchQuery
     */
    'SearchInfo'?: AlbumInfo;
    /**
     * 
     * @type {string}
     * @memberof AlbumInfoRemoteSearchQuery
     */
    'ItemId'?: string;
    /**
     * Gets or sets the provider name to search within if set.
     * @type {string}
     * @memberof AlbumInfoRemoteSearchQuery
     */
    'SearchProviderName'?: string | null;
    /**
     * Gets or sets a value indicating whether disabled providers should be included.
     * @type {boolean}
     * @memberof AlbumInfoRemoteSearchQuery
     */
    'IncludeDisabledProviders'?: boolean;
}

