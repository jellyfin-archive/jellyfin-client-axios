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



/**
 * 
 * @export
 * @enum {string}
 */

export const ChannelItemSortField = {
    Name: 'Name',
    CommunityRating: 'CommunityRating',
    PremiereDate: 'PremiereDate',
    DateCreated: 'DateCreated',
    Runtime: 'Runtime',
    PlayCount: 'PlayCount',
    CommunityPlayCount: 'CommunityPlayCount'
} as const;

export type ChannelItemSortField = typeof ChannelItemSortField[keyof typeof ChannelItemSortField];



