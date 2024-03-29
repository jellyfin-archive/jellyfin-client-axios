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
 * Class CultureDto.
 * @export
 * @interface CultureDto
 */
export interface CultureDto {
    /**
     * Gets the name.
     * @type {string}
     * @memberof CultureDto
     */
    'Name'?: string;
    /**
     * Gets the display name.
     * @type {string}
     * @memberof CultureDto
     */
    'DisplayName'?: string;
    /**
     * Gets the name of the two letter ISO language.
     * @type {string}
     * @memberof CultureDto
     */
    'TwoLetterISOLanguageName'?: string;
    /**
     * Gets the name of the three letter ISO language.
     * @type {string}
     * @memberof CultureDto
     */
    'ThreeLetterISOLanguageName'?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof CultureDto
     */
    'ThreeLetterISOLanguageNames'?: Array<string>;
}

