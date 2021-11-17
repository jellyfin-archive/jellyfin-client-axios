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


import { ActivityLogEntry } from './activity-log-entry';

/**
 * 
 * @export
 * @interface ActivityLogEntryQueryResult
 */
export interface ActivityLogEntryQueryResult {
    /**
     * Gets or sets the items.
     * @type {Array<ActivityLogEntry>}
     * @memberof ActivityLogEntryQueryResult
     */
    'Items'?: Array<ActivityLogEntry> | null;
    /**
     * The total number of records available.
     * @type {number}
     * @memberof ActivityLogEntryQueryResult
     */
    'TotalRecordCount'?: number;
    /**
     * The index of the first record in Items.
     * @type {number}
     * @memberof ActivityLogEntryQueryResult
     */
    'StartIndex'?: number;
}

