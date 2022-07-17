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



/**
 * 
 * @export
 * @interface MovieInfo
 */
export interface MovieInfo {
    /**
     * Gets or sets the name.
     * @type {string}
     * @memberof MovieInfo
     */
    'Name'?: string | null;
    /**
     * Gets or sets the original title.
     * @type {string}
     * @memberof MovieInfo
     */
    'OriginalTitle'?: string | null;
    /**
     * Gets or sets the path.
     * @type {string}
     * @memberof MovieInfo
     */
    'Path'?: string | null;
    /**
     * Gets or sets the metadata language.
     * @type {string}
     * @memberof MovieInfo
     */
    'MetadataLanguage'?: string | null;
    /**
     * Gets or sets the metadata country code.
     * @type {string}
     * @memberof MovieInfo
     */
    'MetadataCountryCode'?: string | null;
    /**
     * Gets or sets the provider ids.
     * @type {{ [key: string]: string; }}
     * @memberof MovieInfo
     */
    'ProviderIds'?: { [key: string]: string; } | null;
    /**
     * Gets or sets the year.
     * @type {number}
     * @memberof MovieInfo
     */
    'Year'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof MovieInfo
     */
    'IndexNumber'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof MovieInfo
     */
    'ParentIndexNumber'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof MovieInfo
     */
    'PremiereDate'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof MovieInfo
     */
    'IsAutomated'?: boolean;
}

