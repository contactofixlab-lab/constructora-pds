import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

export async function GET() {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM proyectos ORDER BY createdAt DESC');
    client.release();

    return Response.json(result.rows);
  } catch (error) {
    console.error('Error fetching proyectos:', error);
    return Response.json(
      { error: 'Error fetching proyectos' },
      { status: 500 }
    );
  }
}
