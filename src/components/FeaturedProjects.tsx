'use client';

import Link from 'next/link';
import { useState } from 'react';

type Project = {
  nombre: string;
  tipo: string;
  comuna: string;
  direccion: string;
  descripcion: string;
  departamentos: number;
  bodegas: number;
  estacionamientos: number;
  image: string;
};

export default function FeaturedProjects({ projects }: { projects: Project[] }) {
  const [index, setIndex] = useState(0);
  const total = projects.length;

  const prev = () => setIndex((index - 1 + total) % total);
  const next = () => setIndex((index + 1) % total);

  const p = projects[index];

  const stats = [
    { n: p.departamentos, l: 'Deptos' },
    { n: p.bodegas, l: 'Bodegas' },
    { n: p.estacionamientos, l: 'Estac.' },
  ];

  return (
    <div>
      {/* Slide */}
      <div className="bg-background-surface rounded-card border border-border shadow-card overflow-hidden grid md:grid-cols-2">
        {/* Imagen con flechas superpuestas */}
        <div className="relative h-72 md:h-[26rem] overflow-hidden group">
          <img src={p.image} alt={p.nombre} className="w-full h-full object-cover" />

          {/* Flecha izquierda */}
          <button
            onClick={prev}
            aria-label="Proyecto anterior"
            className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 pl-3 pr-4 py-2.5 rounded-xl bg-dark/50 backdrop-blur-sm border border-white/10 text-white hover:bg-accent hover:text-dark hover:border-accent transition-all duration-200 opacity-0 group-hover:opacity-100"
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
            <span className="text-xs font-bold uppercase tracking-wide">Ant.</span>
          </button>

          {/* Flecha derecha */}
          <button
            onClick={next}
            aria-label="Proyecto siguiente"
            className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2 pl-4 pr-3 py-2.5 rounded-xl bg-dark/50 backdrop-blur-sm border border-white/10 text-white hover:bg-accent hover:text-dark hover:border-accent transition-all duration-200 opacity-0 group-hover:opacity-100"
          >
            <span className="text-xs font-bold uppercase tracking-wide">Sig.</span>
            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* Contador de posición */}
          <div className="absolute bottom-3 right-4 bg-dark/50 backdrop-blur-sm border border-white/10 text-white text-xs font-bold px-3 py-1 rounded-full">
            {index + 1} / {total}
          </div>
        </div>

        <div className="p-8 md:p-10 flex flex-col justify-center">
          <span className="text-accent text-xs font-bold uppercase tracking-wide">{p.tipo}</span>
          <h3 className="text-3xl font-bold text-text-title mt-1 mb-2">{p.nombre}</h3>
          <p className="text-text-secondary text-sm mb-4">📍 {p.direccion} — {p.comuna}</p>
          <p className="text-text-base mb-6">{p.descripcion}</p>
          <div className="grid grid-cols-3 gap-3">
            {stats.map((s) => (
              <div key={s.l} className="bg-background-alt rounded-card border border-border py-3 text-center">
                <div className="text-xl font-bold text-accent-hover">{s.n}</div>
                <div className="text-text-secondary text-[11px] uppercase tracking-wide mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dots de navegación */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Ir al proyecto ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? 'w-8 bg-accent' : 'w-2 bg-border hover:bg-accent/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
