import { Pool } from 'pg';
import { equipo as equipoDefault } from '@/data/equipo';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production'
    ? { rejectUnauthorized: true }
    : { rejectUnauthorized: false },
});

export interface MiembroEquipo {
  nombre: string;
  rol: string;
  foto: string;
  descripcion: string;
  highlights: string[];
  email: string;
  telefono: string;
}

export async function getEquipo(): Promise<MiembroEquipo[]> {
  try {
    const client = await pool.connect();
    const result = await client.query(
      'SELECT * FROM equipo WHERE activo = true ORDER BY orden ASC, createdAt ASC'
    );
    client.release();

    if (result.rows.length === 0) return equipoDefault;

    return result.rows.map((row) => ({
      nombre: row.nombre,
      rol: row.cargo,
      foto: row.foto || '',
      descripcion: row.descripcion || '',
      highlights: row.highlights || [],
      email: row.email || row.correo || '',
      telefono: row.telefono || '',
    }));
  } catch (error) {
    console.error('Error fetching equipo:', error);
    return equipoDefault;
  }
}
