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


import { MediaPathInfo } from './media-path-info';

/**
 * Media Path dto.
 * @export
 * @interface MediaPathDto
 */
export interface MediaPathDto {
    /**
     * Gets or sets the name of the library.
     * @type {string}
     * @memberof MediaPathDto
     */
    Name: string;
    /**
     * Gets or sets the path to add.
     * @type {string}
     * @memberof MediaPathDto
     */
    Path?: string | null;
    /**
     * 
     * @type {MediaPathInfo}
     * @memberof MediaPathDto
     */
    PathInfo?: MediaPathInfo;
}


