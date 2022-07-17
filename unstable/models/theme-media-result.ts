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


import { BaseItemDto } from './base-item-dto';

/**
 * Class ThemeMediaResult.
 * @export
 * @interface ThemeMediaResult
 */
export interface ThemeMediaResult {
    /**
     * Gets or sets the items.
     * @type {Array<BaseItemDto>}
     * @memberof ThemeMediaResult
     */
    'Items'?: Array<BaseItemDto> | null;
    /**
     * Gets or sets the total number of records available.
     * @type {number}
     * @memberof ThemeMediaResult
     */
    'TotalRecordCount'?: number;
    /**
     * Gets or sets the index of the first record in Items.
     * @type {number}
     * @memberof ThemeMediaResult
     */
    'StartIndex'?: number;
    /**
     * Gets or sets the owner id.
     * @type {string}
     * @memberof ThemeMediaResult
     */
    'OwnerId'?: string;
}

