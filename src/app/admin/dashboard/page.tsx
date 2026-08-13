'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function DashboardPage() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch('/api/admin/auth/logout', { method: 'POST' });
    router.push('/admin/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-background-surface to-dark">
      {/* Header */}
      <header className="border-b border-border bg-background-surface/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-accent">PDS Admin</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg transition-colors text-sm font-semibold"
          >
            Cerrar Sesión
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Welcome */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-2">Bienvenido al Panel</h2>
          <p className="text-text-secondary">Gestiona todos los contenidos de Constructora PDS desde aquí</p>
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Proyectos */}
          <Link href="/admin/proyectos">
            <div className="bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30 rounded-2xl p-8 hover:border-accent/50 hover:shadow-lg transition-all cursor-pointer group">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                Proyectos
              </h3>
              <p className="text-text-secondary text-sm mb-4">
                Crear, editar o eliminar proyectos
              </p>
              <span className="inline-block text-accent text-sm font-semibold">
                Administrar →
              </span>
            </div>
          </Link>

          {/* Equipo */}
          <Link href="/admin/equipo">
            <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 border border-blue-500/30 rounded-2xl p-8 hover:border-blue-500/50 hover:shadow-lg transition-all cursor-pointer group">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                Equipo
              </h3>
              <p className="text-text-secondary text-sm mb-4">
                Gestiona miembros del equipo
              </p>
              <span className="inline-block text-blue-400 text-sm font-semibold">
                Administrar →
              </span>
            </div>
          </Link>

          {/* Textos */}
          <Link href="/admin/textos">
            <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 border border-purple-500/30 rounded-2xl p-8 hover:border-purple-500/50 hover:shadow-lg transition-all cursor-pointer group">
              <div className="text-4xl mb-4">✏️</div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                Textos Globales
              </h3>
              <p className="text-text-secondary text-sm mb-4">
                Edita textos de la web
              </p>
              <span className="inline-block text-purple-400 text-sm font-semibold">
                Administrar →
              </span>
            </div>
          </Link>

          {/* Settings */}
          <Link href="/admin/settings">
            <div className="bg-gradient-to-br from-gray-500/20 to-gray-500/5 border border-gray-500/30 rounded-2xl p-8 hover:border-gray-500/50 hover:shadow-lg transition-all cursor-pointer group">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gray-300 transition-colors">
                Configuración
              </h3>
              <p className="text-text-secondary text-sm mb-4">
                Ajustes del panel
              </p>
              <span className="inline-block text-gray-300 text-sm font-semibold">
                Configurar →
              </span>
            </div>
          </Link>
        </div>

        {/* Info Box */}
        <div className="mt-12 bg-accent/10 border border-accent/30 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-white mb-2">📌 Próximas Fases</h3>
          <ul className="space-y-2 text-text-secondary">
            <li>✅ <strong>Fase 1 (Actual):</strong> Autenticación + Dashboard</li>
            <li>⬜ <strong>Fase 2:</strong> CRUD Proyectos + Upload de imágenes</li>
            <li>⬜ <strong>Fase 3:</strong> CRUD Equipo</li>
            <li>⬜ <strong>Fase 4:</strong> Editar textos globales</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
