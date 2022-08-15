/**
 * @fileoverview gRPC-Web generated client stub for apipb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as protos_api_pb from '../protos/api_pb';


export class ApiClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorHello = new grpcWeb.MethodDescriptor(
    '/apipb.Api/Hello',
    grpcWeb.MethodType.UNARY,
    protos_api_pb.HelloRequest,
    protos_api_pb.HelloResponse,
    (request: protos_api_pb.HelloRequest) => {
      return request.serializeBinary();
    },
    protos_api_pb.HelloResponse.deserializeBinary
  );

  hello(
    request: protos_api_pb.HelloRequest,
    metadata: grpcWeb.Metadata | null): Promise<protos_api_pb.HelloResponse>;

  hello(
    request: protos_api_pb.HelloRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: protos_api_pb.HelloResponse) => void): grpcWeb.ClientReadableStream<protos_api_pb.HelloResponse>;

  hello(
    request: protos_api_pb.HelloRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: protos_api_pb.HelloResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/apipb.Api/Hello',
        request,
        metadata || {},
        this.methodDescriptorHello,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/apipb.Api/Hello',
    request,
    metadata || {},
    this.methodDescriptorHello);
  }

}

