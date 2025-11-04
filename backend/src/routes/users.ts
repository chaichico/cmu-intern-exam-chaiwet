import { drizzle } from "drizzle-orm/neon-http";
import { usersTable } from "../db/schema";
import Elysia from "elysia";

const db = drizzle(process.env.DATABASE_URL!)

const usersRoute = new Elysia({prefix: '/users'}) 
    .get('/test', async() => {
        const user = await db
        .select()
        .from(usersTable)
        return user
    })