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


import { ImageOption } from './image-option';

/**
 * 
 * @export
 * @interface TypeOptions
 */
export interface TypeOptions {
    /**
     * 
     * @type {string}
     * @memberof TypeOptions
     */
    'Type'?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof TypeOptions
     */
    'MetadataFetchers'?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof TypeOptions
     */
    'MetadataFetcherOrder'?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof TypeOptions
     */
    'ImageFetchers'?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof TypeOptions
     */
    'ImageFetcherOrder'?: Array<string> | null;
    /**
     * 
     * @type {Array<ImageOption>}
     * @memberof TypeOptions
     */
    'ImageOptions'?: Array<ImageOption> | null;
}

