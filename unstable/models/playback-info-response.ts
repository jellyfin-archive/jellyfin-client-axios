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


import { MediaSourceInfo } from './media-source-info';
import { PlaybackErrorCode } from './playback-error-code';

/**
 * Class PlaybackInfoResponse.
 * @export
 * @interface PlaybackInfoResponse
 */
export interface PlaybackInfoResponse {
    /**
     * Gets or sets the media sources.
     * @type {Array<MediaSourceInfo>}
     * @memberof PlaybackInfoResponse
     */
    MediaSources?: Array<MediaSourceInfo>;
    /**
     * Gets or sets the play session identifier.
     * @type {string}
     * @memberof PlaybackInfoResponse
     */
    PlaySessionId?: string | null;
    /**
     * 
     * @type {PlaybackErrorCode}
     * @memberof PlaybackInfoResponse
     */
    ErrorCode?: PlaybackErrorCode;
}


