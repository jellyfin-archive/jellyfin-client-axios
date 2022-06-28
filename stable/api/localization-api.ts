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
import { CountryInfo } from '../models';
// @ts-ignore
import { CultureDto } from '../models';
// @ts-ignore
import { LocalizationOption } from '../models';
// @ts-ignore
import { ParentalRating } from '../models';
/**
 * LocalizationApi - axios parameter creator
 * @export
 */
export const LocalizationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Gets known countries.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCountries: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/Localization/Countries`;
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
         * @summary Gets known cultures.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCultures: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/Localization/Cultures`;
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
         * @summary Gets localization options.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLocalizationOptions: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/Localization/Options`;
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
         * @summary Gets known parental ratings.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getParentalRatings: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/Localization/ParentalRatings`;
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
    }
};

/**
 * LocalizationApi - functional programming interface
 * @export
 */
export const LocalizationApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = LocalizationApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Gets known countries.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCountries(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<CountryInfo>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCountries(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Gets known cultures.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCultures(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<CultureDto>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCultures(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Gets localization options.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getLocalizationOptions(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<LocalizationOption>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getLocalizationOptions(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Gets known parental ratings.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getParentalRatings(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ParentalRating>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getParentalRatings(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * LocalizationApi - factory interface
 * @export
 */
export const LocalizationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = LocalizationApiFp(configuration)
    return {
        /**
         * 
         * @summary Gets known countries.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCountries(options?: any): AxiosPromise<Array<CountryInfo>> {
            return localVarFp.getCountries(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets known cultures.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCultures(options?: any): AxiosPromise<Array<CultureDto>> {
            return localVarFp.getCultures(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets localization options.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLocalizationOptions(options?: any): AxiosPromise<Array<LocalizationOption>> {
            return localVarFp.getLocalizationOptions(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets known parental ratings.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getParentalRatings(options?: any): AxiosPromise<Array<ParentalRating>> {
            return localVarFp.getParentalRatings(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * LocalizationApi - object-oriented interface
 * @export
 * @class LocalizationApi
 * @extends {BaseAPI}
 */
export class LocalizationApi extends BaseAPI {
    /**
     * 
     * @summary Gets known countries.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocalizationApi
     */
    public getCountries(options?: AxiosRequestConfig) {
        return LocalizationApiFp(this.configuration).getCountries(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets known cultures.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocalizationApi
     */
    public getCultures(options?: AxiosRequestConfig) {
        return LocalizationApiFp(this.configuration).getCultures(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets localization options.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocalizationApi
     */
    public getLocalizationOptions(options?: AxiosRequestConfig) {
        return LocalizationApiFp(this.configuration).getLocalizationOptions(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets known parental ratings.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocalizationApi
     */
    public getParentalRatings(options?: AxiosRequestConfig) {
        return LocalizationApiFp(this.configuration).getParentalRatings(options).then((request) => request(this.axios, this.basePath));
    }
}
