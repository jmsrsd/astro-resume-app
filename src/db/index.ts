import { createClient as _createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import * as schema from '~/../drizzle/schema';

interface Env {
  DB_URL?: string;
  DB_AUTH_TOKEN?: string;
}

export function createClient() {
  const env = process.env as unknown as Env;
  const url = env.DB_URL?.trim();
  const authToken = env.DB_AUTH_TOKEN?.trim();

  // UNUSED: if (authToken === undefined) {
  // UNUSED:   throw new Error('DB_AUTH_TOKEN is not defined');
  // UNUSED: }

  return drizzle(_createClient({ url: `${url}`, authToken }), { schema });
}
