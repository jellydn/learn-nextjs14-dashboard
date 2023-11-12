"use server";

import logger from "./logger";

export async function createInvoice(formData: FormData) {
  const rawFormData = Object.fromEntries(formData.entries());

  logger.info("createInvoice - server action called");
  logger.info(rawFormData);
}
