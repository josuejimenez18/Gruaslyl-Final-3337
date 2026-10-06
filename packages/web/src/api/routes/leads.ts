import { ORPCError } from "@orpc/server";
import { desc } from "drizzle-orm";
import { z } from "zod";
import { base } from "../__core/app";
import { db } from "../database";
import * as schema from "../database/schema";

const createInput = z.object({
  name: z.string().min(2).max(120),
  company: z.string().max(160).optional(),
  phone: z.string().min(6).max(40),
  email: z.string().email().max(160).optional().or(z.literal("")),
  service: z.string().min(2).max(120),
  capacity: z.string().max(60).optional(),
  location: z.string().max(160).optional(),
  date: z.string().max(40).optional(),
  message: z.string().max(2000).optional(),
  lang: z.enum(["es", "en"]).default("es"),
});

/** Código de acceso del panel interno de cotizaciones. */
const passcode = () => process.env.LEADS_PASSCODE ?? "gruaslyl2026";

export const leads = {
  create: base.input(createInput).handler(async ({ input }) => {
    const [lead] = await db
      .insert(schema.leads)
      .values({
        name: input.name.trim(),
        company: input.company?.trim() || null,
        phone: input.phone.trim(),
        email: input.email?.trim() || null,
        service: input.service,
        capacity: input.capacity || null,
        location: input.location?.trim() || null,
        date: input.date || null,
        message: input.message?.trim() || null,
        lang: input.lang,
      })
      .returning();

    return { id: lead?.id ?? 0, ok: true as const };
  }),

  list: base
    .input(z.object({ passcode: z.string().min(1) }))
    .handler(async ({ input }) => {
      if (input.passcode !== passcode()) {
        throw new ORPCError("UNAUTHORIZED", { message: "Código incorrecto" });
      }

      return db
        .select()
        .from(schema.leads)
        .orderBy(desc(schema.leads.createdAt))
        .limit(300);
    }),
};
