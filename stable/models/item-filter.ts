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
 * Enum ItemFilter.
 * @export
 * @enum {string}
 */

export const ItemFilter = {
    IsFolder: 'IsFolder',
    IsNotFolder: 'IsNotFolder',
    IsUnplayed: 'IsUnplayed',
    IsPlayed: 'IsPlayed',
    IsFavorite: 'IsFavorite',
    IsResumable: 'IsResumable',
    Likes: 'Likes',
    Dislikes: 'Dislikes',
    IsFavoriteOrLikes: 'IsFavoriteOrLikes'
} as const;

export type ItemFilter = typeof ItemFilter[keyof typeof ItemFilter];



