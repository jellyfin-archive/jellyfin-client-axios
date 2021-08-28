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


import { MediaPathInfo } from './media-path-info';

/**
 * Update library options dto.
 * @export
 * @interface UpdateMediaPathRequestDto
 */
export interface UpdateMediaPathRequestDto {
    /**
     * Gets or sets the library name.
     * @type {string}
     * @memberof UpdateMediaPathRequestDto
     */
    Name: string;
    /**
     * 
     * @type {MediaPathInfo}
     * @memberof UpdateMediaPathRequestDto
     */
    PathInfo: MediaPathInfo;
}


