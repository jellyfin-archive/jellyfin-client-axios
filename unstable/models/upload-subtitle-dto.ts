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
 * Upload subtitles dto.
 * @export
 * @interface UploadSubtitleDto
 */
export interface UploadSubtitleDto {
    /**
     * Gets or sets the subtitle language.
     * @type {string}
     * @memberof UploadSubtitleDto
     */
    'Language': string;
    /**
     * Gets or sets the subtitle format.
     * @type {string}
     * @memberof UploadSubtitleDto
     */
    'Format': string;
    /**
     * Gets or sets a value indicating whether the subtitle is forced.
     * @type {boolean}
     * @memberof UploadSubtitleDto
     */
    'IsForced': boolean;
    /**
     * Gets or sets the subtitle data.
     * @type {string}
     * @memberof UploadSubtitleDto
     */
    'Data': string;
}

