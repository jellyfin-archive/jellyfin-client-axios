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
 * The DlnaOptions class contains the user definable parameters for the dlna subsystems.
 * @export
 * @interface DlnaOptions
 */
export interface DlnaOptions {
    /**
     * Gets or sets a value indicating whether gets or sets a value to indicate the status of the dlna playTo subsystem.
     * @type {boolean}
     * @memberof DlnaOptions
     */
    'EnablePlayTo'?: boolean;
    /**
     * Gets or sets a value indicating whether gets or sets a value to indicate the status of the dlna server subsystem.
     * @type {boolean}
     * @memberof DlnaOptions
     */
    'EnableServer'?: boolean;
    /**
     * Gets or sets a value indicating whether detailed dlna server logs are sent to the console/log.  If the setting \"Emby.Dlna\": \"Debug\" msut be set in logging.default.json for this property to work.
     * @type {boolean}
     * @memberof DlnaOptions
     */
    'EnableDebugLog'?: boolean;
    /**
     * Gets or sets a value indicating whether whether detailed playTo debug logs are sent to the console/log.  If the setting \"Emby.Dlna.PlayTo\": \"Debug\" msut be set in logging.default.json for this property to work.
     * @type {boolean}
     * @memberof DlnaOptions
     */
    'EnablePlayToTracing'?: boolean;
    /**
     * Gets or sets the ssdp client discovery interval time (in seconds).  This is the time after which the server will send a ssdp search request.
     * @type {number}
     * @memberof DlnaOptions
     */
    'ClientDiscoveryIntervalSeconds'?: number;
    /**
     * Gets or sets the frequency at which ssdp alive notifications are transmitted.
     * @type {number}
     * @memberof DlnaOptions
     */
    'AliveMessageIntervalSeconds'?: number;
    /**
     * Gets or sets the frequency at which ssdp alive notifications are transmitted. MIGRATING - TO BE REMOVED ONCE WEB HAS BEEN ALTERED.
     * @type {number}
     * @memberof DlnaOptions
     */
    'BlastAliveMessageIntervalSeconds'?: number;
    /**
     * Gets or sets the default user account that the dlna server uses.
     * @type {string}
     * @memberof DlnaOptions
     */
    'DefaultUserId'?: string | null;
    /**
     * Gets or sets a value indicating whether playTo device profiles should be created.
     * @type {boolean}
     * @memberof DlnaOptions
     */
    'AutoCreatePlayToProfiles'?: boolean;
    /**
     * Gets or sets a value indicating whether to blast alive messages.
     * @type {boolean}
     * @memberof DlnaOptions
     */
    'BlastAliveMessages'?: boolean;
    /**
     * gets or sets a value indicating whether to send only matched host.
     * @type {boolean}
     * @memberof DlnaOptions
     */
    'SendOnlyMatchedHost'?: boolean;
}
