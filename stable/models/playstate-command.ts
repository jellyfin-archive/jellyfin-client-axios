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
 * Enum PlaystateCommand.
 * @export
 * @enum {string}
 */

export const PlaystateCommand = {
    Stop: 'Stop',
    Pause: 'Pause',
    Unpause: 'Unpause',
    NextTrack: 'NextTrack',
    PreviousTrack: 'PreviousTrack',
    Seek: 'Seek',
    Rewind: 'Rewind',
    FastForward: 'FastForward',
    PlayPause: 'PlayPause'
} as const;

export type PlaystateCommand = typeof PlaystateCommand[keyof typeof PlaystateCommand];



