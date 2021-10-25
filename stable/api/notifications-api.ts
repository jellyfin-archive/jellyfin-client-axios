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


import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { AdminNotificationDto } from '../models';
// @ts-ignore
import { NameIdPair } from '../models';
// @ts-ignore
import { NotificationResultDto } from '../models';
// @ts-ignore
import { NotificationTypeInfo } from '../models';
// @ts-ignore
import { NotificationsSummaryDto } from '../models';
/**
 * NotificationsApi - axios parameter creator
 * @export
 */
export const NotificationsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Sends a notification to all admins.
         * @param {AdminNotificationDto} adminNotificationDto The notification request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createAdminNotification: async (adminNotificationDto: AdminNotificationDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'adminNotificationDto' is not null or undefined
            assertParamExists('createAdminNotification', 'adminNotificationDto', adminNotificationDto)
            const localVarPath = `/Notifications/Admin`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "X-Emby-Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(adminNotificationDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Gets notification services.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getNotificationServices: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/Notifications/Services`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "X-Emby-Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Gets notification types.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getNotificationTypes: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/Notifications/Types`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "X-Emby-Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Gets a user\'s notifications.
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getNotifications: async (userId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('getNotifications', 'userId', userId)
            const localVarPath = `/Notifications/{userId}`
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "X-Emby-Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Gets a user\'s notification summary.
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getNotificationsSummary: async (userId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('getNotificationsSummary', 'userId', userId)
            const localVarPath = `/Notifications/{userId}/Summary`
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "X-Emby-Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Sets notifications as read.
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        setRead: async (userId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('setRead', 'userId', userId)
            const localVarPath = `/Notifications/{userId}/Read`
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "X-Emby-Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Sets notifications as unread.
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        setUnread: async (userId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('setUnread', 'userId', userId)
            const localVarPath = `/Notifications/{userId}/Unread`
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "X-Emby-Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * NotificationsApi - functional programming interface
 * @export
 */
export const NotificationsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = NotificationsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Sends a notification to all admins.
         * @param {AdminNotificationDto} adminNotificationDto The notification request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createAdminNotification(adminNotificationDto: AdminNotificationDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createAdminNotification(adminNotificationDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Gets notification services.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getNotificationServices(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<NameIdPair>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getNotificationServices(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Gets notification types.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getNotificationTypes(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<NotificationTypeInfo>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getNotificationTypes(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Gets a user\'s notifications.
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getNotifications(userId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NotificationResultDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getNotifications(userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Gets a user\'s notification summary.
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getNotificationsSummary(userId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NotificationsSummaryDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getNotificationsSummary(userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Sets notifications as read.
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async setRead(userId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setRead(userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Sets notifications as unread.
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async setUnread(userId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setUnread(userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * NotificationsApi - factory interface
 * @export
 */
export const NotificationsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = NotificationsApiFp(configuration)
    return {
        /**
         * 
         * @summary Sends a notification to all admins.
         * @param {AdminNotificationDto} adminNotificationDto The notification request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createAdminNotification(adminNotificationDto: AdminNotificationDto, options?: any): AxiosPromise<void> {
            return localVarFp.createAdminNotification(adminNotificationDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets notification services.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getNotificationServices(options?: any): AxiosPromise<Array<NameIdPair>> {
            return localVarFp.getNotificationServices(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets notification types.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getNotificationTypes(options?: any): AxiosPromise<Array<NotificationTypeInfo>> {
            return localVarFp.getNotificationTypes(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets a user\'s notifications.
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getNotifications(userId: string, options?: any): AxiosPromise<NotificationResultDto> {
            return localVarFp.getNotifications(userId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets a user\'s notification summary.
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getNotificationsSummary(userId: string, options?: any): AxiosPromise<NotificationsSummaryDto> {
            return localVarFp.getNotificationsSummary(userId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Sets notifications as read.
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        setRead(userId: string, options?: any): AxiosPromise<void> {
            return localVarFp.setRead(userId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Sets notifications as unread.
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        setUnread(userId: string, options?: any): AxiosPromise<void> {
            return localVarFp.setUnread(userId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createAdminNotification operation in NotificationsApi.
 * @export
 * @interface NotificationsApiCreateAdminNotificationRequest
 */
export interface NotificationsApiCreateAdminNotificationRequest {
    /**
     * The notification request.
     * @type {AdminNotificationDto}
     * @memberof NotificationsApiCreateAdminNotification
     */
    readonly adminNotificationDto: AdminNotificationDto
}

/**
 * Request parameters for getNotifications operation in NotificationsApi.
 * @export
 * @interface NotificationsApiGetNotificationsRequest
 */
export interface NotificationsApiGetNotificationsRequest {
    /**
     * 
     * @type {string}
     * @memberof NotificationsApiGetNotifications
     */
    readonly userId: string
}

/**
 * Request parameters for getNotificationsSummary operation in NotificationsApi.
 * @export
 * @interface NotificationsApiGetNotificationsSummaryRequest
 */
export interface NotificationsApiGetNotificationsSummaryRequest {
    /**
     * 
     * @type {string}
     * @memberof NotificationsApiGetNotificationsSummary
     */
    readonly userId: string
}

/**
 * Request parameters for setRead operation in NotificationsApi.
 * @export
 * @interface NotificationsApiSetReadRequest
 */
export interface NotificationsApiSetReadRequest {
    /**
     * 
     * @type {string}
     * @memberof NotificationsApiSetRead
     */
    readonly userId: string
}

/**
 * Request parameters for setUnread operation in NotificationsApi.
 * @export
 * @interface NotificationsApiSetUnreadRequest
 */
export interface NotificationsApiSetUnreadRequest {
    /**
     * 
     * @type {string}
     * @memberof NotificationsApiSetUnread
     */
    readonly userId: string
}

/**
 * NotificationsApi - object-oriented interface
 * @export
 * @class NotificationsApi
 * @extends {BaseAPI}
 */
export class NotificationsApi extends BaseAPI {
    /**
     * 
     * @summary Sends a notification to all admins.
     * @param {NotificationsApiCreateAdminNotificationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotificationsApi
     */
    public createAdminNotification(requestParameters: NotificationsApiCreateAdminNotificationRequest, options?: AxiosRequestConfig) {
        return NotificationsApiFp(this.configuration).createAdminNotification(requestParameters.adminNotificationDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets notification services.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotificationsApi
     */
    public getNotificationServices(options?: AxiosRequestConfig) {
        return NotificationsApiFp(this.configuration).getNotificationServices(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets notification types.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotificationsApi
     */
    public getNotificationTypes(options?: AxiosRequestConfig) {
        return NotificationsApiFp(this.configuration).getNotificationTypes(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets a user\'s notifications.
     * @param {NotificationsApiGetNotificationsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotificationsApi
     */
    public getNotifications(requestParameters: NotificationsApiGetNotificationsRequest, options?: AxiosRequestConfig) {
        return NotificationsApiFp(this.configuration).getNotifications(requestParameters.userId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets a user\'s notification summary.
     * @param {NotificationsApiGetNotificationsSummaryRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotificationsApi
     */
    public getNotificationsSummary(requestParameters: NotificationsApiGetNotificationsSummaryRequest, options?: AxiosRequestConfig) {
        return NotificationsApiFp(this.configuration).getNotificationsSummary(requestParameters.userId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Sets notifications as read.
     * @param {NotificationsApiSetReadRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotificationsApi
     */
    public setRead(requestParameters: NotificationsApiSetReadRequest, options?: AxiosRequestConfig) {
        return NotificationsApiFp(this.configuration).setRead(requestParameters.userId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Sets notifications as unread.
     * @param {NotificationsApiSetUnreadRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotificationsApi
     */
    public setUnread(requestParameters: NotificationsApiSetUnreadRequest, options?: AxiosRequestConfig) {
        return NotificationsApiFp(this.configuration).setUnread(requestParameters.userId, options).then((request) => request(this.axios, this.basePath));
    }
}
