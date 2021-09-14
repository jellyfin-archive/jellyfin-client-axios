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
import { ImageByNameInfo } from '../models';
// @ts-ignore
import { ProblemDetails } from '../models';
/**
 * ImageByNameApi - axios parameter creator
 * @export
 */
export const ImageByNameApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get General Image.
         * @param {string} name The name of the image.
         * @param {string} type Image Type (primary, backdrop, logo, etc).
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGeneralImage: async (name: string, type: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('getGeneralImage', 'name', name)
            // verify required parameter 'type' is not null or undefined
            assertParamExists('getGeneralImage', 'type', type)
            const localVarPath = `/Images/General/{name}/{type}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)))
                .replace(`{${"type"}}`, encodeURIComponent(String(type)));
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
         * @summary Get all general images.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGeneralImages: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/Images/General`;
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
         * @summary Get media info image.
         * @param {string} theme The theme to get the image from.
         * @param {string} name The name of the image.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMediaInfoImage: async (theme: string, name: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'theme' is not null or undefined
            assertParamExists('getMediaInfoImage', 'theme', theme)
            // verify required parameter 'name' is not null or undefined
            assertParamExists('getMediaInfoImage', 'name', name)
            const localVarPath = `/Images/MediaInfo/{theme}/{name}`
                .replace(`{${"theme"}}`, encodeURIComponent(String(theme)))
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
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
         * @summary Get all media info images.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMediaInfoImages: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/Images/MediaInfo`;
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
         * @summary Get rating image.
         * @param {string} theme The theme to get the image from.
         * @param {string} name The name of the image.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRatingImage: async (theme: string, name: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'theme' is not null or undefined
            assertParamExists('getRatingImage', 'theme', theme)
            // verify required parameter 'name' is not null or undefined
            assertParamExists('getRatingImage', 'name', name)
            const localVarPath = `/Images/Ratings/{theme}/{name}`
                .replace(`{${"theme"}}`, encodeURIComponent(String(theme)))
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
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
         * @summary Get all general images.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRatingImages: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/Images/Ratings`;
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
 * ImageByNameApi - functional programming interface
 * @export
 */
export const ImageByNameApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ImageByNameApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get General Image.
         * @param {string} name The name of the image.
         * @param {string} type Image Type (primary, backdrop, logo, etc).
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getGeneralImage(name: string, type: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getGeneralImage(name, type, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get all general images.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getGeneralImages(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ImageByNameInfo>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getGeneralImages(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get media info image.
         * @param {string} theme The theme to get the image from.
         * @param {string} name The name of the image.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMediaInfoImage(theme: string, name: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getMediaInfoImage(theme, name, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get all media info images.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMediaInfoImages(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ImageByNameInfo>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getMediaInfoImages(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get rating image.
         * @param {string} theme The theme to get the image from.
         * @param {string} name The name of the image.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRatingImage(theme: string, name: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRatingImage(theme, name, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get all general images.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRatingImages(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ImageByNameInfo>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRatingImages(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ImageByNameApi - factory interface
 * @export
 */
export const ImageByNameApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ImageByNameApiFp(configuration)
    return {
        /**
         * 
         * @summary Get General Image.
         * @param {string} name The name of the image.
         * @param {string} type Image Type (primary, backdrop, logo, etc).
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGeneralImage(name: string, type: string, options?: any): AxiosPromise<any> {
            return localVarFp.getGeneralImage(name, type, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get all general images.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGeneralImages(options?: any): AxiosPromise<Array<ImageByNameInfo>> {
            return localVarFp.getGeneralImages(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get media info image.
         * @param {string} theme The theme to get the image from.
         * @param {string} name The name of the image.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMediaInfoImage(theme: string, name: string, options?: any): AxiosPromise<any> {
            return localVarFp.getMediaInfoImage(theme, name, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get all media info images.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMediaInfoImages(options?: any): AxiosPromise<Array<ImageByNameInfo>> {
            return localVarFp.getMediaInfoImages(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get rating image.
         * @param {string} theme The theme to get the image from.
         * @param {string} name The name of the image.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRatingImage(theme: string, name: string, options?: any): AxiosPromise<any> {
            return localVarFp.getRatingImage(theme, name, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get all general images.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRatingImages(options?: any): AxiosPromise<Array<ImageByNameInfo>> {
            return localVarFp.getRatingImages(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getGeneralImage operation in ImageByNameApi.
 * @export
 * @interface ImageByNameApiGetGeneralImageRequest
 */
export interface ImageByNameApiGetGeneralImageRequest {
    /**
     * The name of the image.
     * @type {string}
     * @memberof ImageByNameApiGetGeneralImage
     */
    readonly name: string

    /**
     * Image Type (primary, backdrop, logo, etc).
     * @type {string}
     * @memberof ImageByNameApiGetGeneralImage
     */
    readonly type: string
}

/**
 * Request parameters for getMediaInfoImage operation in ImageByNameApi.
 * @export
 * @interface ImageByNameApiGetMediaInfoImageRequest
 */
export interface ImageByNameApiGetMediaInfoImageRequest {
    /**
     * The theme to get the image from.
     * @type {string}
     * @memberof ImageByNameApiGetMediaInfoImage
     */
    readonly theme: string

    /**
     * The name of the image.
     * @type {string}
     * @memberof ImageByNameApiGetMediaInfoImage
     */
    readonly name: string
}

/**
 * Request parameters for getRatingImage operation in ImageByNameApi.
 * @export
 * @interface ImageByNameApiGetRatingImageRequest
 */
export interface ImageByNameApiGetRatingImageRequest {
    /**
     * The theme to get the image from.
     * @type {string}
     * @memberof ImageByNameApiGetRatingImage
     */
    readonly theme: string

    /**
     * The name of the image.
     * @type {string}
     * @memberof ImageByNameApiGetRatingImage
     */
    readonly name: string
}

/**
 * ImageByNameApi - object-oriented interface
 * @export
 * @class ImageByNameApi
 * @extends {BaseAPI}
 */
export class ImageByNameApi extends BaseAPI {
    /**
     * 
     * @summary Get General Image.
     * @param {ImageByNameApiGetGeneralImageRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ImageByNameApi
     */
    public getGeneralImage(requestParameters: ImageByNameApiGetGeneralImageRequest, options?: any) {
        return ImageByNameApiFp(this.configuration).getGeneralImage(requestParameters.name, requestParameters.type, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get all general images.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ImageByNameApi
     */
    public getGeneralImages(options?: any) {
        return ImageByNameApiFp(this.configuration).getGeneralImages(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get media info image.
     * @param {ImageByNameApiGetMediaInfoImageRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ImageByNameApi
     */
    public getMediaInfoImage(requestParameters: ImageByNameApiGetMediaInfoImageRequest, options?: any) {
        return ImageByNameApiFp(this.configuration).getMediaInfoImage(requestParameters.theme, requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get all media info images.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ImageByNameApi
     */
    public getMediaInfoImages(options?: any) {
        return ImageByNameApiFp(this.configuration).getMediaInfoImages(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get rating image.
     * @param {ImageByNameApiGetRatingImageRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ImageByNameApi
     */
    public getRatingImage(requestParameters: ImageByNameApiGetRatingImageRequest, options?: any) {
        return ImageByNameApiFp(this.configuration).getRatingImage(requestParameters.theme, requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get all general images.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ImageByNameApi
     */
    public getRatingImages(options?: any) {
        return ImageByNameApiFp(this.configuration).getRatingImages(options).then((request) => request(this.axios, this.basePath));
    }
}
