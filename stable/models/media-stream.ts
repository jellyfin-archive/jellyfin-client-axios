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


import { MediaStreamType } from './media-stream-type';
import { SubtitleDeliveryMethod } from './subtitle-delivery-method';

/**
 * Class MediaStream.
 * @export
 * @interface MediaStream
 */
export interface MediaStream {
    /**
     * Gets or sets the codec.
     * @type {string}
     * @memberof MediaStream
     */
    'Codec'?: string | null;
    /**
     * Gets or sets the codec tag.
     * @type {string}
     * @memberof MediaStream
     */
    'CodecTag'?: string | null;
    /**
     * Gets or sets the language.
     * @type {string}
     * @memberof MediaStream
     */
    'Language'?: string | null;
    /**
     * Gets or sets the color range.
     * @type {string}
     * @memberof MediaStream
     */
    'ColorRange'?: string | null;
    /**
     * Gets or sets the color space.
     * @type {string}
     * @memberof MediaStream
     */
    'ColorSpace'?: string | null;
    /**
     * Gets or sets the color transfer.
     * @type {string}
     * @memberof MediaStream
     */
    'ColorTransfer'?: string | null;
    /**
     * Gets or sets the color primaries.
     * @type {string}
     * @memberof MediaStream
     */
    'ColorPrimaries'?: string | null;
    /**
     * Gets or sets the Dolby Vision version major.
     * @type {number}
     * @memberof MediaStream
     */
    'DvVersionMajor'?: number | null;
    /**
     * Gets or sets the Dolby Vision version minor.
     * @type {number}
     * @memberof MediaStream
     */
    'DvVersionMinor'?: number | null;
    /**
     * Gets or sets the Dolby Vision profile.
     * @type {number}
     * @memberof MediaStream
     */
    'DvProfile'?: number | null;
    /**
     * Gets or sets the Dolby Vision level.
     * @type {number}
     * @memberof MediaStream
     */
    'DvLevel'?: number | null;
    /**
     * Gets or sets the Dolby Vision rpu present flag.
     * @type {number}
     * @memberof MediaStream
     */
    'RpuPresentFlag'?: number | null;
    /**
     * Gets or sets the Dolby Vision el present flag.
     * @type {number}
     * @memberof MediaStream
     */
    'ElPresentFlag'?: number | null;
    /**
     * Gets or sets the Dolby Vision bl present flag.
     * @type {number}
     * @memberof MediaStream
     */
    'BlPresentFlag'?: number | null;
    /**
     * Gets or sets the Dolby Vision bl signal compatibility id.
     * @type {number}
     * @memberof MediaStream
     */
    'DvBlSignalCompatibilityId'?: number | null;
    /**
     * Gets or sets the comment.
     * @type {string}
     * @memberof MediaStream
     */
    'Comment'?: string | null;
    /**
     * Gets or sets the time base.
     * @type {string}
     * @memberof MediaStream
     */
    'TimeBase'?: string | null;
    /**
     * Gets or sets the codec time base.
     * @type {string}
     * @memberof MediaStream
     */
    'CodecTimeBase'?: string | null;
    /**
     * Gets or sets the title.
     * @type {string}
     * @memberof MediaStream
     */
    'Title'?: string | null;
    /**
     * Gets the video range.
     * @type {string}
     * @memberof MediaStream
     */
    'VideoRange'?: string | null;
    /**
     * Gets the video range type.
     * @type {string}
     * @memberof MediaStream
     */
    'VideoRangeType'?: string | null;
    /**
     * Gets the video dovi title.
     * @type {string}
     * @memberof MediaStream
     */
    'VideoDoViTitle'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MediaStream
     */
    'LocalizedUndefined'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MediaStream
     */
    'LocalizedDefault'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MediaStream
     */
    'LocalizedForced'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MediaStream
     */
    'LocalizedExternal'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MediaStream
     */
    'DisplayTitle'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MediaStream
     */
    'NalLengthSize'?: string | null;
    /**
     * Gets or sets a value indicating whether this instance is interlaced.
     * @type {boolean}
     * @memberof MediaStream
     */
    'IsInterlaced'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof MediaStream
     */
    'IsAVC'?: boolean | null;
    /**
     * Gets or sets the channel layout.
     * @type {string}
     * @memberof MediaStream
     */
    'ChannelLayout'?: string | null;
    /**
     * Gets or sets the bit rate.
     * @type {number}
     * @memberof MediaStream
     */
    'BitRate'?: number | null;
    /**
     * Gets or sets the bit depth.
     * @type {number}
     * @memberof MediaStream
     */
    'BitDepth'?: number | null;
    /**
     * Gets or sets the reference frames.
     * @type {number}
     * @memberof MediaStream
     */
    'RefFrames'?: number | null;
    /**
     * Gets or sets the length of the packet.
     * @type {number}
     * @memberof MediaStream
     */
    'PacketLength'?: number | null;
    /**
     * Gets or sets the channels.
     * @type {number}
     * @memberof MediaStream
     */
    'Channels'?: number | null;
    /**
     * Gets or sets the sample rate.
     * @type {number}
     * @memberof MediaStream
     */
    'SampleRate'?: number | null;
    /**
     * Gets or sets a value indicating whether this instance is default.
     * @type {boolean}
     * @memberof MediaStream
     */
    'IsDefault'?: boolean;
    /**
     * Gets or sets a value indicating whether this instance is forced.
     * @type {boolean}
     * @memberof MediaStream
     */
    'IsForced'?: boolean;
    /**
     * Gets or sets the height.
     * @type {number}
     * @memberof MediaStream
     */
    'Height'?: number | null;
    /**
     * Gets or sets the width.
     * @type {number}
     * @memberof MediaStream
     */
    'Width'?: number | null;
    /**
     * Gets or sets the average frame rate.
     * @type {number}
     * @memberof MediaStream
     */
    'AverageFrameRate'?: number | null;
    /**
     * Gets or sets the real frame rate.
     * @type {number}
     * @memberof MediaStream
     */
    'RealFrameRate'?: number | null;
    /**
     * Gets or sets the profile.
     * @type {string}
     * @memberof MediaStream
     */
    'Profile'?: string | null;
    /**
     * 
     * @type {MediaStreamType}
     * @memberof MediaStream
     */
    'Type'?: MediaStreamType;
    /**
     * Gets or sets the aspect ratio.
     * @type {string}
     * @memberof MediaStream
     */
    'AspectRatio'?: string | null;
    /**
     * Gets or sets the index.
     * @type {number}
     * @memberof MediaStream
     */
    'Index'?: number;
    /**
     * Gets or sets the score.
     * @type {number}
     * @memberof MediaStream
     */
    'Score'?: number | null;
    /**
     * Gets or sets a value indicating whether this instance is external.
     * @type {boolean}
     * @memberof MediaStream
     */
    'IsExternal'?: boolean;
    /**
     * 
     * @type {SubtitleDeliveryMethod}
     * @memberof MediaStream
     */
    'DeliveryMethod'?: SubtitleDeliveryMethod;
    /**
     * Gets or sets the delivery URL.
     * @type {string}
     * @memberof MediaStream
     */
    'DeliveryUrl'?: string | null;
    /**
     * Gets or sets a value indicating whether this instance is external URL.
     * @type {boolean}
     * @memberof MediaStream
     */
    'IsExternalUrl'?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof MediaStream
     */
    'IsTextSubtitleStream'?: boolean;
    /**
     * Gets or sets a value indicating whether [supports external stream].
     * @type {boolean}
     * @memberof MediaStream
     */
    'SupportsExternalStream'?: boolean;
    /**
     * Gets or sets the filename.
     * @type {string}
     * @memberof MediaStream
     */
    'Path'?: string | null;
    /**
     * Gets or sets the pixel format.
     * @type {string}
     * @memberof MediaStream
     */
    'PixelFormat'?: string | null;
    /**
     * Gets or sets the level.
     * @type {number}
     * @memberof MediaStream
     */
    'Level'?: number | null;
    /**
     * Gets or sets whether this instance is anamorphic.
     * @type {boolean}
     * @memberof MediaStream
     */
    'IsAnamorphic'?: boolean | null;
}

