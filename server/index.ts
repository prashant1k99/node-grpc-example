import { TodoServiceHandlers } from '../proto/ToDoPackage/TodoService'
import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from '../proto/todo'

import { SERVER_PORT } from '../CONSTANTS';

const packageDef = protoLoader.loadSync(path.resolve(__dirname, '../proto/todo.proto'));

const grpcObj = grpc.loadPackageDefinition(packageDef) as unknown as ProtoGrpcType;

const todoPackage = grpcObj.ToDoPackage;

const server = new grpc.Server();
server.addService(todoPackage.TodoService.service, {
  PingPong: (call, callback) => {
    console.log('REQ: ', call.request);
    callback(null, { message: call.request.message + ' Pong' });
  }
} as TodoServiceHandlers);

server.bindAsync(`0.0.0.0:${SERVER_PORT}`, grpc.ServerCredentials.createInsecure(), (err, port) => {
  if (err != null) {
    return console.error(err);
  }
  console.log(`gRPC listening on ${port}`);
  server.start();
});