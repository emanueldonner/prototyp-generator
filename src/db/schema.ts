import {
  sqliteTable,
  text,
  integer,
  uniqueIndex,
} from "drizzle-orm/sqlite-core"

export const prototypes = sqliteTable(
  "prototypes",
  {
    id: integer("id").primaryKey(),
    name: text("name"),
    title: text("title"),
  },
  (prototypes) => ({
    nameIdx: uniqueIndex("nameIdx").on(prototypes.name),
  })
)

export const components = sqliteTable("components", {
  id: integer("id").primaryKey(),
  name: text("name"),
  prototypeId: integer("prototype_id").references(() => prototypes.id),
})
