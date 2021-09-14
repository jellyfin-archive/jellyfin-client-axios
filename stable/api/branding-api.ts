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


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { BrandingOptions } from '../models';
/**
 * BrandingApi - axios parameter creator
 * @export
 */
export const BrandingApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Gets branding css.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBrandingCss: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/Branding/Css`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Gets branding css.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBrandingCss2: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/Branding/Css.css`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Gets branding configuration.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBrandingOptions: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/Branding/Configuration`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
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
 * BrandingApi - functional programming interface
 * @export
 */
export const BrandingApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = BrandingApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Gets branding css.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getBrandingCss(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getBrandingCss(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Gets branding css.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getBrandingCss2(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getBrandingCss2(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Gets branding configuration.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getBrandingOptions(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BrandingOptions>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getBrandingOptions(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * BrandingApi - factory interface
 * @export
 */
export const BrandingApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = BrandingApiFp(configuration)
    return {
        /**
         * 
         * @summary Gets branding css.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBrandingCss(options?: any): AxiosPromise<string> {
            return localVarFp.getBrandingCss(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets branding css.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBrandingCss2(options?: any): AxiosPromise<string> {
            return localVarFp.getBrandingCss2(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets branding configuration.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBrandingOptions(options?: any): AxiosPromise<BrandingOptions> {
            return localVarFp.getBrandingOptions(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * BrandingApi - object-oriented interface
 * @export
 * @class BrandingApi
 * @extends {BaseAPI}
 */
export class BrandingApi extends BaseAPI {
    /**
     * 
     * @summary Gets branding css.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BrandingApi
     */
    public getBrandingCss(options?: any) {
        return BrandingApiFp(this.configuration).getBrandingCss(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets branding css.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BrandingApi
     */
    public getBrandingCss2(options?: any) {
        return BrandingApiFp(this.configuration).getBrandingCss2(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets branding configuration.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BrandingApi
     */
    public getBrandingOptions(options?: any) {
        return BrandingApiFp(this.configuration).getBrandingOptions(options).then((request) => request(this.axios, this.basePath));
    }
}
