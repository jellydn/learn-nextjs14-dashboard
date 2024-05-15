'use server'

import { sql } from '@vercel/postgres'
import { z } from 'zod'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { signIn } from '@/auth'

import logger from './logger'

const InvoiceSchema = z.object({
  id: z.string(),
  customerId: z.string({
    invalid_type_error: 'Please select a customer.',
  }),
  amount: z.coerce
    .number()
    .gt(0, { message: 'Please enter an amount greater than $0.' }),
  status: z.enum(['pending', 'paid'], {
    invalid_type_error: 'Please select an invoice status.',
  }),
  date: z.string(),
})

const CreateInvoice = InvoiceSchema.omit({ id: true, date: true })
const UpdateInvoice = InvoiceSchema.omit({ date: true, id: true })

// This is temporary until @types/react-dom is updated
export type State = {
  errors?: {
    customerId?: string[]
    amount?: string[]
    status?: string[]
  }
  message?: string | undefined
}

export async function createInvoice(_prevState: State, formData: FormData) {
  const rawFormData = Object.fromEntries(formData.entries())

  logger.info('createInvoice - server action called')
  const invoiceFormData = CreateInvoice.safeParse(rawFormData)
  logger.info(invoiceFormData)

  // If form validation fails, return errors early. Otherwise, continue.
  if (!invoiceFormData.success) {
    return {
      errors: invoiceFormData.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    }
  }

  const { customerId, amount, status } = invoiceFormData.data
  const amountInCents = amount * 100
  const date = new Date().toISOString().split('T')[0]

  try {
    await sql`
    INSERT INTO invoices (customer_id, amount, status, date)
    VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
  `
  } catch (e) {
    logger.error(e)
    return { message: 'Database Error: Failed to Delete Invoice' }
  }

  revalidatePath('/dashboard/invoices')
  redirect('/dashboard/invoices')
}

export async function updateInvoice(id: string, formData: FormData) {
  const rawFormData = Object.fromEntries(formData.entries())

  logger.info('updateInvoice - server action called')
  const data = UpdateInvoice.parse(rawFormData)
  logger.info(data)

  const amountInCents = data.amount * 100
  try {
    await sql`
    UPDATE invoices
    SET customer_id = ${data.customerId}, amount = ${amountInCents}, status = ${data.status}
    WHERE id = ${id}
  `
  } catch (e) {
    logger.error(e)
    return { message: 'Database Error: Failed to Update Invoice' }
  }

  revalidatePath('/dashboard/invoices')
  redirect('/dashboard/invoices')
}

export async function deleteInvoice(id: string) {
  logger.info('deleteInvoice - server action called')

  try {
    await sql`DELETE FROM invoices WHERE id = ${id}`
  } catch (e) {
    logger.error(e)
    return { message: 'Database Error: Failed to Delete Invoice' }
  }

  revalidatePath('/dashboard/invoices')
}

export async function authenticate(
  _prevState: string | undefined,
  formData: FormData,
) {
  try {
    logger.info('authenticate - server action called')
    await signIn('credentials', Object.fromEntries(formData))
  } catch (error) {
    if ((error as Error).message.includes('CredentialsSignin')) {
      return 'CredentialSignin'
    }

    throw error
  }
}
