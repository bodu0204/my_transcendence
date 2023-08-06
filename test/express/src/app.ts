import express from 'express';
import {Request, Response, NextFunction} from 'express';
import todo_rotes from './rotes/todo.js';
import {json} from 'body-parser';

const app = express();

app.use(json());

app.use('/todos', todo_rotes);

app.use((error: Error, req: Request, res: Response, next: NextFunction)=>{
	res.status(500).json({ message : error.message });
	return ;
});

app.listen(3000);