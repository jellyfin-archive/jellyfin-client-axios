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
import { BaseItemDto } from '../models';
// @ts-ignore
import { BaseItemDtoQueryResult } from '../models';
// @ts-ignore
import { BaseItemKind } from '../models';
// @ts-ignore
import { ImageType } from '../models';
// @ts-ignore
import { ItemFields } from '../models';
// @ts-ignore
import { SortOrder } from '../models';
/**
 * MusicGenresApi - axios parameter creator
 * @export
 */
export const MusicGenresApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Gets a music genre, by name.
         * @param {string} genreName The genre name.
         * @param {string} [userId] Optional. Filter by user id, and attach user data.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMusicGenre: async (genreName: string, userId?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'genreName' is not null or undefined
            assertParamExists('getMusicGenre', 'genreName', genreName)
            const localVarPath = `/MusicGenres/{genreName}`
                .replace(`{${"genreName"}}`, encodeURIComponent(String(genreName)));
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
         * @summary Gets all music genres from a given item, folder, or the entire library.
         * @param {number} [startIndex] Optional. The record index to start at. All items with a lower index will be dropped from the results.
         * @param {number} [limit] Optional. The maximum number of records to return.
         * @param {string} [searchTerm] The search term.
         * @param {string} [parentId] Specify this to localize the search to a specific item or folder. Omit to use the root.
         * @param {Array<ItemFields>} [fields] Optional. Specify additional fields of information to return in the output.
         * @param {Array<BaseItemKind>} [excludeItemTypes] Optional. If specified, results will be filtered out based on item type. This allows multiple, comma delimited.
         * @param {Array<BaseItemKind>} [includeItemTypes] Optional. If specified, results will be filtered in based on item type. This allows multiple, comma delimited.
         * @param {boolean} [isFavorite] Optional filter by items that are marked as favorite, or not.
         * @param {number} [imageTypeLimit] Optional, the max number of images to return, per image type.
         * @param {Array<ImageType>} [enableImageTypes] Optional. The image types to include in the output.
         * @param {string} [userId] User id.
         * @param {string} [nameStartsWithOrGreater] Optional filter by items whose name is sorted equally or greater than a given input string.
         * @param {string} [nameStartsWith] Optional filter by items whose name is sorted equally than a given input string.
         * @param {string} [nameLessThan] Optional filter by items whose name is equally or lesser than a given input string.
         * @param {Array<string>} [sortBy] Optional. Specify one or more sort orders, comma delimited.
         * @param {Array<SortOrder>} [sortOrder] Sort Order - Ascending,Descending.
         * @param {boolean} [enableImages] Optional, include image information in output.
         * @param {boolean} [enableTotalRecordCount] Optional. Include total record count.
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        getMusicGenres: async (startIndex?: number, limit?: number, searchTerm?: string, parentId?: string, fields?: Array<ItemFields>, excludeItemTypes?: Array<BaseItemKind>, includeItemTypes?: Array<BaseItemKind>, isFavorite?: boolean, imageTypeLimit?: number, enableImageTypes?: Array<ImageType>, userId?: string, nameStartsWithOrGreater?: string, nameStartsWith?: string, nameLessThan?: string, sortBy?: Array<string>, sortOrder?: Array<SortOrder>, enableImages?: boolean, enableTotalRecordCount?: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/MusicGenres`;
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

            if (sortBy) {
                localVarQueryParameter['sortBy'] = sortBy;
            }

            if (sortOrder) {
                localVarQueryParameter['sortOrder'] = sortOrder;
            }

            if (enableImages !== undefined) {
                localVarQueryParameter['enableImages'] = enableImages;
            }

            if (enableTotalRecordCount !== undefined) {
                localVarQueryParameter['enableTotalRecordCount'] = enableTotalRecordCount;
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
 * MusicGenresApi - functional programming interface
 * @export
 */
export const MusicGenresApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = MusicGenresApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Gets a music genre, by name.
         * @param {string} genreName The genre name.
         * @param {string} [userId] Optional. Filter by user id, and attach user data.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMusicGenre(genreName: string, userId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BaseItemDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getMusicGenre(genreName, userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Gets all music genres from a given item, folder, or the entire library.
         * @param {number} [startIndex] Optional. The record index to start at. All items with a lower index will be dropped from the results.
         * @param {number} [limit] Optional. The maximum number of records to return.
         * @param {string} [searchTerm] The search term.
         * @param {string} [parentId] Specify this to localize the search to a specific item or folder. Omit to use the root.
         * @param {Array<ItemFields>} [fields] Optional. Specify additional fields of information to return in the output.
         * @param {Array<BaseItemKind>} [excludeItemTypes] Optional. If specified, results will be filtered out based on item type. This allows multiple, comma delimited.
         * @param {Array<BaseItemKind>} [includeItemTypes] Optional. If specified, results will be filtered in based on item type. This allows multiple, comma delimited.
         * @param {boolean} [isFavorite] Optional filter by items that are marked as favorite, or not.
         * @param {number} [imageTypeLimit] Optional, the max number of images to return, per image type.
         * @param {Array<ImageType>} [enableImageTypes] Optional. The image types to include in the output.
         * @param {string} [userId] User id.
         * @param {string} [nameStartsWithOrGreater] Optional filter by items whose name is sorted equally or greater than a given input string.
         * @param {string} [nameStartsWith] Optional filter by items whose name is sorted equally than a given input string.
         * @param {string} [nameLessThan] Optional filter by items whose name is equally or lesser than a given input string.
         * @param {Array<string>} [sortBy] Optional. Specify one or more sort orders, comma delimited.
         * @param {Array<SortOrder>} [sortOrder] Sort Order - Ascending,Descending.
         * @param {boolean} [enableImages] Optional, include image information in output.
         * @param {boolean} [enableTotalRecordCount] Optional. Include total record count.
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        async getMusicGenres(startIndex?: number, limit?: number, searchTerm?: string, parentId?: string, fields?: Array<ItemFields>, excludeItemTypes?: Array<BaseItemKind>, includeItemTypes?: Array<BaseItemKind>, isFavorite?: boolean, imageTypeLimit?: number, enableImageTypes?: Array<ImageType>, userId?: string, nameStartsWithOrGreater?: string, nameStartsWith?: string, nameLessThan?: string, sortBy?: Array<string>, sortOrder?: Array<SortOrder>, enableImages?: boolean, enableTotalRecordCount?: boolean, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BaseItemDtoQueryResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getMusicGenres(startIndex, limit, searchTerm, parentId, fields, excludeItemTypes, includeItemTypes, isFavorite, imageTypeLimit, enableImageTypes, userId, nameStartsWithOrGreater, nameStartsWith, nameLessThan, sortBy, sortOrder, enableImages, enableTotalRecordCount, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * MusicGenresApi - factory interface
 * @export
 */
export const MusicGenresApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = MusicGenresApiFp(configuration)
    return {
        /**
         * 
         * @summary Gets a music genre, by name.
         * @param {string} genreName The genre name.
         * @param {string} [userId] Optional. Filter by user id, and attach user data.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMusicGenre(genreName: string, userId?: string, options?: any): AxiosPromise<BaseItemDto> {
            return localVarFp.getMusicGenre(genreName, userId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets all music genres from a given item, folder, or the entire library.
         * @param {number} [startIndex] Optional. The record index to start at. All items with a lower index will be dropped from the results.
         * @param {number} [limit] Optional. The maximum number of records to return.
         * @param {string} [searchTerm] The search term.
         * @param {string} [parentId] Specify this to localize the search to a specific item or folder. Omit to use the root.
         * @param {Array<ItemFields>} [fields] Optional. Specify additional fields of information to return in the output.
         * @param {Array<BaseItemKind>} [excludeItemTypes] Optional. If specified, results will be filtered out based on item type. This allows multiple, comma delimited.
         * @param {Array<BaseItemKind>} [includeItemTypes] Optional. If specified, results will be filtered in based on item type. This allows multiple, comma delimited.
         * @param {boolean} [isFavorite] Optional filter by items that are marked as favorite, or not.
         * @param {number} [imageTypeLimit] Optional, the max number of images to return, per image type.
         * @param {Array<ImageType>} [enableImageTypes] Optional. The image types to include in the output.
         * @param {string} [userId] User id.
         * @param {string} [nameStartsWithOrGreater] Optional filter by items whose name is sorted equally or greater than a given input string.
         * @param {string} [nameStartsWith] Optional filter by items whose name is sorted equally than a given input string.
         * @param {string} [nameLessThan] Optional filter by items whose name is equally or lesser than a given input string.
         * @param {Array<string>} [sortBy] Optional. Specify one or more sort orders, comma delimited.
         * @param {Array<SortOrder>} [sortOrder] Sort Order - Ascending,Descending.
         * @param {boolean} [enableImages] Optional, include image information in output.
         * @param {boolean} [enableTotalRecordCount] Optional. Include total record count.
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        getMusicGenres(startIndex?: number, limit?: number, searchTerm?: string, parentId?: string, fields?: Array<ItemFields>, excludeItemTypes?: Array<BaseItemKind>, includeItemTypes?: Array<BaseItemKind>, isFavorite?: boolean, imageTypeLimit?: number, enableImageTypes?: Array<ImageType>, userId?: string, nameStartsWithOrGreater?: string, nameStartsWith?: string, nameLessThan?: string, sortBy?: Array<string>, sortOrder?: Array<SortOrder>, enableImages?: boolean, enableTotalRecordCount?: boolean, options?: any): AxiosPromise<BaseItemDtoQueryResult> {
            return localVarFp.getMusicGenres(startIndex, limit, searchTerm, parentId, fields, excludeItemTypes, includeItemTypes, isFavorite, imageTypeLimit, enableImageTypes, userId, nameStartsWithOrGreater, nameStartsWith, nameLessThan, sortBy, sortOrder, enableImages, enableTotalRecordCount, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getMusicGenre operation in MusicGenresApi.
 * @export
 * @interface MusicGenresApiGetMusicGenreRequest
 */
export interface MusicGenresApiGetMusicGenreRequest {
    /**
     * The genre name.
     * @type {string}
     * @memberof MusicGenresApiGetMusicGenre
     */
    readonly genreName: string

    /**
     * Optional. Filter by user id, and attach user data.
     * @type {string}
     * @memberof MusicGenresApiGetMusicGenre
     */
    readonly userId?: string
}

/**
 * Request parameters for getMusicGenres operation in MusicGenresApi.
 * @export
 * @interface MusicGenresApiGetMusicGenresRequest
 */
export interface MusicGenresApiGetMusicGenresRequest {
    /**
     * Optional. The record index to start at. All items with a lower index will be dropped from the results.
     * @type {number}
     * @memberof MusicGenresApiGetMusicGenres
     */
    readonly startIndex?: number

    /**
     * Optional. The maximum number of records to return.
     * @type {number}
     * @memberof MusicGenresApiGetMusicGenres
     */
    readonly limit?: number

    /**
     * The search term.
     * @type {string}
     * @memberof MusicGenresApiGetMusicGenres
     */
    readonly searchTerm?: string

    /**
     * Specify this to localize the search to a specific item or folder. Omit to use the root.
     * @type {string}
     * @memberof MusicGenresApiGetMusicGenres
     */
    readonly parentId?: string

    /**
     * Optional. Specify additional fields of information to return in the output.
     * @type {Array<ItemFields>}
     * @memberof MusicGenresApiGetMusicGenres
     */
    readonly fields?: Array<ItemFields>

    /**
     * Optional. If specified, results will be filtered out based on item type. This allows multiple, comma delimited.
     * @type {Array<BaseItemKind>}
     * @memberof MusicGenresApiGetMusicGenres
     */
    readonly excludeItemTypes?: Array<BaseItemKind>

    /**
     * Optional. If specified, results will be filtered in based on item type. This allows multiple, comma delimited.
     * @type {Array<BaseItemKind>}
     * @memberof MusicGenresApiGetMusicGenres
     */
    readonly includeItemTypes?: Array<BaseItemKind>

    /**
     * Optional filter by items that are marked as favorite, or not.
     * @type {boolean}
     * @memberof MusicGenresApiGetMusicGenres
     */
    readonly isFavorite?: boolean

    /**
     * Optional, the max number of images to return, per image type.
     * @type {number}
     * @memberof MusicGenresApiGetMusicGenres
     */
    readonly imageTypeLimit?: number

    /**
     * Optional. The image types to include in the output.
     * @type {Array<ImageType>}
     * @memberof MusicGenresApiGetMusicGenres
     */
    readonly enableImageTypes?: Array<ImageType>

    /**
     * User id.
     * @type {string}
     * @memberof MusicGenresApiGetMusicGenres
     */
    readonly userId?: string

    /**
     * Optional filter by items whose name is sorted equally or greater than a given input string.
     * @type {string}
     * @memberof MusicGenresApiGetMusicGenres
     */
    readonly nameStartsWithOrGreater?: string

    /**
     * Optional filter by items whose name is sorted equally than a given input string.
     * @type {string}
     * @memberof MusicGenresApiGetMusicGenres
     */
    readonly nameStartsWith?: string

    /**
     * Optional filter by items whose name is equally or lesser than a given input string.
     * @type {string}
     * @memberof MusicGenresApiGetMusicGenres
     */
    readonly nameLessThan?: string

    /**
     * Optional. Specify one or more sort orders, comma delimited.
     * @type {Array<string>}
     * @memberof MusicGenresApiGetMusicGenres
     */
    readonly sortBy?: Array<string>

    /**
     * Sort Order - Ascending,Descending.
     * @type {Array<SortOrder>}
     * @memberof MusicGenresApiGetMusicGenres
     */
    readonly sortOrder?: Array<SortOrder>

    /**
     * Optional, include image information in output.
     * @type {boolean}
     * @memberof MusicGenresApiGetMusicGenres
     */
    readonly enableImages?: boolean

    /**
     * Optional. Include total record count.
     * @type {boolean}
     * @memberof MusicGenresApiGetMusicGenres
     */
    readonly enableTotalRecordCount?: boolean
}

/**
 * MusicGenresApi - object-oriented interface
 * @export
 * @class MusicGenresApi
 * @extends {BaseAPI}
 */
export class MusicGenresApi extends BaseAPI {
    /**
     * 
     * @summary Gets a music genre, by name.
     * @param {MusicGenresApiGetMusicGenreRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MusicGenresApi
     */
    public getMusicGenre(requestParameters: MusicGenresApiGetMusicGenreRequest, options?: AxiosRequestConfig) {
        return MusicGenresApiFp(this.configuration).getMusicGenre(requestParameters.genreName, requestParameters.userId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets all music genres from a given item, folder, or the entire library.
     * @param {MusicGenresApiGetMusicGenresRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @deprecated
     * @throws {RequiredError}
     * @memberof MusicGenresApi
     */
    public getMusicGenres(requestParameters: MusicGenresApiGetMusicGenresRequest = {}, options?: AxiosRequestConfig) {
        return MusicGenresApiFp(this.configuration).getMusicGenres(requestParameters.startIndex, requestParameters.limit, requestParameters.searchTerm, requestParameters.parentId, requestParameters.fields, requestParameters.excludeItemTypes, requestParameters.includeItemTypes, requestParameters.isFavorite, requestParameters.imageTypeLimit, requestParameters.enableImageTypes, requestParameters.userId, requestParameters.nameStartsWithOrGreater, requestParameters.nameStartsWith, requestParameters.nameLessThan, requestParameters.sortBy, requestParameters.sortOrder, requestParameters.enableImages, requestParameters.enableTotalRecordCount, options).then((request) => request(this.axios, this.basePath));
    }
}
