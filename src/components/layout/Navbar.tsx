'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar({ logo = '/logos/puertas-del-sol.png' }: { logo?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Nosotros', href: '/nosotros' },
    { label: 'Proyectos', href: '/proyectos' },
    { label: 'Contacto', href: '/contacto' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-sm border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-1">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src={logo}
              alt="Constructora Puerta del Sol"
              className={`h-14 sm:h-20 md:h-28 lg:h-32 w-auto object-contain transition-all duration-300 ${
                !scrolled ? 'brightness-0 invert' : ''
              }`}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium transition-colors duration-300 ${
                  scrolled
                    ? 'text-text-title hover:text-accent'
                    : 'text-white hover:text-accent'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-text-title hover:bg-background-alt' : 'text-white hover:bg-white/10'
            }`}
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

        {/* Mobile Menu — siempre fondo blanco para legibilidad */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-1 bg-white rounded-b-xl shadow-lg px-2">
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
          </div>
        )}
      </div>
    </nav>
  );
}
