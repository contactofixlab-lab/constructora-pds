import Link from 'next/link';
import { proyectos } from '@/data/proyectos';
import FadeIn from '@/components/FadeIn';

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const proyecto = proyectos.find((p) => p.id === params.id);

  if (!proyecto) {
    return (
      <section className="py-section text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Proyecto no encontrado</h1>
          <Link href="/proyectos" className="text-accent hover:text-accent-hover">
            ← Volver a Proyectos
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Header */}
      <section className="bg-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/proyectos" className="text-accent hover:text-accent-hover mb-4 inline-block">
            ← Volver a Proyectos
          </Link>
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-accent text-sm font-semibold uppercase tracking-wide mb-2">{proyecto.tipo}</p>
              <h1 className="text-4xl md:text-5xl font-bold">{proyecto.nombre}</h1>
              <p className="text-text-base mt-3 flex items-center gap-2">
                📍 {proyecto.direccion} — {proyecto.comuna}
              </p>
            </div>
            <div className="text-right">
              <span className="inline-block bg-accent text-dark px-4 py-2 rounded-full font-semibold text-sm">
                {proyecto.status}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Imagen Principal */}
      <section className="py-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="rounded-2xl h-96 md:h-[500px] overflow-hidden shadow-xl">
              <img
                src={proyecto.image}
                alt={proyecto.nombre}
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Descripción + Stats */}
      <section className="py-section bg-background-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <FadeIn direction="left">
                <h2 className="text-3xl font-bold mb-4 text-text-title">Descripción</h2>
                <p className="text-text-base text-lg leading-relaxed mb-6">
                  {proyecto.descripcion}
                </p>
                <h3 className="text-2xl font-bold mb-4 text-text-title">Características</h3>
                <ul className="space-y-3">
                  {proyecto.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3 text-text-base">
                      <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>

            {/* Stats Cards */}
            <FadeIn direction="right">
              <div className="space-y-3">
                <div className="bg-white p-6 rounded-2xl border border-border shadow-sm">
                  <p className="text-4xl font-bold text-accent mb-2">{proyecto.departamentos}</p>
                  <p className="text-text-base font-semibold">Departamentos</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-border shadow-sm">
                  <p className="text-4xl font-bold text-accent mb-2">{proyecto.bodegas}</p>
                  <p className="text-text-base font-semibold">Bodegas</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-border shadow-sm">
                  <p className="text-4xl font-bold text-accent mb-2">{proyecto.estacionamientos}</p>
                  <p className="text-text-base font-semibold">Estacionamientos</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-border shadow-sm">
                  <p className="text-4xl font-bold text-accent mb-2">19</p>
                  <p className="text-text-base font-semibold">Locales Comerciales</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text-title">
            ¿Interesado en <span className="text-accent">{proyecto.nombre}</span>?
          </h2>
          <Link
            href="/contacto"
            className="inline-block bg-dark hover:bg-primary text-white px-8 py-3 rounded-button font-semibold transition-colors"
          >
            Solicitar Información
          </Link>
        </div>
      </section>
    </>
  );
}
