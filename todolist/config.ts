import { config } from "./deps.ts";

const env = config();

const DB_URL = env.DB_URL;
const DB_NAME = env.DB_NAME;

export { DB_URL, DB_NAME };