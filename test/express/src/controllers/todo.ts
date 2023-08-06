import { RequestHandler } from "express"

import { todo } from "../modls/todo.js";

const todo_list: todo[] = [];

let id = 0;

export const create_todo: RequestHandler = (req, res, next) => {

	const text = (req.body as {text: string}).text;
	if (!text){
		throw new Error("no text");
	}
	const new_todo = new todo((id++).toString(), text);
	todo_list.push(new_todo);
	res.status(201).json({message: 'created todo.', created_todo: new_todo});
	return ;
};

export const get_todo: RequestHandler = (req, res, next) => {
	res.status(200).json({todos: todo_list});
	return ;
}

export const update_todo: RequestHandler<{id: string}> = (req, res, next) => {
	const id = req.params.id;
	if (!id){
		throw new Error("no id");
	}
	const text = (req.body as {text: string}).text;
	if (!text){
		throw new Error("no text");
	}
	const index = todo_list.findIndex((t: todo)=>t.id==id);
	if (index < 0){
		throw new Error("no todo");
	}
	todo_list[index].text = text;
	res.json({message: 'updated todo.', updated_todo: todo_list[index]});
}

export const delete_todo: RequestHandler<{id: string}> = (req, res, next) => {
	const id = req.params.id;
	if (!id){
		throw new Error("no id");
	}
	const index = todo_list.findIndex((t: todo)=>t.id==id);
	if (index < 0){
		throw new Error("no todo");
	}
	const deleted_data = todo_list[index].text;
	todo_list.splice(index, 1);
	res.json({message: 'delete todo.', deleted_data});
}