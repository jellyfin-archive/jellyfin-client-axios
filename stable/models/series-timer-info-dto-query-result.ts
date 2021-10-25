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


import { SeriesTimerInfoDto } from './series-timer-info-dto';

/**
 * 
 * @export
 * @interface SeriesTimerInfoDtoQueryResult
 */
export interface SeriesTimerInfoDtoQueryResult {
    /**
     * Gets or sets the items.
     * @type {Array<SeriesTimerInfoDto>}
     * @memberof SeriesTimerInfoDtoQueryResult
     */
    'Items'?: Array<SeriesTimerInfoDto> | null;
    /**
     * The total number of records available.
     * @type {number}
     * @memberof SeriesTimerInfoDtoQueryResult
     */
    'TotalRecordCount'?: number;
    /**
     * The index of the first record in Items.
     * @type {number}
     * @memberof SeriesTimerInfoDtoQueryResult
     */
    'StartIndex'?: number;
}

