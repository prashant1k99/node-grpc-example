# Node + gRPC + TS example

This project uses gRPC, a high-performance, open-source universal RPC framework, to implement a server-client communication system. The server and client are both written in TypeScript and run on Node.js.
For server to browser example, please refer [`browser-implementation`](https://github.com/prashant1k99/node-grpc-example/tree/browser-implementation) branch.

### Dependencies:

This project needs the following `npm` packages:

- [`@grpc/grpc-js`](https://www.npmjs.com/package/@grpc/grpc-js): For Booting gRPC server and also creating client for gRPC server.
- [`@grpc/proto-loader`](https://www.npmjs.com/package/@grpc/proto-loader): For Booting gRPC server and also creating client for gRPC server.

### Server

The server is located in the server/ directory. It implements a gRPC service defined in the proto/ToDoPackage/TodoService.ts file. This service includes methods for managing todos.

### Client

The client is located in the node-client/ directory. It uses the gRPC service defined in the proto/ToDoPackage/TodoService.ts file to communicate with the server.

### Proto Files

The proto/ directory contains the Protocol Buffers (protobuf) definitions for the gRPC service and the message types it uses. These definitions are written in the Protocol Buffers language and are used to generate TypeScript code that implements the service.

The proto/build.sh script is used to generate this TypeScript code. If you encounter a `sh: ./proto/build.sh: Permission denied` error when running this script, you can resolve it by running

```sh
chmod +x ./proto/build.sh.
```

## Run On Local:

1. Please star and fork the repo

![Fork Image](https://raw.githubusercontent.com/prashant1k99/JWT-example/main/asset/fork.png)

2. Then clone the repo in the local environment using the following command in the Terminal:

```
https://github.com/prashant1k99/node-grpc-example
```

3. Install the dependencies with the following command:
   (I have used `pnpm` for this project)

```
pnpm install
```

4. Run Server:

```
pnpm run server:start
```

5. Run Client:

```
node node-client/index
```

## Functionality Explanation:

1.  How to Write a proto file:

    - To write a `proto` file that will be used in gRPC. we need to create a file with the extension of `.proto`.

    - The file content should start with the `syntax` definition on top.

    - Then we define package name.

    - After that we define the service content.

    ```proto
    syntax = "proto3"; // proto version

    package ToDoPackage; // package name

    <!-- Service Name and the methods -->
    service TodoService {
      rpc PingPong(PingRequest) returns (PongResponse) {}
      ...
    }

    <!-- Defining the schema of request body -->
    message PingRequest {
      string message = 1;
    }

    <!-- Defining the schema of response body -->
    message PongResponse {
      string message = 1;
    }
    ```

- For more detailed example, please refer to the [`todo.proto` file](./proto/todo.proto)

2.  Build Script:

    - For the build script, that will generate typescipt and will return the client to use, please refer to the [`buld.sh` file](./proto/build.sh) and for detail, please refer to gRPC documentation.

3.  Server Implementation:

    - To write a server implementation for the proto package, we need `@grpc/grpc-js` package to start gRPC server and `@grpc/proto-loader` to load the proto file for server.

    ```js
    import { TodoServiceHandlers } from '../proto/ToDoPackage/TodoService'
    import path from 'path'
    import * as grpc from '@grpc/grpc-js'
    import * as protoLoader from '@grpc/proto-loader'
    import { ProtoGrpcType } from '../proto/todo'
    ```

    - Then we define the package and load that package in gRPC object;

    ```js
    const packageDef = protoLoader.loadSync(path.resolve(__dirname, '../proto/todo.proto'));

    const grpcObj = grpc.loadPackageDefinition(packageDef) as unknown as ProtoGrpcType;

    const todoPackage = grpcObj.ToDoPackage;
    ```

    - Then we initialize the server as following:

    ```js
    const server = new grpc.Server()
    ```

    - To implement the service,

    ```js
    server.addService(todoPackage.TodoService.service, {
      PingPong: (call, callback) => {
        console.log('REQ: ', call.request);
        callback(null, { message: call.request.message + ' Pong' });
      },
      ...
    } as TodoServiceHandlers);
    ```

    - Then to bind the server to a port and start:

    ```js
    server.bindAsync(
    	`0.0.0.0:${SERVER_PORT}`,
    	grpc.ServerCredentials.createInsecure(),
    	(err, port) => {
    		if (err != null) {
    			return console.error(err)
    		}
    		console.log(`gRPC listening on ${port}`)
    		server.start()
    	}
    )
    ```

4.  Client (Node) Implementation:

    - To write client implementation for the proto pacakge, we need `@grpc/grpc-js` package to start gRPC client and `@grpc/proto-loader` to load the proto file for client.

    ```js
    import path from 'path'
    import * as grpc from '@grpc/grpc-js'
    import * as protoLoader from '@grpc/proto-loader'
    import { ProtoGrpcType } from '../proto/todo'
    ```

    - Then we define the package and load that package in gRPC object;

    ```js
    const packageDef = protoLoader.loadSync(path.resolve(__dirname, '../proto/todo.proto'));

    const grpcObj = grpc.loadPackageDefinition(packageDef) as unknown as ProtoGrpcType;

    const client = new grpcObj.ToDoPackage.TodoService(
    `0.0.0.0:${SERVER_PORT}`, grpc.credentials.createInsecure()
    );
    ```

    - Then we call the the server for specific functions:

    ```js
    const deadline = new Date()
    deadline.setSeconds(deadline.getSeconds() + 5)
    client.waitForReady(deadline, (err) => {
    	if (err != null) {
    		return console.error(err)
    	}
    	console.log('gRPC connected')
    	client.PingPong({ message: 'Ping' }, (err, res) => {
    		if (err != null) {
    			return console.error(err)
    		}
    		console.log('RES: ', res)
    	})
      ...
    })
    ```

    For the detailed example please refer to the [`server/index.ts` file]('./server/index.ts')
