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
 * 
 * @export
 * @enum {string}
 */

export const LogLevel = {
    Trace: 'Trace',
    Debug: 'Debug',
    Information: 'Information',
    Warning: 'Warning',
    Error: 'Error',
    Critical: 'Critical',
    None: 'None'
} as const;

export type LogLevel = typeof LogLevel[keyof typeof LogLevel];



