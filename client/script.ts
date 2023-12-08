import { TodoServiceClient } from '../proto/ToDoPackage/TodoService';
import { Todo,} from '../proto/ToDoPackage/Todo';
import { TodoList } from '../proto/ToDoPackage/TodoList';

const client = new TodoServiceClient('http://localhost:8080');

// Add logic for interacting with your gRPC TODO APIs here