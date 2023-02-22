/* tslint:disable */
/* eslint-disable */
/**
 * Message API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface Message
 */
export interface Message {
    /**
     * 
     * @type {number}
     * @memberof Message
     */
    'id': number;
    /**
     * 
     * @type {string}
     * @memberof Message
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof Message
     */
    'message': string;
    /**
     * 
     * @type {string}
     * @memberof Message
     */
    'created_at': string;
    /**
     * 
     * @type {string}
     * @memberof Message
     */
    'updated_at': string;
}
/**
 * 
 * @export
 * @interface NewMessage
 */
export interface NewMessage {
    /**
     * 
     * @type {string}
     * @memberof NewMessage
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof NewMessage
     */
    'message': string;
    /**
     * 
     * @type {string}
     * @memberof NewMessage
     */
    'created_at': string;
    /**
     * 
     * @type {string}
     * @memberof NewMessage
     */
    'updated_at': string;
}

/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create a new message
         * @param {NewMessage} [newMessage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createMessage: async (newMessage?: NewMessage, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/messages`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(newMessage, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get all messages
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMessages: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/messages`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
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
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DefaultApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Create a new message
         * @param {NewMessage} [newMessage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createMessage(newMessage?: NewMessage, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Message>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createMessage(newMessage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get all messages
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMessages(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Message>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getMessages(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DefaultApiFp(configuration)
    return {
        /**
         * 
         * @summary Create a new message
         * @param {NewMessage} [newMessage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createMessage(newMessage?: NewMessage, options?: any): AxiosPromise<Message> {
            return localVarFp.createMessage(newMessage, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get all messages
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMessages(options?: any): AxiosPromise<Array<Message>> {
            return localVarFp.getMessages(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * 
     * @summary Create a new message
     * @param {NewMessage} [newMessage] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public createMessage(newMessage?: NewMessage, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).createMessage(newMessage, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get all messages
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getMessages(options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).getMessages(options).then((request) => request(this.axios, this.basePath));
    }
}


