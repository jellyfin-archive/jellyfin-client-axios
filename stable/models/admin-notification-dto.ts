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


import { NotificationLevel } from './notification-level';

/**
 * The admin notification dto.
 * @export
 * @interface AdminNotificationDto
 */
export interface AdminNotificationDto {
    /**
     * Gets or sets the notification name.
     * @type {string}
     * @memberof AdminNotificationDto
     */
    Name?: string | null;
    /**
     * Gets or sets the notification description.
     * @type {string}
     * @memberof AdminNotificationDto
     */
    Description?: string | null;
    /**
     * 
     * @type {NotificationLevel}
     * @memberof AdminNotificationDto
     */
    NotificationLevel?: NotificationLevel;
    /**
     * Gets or sets the notification url.
     * @type {string}
     * @memberof AdminNotificationDto
     */
    Url?: string | null;
}


