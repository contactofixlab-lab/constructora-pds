import { getProyectos } from '@/lib/proyectos';
import { getTextos, t } from '@/lib/textos';
import FadeIn from '@/components/FadeIn';
import Card3D from '@/components/ui/Card3D';
import AnimatedCard from '@/components/AnimatedCard';

export default async function Proyectos() {
  const [proyectos, textos] = await Promise.all([getProyectos(), getTextos()]);
  return (
    <>
      {/* ===== Banner ===== */}
      <section className="relative h-[340px] md:h-[420px] flex items-center justify-center overflow-hidden -mt-16 sm:-mt-[88px] md:-mt-[120px] lg:-mt-[136px]">
        <img src={t(textos, 'proyectos-banner-imagen', '/images/heroes/banner-proyectos.png')} alt="Nuestros proyectos" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-dark/65" />
        <div className="relative text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">{t(textos, 'proyectos-banner-titulo', 'Nuestros Proyectos')}</h1>
          <p className="text-lg text-text-inverse_secondary max-w-2xl mx-auto">
            {t(textos, 'proyectos-banner-subtitulo', 'Desarrollos inmobiliarios que combinan calidad, ubicación y diseño')}
          </p>
        </div>
      </section>
      {/* Onda entre banner y contenido — fuera del overflow-hidden para evitar artifact */}
      <div style={{ marginTop: '-70px', lineHeight: 0, position: 'relative', zIndex: 10 }}>
        <svg viewBox="0 0 1440 70" preserveAspectRatio="none" style={{ display: 'block' }} className="w-full">
          <path fill="#FFFFFF" d="M0,35 C360,70 1080,0 1440,35 L1440,70 L0,70 Z" />
        </svg>
      </div>

      {/* ===== Proyectos ===== */}
      <section className="py-section bg-background-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {proyectos.map((p, i) => (
            <AnimatedCard key={p.nombre} delay={i}>
            <div
              className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}
            >
              {/* Imagen con efecto 3D hover */}
              <div>
                <Card3D className="relative">
                  <img
                    src={p.image}
                    alt={p.nombre}
                    className="w-full h-72 md:h-96 object-cover rounded-card shadow-card"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-accent text-dark text-xs font-bold px-3 py-1 rounded-full">{p.status}</span>
                    <span className="bg-white/90 text-text-title text-xs font-bold px-3 py-1 rounded-full">{p.tipo}</span>
                  </div>
                </Card3D>
                {p.urlproyecto && (
                  <a
                    href={p.urlproyecto}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full mt-4 bg-accent hover:bg-accent-hover text-dark px-6 py-3 rounded-button font-semibold text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    Ver mas {'>>'}
                  </a>
                )}
              </div>

              {/* Contenido */}
              <div>
                <span className="text-accent text-xs font-bold uppercase tracking-wide">{p.tipo}</span>
                <h2 className="text-3xl font-bold text-text-title mt-1 mb-2">{p.nombre}</h2>
                <p className="text-text-secondary text-sm mb-4">📍 {p.direccion} — {p.comuna}</p>
                <p className="text-text-base mb-6">{p.descripcion}</p>

                <ul className="space-y-2 mb-8">
                  {(p.highlights ?? []).map((h) => (
                    <li key={h} className="flex items-center gap-3 text-sm text-text-base">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-accent-soft flex items-center justify-center">
                        <svg className="w-3 h-3 text-accent-hover" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="grid grid-cols-3 gap-4">
                  {[
                    { n: p.departamentos, l: 'Deptos', emoji: '🏘️' },
                    { n: p.bodegas, l: 'Bodegas', emoji: '📦' },
                    { n: p.estacionamientos, l: 'Estac.', emoji: '🅿️' },
                  ].map((s) => (
                    <div key={s.l} className="bg-dark rounded-card border border-white/10 py-4 px-3 text-center hover:border-accent/50 transition-all duration-300">
                      <div className="text-lg mb-2 flex justify-center">{s.emoji}</div>
                      <div className="text-2xl font-bold text-accent mb-1">{s.n}</div>
                      <div className="text-text-inverse_secondary text-xs uppercase tracking-wide">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            </AnimatedCard>
          ))}
        </div>
      </section>
    </>
  );
}
