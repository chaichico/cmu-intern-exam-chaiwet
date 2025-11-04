import { password } from "bun";
import { 
  integer, 
  pgTable, 
  text, 
  timestamp, 
  boolean 
} 
from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  username: text("username").unique().notNull(),
  password: text("password").notNull(),
  
});

export type UsersTable = typeof usersTable.$inferInsert;


export const article = pgTable("article", {
    article_id: integer().primaryKey().generatedAlwaysAsIdentity(),
    title: text().notNull(),
    description:text(),
    imagePath: text("image_path").notNull(),
    status: boolean("status").default(true),
    created_at: timestamp("created_at").defaultNow()
})

export type Article = typeof article.$inferInsert;


export const schema = {
    usersTable,
    article,
};