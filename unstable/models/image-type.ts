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
 * Enum ImageType.
 * @export
 * @enum {string}
 */

export const ImageType = {
    Primary: 'Primary',
    Art: 'Art',
    Backdrop: 'Backdrop',
    Banner: 'Banner',
    Logo: 'Logo',
    Thumb: 'Thumb',
    Disc: 'Disc',
    Box: 'Box',
    Screenshot: 'Screenshot',
    Menu: 'Menu',
    Chapter: 'Chapter',
    BoxRear: 'BoxRear',
    Profile: 'Profile'
} as const;

export type ImageType = typeof ImageType[keyof typeof ImageType];



