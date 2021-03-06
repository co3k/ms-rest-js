// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

export { WebResource, HttpRequestBody, RequestPrepareOptions, HttpMethods, ParameterValue, RequestOptionsBase, TransferProgressEvent, AbortSignalLike } from "./webResource";
export { DefaultHttpClient } from "./defaultHttpClient";
export { HttpClient } from "./httpClient";
export { HttpHeaders } from "./httpHeaders";
export { HttpOperationResponse, HttpResponse, RestResponse } from "./httpOperationResponse";
export { HttpPipelineLogger } from "./httpPipelineLogger";
export { HttpPipelineLogLevel } from "./httpPipelineLogLevel";
export { RestError } from "./restError";
export { OperationArguments } from "./operationArguments";
export { OperationParameter, OperationQueryParameter, OperationURLParameter } from "./operationParameter";
export { OperationResponse } from "./operationResponse";
export { OperationSpec } from "./operationSpec";
export { ServiceClient, ServiceClientOptions, flattenResponse } from "./serviceClient";
export { QueryCollectionFormat } from "./queryCollectionFormat";
export { Constants } from "./util/constants";
export { logPolicy } from "./policies/logPolicy";
export { BaseRequestPolicy, RequestPolicy, RequestPolicyFactory, RequestPolicyOptions } from "./policies/requestPolicy";
export { exponentialRetryPolicy } from "./policies/exponentialRetryPolicy";
export { systemErrorRetryPolicy } from "./policies/systemErrorRetryPolicy";
export { redirectPolicy } from "./policies/redirectPolicy";
export { signingPolicy } from "./policies/signingPolicy";
export { msRestUserAgentPolicy } from "./policies/msRestUserAgentPolicy";
export { deserializationPolicy, deserializeResponseBody } from "./policies/deserializationPolicy";
export {
  MapperType, SimpleMapperType, CompositeMapperType, DictionaryMapperType, SequenceMapperType, EnumMapperType,
  Mapper, BaseMapper, CompositeMapper, SequenceMapper, DictionaryMapper, EnumMapper,
  MapperConstraints, PolymorphicDiscriminator,
  Serializer, UrlParameterValue, serializeObject
} from "./serializer";
export {
  stripRequest, stripResponse, delay,
  executePromisesSequentially, generateUuid, encodeUri, ServiceCallback,
  promiseToCallback, promiseToServiceCallback, isValidUuid,
  applyMixins, isNode, isDuration
} from "./util/utils";
export { URLBuilder, URLQuery } from "./url";

// Credentials
export { TokenCredentials } from "./credentials/tokenCredentials";
export { BasicAuthenticationCredentials } from "./credentials/basicAuthenticationCredentials";
export { ApiKeyCredentials, ApiKeyCredentialOptions } from "./credentials/apiKeyCredentials";
export { ServiceClientCredentials } from "./credentials/serviceClientCredentials";
export { TopicCredentials } from "./credentials/topicCredentials";
