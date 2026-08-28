import { Pool } from 'pg';

export type Proyecto = {
  id: string;
  nombre: string;
  tipo: string;
  status: string;
  direccion: string;
  comuna: string;
  descripcion: string;
  image: string;
  urlproyecto?: string;
  departamentos: number;
  bodegas: number;
  estacionamientos: number;
  localescomerciales: number;
  highlights?: string[];
  createdat?: string;
  updatedat?: string;
};

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production'
    ? { rejectUnauthorized: true }
    : { rejectUnauthorized: false },
});

export async function getProyectos(): Promise<Proyecto[]> {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM proyectos ORDER BY orden ASC, createdAt DESC');
    client.release();
    return result.rows;
  } catch (error) {
    console.error('Error fetching proyectos:', error);
    return [];
  }
}

export async function getProyectoById(id: string): Promise<Proyecto | null> {
  try {
    const proyectos = await getProyectos();
    return proyectos.find(p => p.id === id) || null;
  } catch (error) {
    console.error('Error fetching proyecto:', error);
    return null;
  }
}
