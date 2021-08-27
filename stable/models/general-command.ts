/* tslint:disable */
/* eslint-disable */
/**
 * Jellyfin API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 10.7.6
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { GeneralCommandType } from './general-command-type';

/**
 * 
 * @export
 * @interface GeneralCommand
 */
export interface GeneralCommand {
    /**
     * 
     * @type {GeneralCommandType}
     * @memberof GeneralCommand
     */
    Name?: GeneralCommandType;
    /**
     * 
     * @type {string}
     * @memberof GeneralCommand
     */
    ControllingUserId?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof GeneralCommand
     */
    Arguments?: { [key: string]: string; } | null;
}


