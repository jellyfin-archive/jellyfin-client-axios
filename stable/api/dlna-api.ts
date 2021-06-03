/* tslint:disable */
/* eslint-disable */
/**
 * Jellyfin API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 10.7.6
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
import { DeviceProfile } from '../models';
// @ts-ignore
import { DeviceProfileInfo } from '../models';
// @ts-ignore
import { ProblemDetails } from '../models';
/**
 * DlnaApi - axios parameter creator
 * @export
 */
export const DlnaApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates a profile.
         * @param {DeviceProfile} [deviceProfile] Device profile.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createProfile: async (deviceProfile?: DeviceProfile, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/Dlna/Profiles`;
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
            await setApiKeyToObject(localVarHeaderParameter, "X-Emby-Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(deviceProfile, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Deletes a profile.
         * @param {string} profileId Profile id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteProfile: async (profileId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'profileId' is not null or undefined
            assertParamExists('deleteProfile', 'profileId', profileId)
            const localVarPath = `/Dlna/Profiles/{profileId}`
                .replace(`{${"profileId"}}`, encodeURIComponent(String(profileId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
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
         * @summary Gets the default profile.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDefaultProfile: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/Dlna/Profiles/Default`;
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
         * @summary Gets a single profile.
         * @param {string} profileId Profile Id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProfile: async (profileId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'profileId' is not null or undefined
            assertParamExists('getProfile', 'profileId', profileId)
            const localVarPath = `/Dlna/Profiles/{profileId}`
                .replace(`{${"profileId"}}`, encodeURIComponent(String(profileId)));
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
         * @summary Get profile infos.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProfileInfos: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/Dlna/ProfileInfos`;
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
         * @summary Updates a profile.
         * @param {string} profileId Profile id.
         * @param {DeviceProfile} [deviceProfile] Device profile.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateProfile: async (profileId: string, deviceProfile?: DeviceProfile, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'profileId' is not null or undefined
            assertParamExists('updateProfile', 'profileId', profileId)
            const localVarPath = `/Dlna/Profiles/{profileId}`
                .replace(`{${"profileId"}}`, encodeURIComponent(String(profileId)));
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
            await setApiKeyToObject(localVarHeaderParameter, "X-Emby-Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(deviceProfile, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DlnaApi - functional programming interface
 * @export
 */
export const DlnaApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DlnaApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Creates a profile.
         * @param {DeviceProfile} [deviceProfile] Device profile.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createProfile(deviceProfile?: DeviceProfile, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createProfile(deviceProfile, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Deletes a profile.
         * @param {string} profileId Profile id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteProfile(profileId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteProfile(profileId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Gets the default profile.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDefaultProfile(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DeviceProfile>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDefaultProfile(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Gets a single profile.
         * @param {string} profileId Profile Id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getProfile(profileId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DeviceProfile>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getProfile(profileId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get profile infos.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getProfileInfos(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<DeviceProfileInfo>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getProfileInfos(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Updates a profile.
         * @param {string} profileId Profile id.
         * @param {DeviceProfile} [deviceProfile] Device profile.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateProfile(profileId: string, deviceProfile?: DeviceProfile, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateProfile(profileId, deviceProfile, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DlnaApi - factory interface
 * @export
 */
export const DlnaApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DlnaApiFp(configuration)
    return {
        /**
         * 
         * @summary Creates a profile.
         * @param {DeviceProfile} [deviceProfile] Device profile.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createProfile(deviceProfile?: DeviceProfile, options?: any): AxiosPromise<void> {
            return localVarFp.createProfile(deviceProfile, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Deletes a profile.
         * @param {string} profileId Profile id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteProfile(profileId: string, options?: any): AxiosPromise<void> {
            return localVarFp.deleteProfile(profileId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets the default profile.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDefaultProfile(options?: any): AxiosPromise<DeviceProfile> {
            return localVarFp.getDefaultProfile(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets a single profile.
         * @param {string} profileId Profile Id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProfile(profileId: string, options?: any): AxiosPromise<DeviceProfile> {
            return localVarFp.getProfile(profileId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get profile infos.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProfileInfos(options?: any): AxiosPromise<Array<DeviceProfileInfo>> {
            return localVarFp.getProfileInfos(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Updates a profile.
         * @param {string} profileId Profile id.
         * @param {DeviceProfile} [deviceProfile] Device profile.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateProfile(profileId: string, deviceProfile?: DeviceProfile, options?: any): AxiosPromise<void> {
            return localVarFp.updateProfile(profileId, deviceProfile, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createProfile operation in DlnaApi.
 * @export
 * @interface DlnaApiCreateProfileRequest
 */
export interface DlnaApiCreateProfileRequest {
    /**
     * Device profile.
     * @type {DeviceProfile}
     * @memberof DlnaApiCreateProfile
     */
    readonly deviceProfile?: DeviceProfile
}

/**
 * Request parameters for deleteProfile operation in DlnaApi.
 * @export
 * @interface DlnaApiDeleteProfileRequest
 */
export interface DlnaApiDeleteProfileRequest {
    /**
     * Profile id.
     * @type {string}
     * @memberof DlnaApiDeleteProfile
     */
    readonly profileId: string
}

/**
 * Request parameters for getProfile operation in DlnaApi.
 * @export
 * @interface DlnaApiGetProfileRequest
 */
export interface DlnaApiGetProfileRequest {
    /**
     * Profile Id.
     * @type {string}
     * @memberof DlnaApiGetProfile
     */
    readonly profileId: string
}

/**
 * Request parameters for updateProfile operation in DlnaApi.
 * @export
 * @interface DlnaApiUpdateProfileRequest
 */
export interface DlnaApiUpdateProfileRequest {
    /**
     * Profile id.
     * @type {string}
     * @memberof DlnaApiUpdateProfile
     */
    readonly profileId: string

    /**
     * Device profile.
     * @type {DeviceProfile}
     * @memberof DlnaApiUpdateProfile
     */
    readonly deviceProfile?: DeviceProfile
}

/**
 * DlnaApi - object-oriented interface
 * @export
 * @class DlnaApi
 * @extends {BaseAPI}
 */
export class DlnaApi extends BaseAPI {
    /**
     * 
     * @summary Creates a profile.
     * @param {DlnaApiCreateProfileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DlnaApi
     */
    public createProfile(requestParameters: DlnaApiCreateProfileRequest = {}, options?: any) {
        return DlnaApiFp(this.configuration).createProfile(requestParameters.deviceProfile, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Deletes a profile.
     * @param {DlnaApiDeleteProfileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DlnaApi
     */
    public deleteProfile(requestParameters: DlnaApiDeleteProfileRequest, options?: any) {
        return DlnaApiFp(this.configuration).deleteProfile(requestParameters.profileId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets the default profile.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DlnaApi
     */
    public getDefaultProfile(options?: any) {
        return DlnaApiFp(this.configuration).getDefaultProfile(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets a single profile.
     * @param {DlnaApiGetProfileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DlnaApi
     */
    public getProfile(requestParameters: DlnaApiGetProfileRequest, options?: any) {
        return DlnaApiFp(this.configuration).getProfile(requestParameters.profileId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get profile infos.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DlnaApi
     */
    public getProfileInfos(options?: any) {
        return DlnaApiFp(this.configuration).getProfileInfos(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Updates a profile.
     * @param {DlnaApiUpdateProfileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DlnaApi
     */
    public updateProfile(requestParameters: DlnaApiUpdateProfileRequest, options?: any) {
        return DlnaApiFp(this.configuration).updateProfile(requestParameters.profileId, requestParameters.deviceProfile, options).then((request) => request(this.axios, this.basePath));
    }
}
