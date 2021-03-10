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
import { BaseItemDto } from '../models';
// @ts-ignore
import { BaseItemDtoQueryResult } from '../models';
// @ts-ignore
import { ImageType } from '../models';
// @ts-ignore
import { ItemFields } from '../models';
/**
 * StudiosApi - axios parameter creator
 * @export
 */
export const StudiosApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Gets a studio by name.
         * @param {string} name Studio name.
         * @param {string} [userId] Optional. Filter by user id, and attach user data.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getStudio: async (name: string, userId?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('getStudio', 'name', name)
            const localVarPath = `/Studios/{name}`
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

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "X-Emby-Authorization", configuration)

            if (userId !== undefined) {
                localVarQueryParameter['userId'] = userId;
            }


    
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
         * @summary Gets all studios from a given item, folder, or the entire library.
         * @param {number} [startIndex] Optional. The record index to start at. All items with a lower index will be dropped from the results.
         * @param {number} [limit] Optional. The maximum number of records to return.
         * @param {string} [searchTerm] Optional. Search term.
         * @param {string} [parentId] Specify this to localize the search to a specific item or folder. Omit to use the root.
         * @param {Array<ItemFields>} [fields] Optional. Specify additional fields of information to return in the output.
         * @param {Array<string>} [excludeItemTypes] Optional. If specified, results will be filtered out based on item type. This allows multiple, comma delimited.
         * @param {Array<string>} [includeItemTypes] Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimited.
         * @param {boolean} [isFavorite] Optional filter by items that are marked as favorite, or not.
         * @param {boolean} [enableUserData] Optional, include user data.
         * @param {number} [imageTypeLimit] Optional, the max number of images to return, per image type.
         * @param {Array<ImageType>} [enableImageTypes] Optional. The image types to include in the output.
         * @param {string} [userId] User id.
         * @param {string} [nameStartsWithOrGreater] Optional filter by items whose name is sorted equally or greater than a given input string.
         * @param {string} [nameStartsWith] Optional filter by items whose name is sorted equally than a given input string.
         * @param {string} [nameLessThan] Optional filter by items whose name is equally or lesser than a given input string.
         * @param {boolean} [enableImages] Optional, include image information in output.
         * @param {boolean} [enableTotalRecordCount] Total record count.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getStudios: async (startIndex?: number, limit?: number, searchTerm?: string, parentId?: string, fields?: Array<ItemFields>, excludeItemTypes?: Array<string>, includeItemTypes?: Array<string>, isFavorite?: boolean, enableUserData?: boolean, imageTypeLimit?: number, enableImageTypes?: Array<ImageType>, userId?: string, nameStartsWithOrGreater?: string, nameStartsWith?: string, nameLessThan?: string, enableImages?: boolean, enableTotalRecordCount?: boolean, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/Studios`;
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

            if (startIndex !== undefined) {
                localVarQueryParameter['startIndex'] = startIndex;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (searchTerm !== undefined) {
                localVarQueryParameter['searchTerm'] = searchTerm;
            }

            if (parentId !== undefined) {
                localVarQueryParameter['parentId'] = parentId;
            }

            if (fields) {
                localVarQueryParameter['fields'] = fields;
            }

            if (excludeItemTypes) {
                localVarQueryParameter['excludeItemTypes'] = excludeItemTypes;
            }

            if (includeItemTypes) {
                localVarQueryParameter['includeItemTypes'] = includeItemTypes;
            }

            if (isFavorite !== undefined) {
                localVarQueryParameter['isFavorite'] = isFavorite;
            }

            if (enableUserData !== undefined) {
                localVarQueryParameter['enableUserData'] = enableUserData;
            }

            if (imageTypeLimit !== undefined) {
                localVarQueryParameter['imageTypeLimit'] = imageTypeLimit;
            }

            if (enableImageTypes) {
                localVarQueryParameter['enableImageTypes'] = enableImageTypes;
            }

            if (userId !== undefined) {
                localVarQueryParameter['userId'] = userId;
            }

            if (nameStartsWithOrGreater !== undefined) {
                localVarQueryParameter['nameStartsWithOrGreater'] = nameStartsWithOrGreater;
            }

            if (nameStartsWith !== undefined) {
                localVarQueryParameter['nameStartsWith'] = nameStartsWith;
            }

            if (nameLessThan !== undefined) {
                localVarQueryParameter['nameLessThan'] = nameLessThan;
            }

            if (enableImages !== undefined) {
                localVarQueryParameter['enableImages'] = enableImages;
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
 * StudiosApi - functional programming interface
 * @export
 */
export const StudiosApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = StudiosApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Gets a studio by name.
         * @param {string} name Studio name.
         * @param {string} [userId] Optional. Filter by user id, and attach user data.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getStudio(name: string, userId?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BaseItemDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getStudio(name, userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Gets all studios from a given item, folder, or the entire library.
         * @param {number} [startIndex] Optional. The record index to start at. All items with a lower index will be dropped from the results.
         * @param {number} [limit] Optional. The maximum number of records to return.
         * @param {string} [searchTerm] Optional. Search term.
         * @param {string} [parentId] Specify this to localize the search to a specific item or folder. Omit to use the root.
         * @param {Array<ItemFields>} [fields] Optional. Specify additional fields of information to return in the output.
         * @param {Array<string>} [excludeItemTypes] Optional. If specified, results will be filtered out based on item type. This allows multiple, comma delimited.
         * @param {Array<string>} [includeItemTypes] Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimited.
         * @param {boolean} [isFavorite] Optional filter by items that are marked as favorite, or not.
         * @param {boolean} [enableUserData] Optional, include user data.
         * @param {number} [imageTypeLimit] Optional, the max number of images to return, per image type.
         * @param {Array<ImageType>} [enableImageTypes] Optional. The image types to include in the output.
         * @param {string} [userId] User id.
         * @param {string} [nameStartsWithOrGreater] Optional filter by items whose name is sorted equally or greater than a given input string.
         * @param {string} [nameStartsWith] Optional filter by items whose name is sorted equally than a given input string.
         * @param {string} [nameLessThan] Optional filter by items whose name is equally or lesser than a given input string.
         * @param {boolean} [enableImages] Optional, include image information in output.
         * @param {boolean} [enableTotalRecordCount] Total record count.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getStudios(startIndex?: number, limit?: number, searchTerm?: string, parentId?: string, fields?: Array<ItemFields>, excludeItemTypes?: Array<string>, includeItemTypes?: Array<string>, isFavorite?: boolean, enableUserData?: boolean, imageTypeLimit?: number, enableImageTypes?: Array<ImageType>, userId?: string, nameStartsWithOrGreater?: string, nameStartsWith?: string, nameLessThan?: string, enableImages?: boolean, enableTotalRecordCount?: boolean, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BaseItemDtoQueryResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getStudios(startIndex, limit, searchTerm, parentId, fields, excludeItemTypes, includeItemTypes, isFavorite, enableUserData, imageTypeLimit, enableImageTypes, userId, nameStartsWithOrGreater, nameStartsWith, nameLessThan, enableImages, enableTotalRecordCount, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * StudiosApi - factory interface
 * @export
 */
export const StudiosApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = StudiosApiFp(configuration)
    return {
        /**
         * 
         * @summary Gets a studio by name.
         * @param {string} name Studio name.
         * @param {string} [userId] Optional. Filter by user id, and attach user data.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getStudio(name: string, userId?: string, options?: any): AxiosPromise<BaseItemDto> {
            return localVarFp.getStudio(name, userId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets all studios from a given item, folder, or the entire library.
         * @param {number} [startIndex] Optional. The record index to start at. All items with a lower index will be dropped from the results.
         * @param {number} [limit] Optional. The maximum number of records to return.
         * @param {string} [searchTerm] Optional. Search term.
         * @param {string} [parentId] Specify this to localize the search to a specific item or folder. Omit to use the root.
         * @param {Array<ItemFields>} [fields] Optional. Specify additional fields of information to return in the output.
         * @param {Array<string>} [excludeItemTypes] Optional. If specified, results will be filtered out based on item type. This allows multiple, comma delimited.
         * @param {Array<string>} [includeItemTypes] Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimited.
         * @param {boolean} [isFavorite] Optional filter by items that are marked as favorite, or not.
         * @param {boolean} [enableUserData] Optional, include user data.
         * @param {number} [imageTypeLimit] Optional, the max number of images to return, per image type.
         * @param {Array<ImageType>} [enableImageTypes] Optional. The image types to include in the output.
         * @param {string} [userId] User id.
         * @param {string} [nameStartsWithOrGreater] Optional filter by items whose name is sorted equally or greater than a given input string.
         * @param {string} [nameStartsWith] Optional filter by items whose name is sorted equally than a given input string.
         * @param {string} [nameLessThan] Optional filter by items whose name is equally or lesser than a given input string.
         * @param {boolean} [enableImages] Optional, include image information in output.
         * @param {boolean} [enableTotalRecordCount] Total record count.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getStudios(startIndex?: number, limit?: number, searchTerm?: string, parentId?: string, fields?: Array<ItemFields>, excludeItemTypes?: Array<string>, includeItemTypes?: Array<string>, isFavorite?: boolean, enableUserData?: boolean, imageTypeLimit?: number, enableImageTypes?: Array<ImageType>, userId?: string, nameStartsWithOrGreater?: string, nameStartsWith?: string, nameLessThan?: string, enableImages?: boolean, enableTotalRecordCount?: boolean, options?: any): AxiosPromise<BaseItemDtoQueryResult> {
            return localVarFp.getStudios(startIndex, limit, searchTerm, parentId, fields, excludeItemTypes, includeItemTypes, isFavorite, enableUserData, imageTypeLimit, enableImageTypes, userId, nameStartsWithOrGreater, nameStartsWith, nameLessThan, enableImages, enableTotalRecordCount, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * StudiosApi - interface
 * @export
 * @interface StudiosApi
 */
export interface StudiosApiInterface {
    /**
     * 
     * @summary Gets a studio by name.
     * @param {string} name Studio name.
     * @param {string} [userId] Optional. Filter by user id, and attach user data.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StudiosApiInterface
     */
    getStudio(name: string, userId?: string, options?: any): AxiosPromise<BaseItemDto>;

    /**
     * 
     * @summary Gets all studios from a given item, folder, or the entire library.
     * @param {number} [startIndex] Optional. The record index to start at. All items with a lower index will be dropped from the results.
     * @param {number} [limit] Optional. The maximum number of records to return.
     * @param {string} [searchTerm] Optional. Search term.
     * @param {string} [parentId] Specify this to localize the search to a specific item or folder. Omit to use the root.
     * @param {Array<ItemFields>} [fields] Optional. Specify additional fields of information to return in the output.
     * @param {Array<string>} [excludeItemTypes] Optional. If specified, results will be filtered out based on item type. This allows multiple, comma delimited.
     * @param {Array<string>} [includeItemTypes] Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimited.
     * @param {boolean} [isFavorite] Optional filter by items that are marked as favorite, or not.
     * @param {boolean} [enableUserData] Optional, include user data.
     * @param {number} [imageTypeLimit] Optional, the max number of images to return, per image type.
     * @param {Array<ImageType>} [enableImageTypes] Optional. The image types to include in the output.
     * @param {string} [userId] User id.
     * @param {string} [nameStartsWithOrGreater] Optional filter by items whose name is sorted equally or greater than a given input string.
     * @param {string} [nameStartsWith] Optional filter by items whose name is sorted equally than a given input string.
     * @param {string} [nameLessThan] Optional filter by items whose name is equally or lesser than a given input string.
     * @param {boolean} [enableImages] Optional, include image information in output.
     * @param {boolean} [enableTotalRecordCount] Total record count.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StudiosApiInterface
     */
    getStudios(startIndex?: number, limit?: number, searchTerm?: string, parentId?: string, fields?: Array<ItemFields>, excludeItemTypes?: Array<string>, includeItemTypes?: Array<string>, isFavorite?: boolean, enableUserData?: boolean, imageTypeLimit?: number, enableImageTypes?: Array<ImageType>, userId?: string, nameStartsWithOrGreater?: string, nameStartsWith?: string, nameLessThan?: string, enableImages?: boolean, enableTotalRecordCount?: boolean, options?: any): AxiosPromise<BaseItemDtoQueryResult>;

}

/**
 * StudiosApi - object-oriented interface
 * @export
 * @class StudiosApi
 * @extends {BaseAPI}
 */
export class StudiosApi extends BaseAPI implements StudiosApiInterface {
    /**
     * 
     * @summary Gets a studio by name.
     * @param {string} name Studio name.
     * @param {string} [userId] Optional. Filter by user id, and attach user data.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StudiosApi
     */
    public getStudio(name: string, userId?: string, options?: any) {
        return StudiosApiFp(this.configuration).getStudio(name, userId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets all studios from a given item, folder, or the entire library.
     * @param {number} [startIndex] Optional. The record index to start at. All items with a lower index will be dropped from the results.
     * @param {number} [limit] Optional. The maximum number of records to return.
     * @param {string} [searchTerm] Optional. Search term.
     * @param {string} [parentId] Specify this to localize the search to a specific item or folder. Omit to use the root.
     * @param {Array<ItemFields>} [fields] Optional. Specify additional fields of information to return in the output.
     * @param {Array<string>} [excludeItemTypes] Optional. If specified, results will be filtered out based on item type. This allows multiple, comma delimited.
     * @param {Array<string>} [includeItemTypes] Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimited.
     * @param {boolean} [isFavorite] Optional filter by items that are marked as favorite, or not.
     * @param {boolean} [enableUserData] Optional, include user data.
     * @param {number} [imageTypeLimit] Optional, the max number of images to return, per image type.
     * @param {Array<ImageType>} [enableImageTypes] Optional. The image types to include in the output.
     * @param {string} [userId] User id.
     * @param {string} [nameStartsWithOrGreater] Optional filter by items whose name is sorted equally or greater than a given input string.
     * @param {string} [nameStartsWith] Optional filter by items whose name is sorted equally than a given input string.
     * @param {string} [nameLessThan] Optional filter by items whose name is equally or lesser than a given input string.
     * @param {boolean} [enableImages] Optional, include image information in output.
     * @param {boolean} [enableTotalRecordCount] Total record count.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StudiosApi
     */
    public getStudios(startIndex?: number, limit?: number, searchTerm?: string, parentId?: string, fields?: Array<ItemFields>, excludeItemTypes?: Array<string>, includeItemTypes?: Array<string>, isFavorite?: boolean, enableUserData?: boolean, imageTypeLimit?: number, enableImageTypes?: Array<ImageType>, userId?: string, nameStartsWithOrGreater?: string, nameStartsWith?: string, nameLessThan?: string, enableImages?: boolean, enableTotalRecordCount?: boolean, options?: any) {
        return StudiosApiFp(this.configuration).getStudios(startIndex, limit, searchTerm, parentId, fields, excludeItemTypes, includeItemTypes, isFavorite, enableUserData, imageTypeLimit, enableImageTypes, userId, nameStartsWithOrGreater, nameStartsWith, nameLessThan, enableImages, enableTotalRecordCount, options).then((request) => request(this.axios, this.basePath));
    }
}
