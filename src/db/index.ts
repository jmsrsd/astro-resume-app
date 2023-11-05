import { createClient } from '@libsql/client';

const db = createClient({
  url: `${process.env.DB_URL}`,
  authToken: process.env.DB_AUTH_TOKEN,
});

export default db;
