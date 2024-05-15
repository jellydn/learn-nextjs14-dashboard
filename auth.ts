import bcrypt from 'bcrypt'
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { z } from 'zod'

import { getUser } from './app/lib/data'
import logger from './app/lib/logger'
import { authConfig } from './auth.config'

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials)

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data
          const user = await getUser(email)
          if (!user) {
            return null
          }

          const passwordsMatch = await bcrypt.compare(password, user.password)
          if (passwordsMatch) {
            return user
          }
        } else {
          logger.error(parsedCredentials.error)
        }

        return null
      },
    }),
  ],
})
