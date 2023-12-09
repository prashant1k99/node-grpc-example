
import { TodoServiceClient } from './proto/TodoServiceClientPb';
import { Todo, TodoList, GetTodo, PingRequest } from './proto/todo_pb'
import { SERVER_PORT } from '../../CONSTANTS'

// This will handle the tab switching
const filters = document.querySelectorAll(".filters span")
filters.forEach(filter => {
    filter.addEventListener("click", (e) => {
        const activeFilter = document.querySelector(".filters .active");
        if (activeFilter) {
            activeFilter.classList.remove("active");
        }
        filter.classList.add("active");
    });
})

// Simple PingPong request with a message
const SERVER_URL = `http://localhost:${SERVER_PORT}`;

const client = new TodoServiceClient(SERVER_URL);

const pingRequest = new PingRequest();
pingRequest.setMessage("Ping");
client.pingPong(pingRequest, {}, (err, response) => {
    if (err) {
        console.log(err);
    } else {
        console.log(response);
    }
})
// It should return error
//    POST http://localhost:3000/ToDoPackage.TodoService/PingPong net::ERR_INVALID_HTTP_RESPONSE
