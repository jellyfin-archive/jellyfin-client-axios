/* tslint:disable */
/* eslint-disable */
/**
 * Jellyfin API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { AccessSchedule } from './access-schedule';
import { SyncPlayUserAccessType } from './sync-play-user-access-type';
import { UnratedItem } from './unrated-item';

/**
 * 
 * @export
 * @interface UserPolicy
 */
export interface UserPolicy {
    /**
     * Gets or sets a value indicating whether this instance is administrator.
     * @type {boolean}
     * @memberof UserPolicy
     */
    IsAdministrator?: boolean;
    /**
     * Gets or sets a value indicating whether this instance is hidden.
     * @type {boolean}
     * @memberof UserPolicy
     */
    IsHidden?: boolean;
    /**
     * Gets or sets a value indicating whether this instance is disabled.
     * @type {boolean}
     * @memberof UserPolicy
     */
    IsDisabled?: boolean;
    /**
     * Gets or sets the max parental rating.
     * @type {number}
     * @memberof UserPolicy
     */
    MaxParentalRating?: number | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof UserPolicy
     */
    BlockedTags?: Array<string> | null;
    /**
     * 
     * @type {boolean}
     * @memberof UserPolicy
     */
    EnableUserPreferenceAccess?: boolean;
    /**
     * 
     * @type {Array<AccessSchedule>}
     * @memberof UserPolicy
     */
    AccessSchedules?: Array<AccessSchedule> | null;
    /**
     * 
     * @type {Array<UnratedItem>}
     * @memberof UserPolicy
     */
    BlockUnratedItems?: Array<UnratedItem> | null;
    /**
     * 
     * @type {boolean}
     * @memberof UserPolicy
     */
    EnableRemoteControlOfOtherUsers?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserPolicy
     */
    EnableSharedDeviceControl?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserPolicy
     */
    EnableRemoteAccess?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserPolicy
     */
    EnableLiveTvManagement?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserPolicy
     */
    EnableLiveTvAccess?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserPolicy
     */
    EnableMediaPlayback?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserPolicy
     */
    EnableAudioPlaybackTranscoding?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserPolicy
     */
    EnableVideoPlaybackTranscoding?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserPolicy
     */
    EnablePlaybackRemuxing?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserPolicy
     */
    ForceRemoteSourceTranscoding?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserPolicy
     */
    EnableContentDeletion?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof UserPolicy
     */
    EnableContentDeletionFromFolders?: Array<string> | null;
    /**
     * 
     * @type {boolean}
     * @memberof UserPolicy
     */
    EnableContentDownloading?: boolean;
    /**
     * Gets or sets a value indicating whether [enable synchronize].
     * @type {boolean}
     * @memberof UserPolicy
     */
    EnableSyncTranscoding?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserPolicy
     */
    EnableMediaConversion?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof UserPolicy
     */
    EnabledDevices?: Array<string> | null;
    /**
     * 
     * @type {boolean}
     * @memberof UserPolicy
     */
    EnableAllDevices?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof UserPolicy
     */
    EnabledChannels?: Array<string> | null;
    /**
     * 
     * @type {boolean}
     * @memberof UserPolicy
     */
    EnableAllChannels?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof UserPolicy
     */
    EnabledFolders?: Array<string> | null;
    /**
     * 
     * @type {boolean}
     * @memberof UserPolicy
     */
    EnableAllFolders?: boolean;
    /**
     * 
     * @type {number}
     * @memberof UserPolicy
     */
    InvalidLoginAttemptCount?: number;
    /**
     * 
     * @type {number}
     * @memberof UserPolicy
     */
    LoginAttemptsBeforeLockout?: number;
    /**
     * 
     * @type {number}
     * @memberof UserPolicy
     */
    MaxActiveSessions?: number;
    /**
     * 
     * @type {boolean}
     * @memberof UserPolicy
     */
    EnablePublicSharing?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof UserPolicy
     */
    BlockedMediaFolders?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof UserPolicy
     */
    BlockedChannels?: Array<string> | null;
    /**
     * 
     * @type {number}
     * @memberof UserPolicy
     */
    RemoteClientBitrateLimit?: number;
    /**
     * 
     * @type {string}
     * @memberof UserPolicy
     */
    AuthenticationProviderId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UserPolicy
     */
    PasswordResetProviderId?: string | null;
    /**
     * 
     * @type {SyncPlayUserAccessType}
     * @memberof UserPolicy
     */
    SyncPlayAccess?: SyncPlayUserAccessType;
}


