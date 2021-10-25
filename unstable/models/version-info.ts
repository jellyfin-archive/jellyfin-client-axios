/* tslint:disable */
/* eslint-disable */
/**
 * Jellyfin API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 10.8.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Version } from './version';

/**
 * Defines the MediaBrowser.Model.Updates.VersionInfo class.
 * @export
 * @interface VersionInfo
 */
export interface VersionInfo {
    /**
     * Gets or sets the version.
     * @type {string}
     * @memberof VersionInfo
     */
    'version'?: string;
    /**
     * 
     * @type {Version}
     * @memberof VersionInfo
     */
    'VersionNumber'?: Version;
    /**
     * Gets or sets the changelog for this version.
     * @type {string}
     * @memberof VersionInfo
     */
    'changelog'?: string | null;
    /**
     * Gets or sets the ABI that this version was built against.
     * @type {string}
     * @memberof VersionInfo
     */
    'targetAbi'?: string | null;
    /**
     * Gets or sets the source URL.
     * @type {string}
     * @memberof VersionInfo
     */
    'sourceUrl'?: string | null;
    /**
     * Gets or sets a checksum for the binary.
     * @type {string}
     * @memberof VersionInfo
     */
    'checksum'?: string | null;
    /**
     * Gets or sets a timestamp of when the binary was built.
     * @type {string}
     * @memberof VersionInfo
     */
    'timestamp'?: string | null;
    /**
     * Gets or sets the repository name.
     * @type {string}
     * @memberof VersionInfo
     */
    'repositoryName'?: string;
    /**
     * Gets or sets the repository url.
     * @type {string}
     * @memberof VersionInfo
     */
    'repositoryUrl'?: string;
}

