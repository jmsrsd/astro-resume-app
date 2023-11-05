import { createClient } from '@libsql/client';
import dotenv from 'dotenv';
import { drizzle } from 'drizzle-orm/libsql';
import { migrate } from 'drizzle-orm/libsql/migrator';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const url = `${process.env.DB_URL}`;

console.log(`Client URL: ${url}`);

export const client = createClient({
  url,
  authToken: process.env.DB_AUTH_TOKEN,
});

export const db = drizzle(client);

async function main() {
  try {
    await migrate(db, {
      migrationsFolder: 'drizzle/migrations',
    });

    console.log('Tables migrated!');
    process.exit(0);
  } catch (error) {
    console.error('Error performing migration: ', error);
    process.exit(1);
  }
}

main();
