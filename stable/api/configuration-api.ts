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
import { MediaEncoderPathDto } from '../models';
// @ts-ignore
import { MetadataOptions } from '../models';
// @ts-ignore
import { ServerConfiguration } from '../models';
/**
 * ConfigurationApi - axios parameter creator
 * @export
 */
export const ConfigurationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Gets application configuration.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getConfiguration: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/System/Configuration`;
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
         * @summary Gets a default MetadataOptions object.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDefaultMetadataOptions: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/System/Configuration/MetadataOptions/Default`;
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
         * @summary Gets a named configuration.
         * @param {string} key Configuration key.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getNamedConfiguration: async (key: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'key' is not null or undefined
            assertParamExists('getNamedConfiguration', 'key', key)
            const localVarPath = `/System/Configuration/{key}`
                .replace(`{${"key"}}`, encodeURIComponent(String(key)));
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
         * @summary Updates application configuration.
         * @param {ServerConfiguration} serverConfiguration Configuration.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateConfiguration: async (serverConfiguration: ServerConfiguration, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'serverConfiguration' is not null or undefined
            assertParamExists('updateConfiguration', 'serverConfiguration', serverConfiguration)
            const localVarPath = `/System/Configuration`;
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


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(serverConfiguration, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Updates the path to the media encoder.
         * @param {MediaEncoderPathDto} mediaEncoderPathDto Media encoder path form body.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateMediaEncoderPath: async (mediaEncoderPathDto: MediaEncoderPathDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'mediaEncoderPathDto' is not null or undefined
            assertParamExists('updateMediaEncoderPath', 'mediaEncoderPathDto', mediaEncoderPathDto)
            const localVarPath = `/System/MediaEncoder/Path`;
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


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(mediaEncoderPathDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Updates named configuration.
         * @param {string} key Configuration key.
         * @param {any} body Configuration.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateNamedConfiguration: async (key: string, body: any, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'key' is not null or undefined
            assertParamExists('updateNamedConfiguration', 'key', key)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('updateNamedConfiguration', 'body', body)
            const localVarPath = `/System/Configuration/{key}`
                .replace(`{${"key"}}`, encodeURIComponent(String(key)));
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


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ConfigurationApi - functional programming interface
 * @export
 */
export const ConfigurationApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ConfigurationApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Gets application configuration.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getConfiguration(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ServerConfiguration>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getConfiguration(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Gets a default MetadataOptions object.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDefaultMetadataOptions(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MetadataOptions>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDefaultMetadataOptions(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Gets a named configuration.
         * @param {string} key Configuration key.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getNamedConfiguration(key: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getNamedConfiguration(key, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Updates application configuration.
         * @param {ServerConfiguration} serverConfiguration Configuration.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateConfiguration(serverConfiguration: ServerConfiguration, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateConfiguration(serverConfiguration, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Updates the path to the media encoder.
         * @param {MediaEncoderPathDto} mediaEncoderPathDto Media encoder path form body.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateMediaEncoderPath(mediaEncoderPathDto: MediaEncoderPathDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateMediaEncoderPath(mediaEncoderPathDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Updates named configuration.
         * @param {string} key Configuration key.
         * @param {any} body Configuration.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateNamedConfiguration(key: string, body: any, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateNamedConfiguration(key, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ConfigurationApi - factory interface
 * @export
 */
export const ConfigurationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ConfigurationApiFp(configuration)
    return {
        /**
         * 
         * @summary Gets application configuration.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getConfiguration(options?: any): AxiosPromise<ServerConfiguration> {
            return localVarFp.getConfiguration(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets a default MetadataOptions object.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDefaultMetadataOptions(options?: any): AxiosPromise<MetadataOptions> {
            return localVarFp.getDefaultMetadataOptions(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets a named configuration.
         * @param {string} key Configuration key.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getNamedConfiguration(key: string, options?: any): AxiosPromise<any> {
            return localVarFp.getNamedConfiguration(key, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Updates application configuration.
         * @param {ServerConfiguration} serverConfiguration Configuration.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateConfiguration(serverConfiguration: ServerConfiguration, options?: any): AxiosPromise<void> {
            return localVarFp.updateConfiguration(serverConfiguration, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Updates the path to the media encoder.
         * @param {MediaEncoderPathDto} mediaEncoderPathDto Media encoder path form body.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateMediaEncoderPath(mediaEncoderPathDto: MediaEncoderPathDto, options?: any): AxiosPromise<void> {
            return localVarFp.updateMediaEncoderPath(mediaEncoderPathDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Updates named configuration.
         * @param {string} key Configuration key.
         * @param {any} body Configuration.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateNamedConfiguration(key: string, body: any, options?: any): AxiosPromise<void> {
            return localVarFp.updateNamedConfiguration(key, body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getNamedConfiguration operation in ConfigurationApi.
 * @export
 * @interface ConfigurationApiGetNamedConfigurationRequest
 */
export interface ConfigurationApiGetNamedConfigurationRequest {
    /**
     * Configuration key.
     * @type {string}
     * @memberof ConfigurationApiGetNamedConfiguration
     */
    readonly key: string
}

/**
 * Request parameters for updateConfiguration operation in ConfigurationApi.
 * @export
 * @interface ConfigurationApiUpdateConfigurationRequest
 */
export interface ConfigurationApiUpdateConfigurationRequest {
    /**
     * Configuration.
     * @type {ServerConfiguration}
     * @memberof ConfigurationApiUpdateConfiguration
     */
    readonly serverConfiguration: ServerConfiguration
}

/**
 * Request parameters for updateMediaEncoderPath operation in ConfigurationApi.
 * @export
 * @interface ConfigurationApiUpdateMediaEncoderPathRequest
 */
export interface ConfigurationApiUpdateMediaEncoderPathRequest {
    /**
     * Media encoder path form body.
     * @type {MediaEncoderPathDto}
     * @memberof ConfigurationApiUpdateMediaEncoderPath
     */
    readonly mediaEncoderPathDto: MediaEncoderPathDto
}

/**
 * Request parameters for updateNamedConfiguration operation in ConfigurationApi.
 * @export
 * @interface ConfigurationApiUpdateNamedConfigurationRequest
 */
export interface ConfigurationApiUpdateNamedConfigurationRequest {
    /**
     * Configuration key.
     * @type {string}
     * @memberof ConfigurationApiUpdateNamedConfiguration
     */
    readonly key: string

    /**
     * Configuration.
     * @type {any}
     * @memberof ConfigurationApiUpdateNamedConfiguration
     */
    readonly body: any
}

/**
 * ConfigurationApi - object-oriented interface
 * @export
 * @class ConfigurationApi
 * @extends {BaseAPI}
 */
export class ConfigurationApi extends BaseAPI {
    /**
     * 
     * @summary Gets application configuration.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConfigurationApi
     */
    public getConfiguration(options?: AxiosRequestConfig) {
        return ConfigurationApiFp(this.configuration).getConfiguration(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets a default MetadataOptions object.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConfigurationApi
     */
    public getDefaultMetadataOptions(options?: AxiosRequestConfig) {
        return ConfigurationApiFp(this.configuration).getDefaultMetadataOptions(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets a named configuration.
     * @param {ConfigurationApiGetNamedConfigurationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConfigurationApi
     */
    public getNamedConfiguration(requestParameters: ConfigurationApiGetNamedConfigurationRequest, options?: AxiosRequestConfig) {
        return ConfigurationApiFp(this.configuration).getNamedConfiguration(requestParameters.key, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Updates application configuration.
     * @param {ConfigurationApiUpdateConfigurationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConfigurationApi
     */
    public updateConfiguration(requestParameters: ConfigurationApiUpdateConfigurationRequest, options?: AxiosRequestConfig) {
        return ConfigurationApiFp(this.configuration).updateConfiguration(requestParameters.serverConfiguration, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Updates the path to the media encoder.
     * @param {ConfigurationApiUpdateMediaEncoderPathRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConfigurationApi
     */
    public updateMediaEncoderPath(requestParameters: ConfigurationApiUpdateMediaEncoderPathRequest, options?: AxiosRequestConfig) {
        return ConfigurationApiFp(this.configuration).updateMediaEncoderPath(requestParameters.mediaEncoderPathDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Updates named configuration.
     * @param {ConfigurationApiUpdateNamedConfigurationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConfigurationApi
     */
    public updateNamedConfiguration(requestParameters: ConfigurationApiUpdateNamedConfigurationRequest, options?: AxiosRequestConfig) {
        return ConfigurationApiFp(this.configuration).updateNamedConfiguration(requestParameters.key, requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }
}
