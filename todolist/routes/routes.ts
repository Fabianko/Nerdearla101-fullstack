import { Router } from "https://deno.land/x/oak/mod.ts";
import { getTodos, getTodo, addTodo, updateTodo, deleteTodo } from "../controllers/todoController.ts";

const router = new Router();

router
    .get("/todos", getTodos)
    .get("/todos/:id", getTodo)
    .post("/todos", addTodo)
    .put("/todos/:id", updateTodo)
    .delete("/todos/:id", deleteTodo);

export default router;