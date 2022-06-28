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


import { CountryInfo } from './country-info';
import { CultureDto } from './culture-dto';
import { ExternalIdInfo } from './external-id-info';
import { NameValuePair } from './name-value-pair';
import { ParentalRating } from './parental-rating';

/**
 * 
 * @export
 * @interface MetadataEditorInfo
 */
export interface MetadataEditorInfo {
    /**
     * 
     * @type {Array<ParentalRating>}
     * @memberof MetadataEditorInfo
     */
    'ParentalRatingOptions'?: Array<ParentalRating>;
    /**
     * 
     * @type {Array<CountryInfo>}
     * @memberof MetadataEditorInfo
     */
    'Countries'?: Array<CountryInfo>;
    /**
     * 
     * @type {Array<CultureDto>}
     * @memberof MetadataEditorInfo
     */
    'Cultures'?: Array<CultureDto>;
    /**
     * 
     * @type {Array<ExternalIdInfo>}
     * @memberof MetadataEditorInfo
     */
    'ExternalIdInfos'?: Array<ExternalIdInfo>;
    /**
     * 
     * @type {string}
     * @memberof MetadataEditorInfo
     */
    'ContentType'?: string | null;
    /**
     * 
     * @type {Array<NameValuePair>}
     * @memberof MetadataEditorInfo
     */
    'ContentTypeOptions'?: Array<NameValuePair>;
}

