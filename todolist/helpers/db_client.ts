import { MongoClient } from "https://deno.land/x/mongo/mod.ts";
import { DB_URL, DB_NAME } from "../config.ts";

let db: any;

export const connect = () => {
    const client = new MongoClient();
    client.connectWithUri(DB_URL);
    db = client.database(DB_NAME);
    return db.collection("todos"); // Asumiendo que tus tareas se almacenan en una colección llamada "todos"
};

export const getDb = () => {
    return db;
};
