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
 * Enum TaskCompletionStatus.
 * @export
 * @enum {string}
 */

export const TaskCompletionStatus = {
    Completed: 'Completed',
    Failed: 'Failed',
    Cancelled: 'Cancelled',
    Aborted: 'Aborted'
} as const;

export type TaskCompletionStatus = typeof TaskCompletionStatus[keyof typeof TaskCompletionStatus];



