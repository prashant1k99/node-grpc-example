// Original file: proto/todo.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { PingRequest as _ToDoPackage_PingRequest, PingRequest__Output as _ToDoPackage_PingRequest__Output } from '../ToDoPackage/PingRequest';
import type { PongResponse as _ToDoPackage_PongResponse, PongResponse__Output as _ToDoPackage_PongResponse__Output } from '../ToDoPackage/PongResponse';

export interface TodoServiceClient extends grpc.Client {
  PingPong(argument: _ToDoPackage_PingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ToDoPackage_PongResponse__Output>): grpc.ClientUnaryCall;
  PingPong(argument: _ToDoPackage_PingRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_ToDoPackage_PongResponse__Output>): grpc.ClientUnaryCall;
  PingPong(argument: _ToDoPackage_PingRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_ToDoPackage_PongResponse__Output>): grpc.ClientUnaryCall;
  PingPong(argument: _ToDoPackage_PingRequest, callback: grpc.requestCallback<_ToDoPackage_PongResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _ToDoPackage_PingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ToDoPackage_PongResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _ToDoPackage_PingRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_ToDoPackage_PongResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _ToDoPackage_PingRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_ToDoPackage_PongResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _ToDoPackage_PingRequest, callback: grpc.requestCallback<_ToDoPackage_PongResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface TodoServiceHandlers extends grpc.UntypedServiceImplementation {
  PingPong: grpc.handleUnaryCall<_ToDoPackage_PingRequest__Output, _ToDoPackage_PongResponse>;
  
}

export interface TodoServiceDefinition extends grpc.ServiceDefinition {
  PingPong: MethodDefinition<_ToDoPackage_PingRequest, _ToDoPackage_PongResponse, _ToDoPackage_PingRequest__Output, _ToDoPackage_PongResponse__Output>
}
