/* tslint:disable */
/* eslint-disable */
/**
 * Jellyfin API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 10.7.7
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { MediaUrl } from './media-url';

/**
 * Class BaseItem.
 * @export
 * @interface BaseItem
 */
export interface BaseItem {
    /**
     * 
     * @type {number}
     * @memberof BaseItem
     */
    Size?: number | null;
    /**
     * 
     * @type {string}
     * @memberof BaseItem
     */
    Container?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BaseItem
     */
    DateLastSaved?: string;
    /**
     * Gets or sets the remote trailers.
     * @type {Array<MediaUrl>}
     * @memberof BaseItem
     */
    RemoteTrailers?: Array<MediaUrl> | null;
    /**
     * 
     * @type {boolean}
     * @memberof BaseItem
     */
    IsHD?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BaseItem
     */
    IsShortcut?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BaseItem
     */
    ShortcutPath?: string | null;
    /**
     * 
     * @type {number}
     * @memberof BaseItem
     */
    Width?: number;
    /**
     * 
     * @type {number}
     * @memberof BaseItem
     */
    Height?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof BaseItem
     */
    ExtraIds?: Array<string> | null;
    /**
     * 
     * @type {boolean}
     * @memberof BaseItem
     */
    SupportsExternalTransfer?: boolean;
}


