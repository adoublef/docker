import { Database, Hono } from "./deps.ts";

async function ping(db: Database.Database) {
    const stmt = db.prepare("SELECT 42").raw().all().shift();
    return (stmt as number[])[0];
}

if (import.meta.main) {
    const db = new Database("file:local.db");
    const app = new Hono()
        .get("/", async _ => new Response(`${(await ping(db))}`));
    
    Deno.serve( app.fetch);
}
