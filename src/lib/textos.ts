import { Pool } from 'pg';
import { cache } from 'react';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production'
    ? { rejectUnauthorized: true }
    : { rejectUnauthorized: false },
});

// cache() dedupe la consulta dentro del mismo request — el layout y la página
// pueden llamar getTextos() cada uno sin duplicar el viaje a la base de datos.
export const getTextos = cache(async (): Promise<Record<string, string>> => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT id, valor FROM textos');
    client.release();
    const map: Record<string, string> = {};
    for (const row of result.rows as { id: string; valor: string }[]) {
      map[row.id] = row.valor;
    }
    return map;
  } catch (error) {
    console.error('Error fetching textos:', error);
    return {};
  }
});

// Devuelve el valor editado desde el admin, o el texto/imagen que ya vive en
// el código si todavía no se ha configurado — así la página nunca se rompe.
export function t(textos: Record<string, string>, id: string, fallback: string): string {
  const valor = textos[id];
  return valor && valor.trim() ? valor : fallback;
}

export interface ContactoInfo {
  telefono: string;
  telefonoHref: string;
  whatsapp: string;
  email: string;
  emailHref: string;
  ubicacion: string;
  horario: string;
  horario2: string;
}

export function resolveContactoInfo(textos: Record<string, string>, defaults: ContactoInfo): ContactoInfo {
  const telefono = t(textos, 'contacto-telefono', defaults.telefono);
  const email = t(textos, 'contacto-email', defaults.email);
  return {
    telefono,
    telefonoHref: `tel:${telefono.replace(/[^\d+]/g, '')}`,
    whatsapp: t(textos, 'contacto-whatsapp', defaults.whatsapp),
    email,
    emailHref: `mailto:${email}`,
    ubicacion: t(textos, 'contacto-ubicacion', defaults.ubicacion),
    horario: t(textos, 'contacto-horario', defaults.horario),
    horario2: t(textos, 'contacto-horario2', defaults.horario2),
  };
}
