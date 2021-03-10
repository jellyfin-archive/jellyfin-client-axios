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



/**
 * Create new playlist dto.
 * @export
 * @interface CreatePlaylistDto
 */
export interface CreatePlaylistDto {
    /**
     * Gets or sets the name of the new playlist.
     * @type {string}
     * @memberof CreatePlaylistDto
     */
    Name?: string | null;
    /**
     * Gets or sets item ids to add to the playlist.
     * @type {Array<string>}
     * @memberof CreatePlaylistDto
     */
    Ids?: Array<string> | null;
    /**
     * Gets or sets the user id.
     * @type {string}
     * @memberof CreatePlaylistDto
     */
    UserId?: string | null;
    /**
     * Gets or sets the media type.
     * @type {string}
     * @memberof CreatePlaylistDto
     */
    MediaType?: string | null;
}


