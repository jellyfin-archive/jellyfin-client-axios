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


import { LibraryOptionInfoDto } from './library-option-info-dto';
import { LibraryTypeOptionsDto } from './library-type-options-dto';

/**
 * Library options result dto.
 * @export
 * @interface LibraryOptionsResultDto
 */
export interface LibraryOptionsResultDto {
    /**
     * Gets or sets the metadata savers.
     * @type {Array<LibraryOptionInfoDto>}
     * @memberof LibraryOptionsResultDto
     */
    MetadataSavers?: Array<LibraryOptionInfoDto>;
    /**
     * Gets or sets the metadata readers.
     * @type {Array<LibraryOptionInfoDto>}
     * @memberof LibraryOptionsResultDto
     */
    MetadataReaders?: Array<LibraryOptionInfoDto>;
    /**
     * Gets or sets the subtitle fetchers.
     * @type {Array<LibraryOptionInfoDto>}
     * @memberof LibraryOptionsResultDto
     */
    SubtitleFetchers?: Array<LibraryOptionInfoDto>;
    /**
     * Gets or sets the type options.
     * @type {Array<LibraryTypeOptionsDto>}
     * @memberof LibraryOptionsResultDto
     */
    TypeOptions?: Array<LibraryTypeOptionsDto>;
}


