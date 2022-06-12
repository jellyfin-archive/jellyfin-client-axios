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



/**
 * The configuration page info.
 * @export
 * @interface ConfigurationPageInfo
 */
export interface ConfigurationPageInfo {
    /**
     * Gets or sets the name.
     * @type {string}
     * @memberof ConfigurationPageInfo
     */
    'Name'?: string;
    /**
     * Gets or sets a value indicating whether the configurations page is enabled in the main menu.
     * @type {boolean}
     * @memberof ConfigurationPageInfo
     */
    'EnableInMainMenu'?: boolean;
    /**
     * Gets or sets the menu section.
     * @type {string}
     * @memberof ConfigurationPageInfo
     */
    'MenuSection'?: string | null;
    /**
     * Gets or sets the menu icon.
     * @type {string}
     * @memberof ConfigurationPageInfo
     */
    'MenuIcon'?: string | null;
    /**
     * Gets or sets the display name.
     * @type {string}
     * @memberof ConfigurationPageInfo
     */
    'DisplayName'?: string | null;
    /**
     * Gets or sets the plugin id.
     * @type {string}
     * @memberof ConfigurationPageInfo
     */
    'PluginId'?: string | null;
}

