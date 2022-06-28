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


import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { DisplayPreferencesDto } from '../models';
/**
 * DisplayPreferencesApi - axios parameter creator
 * @export
 */
export const DisplayPreferencesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get Display Preferences.
         * @param {string} displayPreferencesId Display preferences id.
         * @param {string} userId User id.
         * @param {string} client Client.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDisplayPreferences: async (displayPreferencesId: string, userId: string, client: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'displayPreferencesId' is not null or undefined
            assertParamExists('getDisplayPreferences', 'displayPreferencesId', displayPreferencesId)
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('getDisplayPreferences', 'userId', userId)
            // verify required parameter 'client' is not null or undefined
            assertParamExists('getDisplayPreferences', 'client', client)
            const localVarPath = `/DisplayPreferences/{displayPreferencesId}`
                .replace(`{${"displayPreferencesId"}}`, encodeURIComponent(String(displayPreferencesId)));
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
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            if (userId !== undefined) {
                localVarQueryParameter['userId'] = userId;
            }

            if (client !== undefined) {
                localVarQueryParameter['client'] = client;
            }


    
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
         * @summary Update Display Preferences.
         * @param {string} displayPreferencesId Display preferences id.
         * @param {string} userId User Id.
         * @param {string} client Client.
         * @param {DisplayPreferencesDto} displayPreferencesDto New Display Preferences object.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateDisplayPreferences: async (displayPreferencesId: string, userId: string, client: string, displayPreferencesDto: DisplayPreferencesDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'displayPreferencesId' is not null or undefined
            assertParamExists('updateDisplayPreferences', 'displayPreferencesId', displayPreferencesId)
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('updateDisplayPreferences', 'userId', userId)
            // verify required parameter 'client' is not null or undefined
            assertParamExists('updateDisplayPreferences', 'client', client)
            // verify required parameter 'displayPreferencesDto' is not null or undefined
            assertParamExists('updateDisplayPreferences', 'displayPreferencesDto', displayPreferencesDto)
            const localVarPath = `/DisplayPreferences/{displayPreferencesId}`
                .replace(`{${"displayPreferencesId"}}`, encodeURIComponent(String(displayPreferencesId)));
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
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            if (userId !== undefined) {
                localVarQueryParameter['userId'] = userId;
            }

            if (client !== undefined) {
                localVarQueryParameter['client'] = client;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(displayPreferencesDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DisplayPreferencesApi - functional programming interface
 * @export
 */
export const DisplayPreferencesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DisplayPreferencesApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get Display Preferences.
         * @param {string} displayPreferencesId Display preferences id.
         * @param {string} userId User id.
         * @param {string} client Client.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDisplayPreferences(displayPreferencesId: string, userId: string, client: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DisplayPreferencesDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDisplayPreferences(displayPreferencesId, userId, client, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Update Display Preferences.
         * @param {string} displayPreferencesId Display preferences id.
         * @param {string} userId User Id.
         * @param {string} client Client.
         * @param {DisplayPreferencesDto} displayPreferencesDto New Display Preferences object.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateDisplayPreferences(displayPreferencesId: string, userId: string, client: string, displayPreferencesDto: DisplayPreferencesDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateDisplayPreferences(displayPreferencesId, userId, client, displayPreferencesDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DisplayPreferencesApi - factory interface
 * @export
 */
export const DisplayPreferencesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DisplayPreferencesApiFp(configuration)
    return {
        /**
         * 
         * @summary Get Display Preferences.
         * @param {string} displayPreferencesId Display preferences id.
         * @param {string} userId User id.
         * @param {string} client Client.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDisplayPreferences(displayPreferencesId: string, userId: string, client: string, options?: any): AxiosPromise<DisplayPreferencesDto> {
            return localVarFp.getDisplayPreferences(displayPreferencesId, userId, client, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update Display Preferences.
         * @param {string} displayPreferencesId Display preferences id.
         * @param {string} userId User Id.
         * @param {string} client Client.
         * @param {DisplayPreferencesDto} displayPreferencesDto New Display Preferences object.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateDisplayPreferences(displayPreferencesId: string, userId: string, client: string, displayPreferencesDto: DisplayPreferencesDto, options?: any): AxiosPromise<void> {
            return localVarFp.updateDisplayPreferences(displayPreferencesId, userId, client, displayPreferencesDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getDisplayPreferences operation in DisplayPreferencesApi.
 * @export
 * @interface DisplayPreferencesApiGetDisplayPreferencesRequest
 */
export interface DisplayPreferencesApiGetDisplayPreferencesRequest {
    /**
     * Display preferences id.
     * @type {string}
     * @memberof DisplayPreferencesApiGetDisplayPreferences
     */
    readonly displayPreferencesId: string

    /**
     * User id.
     * @type {string}
     * @memberof DisplayPreferencesApiGetDisplayPreferences
     */
    readonly userId: string

    /**
     * Client.
     * @type {string}
     * @memberof DisplayPreferencesApiGetDisplayPreferences
     */
    readonly client: string
}

/**
 * Request parameters for updateDisplayPreferences operation in DisplayPreferencesApi.
 * @export
 * @interface DisplayPreferencesApiUpdateDisplayPreferencesRequest
 */
export interface DisplayPreferencesApiUpdateDisplayPreferencesRequest {
    /**
     * Display preferences id.
     * @type {string}
     * @memberof DisplayPreferencesApiUpdateDisplayPreferences
     */
    readonly displayPreferencesId: string

    /**
     * User Id.
     * @type {string}
     * @memberof DisplayPreferencesApiUpdateDisplayPreferences
     */
    readonly userId: string

    /**
     * Client.
     * @type {string}
     * @memberof DisplayPreferencesApiUpdateDisplayPreferences
     */
    readonly client: string

    /**
     * New Display Preferences object.
     * @type {DisplayPreferencesDto}
     * @memberof DisplayPreferencesApiUpdateDisplayPreferences
     */
    readonly displayPreferencesDto: DisplayPreferencesDto
}

/**
 * DisplayPreferencesApi - object-oriented interface
 * @export
 * @class DisplayPreferencesApi
 * @extends {BaseAPI}
 */
export class DisplayPreferencesApi extends BaseAPI {
    /**
     * 
     * @summary Get Display Preferences.
     * @param {DisplayPreferencesApiGetDisplayPreferencesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DisplayPreferencesApi
     */
    public getDisplayPreferences(requestParameters: DisplayPreferencesApiGetDisplayPreferencesRequest, options?: AxiosRequestConfig) {
        return DisplayPreferencesApiFp(this.configuration).getDisplayPreferences(requestParameters.displayPreferencesId, requestParameters.userId, requestParameters.client, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update Display Preferences.
     * @param {DisplayPreferencesApiUpdateDisplayPreferencesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DisplayPreferencesApi
     */
    public updateDisplayPreferences(requestParameters: DisplayPreferencesApiUpdateDisplayPreferencesRequest, options?: AxiosRequestConfig) {
        return DisplayPreferencesApiFp(this.configuration).updateDisplayPreferences(requestParameters.displayPreferencesId, requestParameters.userId, requestParameters.client, requestParameters.displayPreferencesDto, options).then((request) => request(this.axios, this.basePath));
    }
}
