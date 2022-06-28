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
 * The media update info path.
 * @export
 * @interface MediaUpdateInfoPathDto
 */
export interface MediaUpdateInfoPathDto {
    /**
     * Gets or sets media path.
     * @type {string}
     * @memberof MediaUpdateInfoPathDto
     */
    'Path'?: string | null;
    /**
     * Gets or sets media update type.  Created, Modified, Deleted.
     * @type {string}
     * @memberof MediaUpdateInfoPathDto
     */
    'UpdateType'?: string | null;
}

