import dotenv from 'dotenv';
import type { Config } from 'drizzle-kit';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

export default {
  schema: './drizzle/schema.ts',
  out: './drizzle/migrations',
  driver: 'turso',
  dbCredentials: {
    url: `${process.env.DB_URL}`,
    authToken: process.env.DB_AUTH_TOKEN,
  },
} satisfies Config;
