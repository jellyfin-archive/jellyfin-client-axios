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


import { ProfileConditionType } from './profile-condition-type';
import { ProfileConditionValue } from './profile-condition-value';

/**
 * 
 * @export
 * @interface ProfileCondition
 */
export interface ProfileCondition {
    /**
     * 
     * @type {ProfileConditionType}
     * @memberof ProfileCondition
     */
    'Condition'?: ProfileConditionType;
    /**
     * 
     * @type {ProfileConditionValue}
     * @memberof ProfileCondition
     */
    'Property'?: ProfileConditionValue;
    /**
     * 
     * @type {string}
     * @memberof ProfileCondition
     */
    'Value'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof ProfileCondition
     */
    'IsRequired'?: boolean;
}

