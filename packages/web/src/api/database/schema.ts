import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

/**
 * Solicitudes de cotización recibidas desde el sitio (captación de leads).
 */
export const leads = sqliteTable("leads", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  company: text("company"),
  phone: text("phone").notNull(),
  email: text("email"),
  service: text("service").notNull(),
  capacity: text("capacity"),
  location: text("location"),
  date: text("date"),
  message: text("message"),
  lang: text("lang").notNull().default("es"),
  source: text("source").notNull().default("web"),
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .$defaultFn(() => new Date()),
});

export type Lead = typeof leads.$inferSelect;
