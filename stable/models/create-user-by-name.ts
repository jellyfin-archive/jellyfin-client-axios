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
 * The create user by name request body.
 * @export
 * @interface CreateUserByName
 */
export interface CreateUserByName {
    /**
     * Gets or sets the username.
     * @type {string}
     * @memberof CreateUserByName
     */
    Name?: string | null;
    /**
     * Gets or sets the password.
     * @type {string}
     * @memberof CreateUserByName
     */
    Password?: string | null;
}


