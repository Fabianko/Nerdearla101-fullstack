import { Request, Response } from "https://deno.land/x/oak/mod.ts";
import Todo from "../models/todoModel.ts";

// Suponiendo que tenemos una función para conectarnos a la base de datos
import { connect } from "../helpers/db_client.ts";

// Ejemplo de controladores utilizando el modelo Todo
const getTodos = async ({ response }: { response: Response }) => {
    const todos = await connect().find({}); // Obtener todos los documentos de la colección de tareas
    response.body = { todos };
};

const getTodo = async ({ params, response }: { params: { id: string }; response: Response }) => {
    const todo = await connect().findOne({ _id: params.id }); // Obtener una tarea específica
    response.body = { todo };
};

const addTodo = async ({ request, response }: { request: Request; response: Response }) => {
    const body = await request.body();
    const todo: Todo = body.value; // Aquí usamos el modelo Todo
    await connect().insertOne(todo); // Insertar la nueva tarea
    response.body = { message: "Tarea añadida", todo };
};

const updateTodo = async ({ params, request, response }: { params: { id: string }; request: Request; response: Response }) => {
    const body = await request.body();
    const updateInfo: { task?: string; completed?: boolean } = body.value;
    await connect().updateOne({ _id: params.id }, { $set: updateInfo }); // Actualizar la tarea
    response.body = { message: "Tarea actualizada" };
};

const deleteTodo = async ({ params, response }: { params: { id: string }; response: Response }) => {
    await connect().deleteOne({ _id: params.id }); // Eliminar la tarea
    response.body = { message: "Tarea eliminada" };
};

export { getTodos, getTodo, addTodo, updateTodo, deleteTodo };
