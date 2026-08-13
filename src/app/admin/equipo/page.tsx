'use client';

import Link from 'next/link';

export default function AdminEquipoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-background-surface to-dark">
      <header className="border-b border-border bg-background-surface/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white mb-1">Equipo</h1>
            <p className="text-text-secondary">Gestiona miembros del equipo</p>
          </div>
          <Link href="/admin/dashboard">
            <button className="px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg transition-colors">
              ← Volver
            </button>
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-background-surface border border-border rounded-2xl p-12 text-center">
          <div className="text-6xl mb-4">👥</div>
          <h2 className="text-2xl font-bold text-white mb-2">Gestión de Equipo</h2>
          <p className="text-text-secondary mb-8">Próximamente: Crear, editar y eliminar miembros con fotos</p>
          <div className="inline-block bg-blue-500/10 border border-blue-500/30 rounded-lg px-6 py-4 text-sm text-text-secondary">
            📋 Fase 3: CRUD Equipo
          </div>
        </div>
      </main>
    </div>
  );
}
