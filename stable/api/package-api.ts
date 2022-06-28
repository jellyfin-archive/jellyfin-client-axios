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
import { PackageInfo } from '../models';
// @ts-ignore
import { ProblemDetails } from '../models';
// @ts-ignore
import { RepositoryInfo } from '../models';
/**
 * PackageApi - axios parameter creator
 * @export
 */
export const PackageApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Cancels a package installation.
         * @param {string} packageId Installation Id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cancelPackageInstallation: async (packageId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'packageId' is not null or undefined
            assertParamExists('cancelPackageInstallation', 'packageId', packageId)
            const localVarPath = `/Packages/Installing/{packageId}`
                .replace(`{${"packageId"}}`, encodeURIComponent(String(packageId)));
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
         * @summary Gets a package by name or assembly GUID.
         * @param {string} name The name of the package.
         * @param {string} [assemblyGuid] The GUID of the associated assembly.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPackageInfo: async (name: string, assemblyGuid?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('getPackageInfo', 'name', name)
            const localVarPath = `/Packages/{name}`
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
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            if (assemblyGuid !== undefined) {
                localVarQueryParameter['assemblyGuid'] = assemblyGuid;
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
         * @summary Gets available packages.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPackages: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/Packages`;
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
         * @summary Gets all package repositories.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRepositories: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/Repositories`;
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
         * @summary Installs a package.
         * @param {string} name Package name.
         * @param {string} [assemblyGuid] GUID of the associated assembly.
         * @param {string} [version] Optional version. Defaults to latest version.
         * @param {string} [repositoryUrl] Optional. Specify the repository to install from.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        installPackage: async (name: string, assemblyGuid?: string, version?: string, repositoryUrl?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('installPackage', 'name', name)
            const localVarPath = `/Packages/Installed/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
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

            if (assemblyGuid !== undefined) {
                localVarQueryParameter['assemblyGuid'] = assemblyGuid;
            }

            if (version !== undefined) {
                localVarQueryParameter['version'] = version;
            }

            if (repositoryUrl !== undefined) {
                localVarQueryParameter['repositoryUrl'] = repositoryUrl;
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
         * @summary Sets the enabled and existing package repositories.
         * @param {Array<RepositoryInfo>} repositoryInfo The list of package repositories.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        setRepositories: async (repositoryInfo: Array<RepositoryInfo>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'repositoryInfo' is not null or undefined
            assertParamExists('setRepositories', 'repositoryInfo', repositoryInfo)
            const localVarPath = `/Repositories`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(repositoryInfo, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PackageApi - functional programming interface
 * @export
 */
export const PackageApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PackageApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Cancels a package installation.
         * @param {string} packageId Installation Id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cancelPackageInstallation(packageId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cancelPackageInstallation(packageId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Gets a package by name or assembly GUID.
         * @param {string} name The name of the package.
         * @param {string} [assemblyGuid] The GUID of the associated assembly.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPackageInfo(name: string, assemblyGuid?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PackageInfo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPackageInfo(name, assemblyGuid, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Gets available packages.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPackages(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<PackageInfo>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPackages(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Gets all package repositories.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRepositories(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<RepositoryInfo>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRepositories(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Installs a package.
         * @param {string} name Package name.
         * @param {string} [assemblyGuid] GUID of the associated assembly.
         * @param {string} [version] Optional version. Defaults to latest version.
         * @param {string} [repositoryUrl] Optional. Specify the repository to install from.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async installPackage(name: string, assemblyGuid?: string, version?: string, repositoryUrl?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.installPackage(name, assemblyGuid, version, repositoryUrl, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Sets the enabled and existing package repositories.
         * @param {Array<RepositoryInfo>} repositoryInfo The list of package repositories.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async setRepositories(repositoryInfo: Array<RepositoryInfo>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setRepositories(repositoryInfo, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * PackageApi - factory interface
 * @export
 */
export const PackageApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PackageApiFp(configuration)
    return {
        /**
         * 
         * @summary Cancels a package installation.
         * @param {string} packageId Installation Id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cancelPackageInstallation(packageId: string, options?: any): AxiosPromise<void> {
            return localVarFp.cancelPackageInstallation(packageId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets a package by name or assembly GUID.
         * @param {string} name The name of the package.
         * @param {string} [assemblyGuid] The GUID of the associated assembly.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPackageInfo(name: string, assemblyGuid?: string, options?: any): AxiosPromise<PackageInfo> {
            return localVarFp.getPackageInfo(name, assemblyGuid, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets available packages.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPackages(options?: any): AxiosPromise<Array<PackageInfo>> {
            return localVarFp.getPackages(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets all package repositories.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRepositories(options?: any): AxiosPromise<Array<RepositoryInfo>> {
            return localVarFp.getRepositories(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Installs a package.
         * @param {string} name Package name.
         * @param {string} [assemblyGuid] GUID of the associated assembly.
         * @param {string} [version] Optional version. Defaults to latest version.
         * @param {string} [repositoryUrl] Optional. Specify the repository to install from.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        installPackage(name: string, assemblyGuid?: string, version?: string, repositoryUrl?: string, options?: any): AxiosPromise<void> {
            return localVarFp.installPackage(name, assemblyGuid, version, repositoryUrl, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Sets the enabled and existing package repositories.
         * @param {Array<RepositoryInfo>} repositoryInfo The list of package repositories.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        setRepositories(repositoryInfo: Array<RepositoryInfo>, options?: any): AxiosPromise<void> {
            return localVarFp.setRepositories(repositoryInfo, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for cancelPackageInstallation operation in PackageApi.
 * @export
 * @interface PackageApiCancelPackageInstallationRequest
 */
export interface PackageApiCancelPackageInstallationRequest {
    /**
     * Installation Id.
     * @type {string}
     * @memberof PackageApiCancelPackageInstallation
     */
    readonly packageId: string
}

/**
 * Request parameters for getPackageInfo operation in PackageApi.
 * @export
 * @interface PackageApiGetPackageInfoRequest
 */
export interface PackageApiGetPackageInfoRequest {
    /**
     * The name of the package.
     * @type {string}
     * @memberof PackageApiGetPackageInfo
     */
    readonly name: string

    /**
     * The GUID of the associated assembly.
     * @type {string}
     * @memberof PackageApiGetPackageInfo
     */
    readonly assemblyGuid?: string
}

/**
 * Request parameters for installPackage operation in PackageApi.
 * @export
 * @interface PackageApiInstallPackageRequest
 */
export interface PackageApiInstallPackageRequest {
    /**
     * Package name.
     * @type {string}
     * @memberof PackageApiInstallPackage
     */
    readonly name: string

    /**
     * GUID of the associated assembly.
     * @type {string}
     * @memberof PackageApiInstallPackage
     */
    readonly assemblyGuid?: string

    /**
     * Optional version. Defaults to latest version.
     * @type {string}
     * @memberof PackageApiInstallPackage
     */
    readonly version?: string

    /**
     * Optional. Specify the repository to install from.
     * @type {string}
     * @memberof PackageApiInstallPackage
     */
    readonly repositoryUrl?: string
}

/**
 * Request parameters for setRepositories operation in PackageApi.
 * @export
 * @interface PackageApiSetRepositoriesRequest
 */
export interface PackageApiSetRepositoriesRequest {
    /**
     * The list of package repositories.
     * @type {Array<RepositoryInfo>}
     * @memberof PackageApiSetRepositories
     */
    readonly repositoryInfo: Array<RepositoryInfo>
}

/**
 * PackageApi - object-oriented interface
 * @export
 * @class PackageApi
 * @extends {BaseAPI}
 */
export class PackageApi extends BaseAPI {
    /**
     * 
     * @summary Cancels a package installation.
     * @param {PackageApiCancelPackageInstallationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PackageApi
     */
    public cancelPackageInstallation(requestParameters: PackageApiCancelPackageInstallationRequest, options?: AxiosRequestConfig) {
        return PackageApiFp(this.configuration).cancelPackageInstallation(requestParameters.packageId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets a package by name or assembly GUID.
     * @param {PackageApiGetPackageInfoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PackageApi
     */
    public getPackageInfo(requestParameters: PackageApiGetPackageInfoRequest, options?: AxiosRequestConfig) {
        return PackageApiFp(this.configuration).getPackageInfo(requestParameters.name, requestParameters.assemblyGuid, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets available packages.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PackageApi
     */
    public getPackages(options?: AxiosRequestConfig) {
        return PackageApiFp(this.configuration).getPackages(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets all package repositories.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PackageApi
     */
    public getRepositories(options?: AxiosRequestConfig) {
        return PackageApiFp(this.configuration).getRepositories(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Installs a package.
     * @param {PackageApiInstallPackageRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PackageApi
     */
    public installPackage(requestParameters: PackageApiInstallPackageRequest, options?: AxiosRequestConfig) {
        return PackageApiFp(this.configuration).installPackage(requestParameters.name, requestParameters.assemblyGuid, requestParameters.version, requestParameters.repositoryUrl, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Sets the enabled and existing package repositories.
     * @param {PackageApiSetRepositoriesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PackageApi
     */
    public setRepositories(requestParameters: PackageApiSetRepositoriesRequest, options?: AxiosRequestConfig) {
        return PackageApiFp(this.configuration).setRepositories(requestParameters.repositoryInfo, options).then((request) => request(this.axios, this.basePath));
    }
}
