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
 * Enum MediaStreamType.
 * @export
 * @enum {string}
 */

export const MediaStreamType = {
    Audio: 'Audio',
    Video: 'Video',
    Subtitle: 'Subtitle',
    EmbeddedImage: 'EmbeddedImage'
} as const;

export type MediaStreamType = typeof MediaStreamType[keyof typeof MediaStreamType];



