import { TodoServiceHandlers } from '../proto/ToDoPackage/TodoService'
import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from '../proto/todo';
import { createTodo, updateTodo, deleteTodo, getTodos } from './todo'

import { SERVER_PORT } from '../CONSTANTS';

const packageDef = protoLoader.loadSync(path.resolve(__dirname, '../proto/todo.proto'));

const grpcObj = grpc.loadPackageDefinition(packageDef) as unknown as ProtoGrpcType;

const todoPackage = grpcObj.ToDoPackage;

const server = new grpc.Server();
server.addService(todoPackage.TodoService.service, {
  PingPong: (call, callback) => {
    console.log('REQ: ', call.request);
    callback(null, { message: call.request.message + ' Pong' });
  },
  ReadAll: (call, callback) => {
    const todos = getTodos(call.request.completed);
    callback(null, { todos });
  },
  Create: (call, callback) => {
    const createdTodo = createTodo({
      ...call.request,
      completed: false
    });
    callback(null, createdTodo);
  },
  Update: (call, callback) => {
    console.log('REQ: ', call.request)
    const updatedTodo = updateTodo(call.request);
    callback(null, updatedTodo);
  },
  Delete: (call, callback) => {
    const deletedTodoStatus = deleteTodo(call.request.id);
    callback(null, { status: deletedTodoStatus || false});
  }
} as TodoServiceHandlers);

server.bindAsync(`0.0.0.0:${SERVER_PORT}`, grpc.ServerCredentials.createInsecure(), (err, port) => {
  if (err != null) {
    return console.error(err);
  }
  console.log(`gRPC listening on ${port}`);
  server.start();
});