
import { TodoServiceClient } from './proto/TodoServiceClientPb';
import { Todo, GetTodo, TodoId, PingRequest } from './proto/todo_pb'

// Simple PingPong request with a message
const SERVER_PORT = 8080;
const SERVER_URL = `http://localhost:${SERVER_PORT}`;

const client = new TodoServiceClient(SERVER_URL);

const pingRequest = new PingRequest();
pingRequest.setMessage("Ping");
client.pingPong(pingRequest, {}, (err, response) => {
    if (err) {
        console.log(err);
    } else {
        console.log('When you say:', pingRequest.toObject().message);
        console.log('Server Says:', response.toObject().message);
    }
})
// It should return error
//    POST http://localhost:3000/ToDoPackage.TodoService/PingPong net::ERR_INVALID_HTTP_RESPONSE
// After adding Envoy proxy, it should return response

// This will handle the tab switching
const taskInput = document.querySelector(".task-input input"),
filters = document.querySelectorAll(".filters span"),
taskBox = document.querySelector(".task-box");
filters.forEach(filter => {
    filter.addEventListener("click", (e) => {
        const activeFilter = document.querySelector(".filters .active");
        if (activeFilter) {
            activeFilter.classList.remove("active");
        }
        filter.classList.add("active");
        fetchTodos((e.target as HTMLElement).id as 'pending' | 'all' | 'completed');
    });
})

taskInput.addEventListener("keyup", (e: KeyboardEvent) => {
    if (e.key === "Enter" && (taskInput as HTMLInputElement).value !== "") {
        const newTodo = new Todo()
        newTodo.setTitle((taskInput as HTMLInputElement).value)
        client.create(newTodo, {}, (err, response) => {
            if (err) {
                console.log(err);
            } else {
                console.log(response.toObject());
                fetchTodos(getActiveTab() as 'pending' | 'all' | 'completed');
                (taskInput as HTMLInputElement).value = "";
            }
        })
        console.log("created")
    }
})

fetchTodos('all');

let todos = [];
const getAllTodos = new GetTodo()
client.readAll(getAllTodos, {}, (err, response) => {
    if (err) {
        console.log(err);
    } else {
        console.log(response.toObject());
        // todos = response.getTodosList();
        todos = response.toObject().todosList;
    }
})

function fetchTodos(id: 'pending' | 'all' | 'completed') {
    const getAllTodos = new GetTodo()
    if (id == 'pending') {
        getAllTodos.setCompleted(1)
    } else if (id == 'completed') {
        getAllTodos.setCompleted(2)
    } else {
        getAllTodos.setCompleted(0)
    }
    client.readAll(getAllTodos, {}, (err, response) => {
        if (err) {
            console.log(err);
        } else {
            todos = response.toObject().todosList;
            console.log(todos)
            showTodos();
        }
    })
}

function showTodos() {
    taskBox.innerHTML = "";
    todos.map(function (todo) {
        const task = document.createElement("li");
        const { id, completed, title } = todo;
        task.classList.add("task");
        task.innerHTML = `
            <label for="${id}">
            </label>
            <div class="settings">
            </div>
            `;
        const label = task.querySelector("label");
        const inputEl = document.createElement("input");
        inputEl.type = "checkbox";
        inputEl.id = id;
        inputEl.checked = completed;
        inputEl.onchange = () => updateStatus(id, !completed);

        const pEl = document.createElement("p");
        completed && pEl.classList.add("completed");
        pEl.innerText = title;

        label.appendChild(inputEl);
        label.appendChild(pEl);

        const settingsElement = task.querySelector(".settings");

        // Create the second icon
        const delIcon = document.createElement('i');
        delIcon.classList.add('delete-icon');
        delIcon.onclick = () => deleteTask(id); // Replace with your function and parameters

        // Append the icons to the settings element
        settingsElement.appendChild(delIcon);

        taskBox.appendChild(task);
    });
}

function getActiveTab() {
    const activeFilter = document.querySelector(".filters .active");
    return activeFilter.id;
}

function deleteTask(id: number) {
    console.log("delete", id)
    const todoId = new TodoId()
    todoId.setId(id)
    client.delete(todoId, {}, (err, response) => {
        if (err) {
            console.log(err);
        } else {
            console.log(response.toObject());
            fetchTodos(getActiveTab() as 'pending' | 'all' | 'completed')
        }
    })
}

function updateStatus(id: number, completed: boolean) {
    console.log("update", id, completed)
    const todo = new Todo()
    todo.setId(id)
    todo.setCompleted(completed)
    client.update(todo, {}, (err, response) => {
        if (err) {
            console.log(err);
        } else {
            console.log(response.toObject());
            fetchTodos(getActiveTab() as 'pending' | 'all' | 'completed')
        }
    })
}