/* tslint:disable */
/* eslint-disable */
/**
 * Jellyfin API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 10.8.0
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

export const Video3DFormat = {
    HalfSideBySide: 'HalfSideBySide',
    FullSideBySide: 'FullSideBySide',
    FullTopAndBottom: 'FullTopAndBottom',
    HalfTopAndBottom: 'HalfTopAndBottom',
    Mvc: 'MVC'
} as const;

export type Video3DFormat = typeof Video3DFormat[keyof typeof Video3DFormat];



