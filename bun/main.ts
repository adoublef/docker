import { Client, createClient } from "@libsql/client";
import { Hono } from "hono";

const db = createClient({ url: "file:local.db" });

async function ping(db: Client): Promise<number> {
    return Number((await db.execute("SELECT 42")).rows.shift()![0]);
}

const app = new Hono()
    .get("/", async _ => new Response(`${(await ping(db))}`));

Bun.serve({ fetch: app.fetch, port: 8000 });