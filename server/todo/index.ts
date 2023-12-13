import { Todo } from '../../proto/ToDoPackage/Todo'

const data: Todo[] = []

export const getTodos = (completed?: Boolean) => {
  if (completed != null) {
    return data.filter((t) => t.completed === completed)
  }
  return data
};

export const createTodo = (todo: Todo) => {
  const newTodo = {
    ...todo,
    id: data.length.toString(),
    completed: false
  }
  data.push(newTodo)
  return newTodo;
}

export const updateTodo = (todo: Todo) => {
  const index = data.findIndex((t) => t.id === todo.id)
  if (index === -1) {
    return null;
  }
  data[index] = {
    ...data[index],
    title: todo.title || data[index].title,
    completed: todo.completed || false,
  };
  console.log(data[index])
  return todo;
}

export const deleteTodo = (id: string) => {
  const index = data.findIndex((t) => t.id === id)
  if (index === -1) {
    return false;
  }
  data.splice(index, 1);
  return true;
}
