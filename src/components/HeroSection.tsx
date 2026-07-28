'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function HeroSection() {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (imgRef.current) {
        imgRef.current.style.transform = `translateY(${window.scrollY * 0.35}px)`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="relative bg-dark text-white overflow-hidden -mt-16 sm:-mt-[88px] md:-mt-[120px] lg:-mt-[136px]">
      <img
        ref={imgRef}
        src="/NOSOTROS ARRIBA.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center will-change-transform scale-110"
        style={{ transformOrigin: 'center top' }}
      />
      <div className="absolute inset-0 bg-dark/60" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-40 pb-24 md:pb-36 text-center">
        <h1
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-text-inverse"
          style={{ animation: 'fadeUp 0.9s ease both' }}
        >
          Construimos el futuro que <span className="text-accent">imaginas</span>
        </h1>
        <p
          className="text-lg text-text-inverse_secondary mb-10 max-w-2xl mx-auto"
          style={{ animation: 'fadeUp 0.9s ease 0.25s both' }}
        >
          Desarrollamos proyectos de construcción de alto estándar, con calidad,
          cumplimiento y confianza en cada etapa del proceso.
        </p>
        <div style={{ animation: 'fadeUp 0.9s ease 0.45s both' }}>
          <Link
            href="/proyectos"
            className="inline-block bg-accent hover:bg-accent-hover text-dark px-8 py-3.5 rounded-button font-semibold transition-colors"
          >
            Ver Proyectos
          </Link>
        </div>
      </div>
    </section>
  );
}
