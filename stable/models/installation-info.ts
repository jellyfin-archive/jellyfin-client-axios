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


import { PackageInfo } from './package-info';

/**
 * Class InstallationInfo.
 * @export
 * @interface InstallationInfo
 */
export interface InstallationInfo {
    /**
     * Gets or sets the Id.
     * @type {string}
     * @memberof InstallationInfo
     */
    'Guid'?: string;
    /**
     * Gets or sets the name.
     * @type {string}
     * @memberof InstallationInfo
     */
    'Name'?: string | null;
    /**
     * Gets or sets the version.
     * @type {string}
     * @memberof InstallationInfo
     */
    'Version'?: string | null;
    /**
     * Gets or sets the changelog for this version.
     * @type {string}
     * @memberof InstallationInfo
     */
    'Changelog'?: string | null;
    /**
     * Gets or sets the source URL.
     * @type {string}
     * @memberof InstallationInfo
     */
    'SourceUrl'?: string | null;
    /**
     * Gets or sets a checksum for the binary.
     * @type {string}
     * @memberof InstallationInfo
     */
    'Checksum'?: string | null;
    /**
     * 
     * @type {PackageInfo}
     * @memberof InstallationInfo
     */
    'PackageInfo'?: PackageInfo;
}

