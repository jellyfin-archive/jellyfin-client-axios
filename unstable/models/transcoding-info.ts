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


import { HardwareEncodingType } from './hardware-encoding-type';

/**
 * 
 * @export
 * @interface TranscodingInfo
 */
export interface TranscodingInfo {
    /**
     * 
     * @type {string}
     * @memberof TranscodingInfo
     */
    'AudioCodec'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TranscodingInfo
     */
    'VideoCodec'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TranscodingInfo
     */
    'Container'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof TranscodingInfo
     */
    'IsVideoDirect'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TranscodingInfo
     */
    'IsAudioDirect'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof TranscodingInfo
     */
    'Bitrate'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof TranscodingInfo
     */
    'Framerate'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof TranscodingInfo
     */
    'CompletionPercentage'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof TranscodingInfo
     */
    'Width'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof TranscodingInfo
     */
    'Height'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof TranscodingInfo
     */
    'AudioChannels'?: number | null;
    /**
     * 
     * @type {HardwareEncodingType}
     * @memberof TranscodingInfo
     */
    'HardwareAccelerationType'?: HardwareEncodingType;
    /**
     * 
     * @type {string}
     * @memberof TranscodingInfo
     */
    'TranscodeReasons'?: TranscodingInfoTranscodeReasonsEnum;
}

export const TranscodingInfoTranscodeReasonsEnum = {
    ContainerNotSupported: 'ContainerNotSupported',
    VideoCodecNotSupported: 'VideoCodecNotSupported',
    AudioCodecNotSupported: 'AudioCodecNotSupported',
    SubtitleCodecNotSupported: 'SubtitleCodecNotSupported',
    AudioIsExternal: 'AudioIsExternal',
    SecondaryAudioNotSupported: 'SecondaryAudioNotSupported',
    VideoProfileNotSupported: 'VideoProfileNotSupported',
    VideoLevelNotSupported: 'VideoLevelNotSupported',
    VideoResolutionNotSupported: 'VideoResolutionNotSupported',
    VideoBitDepthNotSupported: 'VideoBitDepthNotSupported',
    VideoFramerateNotSupported: 'VideoFramerateNotSupported',
    RefFramesNotSupported: 'RefFramesNotSupported',
    AnamorphicVideoNotSupported: 'AnamorphicVideoNotSupported',
    InterlacedVideoNotSupported: 'InterlacedVideoNotSupported',
    AudioChannelsNotSupported: 'AudioChannelsNotSupported',
    AudioProfileNotSupported: 'AudioProfileNotSupported',
    AudioSampleRateNotSupported: 'AudioSampleRateNotSupported',
    AudioBitDepthNotSupported: 'AudioBitDepthNotSupported',
    ContainerBitrateExceedsLimit: 'ContainerBitrateExceedsLimit',
    VideoBitrateNotSupported: 'VideoBitrateNotSupported',
    AudioBitrateNotSupported: 'AudioBitrateNotSupported',
    UnknownVideoStreamInfo: 'UnknownVideoStreamInfo',
    UnknownAudioStreamInfo: 'UnknownAudioStreamInfo',
    DirectPlayError: 'DirectPlayError',
    VideoRangeTypeNotSupported: 'VideoRangeTypeNotSupported'
} as const;

export type TranscodingInfoTranscodeReasonsEnum = typeof TranscodingInfoTranscodeReasonsEnum[keyof typeof TranscodingInfoTranscodeReasonsEnum];


