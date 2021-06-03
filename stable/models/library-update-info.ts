/* tslint:disable */
/* eslint-disable */
/**
 * Jellyfin API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 10.7.6
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Class LibraryUpdateInfo.
 * @export
 * @interface LibraryUpdateInfo
 */
export interface LibraryUpdateInfo {
    /**
     * Gets or sets the folders added to.
     * @type {Array<string>}
     * @memberof LibraryUpdateInfo
     */
    FoldersAddedTo?: Array<string>;
    /**
     * Gets or sets the folders removed from.
     * @type {Array<string>}
     * @memberof LibraryUpdateInfo
     */
    FoldersRemovedFrom?: Array<string>;
    /**
     * Gets or sets the items added.
     * @type {Array<string>}
     * @memberof LibraryUpdateInfo
     */
    ItemsAdded?: Array<string>;
    /**
     * Gets or sets the items removed.
     * @type {Array<string>}
     * @memberof LibraryUpdateInfo
     */
    ItemsRemoved?: Array<string>;
    /**
     * Gets or sets the items updated.
     * @type {Array<string>}
     * @memberof LibraryUpdateInfo
     */
    ItemsUpdated?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof LibraryUpdateInfo
     */
    CollectionFolders?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof LibraryUpdateInfo
     */
    IsEmpty?: boolean;
}


