import { TodoServiceClient } from './proto/proto/TodoServiceClientPb';
import { Todo, TodoList, GetTodo } from './proto/proto/todo_pb'

const client = new TodoServiceClient('http://localhost:8080');

const taskInput = document.querySelector(".task-input input"),
filters = document.querySelectorAll(".filters span"),
clearAll = document.querySelector(".clear-btn"),
taskBox = document.querySelector(".task-box");

let editId,
isEditTask = false,
todos = client.readAll(new GetTodo(), {}, (err, response) => {
    if (err) {
        console.log(err);
    } else {
        console.log(response);
    }
});

filters.forEach(filter => {
    filter.addEventListener("click", () => {
        filters.forEach(f => f.classList.remove("active"));
        filter.classList.add("active");
        const filterName = filter.getAttribute("data-filter");
    });
})