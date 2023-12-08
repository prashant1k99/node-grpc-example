// Original file: proto/todo.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { GetTodo as _ToDoPackage_GetTodo, GetTodo__Output as _ToDoPackage_GetTodo__Output } from '../ToDoPackage/GetTodo';
import type { PingRequest as _ToDoPackage_PingRequest, PingRequest__Output as _ToDoPackage_PingRequest__Output } from '../ToDoPackage/PingRequest';
import type { PongResponse as _ToDoPackage_PongResponse, PongResponse__Output as _ToDoPackage_PongResponse__Output } from '../ToDoPackage/PongResponse';
import type { Status as _ToDoPackage_Status, Status__Output as _ToDoPackage_Status__Output } from '../ToDoPackage/Status';
import type { Todo as _ToDoPackage_Todo, Todo__Output as _ToDoPackage_Todo__Output } from '../ToDoPackage/Todo';
import type { TodoId as _ToDoPackage_TodoId, TodoId__Output as _ToDoPackage_TodoId__Output } from '../ToDoPackage/TodoId';
import type { TodoList as _ToDoPackage_TodoList, TodoList__Output as _ToDoPackage_TodoList__Output } from '../ToDoPackage/TodoList';

export interface TodoServiceClient extends grpc.Client {
  Create(argument: _ToDoPackage_Todo, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ToDoPackage_Todo__Output>): grpc.ClientUnaryCall;
  Create(argument: _ToDoPackage_Todo, metadata: grpc.Metadata, callback: grpc.requestCallback<_ToDoPackage_Todo__Output>): grpc.ClientUnaryCall;
  Create(argument: _ToDoPackage_Todo, options: grpc.CallOptions, callback: grpc.requestCallback<_ToDoPackage_Todo__Output>): grpc.ClientUnaryCall;
  Create(argument: _ToDoPackage_Todo, callback: grpc.requestCallback<_ToDoPackage_Todo__Output>): grpc.ClientUnaryCall;
  create(argument: _ToDoPackage_Todo, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ToDoPackage_Todo__Output>): grpc.ClientUnaryCall;
  create(argument: _ToDoPackage_Todo, metadata: grpc.Metadata, callback: grpc.requestCallback<_ToDoPackage_Todo__Output>): grpc.ClientUnaryCall;
  create(argument: _ToDoPackage_Todo, options: grpc.CallOptions, callback: grpc.requestCallback<_ToDoPackage_Todo__Output>): grpc.ClientUnaryCall;
  create(argument: _ToDoPackage_Todo, callback: grpc.requestCallback<_ToDoPackage_Todo__Output>): grpc.ClientUnaryCall;
  
  Delete(argument: _ToDoPackage_TodoId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ToDoPackage_Status__Output>): grpc.ClientUnaryCall;
  Delete(argument: _ToDoPackage_TodoId, metadata: grpc.Metadata, callback: grpc.requestCallback<_ToDoPackage_Status__Output>): grpc.ClientUnaryCall;
  Delete(argument: _ToDoPackage_TodoId, options: grpc.CallOptions, callback: grpc.requestCallback<_ToDoPackage_Status__Output>): grpc.ClientUnaryCall;
  Delete(argument: _ToDoPackage_TodoId, callback: grpc.requestCallback<_ToDoPackage_Status__Output>): grpc.ClientUnaryCall;
  delete(argument: _ToDoPackage_TodoId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ToDoPackage_Status__Output>): grpc.ClientUnaryCall;
  delete(argument: _ToDoPackage_TodoId, metadata: grpc.Metadata, callback: grpc.requestCallback<_ToDoPackage_Status__Output>): grpc.ClientUnaryCall;
  delete(argument: _ToDoPackage_TodoId, options: grpc.CallOptions, callback: grpc.requestCallback<_ToDoPackage_Status__Output>): grpc.ClientUnaryCall;
  delete(argument: _ToDoPackage_TodoId, callback: grpc.requestCallback<_ToDoPackage_Status__Output>): grpc.ClientUnaryCall;
  
  PingPong(argument: _ToDoPackage_PingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ToDoPackage_PongResponse__Output>): grpc.ClientUnaryCall;
  PingPong(argument: _ToDoPackage_PingRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_ToDoPackage_PongResponse__Output>): grpc.ClientUnaryCall;
  PingPong(argument: _ToDoPackage_PingRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_ToDoPackage_PongResponse__Output>): grpc.ClientUnaryCall;
  PingPong(argument: _ToDoPackage_PingRequest, callback: grpc.requestCallback<_ToDoPackage_PongResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _ToDoPackage_PingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ToDoPackage_PongResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _ToDoPackage_PingRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_ToDoPackage_PongResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _ToDoPackage_PingRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_ToDoPackage_PongResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _ToDoPackage_PingRequest, callback: grpc.requestCallback<_ToDoPackage_PongResponse__Output>): grpc.ClientUnaryCall;
  
