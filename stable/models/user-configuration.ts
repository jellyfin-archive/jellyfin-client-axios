/* tslint:disable */
/* eslint-disable */
/**
 * Jellyfin API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 10.7.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { SubtitlePlaybackMode } from './subtitle-playback-mode';

/**
 * Class UserConfiguration.
 * @export
 * @interface UserConfiguration
 */
export interface UserConfiguration {
    /**
     * Gets or sets the audio language preference.
     * @type {string}
     * @memberof UserConfiguration
     */
    AudioLanguagePreference?: string | null;
    /**
     * Gets or sets a value indicating whether [play default audio track].
     * @type {boolean}
     * @memberof UserConfiguration
     */
    PlayDefaultAudioTrack?: boolean;
    /**
     * Gets or sets the subtitle language preference.
     * @type {string}
     * @memberof UserConfiguration
     */
    SubtitleLanguagePreference?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof UserConfiguration
     */
    DisplayMissingEpisodes?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof UserConfiguration
     */
    GroupedFolders?: Array<string> | null;
    /**
     * An enum representing a subtitle playback mode.
     * @type {SubtitlePlaybackMode}
     * @memberof UserConfiguration
     */
    SubtitleMode?: SubtitlePlaybackMode;
    /**
     * 
     * @type {boolean}
     * @memberof UserConfiguration
     */
    DisplayCollectionsView?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserConfiguration
     */
    EnableLocalPassword?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof UserConfiguration
     */
    OrderedViews?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof UserConfiguration
     */
    LatestItemsExcludes?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof UserConfiguration
     */
    MyMediaExcludes?: Array<string> | null;
    /**
     * 
     * @type {boolean}
     * @memberof UserConfiguration
     */
    HidePlayedInLatest?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserConfiguration
     */
    RememberAudioSelections?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserConfiguration
     */
    RememberSubtitleSelections?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserConfiguration
     */
    EnableNextEpisodeAutoPlay?: boolean;
}

