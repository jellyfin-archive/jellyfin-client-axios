/* tslint:disable */
/* eslint-disable */
/**
 * Jellyfin API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
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
import { BaseItemDtoQueryResult } from '../models';
/**
 * SuggestionsApi - axios parameter creator
 * @export
 */
export const SuggestionsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Gets suggestions.
         * @param {string} userId The user id.
         * @param {Array<string>} [mediaType] The media types.
         * @param {Array<string>} [type] The type.
         * @param {number} [startIndex] Optional. The start index.
         * @param {number} [limit] Optional. The limit.
         * @param {boolean} [enableTotalRecordCount] Whether to enable the total record count.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSuggestions: async (userId: string, mediaType?: Array<string>, type?: Array<string>, startIndex?: number, limit?: number, enableTotalRecordCount?: boolean, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('getSuggestions', 'userId', userId)
            const localVarPath = `/Users/{userId}/Suggestions`
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

            if (mediaType) {
                localVarQueryParameter['mediaType'] = mediaType;
            }

            if (type) {
                localVarQueryParameter['type'] = type;
            }

            if (startIndex !== undefined) {
                localVarQueryParameter['startIndex'] = startIndex;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (enableTotalRecordCount !== undefined) {
                localVarQueryParameter['enableTotalRecordCount'] = enableTotalRecordCount;
            }


    
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
 * SuggestionsApi - functional programming interface
 * @export
 */
export const SuggestionsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SuggestionsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Gets suggestions.
         * @param {string} userId The user id.
         * @param {Array<string>} [mediaType] The media types.
         * @param {Array<string>} [type] The type.
         * @param {number} [startIndex] Optional. The start index.
         * @param {number} [limit] Optional. The limit.
         * @param {boolean} [enableTotalRecordCount] Whether to enable the total record count.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSuggestions(userId: string, mediaType?: Array<string>, type?: Array<string>, startIndex?: number, limit?: number, enableTotalRecordCount?: boolean, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BaseItemDtoQueryResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSuggestions(userId, mediaType, type, startIndex, limit, enableTotalRecordCount, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * SuggestionsApi - factory interface
 * @export
 */
export const SuggestionsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SuggestionsApiFp(configuration)
    return {
        /**
         * 
         * @summary Gets suggestions.
         * @param {string} userId The user id.
         * @param {Array<string>} [mediaType] The media types.
         * @param {Array<string>} [type] The type.
         * @param {number} [startIndex] Optional. The start index.
         * @param {number} [limit] Optional. The limit.
         * @param {boolean} [enableTotalRecordCount] Whether to enable the total record count.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSuggestions(userId: string, mediaType?: Array<string>, type?: Array<string>, startIndex?: number, limit?: number, enableTotalRecordCount?: boolean, options?: any): AxiosPromise<BaseItemDtoQueryResult> {
            return localVarFp.getSuggestions(userId, mediaType, type, startIndex, limit, enableTotalRecordCount, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SuggestionsApi - interface
 * @export
 * @interface SuggestionsApi
 */
export interface SuggestionsApiInterface {
    /**
     * 
     * @summary Gets suggestions.
     * @param {string} userId The user id.
     * @param {Array<string>} [mediaType] The media types.
     * @param {Array<string>} [type] The type.
     * @param {number} [startIndex] Optional. The start index.
     * @param {number} [limit] Optional. The limit.
     * @param {boolean} [enableTotalRecordCount] Whether to enable the total record count.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SuggestionsApiInterface
     */
    getSuggestions(userId: string, mediaType?: Array<string>, type?: Array<string>, startIndex?: number, limit?: number, enableTotalRecordCount?: boolean, options?: any): AxiosPromise<BaseItemDtoQueryResult>;

}

/**
 * SuggestionsApi - object-oriented interface
 * @export
 * @class SuggestionsApi
 * @extends {BaseAPI}
 */
export class SuggestionsApi extends BaseAPI implements SuggestionsApiInterface {
    /**
     * 
     * @summary Gets suggestions.
     * @param {string} userId The user id.
     * @param {Array<string>} [mediaType] The media types.
     * @param {Array<string>} [type] The type.
     * @param {number} [startIndex] Optional. The start index.
     * @param {number} [limit] Optional. The limit.
     * @param {boolean} [enableTotalRecordCount] Whether to enable the total record count.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SuggestionsApi
     */
    public getSuggestions(userId: string, mediaType?: Array<string>, type?: Array<string>, startIndex?: number, limit?: number, enableTotalRecordCount?: boolean, options?: any) {
        return SuggestionsApiFp(this.configuration).getSuggestions(userId, mediaType, type, startIndex, limit, enableTotalRecordCount, options).then((request) => request(this.axios, this.basePath));
    }
}
