import logger from '@/app/lib/logger.js'
import { type VercelPoolClient, db } from '@vercel/postgres'
import bcrypt from 'bcrypt'
import 'dotenv/config'

import {
  customers,
  invoices,
  revenue,
  users,
} from '../app/lib/placeholder-data.js'

async function seedUsers(client: VercelPoolClient) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`
    // Create the "invoices" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `

    logger.info(`Created "users" table`)

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10)
        return client.sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `
      }),
    )

    logger.info(`Seeded ${insertedUsers.length} users`)

    return {
      createTable,
      users: insertedUsers,
    }
  } catch (error) {
    logger.error('Error seeding users:', error)
    throw error
  }
}

async function seedInvoices(client: VercelPoolClient) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`

    // Create the "invoices" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS invoices (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    customer_id UUID NOT NULL,
    amount INT NOT NULL,
    status VARCHAR(255) NOT NULL,
    date DATE NOT NULL
  );
`

    logger.info(`Created "invoices" table`)

    // Insert data into the "invoices" table
    const insertedInvoices = await Promise.all(
      invoices.map(
        (invoice) => client.sql`
        INSERT INTO invoices (customer_id, amount, status, date)
        VALUES (${invoice.customer_id}, ${invoice.amount}, ${invoice.status}, ${invoice.date})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    )

    logger.info(`Seeded ${insertedInvoices.length} invoices`)

    return {
      createTable,
      invoices: insertedInvoices,
    }
  } catch (error) {
    logger.error('Error seeding invoices:', error)
    throw error
  }
}

async function seedCustomers(client: VercelPoolClient) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`

    // Create the "customers" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS customers (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        image_url VARCHAR(255) NOT NULL
      );
    `

    logger.info(`Created "customers" table`)

    // Insert data into the "customers" table
    const insertedCustomers = await Promise.all(
      customers.map(
        (customer) => client.sql`
        INSERT INTO customers (id, name, email, image_url)
        VALUES (${customer.id}, ${customer.name}, ${customer.email}, ${customer.image_url})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    )

    logger.info(`Seeded ${insertedCustomers.length} customers`)

    return {
      createTable,
      customers: insertedCustomers,
    }
  } catch (error) {
    logger.error('Error seeding customers:', error)
    throw error
  }
}

async function seedRevenue(client: VercelPoolClient) {
  try {
    // Create the "revenue" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS revenue (
        month VARCHAR(4) NOT NULL UNIQUE,
        revenue INT NOT NULL
      );
    `

    logger.info(`Created "revenue" table`)

    // Insert data into the "revenue" table
    const insertedRevenue = await Promise.all(
      revenue.map(
        (rev) => client.sql`
        INSERT INTO revenue (month, revenue)
        VALUES (${rev.month}, ${rev.revenue})
        ON CONFLICT (month) DO NOTHING;
      `,
      ),
    )

    logger.info(`Seeded ${insertedRevenue.length} revenue`)

    return {
      createTable,
      revenue: insertedRevenue,
    }
  } catch (error) {
    logger.error('Error seeding revenue:', error)
    throw error
  }
}

async function main() {
  logger.info('Seeding database...')
  const client = await db.connect()

  await seedUsers(client)
  await seedCustomers(client)
  await seedInvoices(client)
  await seedRevenue(client)

  // @ts-ignore
  await client.end()
}

main().catch((err) => {
  logger.error('An error occurred while attempting to seed the database:', err)
})
