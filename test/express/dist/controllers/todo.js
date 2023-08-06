"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delete_todo = exports.update_todo = exports.get_todo = exports.create_todo = void 0;
const todo_js_1 = require("../modls/todo.js");
const todo_list = [];
let id = 0;
const create_todo = (req, res, next) => {
    const text = req.body.text;
    if (!text) {
        throw new Error("no text");
    }
    const new_todo = new todo_js_1.todo((id++).toString(), text);
    todo_list.push(new_todo);
    res.status(201).json({ message: 'created todo.', created_todo: new_todo });
    return;
};
exports.create_todo = create_todo;
const get_todo = (req, res, next) => {
    res.status(200).json({ todos: todo_list });
    return;
};
exports.get_todo = get_todo;
const update_todo = (req, res, next) => {
    const id = req.params.id;
    if (!id) {
        throw new Error("no id");
    }
    const text = req.body.text;
    if (!text) {
        throw new Error("no text");
    }
    const index = todo_list.findIndex((t) => t.id == id);
    if (index < 0) {
        throw new Error("no todo");
    }
    todo_list[index].text = text;
    res.json({ message: 'updated todo.', updated_todo: todo_list[index] });
};
exports.update_todo = update_todo;
const delete_todo = (req, res, next) => {
    const id = req.params.id;
    if (!id) {
        throw new Error("no id");
    }
    const index = todo_list.findIndex((t) => t.id == id);
    if (index < 0) {
        throw new Error("no todo");
    }
    const deleted_data = todo_list[index].text;
    todo_list.splice(index, 1);
    res.json({ message: 'delete todo.', deleted_data });
};
exports.delete_todo = delete_todo;
