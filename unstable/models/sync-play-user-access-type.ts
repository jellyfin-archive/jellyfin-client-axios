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
 * Enum SyncPlayUserAccessType.
 * @export
 * @enum {string}
 */

export const SyncPlayUserAccessType = {
    CreateAndJoinGroups: 'CreateAndJoinGroups',
    JoinGroups: 'JoinGroups',
    None: 'None'
} as const;

export type SyncPlayUserAccessType = typeof SyncPlayUserAccessType[keyof typeof SyncPlayUserAccessType];



