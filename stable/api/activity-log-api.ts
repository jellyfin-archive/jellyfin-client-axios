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
import { ActivityLogEntryQueryResult } from '../models';
/**
 * ActivityLogApi - axios parameter creator
 * @export
 */
export const ActivityLogApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Gets activity log entries.
         * @param {number} [startIndex] Optional. The record index to start at. All items with a lower index will be dropped from the results.
         * @param {number} [limit] Optional. The maximum number of records to return.
         * @param {string} [minDate] Optional. The minimum date. Format &#x3D; ISO.
         * @param {boolean} [hasUserId] Optional. Filter log entries if it has user id, or not.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLogEntries: async (startIndex?: number, limit?: number, minDate?: string, hasUserId?: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/System/ActivityLog/Entries`;
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

            if (startIndex !== undefined) {
                localVarQueryParameter['startIndex'] = startIndex;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (minDate !== undefined) {
                localVarQueryParameter['minDate'] = (minDate as any instanceof Date) ?
                    (minDate as any).toISOString() :
                    minDate;
            }

            if (hasUserId !== undefined) {
                localVarQueryParameter['hasUserId'] = hasUserId;
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
 * ActivityLogApi - functional programming interface
 * @export
 */
export const ActivityLogApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ActivityLogApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Gets activity log entries.
         * @param {number} [startIndex] Optional. The record index to start at. All items with a lower index will be dropped from the results.
         * @param {number} [limit] Optional. The maximum number of records to return.
         * @param {string} [minDate] Optional. The minimum date. Format &#x3D; ISO.
         * @param {boolean} [hasUserId] Optional. Filter log entries if it has user id, or not.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getLogEntries(startIndex?: number, limit?: number, minDate?: string, hasUserId?: boolean, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ActivityLogEntryQueryResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getLogEntries(startIndex, limit, minDate, hasUserId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ActivityLogApi - factory interface
 * @export
 */
export const ActivityLogApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ActivityLogApiFp(configuration)
    return {
        /**
         * 
         * @summary Gets activity log entries.
         * @param {number} [startIndex] Optional. The record index to start at. All items with a lower index will be dropped from the results.
         * @param {number} [limit] Optional. The maximum number of records to return.
         * @param {string} [minDate] Optional. The minimum date. Format &#x3D; ISO.
         * @param {boolean} [hasUserId] Optional. Filter log entries if it has user id, or not.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLogEntries(startIndex?: number, limit?: number, minDate?: string, hasUserId?: boolean, options?: any): AxiosPromise<ActivityLogEntryQueryResult> {
            return localVarFp.getLogEntries(startIndex, limit, minDate, hasUserId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getLogEntries operation in ActivityLogApi.
 * @export
 * @interface ActivityLogApiGetLogEntriesRequest
 */
export interface ActivityLogApiGetLogEntriesRequest {
    /**
     * Optional. The record index to start at. All items with a lower index will be dropped from the results.
     * @type {number}
     * @memberof ActivityLogApiGetLogEntries
     */
    readonly startIndex?: number

    /**
     * Optional. The maximum number of records to return.
     * @type {number}
     * @memberof ActivityLogApiGetLogEntries
     */
    readonly limit?: number

    /**
     * Optional. The minimum date. Format &#x3D; ISO.
     * @type {string}
     * @memberof ActivityLogApiGetLogEntries
     */
    readonly minDate?: string

    /**
     * Optional. Filter log entries if it has user id, or not.
     * @type {boolean}
     * @memberof ActivityLogApiGetLogEntries
     */
    readonly hasUserId?: boolean
}

/**
 * ActivityLogApi - object-oriented interface
 * @export
 * @class ActivityLogApi
 * @extends {BaseAPI}
 */
export class ActivityLogApi extends BaseAPI {
    /**
     * 
     * @summary Gets activity log entries.
     * @param {ActivityLogApiGetLogEntriesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActivityLogApi
     */
    public getLogEntries(requestParameters: ActivityLogApiGetLogEntriesRequest = {}, options?: AxiosRequestConfig) {
        return ActivityLogApiFp(this.configuration).getLogEntries(requestParameters.startIndex, requestParameters.limit, requestParameters.minDate, requestParameters.hasUserId, options).then((request) => request(this.axios, this.basePath));
    }
}
