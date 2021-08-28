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


import { GroupUpdateType } from './group-update-type';

/**
 * Class GroupUpdate.
 * @export
 * @interface ObjectGroupUpdate
 */
export interface ObjectGroupUpdate {
    /**
     * Gets the group identifier.
     * @type {string}
     * @memberof ObjectGroupUpdate
     */
    GroupId?: string;
    /**
     * 
     * @type {GroupUpdateType}
     * @memberof ObjectGroupUpdate
     */
    Type?: GroupUpdateType;
    /**
     * Gets the update data.
     * @type {any}
     * @memberof ObjectGroupUpdate
     */
    Data?: any | null;
}


