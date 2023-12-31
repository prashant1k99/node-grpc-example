import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { TodoServiceClient as _ToDoPackage_TodoServiceClient, TodoServiceDefinition as _ToDoPackage_TodoServiceDefinition } from './ToDoPackage/TodoService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  ToDoPackage: {
    Empty: MessageTypeDefinition
    GetTodo: MessageTypeDefinition
    PingRequest: MessageTypeDefinition
    PongResponse: MessageTypeDefinition
    Status: MessageTypeDefinition
    Todo: MessageTypeDefinition
    TodoId: MessageTypeDefinition
    TodoList: MessageTypeDefinition
    TodoService: SubtypeConstructor<typeof grpc.Client, _ToDoPackage_TodoServiceClient> & { service: _ToDoPackage_TodoServiceDefinition }
  }
}

