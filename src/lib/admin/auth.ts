import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const JWT_SECRET = process.env.JWT_SECRET || 'super-secret-key-change-in-production';
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@constructorapds.cl';
const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH || '';

export interface AdminUser {
  email: string;
  role: 'admin' | 'editor';
}

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10);
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

export function createToken(user: AdminUser): string {
  return jwt.sign(user, JWT_SECRET, { expiresIn: '7d' });
}

export function verifyToken(token: string): AdminUser | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as AdminUser;
    return decoded;
  } catch {
    return null;
  }
}

export async function authenticateAdmin(email: string, password: string): Promise<AdminUser | null> {
  // Temporalmente: usar variables de entorno
  // Luego se migrará a base de datos
  if (email !== ADMIN_EMAIL) {
    return null;
  }

  // Si no hay hash configurado, crear uno por defecto
  // IMPORTANTE: Cambiar contraseña en producción
  if (!ADMIN_PASSWORD_HASH) {
    // Para desarrollo: contraseña por defecto es "admin123"
    const defaultHash = '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcg7b3XeKeUxWdeS86E36P4/kmO';
    if (await verifyPassword(password, defaultHash)) {
      return { email, role: 'admin' };
    }
    return null;
  }

  if (await verifyPassword(password, ADMIN_PASSWORD_HASH)) {
    return { email, role: 'admin' };
  }

  return null;
}
