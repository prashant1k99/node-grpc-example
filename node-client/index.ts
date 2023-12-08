import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from '../proto/todo'

import { SERVER_PORT } from '../CONSTANTS';


const packageDef = protoLoader.loadSync(path.resolve(__dirname, '../proto/todo.proto'));

const grpcObj = grpc.loadPackageDefinition(packageDef) as unknown as ProtoGrpcType;

const client = new grpcObj.ToDoPackage.TodoService(
  `0.0.0.0:${SERVER_PORT}`, grpc.credentials.createInsecure()
);

const deadline = new Date();
deadline.setSeconds(deadline.getSeconds() + 5);
client.waitForReady(deadline, (err) => {
  if (err != null) {
    return console.error(err);
  }
  console.log('gRPC connected');
  client.PingPong({ message: 'Ping' }, (err, res) => {
    if (err != null) {
      return console.error(err);
    }
    console.log('RES: ', res);
  });
  client.ReadAll({}, (err, res) => {
    if (err != null) {
      return console.error(err);
    }
    console.log('GET TODO: ', res);
  });
  client.Create({
    title: 'New Todo 1',
    completed: false
  }, (err, res) => {
    if (err != null) {
      return console.error(err);
    }
    console.log('Created TODO: ', res);
  });
  client.Create({
    title: 'New Todo 2',
    completed: false
  }, (err, res) => {
    if (err != null) {
      return console.error(err);
    }
    console.log('Created TODO: ', res);
  });
  client.Update({
    id: '0',
    title: 'Updated Todo',
    completed: true
  }, (err, res) => {
    if (err != null) {
      return console.error(err);
    }
    console.log('Updated TODO: ', res);
  });
  client.ReadAll({}, (err, res) => {
    if (err != null) {
      return console.error(err);
    }
    console.log('GET TODO: ', res);
  });
  client.ReadAll({ completed: false }, (err, res) => {
    if (err != null) {
      return console.error(err);
    }
    console.log('GET TODO [Completed => false]: ', res);
  });
  client.ReadAll({ completed: true }, (err, res) => {
    if (err != null) {
      return console.error(err);
    }
    console.log('GET TODO [Completed => true]: ', res);
  })
  client.Delete({ id: '0' }, (err, res) => {
    if (err != null) {
      return console.error(err);
    }
    console.log('Deleted TODO: ', res);
  });
  client.ReadAll({}, (err, res) => {
    if (err != null) {
      return console.error(err);
    }
    console.log('GET TODO: ', res);
  });
})

