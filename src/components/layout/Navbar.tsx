'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Nosotros', href: '/nosotros' },
    { label: 'Proyectos', href: '/proyectos' },
    { label: 'Contacto', href: '/contacto' },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/LOGO EMRPESA.png"
              alt="Constructora Puerta del Sol"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-text-title hover:text-accent transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              className="bg-accent hover:bg-accent-hover text-dark px-5 py-2.5 rounded-button font-semibold transition-colors"
            >
              Cotizar
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-background-alt rounded-lg text-text-title"
            aria-label="Abrir menú"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-text-base hover:bg-background-alt rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              className="block mx-4 mt-2 text-center bg-accent text-dark px-5 py-2.5 rounded-button font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Cotizar
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
