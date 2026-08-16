import {
  pgTable,
  integer,
  uuid,
  varchar,
  timestamp,
  text,
} from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"

export const usersTable = pgTable("users", {
  id: uuid("id")
    .default(sql`gen_random_uuid()`)
    .primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
})

export const linksTable = pgTable("links", {
  id: uuid("id")
    .default(sql`gen_random_uuid()`)
    .primaryKey(),
  slug: varchar("slug", { length: 60 }).notNull().unique(),
  created_at: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updated_at: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  title: varchar("title", { length: 60 }).notNull(),
  description: varchar("description", { length: 120 }),
  url: varchar("url").notNull(),
  // dns: varchar("dns", { length: 60 }),
  // code: varchar("code", {}),
  imageUrl: varchar("image_url"),
  tags: text("tags").array(),
  project_id: uuid("project_id")
    .notNull()
    .references(() => projectsTable.id),
})

// What type of resources we can have ? MD, MDX and Links ?
// PDF"s. too?
export const resourcesTable = pgTable("resources", {
  id: uuid("id"),
})

export const projectsTable = pgTable("projects", {
  id: uuid("id")
    .default(sql`gen_random_uuid()`)
    .primaryKey(),
  slug: varchar("slug", { length: 60 }).notNull().unique(),
  title: varchar("title", { length: 60 }).notNull(),
  created_at: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updated_at: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  description: varchar("description", { length: 120 }),
  user_id: uuid("user_id")
    .notNull()
    .references(() => usersTable.id),
})

export const workspacesTable = pgTable("workspaces", {
  id: uuid("id")
    .default(sql`gen_random_uuid()`)
    .primaryKey(),
  slug: varchar("slug", { length: 60 }).notNull().unique(),
  created_at: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updated_at: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  title: varchar("title", { length: 60 }).notNull(),
  user_id: integer().notNull().unique(),
  description: varchar("description", { length: 120 }),
})
