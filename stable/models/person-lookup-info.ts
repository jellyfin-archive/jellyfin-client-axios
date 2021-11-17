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



/**
 * 
 * @export
 * @interface PersonLookupInfo
 */
export interface PersonLookupInfo {
    /**
     * Gets or sets the name.
     * @type {string}
     * @memberof PersonLookupInfo
     */
    'Name'?: string | null;
    /**
     * Gets or sets the path.
     * @type {string}
     * @memberof PersonLookupInfo
     */
    'Path'?: string | null;
    /**
     * Gets or sets the metadata language.
     * @type {string}
     * @memberof PersonLookupInfo
     */
    'MetadataLanguage'?: string | null;
    /**
     * Gets or sets the metadata country code.
     * @type {string}
     * @memberof PersonLookupInfo
     */
    'MetadataCountryCode'?: string | null;
    /**
     * Gets or sets the provider ids.
     * @type {{ [key: string]: string; }}
     * @memberof PersonLookupInfo
     */
    'ProviderIds'?: { [key: string]: string; } | null;
    /**
     * Gets or sets the year.
     * @type {number}
     * @memberof PersonLookupInfo
     */
    'Year'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof PersonLookupInfo
     */
    'IndexNumber'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof PersonLookupInfo
     */
    'ParentIndexNumber'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof PersonLookupInfo
     */
    'PremiereDate'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof PersonLookupInfo
     */
    'IsAutomated'?: boolean;
}

