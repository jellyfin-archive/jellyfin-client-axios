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
 * @enum {string}
 */

export const KeepUntil = {
    UntilDeleted: 'UntilDeleted',
    UntilSpaceNeeded: 'UntilSpaceNeeded',
    UntilWatched: 'UntilWatched',
    UntilDate: 'UntilDate'
} as const;

export type KeepUntil = typeof KeepUntil[keyof typeof KeepUntil];



