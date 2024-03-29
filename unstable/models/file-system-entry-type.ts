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
 * Enum FileSystemEntryType.
 * @export
 * @enum {string}
 */

export const FileSystemEntryType = {
    File: 'File',
    Directory: 'Directory',
    NetworkComputer: 'NetworkComputer',
    NetworkShare: 'NetworkShare'
} as const;

export type FileSystemEntryType = typeof FileSystemEntryType[keyof typeof FileSystemEntryType];