  ReadAll(argument: _ToDoPackage_GetTodo, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ToDoPackage_TodoList__Output>): grpc.ClientUnaryCall;
  ReadAll(argument: _ToDoPackage_GetTodo, metadata: grpc.Metadata, callback: grpc.requestCallback<_ToDoPackage_TodoList__Output>): grpc.ClientUnaryCall;
  ReadAll(argument: _ToDoPackage_GetTodo, options: grpc.CallOptions, callback: grpc.requestCallback<_ToDoPackage_TodoList__Output>): grpc.ClientUnaryCall;
  ReadAll(argument: _ToDoPackage_GetTodo, callback: grpc.requestCallback<_ToDoPackage_TodoList__Output>): grpc.ClientUnaryCall;
  readAll(argument: _ToDoPackage_GetTodo, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ToDoPackage_TodoList__Output>): grpc.ClientUnaryCall;
  readAll(argument: _ToDoPackage_GetTodo, metadata: grpc.Metadata, callback: grpc.requestCallback<_ToDoPackage_TodoList__Output>): grpc.ClientUnaryCall;
  readAll(argument: _ToDoPackage_GetTodo, options: grpc.CallOptions, callback: grpc.requestCallback<_ToDoPackage_TodoList__Output>): grpc.ClientUnaryCall;
  readAll(argument: _ToDoPackage_GetTodo, callback: grpc.requestCallback<_ToDoPackage_TodoList__Output>): grpc.ClientUnaryCall;
  
  Update(argument: _ToDoPackage_Todo, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ToDoPackage_Todo__Output>): grpc.ClientUnaryCall;
  Update(argument: _ToDoPackage_Todo, metadata: grpc.Metadata, callback: grpc.requestCallback<_ToDoPackage_Todo__Output>): grpc.ClientUnaryCall;
  Update(argument: _ToDoPackage_Todo, options: grpc.CallOptions, callback: grpc.requestCallback<_ToDoPackage_Todo__Output>): grpc.ClientUnaryCall;
  Update(argument: _ToDoPackage_Todo, callback: grpc.requestCallback<_ToDoPackage_Todo__Output>): grpc.ClientUnaryCall;
  update(argument: _ToDoPackage_Todo, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ToDoPackage_Todo__Output>): grpc.ClientUnaryCall;
  update(argument: _ToDoPackage_Todo, metadata: grpc.Metadata, callback: grpc.requestCallback<_ToDoPackage_Todo__Output>): grpc.ClientUnaryCall;
  update(argument: _ToDoPackage_Todo, options: grpc.CallOptions, callback: grpc.requestCallback<_ToDoPackage_Todo__Output>): grpc.ClientUnaryCall;
  update(argument: _ToDoPackage_Todo, callback: grpc.requestCallback<_ToDoPackage_Todo__Output>): grpc.ClientUnaryCall;
  
}

export interface TodoServiceHandlers extends grpc.UntypedServiceImplementation {
  Create: grpc.handleUnaryCall<_ToDoPackage_Todo__Output, _ToDoPackage_Todo>;
  
  Delete: grpc.handleUnaryCall<_ToDoPackage_TodoId__Output, _ToDoPackage_Status>;
  
  PingPong: grpc.handleUnaryCall<_ToDoPackage_PingRequest__Output, _ToDoPackage_PongResponse>;
  
  ReadAll: grpc.handleUnaryCall<_ToDoPackage_GetTodo__Output, _ToDoPackage_TodoList>;
  
  Update: grpc.handleUnaryCall<_ToDoPackage_Todo__Output, _ToDoPackage_Todo>;
  
}

export interface TodoServiceDefinition extends grpc.ServiceDefinition {
  Create: MethodDefinition<_ToDoPackage_Todo, _ToDoPackage_Todo, _ToDoPackage_Todo__Output, _ToDoPackage_Todo__Output>
  Delete: MethodDefinition<_ToDoPackage_TodoId, _ToDoPackage_Status, _ToDoPackage_TodoId__Output, _ToDoPackage_Status__Output>
  PingPong: MethodDefinition<_ToDoPackage_PingRequest, _ToDoPackage_PongResponse, _ToDoPackage_PingRequest__Output, _ToDoPackage_PongResponse__Output>
  ReadAll: MethodDefinition<_ToDoPackage_GetTodo, _ToDoPackage_TodoList, _ToDoPackage_GetTodo__Output, _ToDoPackage_TodoList__Output>
  Update: MethodDefinition<_ToDoPackage_Todo, _ToDoPackage_Todo, _ToDoPackage_Todo__Output, _ToDoPackage_Todo__Output>
}
