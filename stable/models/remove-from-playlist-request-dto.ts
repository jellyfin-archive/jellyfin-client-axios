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
 * Class RemoveFromPlaylistRequestDto.
 * @export
 * @interface RemoveFromPlaylistRequestDto
 */
export interface RemoveFromPlaylistRequestDto {
    /**
     * Gets or sets the playlist identifiers ot the items. Ignored when clearing the playlist.
     * @type {Array<string>}
     * @memberof RemoveFromPlaylistRequestDto
     */
    'PlaylistItemIds'?: Array<string>;
    /**
     * Gets or sets a value indicating whether the entire playlist should be cleared.
     * @type {boolean}
     * @memberof RemoveFromPlaylistRequestDto
     */
    'ClearPlaylist'?: boolean;
    /**
     * Gets or sets a value indicating whether the playing item should be removed as well. Used only when clearing the playlist.
     * @type {boolean}
     * @memberof RemoveFromPlaylistRequestDto
     */
    'ClearPlayingItem'?: boolean;
}

