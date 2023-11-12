"use server";

import { sql } from "@vercel/postgres";
import { log } from "console";
import { z } from "zod";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import logger from "./logger";

const InvoiceSchema = z.object({
  id: z.string(),
  customerId: z.string(),
  amount: z.coerce.number(),
  status: z.enum(["pending", "paid"]),
  date: z.string(),
});

const CreateInvoice = InvoiceSchema.omit({ id: true, date: true });
const UpdateInvoice = InvoiceSchema.omit({ date: true, id: true });

export async function createInvoice(formData: FormData) {
  const rawFormData = Object.fromEntries(formData.entries());

  logger.info("createInvoice - server action called");
  const data = CreateInvoice.parse(rawFormData);
  logger.info(data);

  const amountInCents = data.amount * 100;
  const date = new Date().toISOString().split("T")[0];

  await sql`
    INSERT INTO invoices (customer_id, amount, status, date)
    VALUES (${data.customerId}, ${amountInCents}, ${data.status}, ${date})
  `;

  revalidatePath("/dashboard/invoices");
  redirect("/dashboard/invoices");
}

export async function updateInvoice(id: string, formData: FormData) {
  const rawFormData = Object.fromEntries(formData.entries());

  logger.info("updateInvoice - server action called");
  const data = UpdateInvoice.parse(rawFormData);
  logger.info(data);

  const amountInCents = data.amount * 100;
  await sql`
    UPDATE invoices
    SET customer_id = ${data.customerId}, amount = ${amountInCents}, status = ${data.status}
    WHERE id = ${id}
  `;

  revalidatePath("/dashboard/invoices");
  redirect("/dashboard/invoices");
}

export async function deleteInvoice(id: string) {
  logger.info("deleteInvoice - server action called");

  await sql`DELETE FROM invoices WHERE id = ${id}`;
  revalidatePath("/dashboard/invoices");
}
