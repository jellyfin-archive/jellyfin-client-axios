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
 * Enum VideoType.
 * @export
 * @enum {string}
 */

export const VideoType = {
    VideoFile: 'VideoFile',
    Iso: 'Iso',
    Dvd: 'Dvd',
    BluRay: 'BluRay'
} as const;

export type VideoType = typeof VideoType[keyof typeof VideoType];



