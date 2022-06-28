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


import { SongInfo } from './song-info';

/**
 * 
 * @export
 * @interface AlbumInfo
 */
export interface AlbumInfo {
    /**
     * Gets or sets the name.
     * @type {string}
     * @memberof AlbumInfo
     */
    'Name'?: string | null;
    /**
     * Gets or sets the original title.
     * @type {string}
     * @memberof AlbumInfo
     */
    'OriginalTitle'?: string | null;
    /**
     * Gets or sets the path.
     * @type {string}
     * @memberof AlbumInfo
     */
    'Path'?: string | null;
    /**
     * Gets or sets the metadata language.
     * @type {string}
     * @memberof AlbumInfo
     */
    'MetadataLanguage'?: string | null;
    /**
     * Gets or sets the metadata country code.
     * @type {string}
     * @memberof AlbumInfo
     */
    'MetadataCountryCode'?: string | null;
    /**
     * Gets or sets the provider ids.
     * @type {{ [key: string]: string; }}
     * @memberof AlbumInfo
     */
    'ProviderIds'?: { [key: string]: string; } | null;
    /**
     * Gets or sets the year.
     * @type {number}
     * @memberof AlbumInfo
     */
    'Year'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof AlbumInfo
     */
    'IndexNumber'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof AlbumInfo
     */
    'ParentIndexNumber'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof AlbumInfo
     */
    'PremiereDate'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof AlbumInfo
     */
    'IsAutomated'?: boolean;
    /**
     * Gets or sets the album artist.
     * @type {Array<string>}
     * @memberof AlbumInfo
     */
    'AlbumArtists'?: Array<string>;
    /**
     * Gets or sets the artist provider ids.
     * @type {{ [key: string]: string; }}
     * @memberof AlbumInfo
     */
    'ArtistProviderIds'?: { [key: string]: string; };
    /**
     * 
     * @type {Array<SongInfo>}
     * @memberof AlbumInfo
     */
    'SongInfos'?: Array<SongInfo>;
}

