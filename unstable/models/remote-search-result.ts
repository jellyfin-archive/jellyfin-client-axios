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



/**
 * 
 * @export
 * @interface RemoteSearchResult
 */
export interface RemoteSearchResult {
    /**
     * Gets or sets the name.
     * @type {string}
     * @memberof RemoteSearchResult
     */
    Name?: string | null;
    /**
     * Gets or sets the provider ids.
     * @type {{ [key: string]: string; }}
     * @memberof RemoteSearchResult
     */
    ProviderIds?: { [key: string]: string; } | null;
    /**
     * Gets or sets the year.
     * @type {number}
     * @memberof RemoteSearchResult
     */
    ProductionYear?: number | null;
    /**
     * 
     * @type {number}
     * @memberof RemoteSearchResult
     */
    IndexNumber?: number | null;
    /**
     * 
     * @type {number}
     * @memberof RemoteSearchResult
     */
    IndexNumberEnd?: number | null;
    /**
     * 
     * @type {number}
     * @memberof RemoteSearchResult
     */
    ParentIndexNumber?: number | null;
    /**
     * 
     * @type {string}
     * @memberof RemoteSearchResult
     */
    PremiereDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RemoteSearchResult
     */
    ImageUrl?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RemoteSearchResult
     */
    SearchProviderName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RemoteSearchResult
     */
    Overview?: string | null;
    /**
     * 
     * @type {RemoteSearchResult}
     * @memberof RemoteSearchResult
     */
    AlbumArtist?: RemoteSearchResult | null;
    /**
     * 
     * @type {Array<RemoteSearchResult>}
     * @memberof RemoteSearchResult
     */
    Artists?: Array<RemoteSearchResult> | null;
}


