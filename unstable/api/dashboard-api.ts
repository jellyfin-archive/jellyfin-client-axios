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


import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ConfigurationPageInfo } from '../models';
// @ts-ignore
import { ProblemDetails } from '../models';
/**
 * DashboardApi - axios parameter creator
 * @export
 */
export const DashboardApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Gets the configuration pages.
         * @param {boolean} [enableInMainMenu] Whether to enable in the main menu.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getConfigurationPages: async (enableInMainMenu?: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/web/ConfigurationPages`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (enableInMainMenu !== undefined) {
                localVarQueryParameter['enableInMainMenu'] = enableInMainMenu;
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
         * @summary Gets a dashboard configuration page.
         * @param {string} [name] The name of the page.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDashboardConfigurationPage: async (name?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/web/ConfigurationPage`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (name !== undefined) {
                localVarQueryParameter['name'] = name;
            }


    
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
 * DashboardApi - functional programming interface
 * @export
 */
export const DashboardApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DashboardApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Gets the configuration pages.
         * @param {boolean} [enableInMainMenu] Whether to enable in the main menu.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getConfigurationPages(enableInMainMenu?: boolean, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ConfigurationPageInfo>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getConfigurationPages(enableInMainMenu, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Gets a dashboard configuration page.
         * @param {string} [name] The name of the page.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDashboardConfigurationPage(name?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDashboardConfigurationPage(name, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DashboardApi - factory interface
 * @export
 */
export const DashboardApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DashboardApiFp(configuration)
    return {
        /**
         * 
         * @summary Gets the configuration pages.
         * @param {boolean} [enableInMainMenu] Whether to enable in the main menu.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getConfigurationPages(enableInMainMenu?: boolean, options?: any): AxiosPromise<Array<ConfigurationPageInfo>> {
            return localVarFp.getConfigurationPages(enableInMainMenu, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets a dashboard configuration page.
         * @param {string} [name] The name of the page.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDashboardConfigurationPage(name?: string, options?: any): AxiosPromise<any> {
            return localVarFp.getDashboardConfigurationPage(name, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getConfigurationPages operation in DashboardApi.
 * @export
 * @interface DashboardApiGetConfigurationPagesRequest
 */
export interface DashboardApiGetConfigurationPagesRequest {
    /**
     * Whether to enable in the main menu.
     * @type {boolean}
     * @memberof DashboardApiGetConfigurationPages
     */
    readonly enableInMainMenu?: boolean
}

/**
 * Request parameters for getDashboardConfigurationPage operation in DashboardApi.
 * @export
 * @interface DashboardApiGetDashboardConfigurationPageRequest
 */
export interface DashboardApiGetDashboardConfigurationPageRequest {
    /**
     * The name of the page.
     * @type {string}
     * @memberof DashboardApiGetDashboardConfigurationPage
     */
    readonly name?: string
}

/**
 * DashboardApi - object-oriented interface
 * @export
 * @class DashboardApi
 * @extends {BaseAPI}
 */
export class DashboardApi extends BaseAPI {
    /**
     * 
     * @summary Gets the configuration pages.
     * @param {DashboardApiGetConfigurationPagesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DashboardApi
     */
    public getConfigurationPages(requestParameters: DashboardApiGetConfigurationPagesRequest = {}, options?: AxiosRequestConfig) {
        return DashboardApiFp(this.configuration).getConfigurationPages(requestParameters.enableInMainMenu, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets a dashboard configuration page.
     * @param {DashboardApiGetDashboardConfigurationPageRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DashboardApi
     */
    public getDashboardConfigurationPage(requestParameters: DashboardApiGetDashboardConfigurationPageRequest = {}, options?: AxiosRequestConfig) {
        return DashboardApiFp(this.configuration).getDashboardConfigurationPage(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }
}
