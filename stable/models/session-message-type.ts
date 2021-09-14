/* tslint:disable */
/* eslint-disable */
/**
 * Jellyfin API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 10.7.7
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * The different kinds of messages that are used in the WebSocket api.
 * @export
 * @enum {string}
 */

export enum SessionMessageType {
    ForceKeepAlive = 'ForceKeepAlive',
    GeneralCommand = 'GeneralCommand',
    UserDataChanged = 'UserDataChanged',
    Sessions = 'Sessions',
    Play = 'Play',
    SyncPlayCommand = 'SyncPlayCommand',
    SyncPlayGroupUpdate = 'SyncPlayGroupUpdate',
    Playstate = 'Playstate',
    RestartRequired = 'RestartRequired',
    ServerShuttingDown = 'ServerShuttingDown',
    ServerRestarting = 'ServerRestarting',
    LibraryChanged = 'LibraryChanged',
    UserDeleted = 'UserDeleted',
    UserUpdated = 'UserUpdated',
    SeriesTimerCreated = 'SeriesTimerCreated',
    TimerCreated = 'TimerCreated',
    SeriesTimerCancelled = 'SeriesTimerCancelled',
    TimerCancelled = 'TimerCancelled',
    RefreshProgress = 'RefreshProgress',
    ScheduledTaskEnded = 'ScheduledTaskEnded',
    PackageInstallationCancelled = 'PackageInstallationCancelled',
    PackageInstallationFailed = 'PackageInstallationFailed',
    PackageInstallationCompleted = 'PackageInstallationCompleted',
    PackageInstalling = 'PackageInstalling',
    PackageUninstalled = 'PackageUninstalled',
    ActivityLogEntry = 'ActivityLogEntry',
    ScheduledTasksInfo = 'ScheduledTasksInfo',
    ActivityLogEntryStart = 'ActivityLogEntryStart',
    ActivityLogEntryStop = 'ActivityLogEntryStop',
    SessionsStart = 'SessionsStart',
    SessionsStop = 'SessionsStop',
    ScheduledTasksInfoStart = 'ScheduledTasksInfoStart',
    ScheduledTasksInfoStop = 'ScheduledTasksInfoStop',
    KeepAlive = 'KeepAlive'
}



