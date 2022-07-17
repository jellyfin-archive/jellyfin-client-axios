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
 * An enum representing an unrated item.
 * @export
 * @enum {string}
 */

export const UnratedItem = {
    Movie: 'Movie',
    Trailer: 'Trailer',
    Series: 'Series',
    Music: 'Music',
    Book: 'Book',
    LiveTvChannel: 'LiveTvChannel',
    LiveTvProgram: 'LiveTvProgram',
    ChannelContent: 'ChannelContent',
    Other: 'Other'
} as const;

export type UnratedItem = typeof UnratedItem[keyof typeof UnratedItem];



