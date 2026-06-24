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
        <div className="h-72 md:h-[26rem] overflow-hidden">
          <img src={p.image} alt={p.nombre} className="w-full h-full object-cover" />
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

      {/* Controles: flechas + dots */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={prev}
          aria-label="Proyecto anterior"
          className="w-11 h-11 rounded-full border border-border bg-background-surface text-text-title hover:bg-accent hover:text-dark hover:border-accent transition-colors flex items-center justify-center"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>

        <div className="flex items-center gap-2">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Ir al proyecto ${i + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                i === index ? 'w-7 bg-accent' : 'w-2.5 bg-border'
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Proyecto siguiente"
          className="w-11 h-11 rounded-full border border-border bg-background-surface text-text-title hover:bg-accent hover:text-dark hover:border-accent transition-colors flex items-center justify-center"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </div>
  );
}
