"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TodoServiceClientPb_1 = require("./proto/proto/TodoServiceClientPb");
var todo_pb_1 = require("./proto/proto/todo_pb");
var client = new TodoServiceClientPb_1.TodoServiceClient('http://localhost:8080');
var taskInput = document.querySelector(".task-input input"), filters = document.querySelectorAll(".filters span"), clearAll = document.querySelector(".clear-btn"), taskBox = document.querySelector(".task-box");
var editId, isEditTask = false, todos = client.readAll(new todo_pb_1.GetTodo(), {}, function (err, response) {
    if (err) {
        console.log(err);
    }
    else {
        console.log(response);
    }
});
filters.forEach(function (filter) {
    filter.addEventListener("click", function () {
        filters.forEach(function (f) { return f.classList.remove("active"); });
        filter.classList.add("active");
        var filterName = filter.getAttribute("data-filter");
    });
});
