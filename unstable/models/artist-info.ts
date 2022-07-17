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


import { SongInfo } from './song-info';

/**
 * 
 * @export
 * @interface ArtistInfo
 */
export interface ArtistInfo {
    /**
     * Gets or sets the name.
     * @type {string}
     * @memberof ArtistInfo
     */
    'Name'?: string | null;
    /**
     * Gets or sets the original title.
     * @type {string}
     * @memberof ArtistInfo
     */
    'OriginalTitle'?: string | null;
    /**
     * Gets or sets the path.
     * @type {string}
     * @memberof ArtistInfo
     */
    'Path'?: string | null;
    /**
     * Gets or sets the metadata language.
     * @type {string}
     * @memberof ArtistInfo
     */
    'MetadataLanguage'?: string | null;
    /**
     * Gets or sets the metadata country code.
     * @type {string}
     * @memberof ArtistInfo
     */
    'MetadataCountryCode'?: string | null;
    /**
     * Gets or sets the provider ids.
     * @type {{ [key: string]: string; }}
     * @memberof ArtistInfo
     */
    'ProviderIds'?: { [key: string]: string; } | null;
    /**
     * Gets or sets the year.
     * @type {number}
     * @memberof ArtistInfo
     */
    'Year'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof ArtistInfo
     */
    'IndexNumber'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof ArtistInfo
     */
    'ParentIndexNumber'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof ArtistInfo
     */
    'PremiereDate'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof ArtistInfo
     */
    'IsAutomated'?: boolean;
    /**
     * 
     * @type {Array<SongInfo>}
     * @memberof ArtistInfo
     */
    'SongInfos'?: Array<SongInfo>;
}

