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


import { SearchHint } from './search-hint';

/**
 * Class SearchHintResult.
 * @export
 * @interface SearchHintResult
 */
export interface SearchHintResult {
    /**
     * Gets or sets the search hints.
     * @type {Array<SearchHint>}
     * @memberof SearchHintResult
     */
    SearchHints?: Array<SearchHint> | null;
    /**
     * Gets or sets the total record count.
     * @type {number}
     * @memberof SearchHintResult
     */
    TotalRecordCount?: number;
}


