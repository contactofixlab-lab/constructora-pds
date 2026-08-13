import { authenticateAdmin, createToken } from '@/lib/admin/auth';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return Response.json(
        { error: 'Email y contraseña son requeridos' },
        { status: 400 }
      );
    }

    const user = await authenticateAdmin(email, password);

    if (!user) {
      return Response.json(
        { error: 'Credenciales inválidas' },
        { status: 401 }
      );
    }

    const token = createToken(user);
    const cookieStore = await cookies();

    cookieStore.set('admin-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60, // 7 días
      path: '/',
    });

    return Response.json({
      success: true,
      user: { email: user.email, role: user.role },
    });
  } catch (error) {
    console.error('Login error:', error);
    return Response.json(
      { error: 'Error en el servidor' },
      { status: 500 }
    );
  }
}
