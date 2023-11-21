export { config } from "https://deno.land/x/dotenv/mod.ts";

const env = config();

const DB_URL = env.DB_URL;
const DB_NAME = env.DB_NAME;

export { DB_URL, DB_NAME };