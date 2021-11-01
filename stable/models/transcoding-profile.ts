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


import { DlnaProfileType } from './dlna-profile-type';
import { EncodingContext } from './encoding-context';
import { TranscodeSeekInfo } from './transcode-seek-info';

/**
 * 
 * @export
 * @interface TranscodingProfile
 */
export interface TranscodingProfile {
    /**
     * 
     * @type {string}
     * @memberof TranscodingProfile
     */
    'Container'?: string;
    /**
     * 
     * @type {DlnaProfileType}
     * @memberof TranscodingProfile
     */
    'Type'?: DlnaProfileType;
    /**
     * 
     * @type {string}
     * @memberof TranscodingProfile
     */
    'VideoCodec'?: string;
    /**
     * 
     * @type {string}
     * @memberof TranscodingProfile
     */
    'AudioCodec'?: string;
    /**
     * 
     * @type {string}
     * @memberof TranscodingProfile
     */
    'Protocol'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof TranscodingProfile
     */
    'EstimateContentLength'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TranscodingProfile
     */
    'EnableMpegtsM2TsMode'?: boolean;
    /**
     * 
     * @type {TranscodeSeekInfo}
     * @memberof TranscodingProfile
     */
    'TranscodeSeekInfo'?: TranscodeSeekInfo;
    /**
     * 
     * @type {boolean}
     * @memberof TranscodingProfile
     */
    'CopyTimestamps'?: boolean;
    /**
     * 
     * @type {EncodingContext}
     * @memberof TranscodingProfile
     */
    'Context'?: EncodingContext;
    /**
     * 
     * @type {boolean}
     * @memberof TranscodingProfile
     */
    'EnableSubtitlesInManifest'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TranscodingProfile
     */
    'MaxAudioChannels'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof TranscodingProfile
     */
    'MinSegments'?: number;
    /**
     * 
     * @type {number}
     * @memberof TranscodingProfile
     */
    'SegmentLength'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof TranscodingProfile
     */
    'BreakOnNonKeyFrames'?: boolean;
}

