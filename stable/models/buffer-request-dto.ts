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
 * Class BufferRequestDto.
 * @export
 * @interface BufferRequestDto
 */
export interface BufferRequestDto {
    /**
     * Gets or sets when the request has been made by the client.
     * @type {string}
     * @memberof BufferRequestDto
     */
    'When'?: string;
    /**
     * Gets or sets the position ticks.
     * @type {number}
     * @memberof BufferRequestDto
     */
    'PositionTicks'?: number;
    /**
     * Gets or sets a value indicating whether the client playback is unpaused.
     * @type {boolean}
     * @memberof BufferRequestDto
     */
    'IsPlaying'?: boolean;
    /**
     * Gets or sets the playlist item identifier of the playing item.
     * @type {string}
     * @memberof BufferRequestDto
     */
    'PlaylistItemId'?: string;
}

