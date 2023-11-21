import { Application } from "https://deno.land/x/oak/mod.ts";
import todoRoutes from "./routes/routes.ts";


const app = new Application();
const PORT = 8000;

app.use(todoRoutes.routes());
app.use(todoRoutes.allowedMethods());

console.log(`Server running on port ${PORT}`);
await app.listen({ port: PORT });