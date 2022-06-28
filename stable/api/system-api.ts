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
import { EndPointInfo } from '../models';
// @ts-ignore
import { LogFile } from '../models';
// @ts-ignore
import { PublicSystemInfo } from '../models';
// @ts-ignore
import { SystemInfo } from '../models';
// @ts-ignore
import { WakeOnLanInfo } from '../models';
/**
 * SystemApi - axios parameter creator
 * @export
 */
export const SystemApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Gets information about the request endpoint.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEndpointInfo: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/System/Endpoint`;
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
         * @summary Gets a log file.
         * @param {string} name The name of the log file to get.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLogFile: async (name: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('getLogFile', 'name', name)
            const localVarPath = `/System/Logs/Log`;
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
        /**
         * 
         * @summary Pings the system.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPingSystem: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/System/Ping`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
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
         * @summary Gets public information about the server.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPublicSystemInfo: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/System/Info/Public`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
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
         * @summary Gets a list of available server log files.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getServerLogs: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/System/Logs`;
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
         * @summary Gets information about the server.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSystemInfo: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/System/Info`;
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
         * @summary Gets wake on lan information.
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        getWakeOnLanInfo: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/System/WakeOnLanInfo`;
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
         * @summary Pings the system.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postPingSystem: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/System/Ping`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
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
         * @summary Restarts the application.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        restartApplication: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/System/Restart`;
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
         * @summary Shuts down the application.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        shutdownApplication: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/System/Shutdown`;
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
 * SystemApi - functional programming interface
 * @export
 */
export const SystemApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SystemApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Gets information about the request endpoint.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getEndpointInfo(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EndPointInfo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getEndpointInfo(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Gets a log file.
         * @param {string} name The name of the log file to get.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getLogFile(name: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getLogFile(name, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Pings the system.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPingSystem(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPingSystem(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Gets public information about the server.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPublicSystemInfo(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PublicSystemInfo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPublicSystemInfo(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Gets a list of available server log files.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getServerLogs(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<LogFile>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getServerLogs(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Gets information about the server.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSystemInfo(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SystemInfo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSystemInfo(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Gets wake on lan information.
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        async getWakeOnLanInfo(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<WakeOnLanInfo>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getWakeOnLanInfo(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Pings the system.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postPingSystem(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postPingSystem(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Restarts the application.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async restartApplication(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.restartApplication(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Shuts down the application.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async shutdownApplication(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.shutdownApplication(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * SystemApi - factory interface
 * @export
 */
export const SystemApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SystemApiFp(configuration)
    return {
        /**
         * 
         * @summary Gets information about the request endpoint.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEndpointInfo(options?: any): AxiosPromise<EndPointInfo> {
            return localVarFp.getEndpointInfo(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets a log file.
         * @param {string} name The name of the log file to get.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLogFile(name: string, options?: any): AxiosPromise<any> {
            return localVarFp.getLogFile(name, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Pings the system.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPingSystem(options?: any): AxiosPromise<string> {
            return localVarFp.getPingSystem(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets public information about the server.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPublicSystemInfo(options?: any): AxiosPromise<PublicSystemInfo> {
            return localVarFp.getPublicSystemInfo(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets a list of available server log files.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getServerLogs(options?: any): AxiosPromise<Array<LogFile>> {
            return localVarFp.getServerLogs(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets information about the server.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSystemInfo(options?: any): AxiosPromise<SystemInfo> {
            return localVarFp.getSystemInfo(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets wake on lan information.
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        getWakeOnLanInfo(options?: any): AxiosPromise<Array<WakeOnLanInfo>> {
            return localVarFp.getWakeOnLanInfo(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Pings the system.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postPingSystem(options?: any): AxiosPromise<string> {
            return localVarFp.postPingSystem(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Restarts the application.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        restartApplication(options?: any): AxiosPromise<void> {
            return localVarFp.restartApplication(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Shuts down the application.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        shutdownApplication(options?: any): AxiosPromise<void> {
            return localVarFp.shutdownApplication(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getLogFile operation in SystemApi.
 * @export
 * @interface SystemApiGetLogFileRequest
 */
export interface SystemApiGetLogFileRequest {
    /**
     * The name of the log file to get.
     * @type {string}
     * @memberof SystemApiGetLogFile
     */
    readonly name: string
}

/**
 * SystemApi - object-oriented interface
 * @export
 * @class SystemApi
 * @extends {BaseAPI}
 */
export class SystemApi extends BaseAPI {
    /**
     * 
     * @summary Gets information about the request endpoint.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SystemApi
     */
    public getEndpointInfo(options?: AxiosRequestConfig) {
        return SystemApiFp(this.configuration).getEndpointInfo(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets a log file.
     * @param {SystemApiGetLogFileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SystemApi
     */
    public getLogFile(requestParameters: SystemApiGetLogFileRequest, options?: AxiosRequestConfig) {
        return SystemApiFp(this.configuration).getLogFile(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Pings the system.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SystemApi
     */
    public getPingSystem(options?: AxiosRequestConfig) {
        return SystemApiFp(this.configuration).getPingSystem(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets public information about the server.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SystemApi
     */
    public getPublicSystemInfo(options?: AxiosRequestConfig) {
        return SystemApiFp(this.configuration).getPublicSystemInfo(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets a list of available server log files.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SystemApi
     */
    public getServerLogs(options?: AxiosRequestConfig) {
        return SystemApiFp(this.configuration).getServerLogs(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets information about the server.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SystemApi
     */
    public getSystemInfo(options?: AxiosRequestConfig) {
        return SystemApiFp(this.configuration).getSystemInfo(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets wake on lan information.
     * @param {*} [options] Override http request option.
     * @deprecated
     * @throws {RequiredError}
     * @memberof SystemApi
     */
    public getWakeOnLanInfo(options?: AxiosRequestConfig) {
        return SystemApiFp(this.configuration).getWakeOnLanInfo(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Pings the system.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SystemApi
     */
    public postPingSystem(options?: AxiosRequestConfig) {
        return SystemApiFp(this.configuration).postPingSystem(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Restarts the application.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SystemApi
     */
    public restartApplication(options?: AxiosRequestConfig) {
        return SystemApiFp(this.configuration).restartApplication(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Shuts down the application.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SystemApi
     */
    public shutdownApplication(options?: AxiosRequestConfig) {
        return SystemApiFp(this.configuration).shutdownApplication(options).then((request) => request(this.axios, this.basePath));
    }
}
