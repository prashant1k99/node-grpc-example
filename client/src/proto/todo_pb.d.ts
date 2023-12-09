import * as jspb from 'google-protobuf'



export class PingRequest extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): PingRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PingRequest): PingRequest.AsObject;
  static serializeBinaryToWriter(message: PingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PingRequest;
  static deserializeBinaryFromReader(message: PingRequest, reader: jspb.BinaryReader): PingRequest;
}

export namespace PingRequest {
  export type AsObject = {
    message: string,
  }
}

export class PongResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): PongResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PongResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PongResponse): PongResponse.AsObject;
  static serializeBinaryToWriter(message: PongResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PongResponse;
  static deserializeBinaryFromReader(message: PongResponse, reader: jspb.BinaryReader): PongResponse;
}

export namespace PongResponse {
  export type AsObject = {
    message: string,
  }
}

export class Status extends jspb.Message {
  getStatus(): boolean;
  setStatus(value: boolean): Status;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Status.AsObject;
  static toObject(includeInstance: boolean, msg: Status): Status.AsObject;
  static serializeBinaryToWriter(message: Status, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Status;
  static deserializeBinaryFromReader(message: Status, reader: jspb.BinaryReader): Status;
}

export namespace Status {
  export type AsObject = {
    status: boolean,
  }
}

export class Todo extends jspb.Message {
  getId(): number;
  setId(value: number): Todo;

  getTitle(): string;
  setTitle(value: string): Todo;

  getCompleted(): boolean;
  setCompleted(value: boolean): Todo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Todo.AsObject;
  static toObject(includeInstance: boolean, msg: Todo): Todo.AsObject;
  static serializeBinaryToWriter(message: Todo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Todo;
  static deserializeBinaryFromReader(message: Todo, reader: jspb.BinaryReader): Todo;
}

export namespace Todo {
  export type AsObject = {
    id: number,
    title: string,
    completed: boolean,
  }
}

export class TodoList extends jspb.Message {
  getTodosList(): Array<Todo>;
  setTodosList(value: Array<Todo>): TodoList;
  clearTodosList(): TodoList;
  addTodos(value?: Todo, index?: number): Todo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TodoList.AsObject;
  static toObject(includeInstance: boolean, msg: TodoList): TodoList.AsObject;
  static serializeBinaryToWriter(message: TodoList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TodoList;
  static deserializeBinaryFromReader(message: TodoList, reader: jspb.BinaryReader): TodoList;
}

export namespace TodoList {
  export type AsObject = {
    todosList: Array<Todo.AsObject>,
  }
}

export class TodoId extends jspb.Message {
  getId(): number;
  setId(value: number): TodoId;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TodoId.AsObject;
  static toObject(includeInstance: boolean, msg: TodoId): TodoId.AsObject;
  static serializeBinaryToWriter(message: TodoId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TodoId;
  static deserializeBinaryFromReader(message: TodoId, reader: jspb.BinaryReader): TodoId;
}

export namespace TodoId {
  export type AsObject = {
    id: number,
  }
}

export class GetTodo extends jspb.Message {
  getCompleted(): number;
  setCompleted(value: number): GetTodo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTodo.AsObject;
  static toObject(includeInstance: boolean, msg: GetTodo): GetTodo.AsObject;
  static serializeBinaryToWriter(message: GetTodo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTodo;
  static deserializeBinaryFromReader(message: GetTodo, reader: jspb.BinaryReader): GetTodo;
}

export namespace GetTodo {
  export type AsObject = {
    completed: number,
  }
}

