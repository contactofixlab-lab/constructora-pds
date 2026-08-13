'use client';

import Link from 'next/link';

export default function AdminTextosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-background-surface to-dark">
      <header className="border-b border-border bg-background-surface/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white mb-1">Textos Globales</h1>
            <p className="text-text-secondary">Edita textos de la web</p>
          </div>
          <Link href="/admin/dashboard">
            <button className="px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 rounded-lg transition-colors">
              ← Volver
            </button>
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-background-surface border border-border rounded-2xl p-12 text-center">
          <div className="text-6xl mb-4">✏️</div>
          <h2 className="text-2xl font-bold text-white mb-2">Textos Globales</h2>
          <p className="text-text-secondary mb-8">Próximamente: Edita textos de header, footer y otras secciones</p>
          <div className="inline-block bg-purple-500/10 border border-purple-500/30 rounded-lg px-6 py-4 text-sm text-text-secondary">
            📋 Fase 4: Textos Globales
          </div>
        </div>
      </main>
    </div>
  );
}
