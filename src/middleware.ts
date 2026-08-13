import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/admin/auth';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Rutas públicas que no necesitan protección
  if (!pathname.startsWith('/admin')) {
    return NextResponse.next();
  }

  // Permitir login sin token
  if (pathname === '/admin/login') {
    const token = request.cookies.get('admin-token')?.value;
    if (token && verifyToken(token)) {
      return NextResponse.redirect(new URL('/admin/dashboard', request.url));
    }
    return NextResponse.next();
  }

  // Proteger rutas /admin/*
  const token = request.cookies.get('admin-token')?.value;

  if (!token || !verifyToken(token)) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
