import { createClient } from '~/db';

export async function GET(request: Request) {
  const db = createClient();

  const users = await db.query.users.findMany({
    columns: {
      password: false,
    },
  });

  return Response.json({
    data: users,
  });
}
