'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('admin@constructorapds.cl');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/admin/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const data = await response.json();
        setError(data.error || 'Error en la autenticación');
        setLoading(false);
        return;
      }

      router.push('/admin/dashboard');
    } catch (err) {
      setError('Error al conectar con el servidor');
      console.error(err);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark to-background-surface flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">PDS Admin</h1>
          <p className="text-text-secondary">Panel de Administración</p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-background-surface rounded-2xl border border-border p-8 space-y-6"
        >
          {error && (
            <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-semibold text-text-title mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-background-alt border border-border rounded-lg text-text-base focus:outline-none focus:border-accent transition-colors"
              placeholder="admin@constructorapds.cl"
              disabled={loading}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-text-title mb-2">
              Contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-background-alt border border-border rounded-lg text-text-base focus:outline-none focus:border-accent transition-colors"
              placeholder="••••••••"
              disabled={loading}
            />
            <p className="text-xs text-text-secondary mt-2">
              Demo: usa cualquier contraseña (ej: admin123)
            </p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-accent hover:bg-accent-hover text-dark font-semibold py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
          </button>
        </form>

        {/* Info */}
        <div className="mt-8 p-4 bg-accent/10 border border-accent/30 rounded-lg text-sm text-text-secondary">
          <p className="font-semibold text-accent mb-2">📝 Credenciales Demo:</p>
          <p>Email: <code className="bg-dark px-2 py-1 rounded">admin@constructorapds.cl</code></p>
          <p>Password: <code className="bg-dark px-2 py-1 rounded">admin123</code></p>
        </div>
      </div>
    </div>
  );
}
