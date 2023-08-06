import { Router } from "express";

import { create_todo, get_todo, update_todo, delete_todo } from "../controllers/todo.js";

const router = Router();

router.post('/', create_todo);

router.get('/', get_todo);

router.patch('/:id', update_todo);

router.delete('/:id', delete_todo);

export default router;