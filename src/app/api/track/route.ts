import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production'
    ? { rejectUnauthorized: true }
    : { rejectUnauthorized: false },
});

function detectDevice(userAgent: string): 'mobile' | 'tablet' | 'desktop' {
  if (/iPad|Android(?!.*Mobile)|Tablet/i.test(userAgent)) return 'tablet';
  if (/Mobi|Android|iPhone/i.test(userAgent)) return 'mobile';
  return 'desktop';
}

export async function POST(request: Request) {
  try {
    const { ruta, visitorId } = await request.json();
    if (!ruta || !visitorId || typeof ruta !== 'string' || typeof visitorId !== 'string') {
      return Response.json({ error: 'Datos inválidos' }, { status: 400 });
    }

    const userAgent = request.headers.get('user-agent') || '';
    const device = detectDevice(userAgent);

    const client = await pool.connect();
    try {
      await client.query(
        'INSERT INTO page_views (ruta, visitor_id, device) VALUES ($1, $2, $3)',
        [ruta.slice(0, 500), visitorId.slice(0, 100), device]
      );
    } finally {
      client.release();
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error('Error tracking page view:', error);
    // Nunca romper la navegación del visitante por un fallo de analítica.
    return Response.json({ success: false }, { status: 200 });
  }
}
