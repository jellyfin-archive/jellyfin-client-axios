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
 * Enum TaskState.
 * @export
 * @enum {string}
 */

export const TaskState = {
    Idle: 'Idle',
    Cancelling: 'Cancelling',
    Running: 'Running'
} as const;

export type TaskState = typeof TaskState[keyof typeof TaskState];



