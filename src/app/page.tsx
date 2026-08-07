import Link from 'next/link';
import FeaturedProjects from '@/components/FeaturedProjects';
import FadeIn from '@/components/FadeIn';
import HeroSection from '@/components/HeroSection';
import StatsGrid from '@/components/StatsGrid';
import { razones, servicios, socios } from '@/data/empresa';
import { proyectos } from '@/data/proyectos';

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <HeroSection />
      {/* Onda entre hero y siguiente sección — fuera del overflow-hidden para evitar artifact */}
      <div style={{ marginTop: '-70px', lineHeight: 0, position: 'relative', zIndex: 10 }}>
        <svg viewBox="0 0 1440 70" preserveAspectRatio="none" style={{ display: 'block' }} className="w-full">
          <path fill="#F7F8FA" d="M0,35 C360,70 1080,0 1440,35 L1440,70 L0,70 Z" />
        </svg>
      </div>

      {/* ===== POR QUÉ ELEGIRNOS ===== */}
      <section className="py-section bg-background-default">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-text-title inline-block">
              ¿Por qué elegirnos?
            </h2>
            <div className="w-16 h-1 bg-accent rounded-full mx-auto mt-4" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {razones.map((razon, i) => (
              <FadeIn key={razon.titulo} delay={i * 120} className="h-full">
                <div className="group relative overflow-hidden rounded-2xl border border-border bg-white p-8 flex flex-col hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 cursor-default min-h-[220px] sm:min-h-[340px] h-full">
                  {/* Línea superior animada */}
                  <div className="absolute top-0 left-0 h-1 w-0 bg-accent group-hover:w-full transition-all duration-500 rounded-b-full" />

                  {/* Número decorativo fondo */}
                  <span className="absolute bottom-5 right-5 text-8xl font-black leading-none select-none text-border/30 group-hover:text-accent/15 transition-colors duration-500">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* Ícono */}
                  <div className="w-16 h-16 rounded-2xl bg-accent-soft flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                    <svg
                      className="w-8 h-8 text-accent-hover group-hover:text-dark transition-colors duration-300"
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={razon.iconPath} />
                    </svg>
                  </div>

                  {/* Título */}
                  <h3 className="text-xl font-bold text-text-title mb-3 group-hover:text-primary transition-colors duration-300">
                    {razon.titulo}
                  </h3>

                  {/* Descripción */}
                  <p className="text-text-base text-sm leading-relaxed flex-1 relative z-10">
                    {razon.texto}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS (cards con información de proyectos) ===== */}
      <section className="py-section bg-background-surface">
        <StatsGrid />
      </section>

      {/* ===== NOSOTROS (intro) ===== */}
      <section className="py-24 md:py-32 bg-background-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Imagen + badge */}
            <FadeIn direction="left">
              <div className="relative mb-10 md:mb-0">
                <div className="rounded-2xl h-[420px] md:h-[520px] overflow-hidden shadow-xl">
                  <img
                    src="/images/heroes/hero-home.png"
                    alt="Equipo Constructora Puerta del Sol"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-6 -left-2 md:left-6 bg-accent text-dark rounded-card px-6 py-4 shadow-card">
                  <div className="text-3xl font-bold leading-none">+10</div>
                  <div className="text-xs font-semibold uppercase tracking-wide mt-1">
                    Años de experiencia
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Texto + checklist */}
            <FadeIn direction="right">
              <h2 className="text-3xl md:text-5xl font-bold mb-5 text-text-title leading-tight">
                Construyendo con <span className="text-accent">Pasión</span> y Excelencia
              </h2>
              <p className="text-text-base text-lg mb-7 leading-relaxed">
                Somos una constructora especializada en el desarrollo de proyectos residenciales y
                comerciales. Nos enfocamos en ser el brazo constructor de cada proyecto, aportando
                calidad y compromiso en todas sus etapas.
              </p>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-5 mb-10">
                {servicios.map((servicio) => (
                  <div key={servicio} className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-soft flex items-center justify-center">
                      <svg className="w-4 h-4 text-accent-hover" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </span>
                    <span className="text-text-base">{servicio}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/nosotros"
                className="inline-flex items-center gap-2 bg-dark hover:bg-primary text-white px-6 py-3 rounded-button font-semibold transition-colors"
              >
                Conoce a Nuestro Equipo
                <span>→</span>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== SOCIOS COMERCIALES ===== */}
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: 'rgba(132,204,22,0.07)' }}>
        {/* Curva superior ← bg-background-surface */}
        <div className="absolute top-0 left-0 right-0" style={{ lineHeight: 0 }}>
          <svg viewBox="0 0 1440 72" preserveAspectRatio="none" style={{ display: 'block' }} className="w-full">
            <path fill="#FFFFFF" d="M0,36 C360,0 1080,72 1440,36 L1440,0 L0,0 Z" />
          </svg>
        </div>
        <div className="text-center mb-10 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-text-title inline-block">
            Socios <span className="text-accent-hover">Comerciales</span>
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mx-auto mt-4" />
        </div>
        {/* carrusel infinito — padding en cada item (no gap) para que -50% sea exacto */}
        <div className="relative w-full overflow-hidden">
          <div className="flex items-center animate-marquee">
            {[...Array(6)].flatMap(() => socios).map((socio, i) => (
              <div key={i} className="pr-6 flex-shrink-0">
                <div className="bg-white rounded-card shadow-sm h-24 w-44 flex items-center justify-center px-6">
                  <img
                    src={socio.src}
                    alt={socio.nombre}
                    className="max-h-12 max-w-[120px] w-auto object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Curva inferior → bg-background-surface */}
        <div className="absolute bottom-0 left-0 right-0" style={{ lineHeight: 0 }}>
          <svg viewBox="0 0 1440 72" preserveAspectRatio="none" style={{ display: 'block' }} className="w-full">
            <path fill="#FFFFFF" d="M0,36 C360,72 1080,0 1440,36 L1440,72 L0,72 Z" />
          </svg>
        </div>
      </section>

      {/* ===== NUESTROS PROYECTOS ===== */}
      <section className="py-section bg-background-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-text-title inline-block">
              Nuestros <span className="text-accent">Proyectos</span>
            </h2>
            <div className="w-16 h-1 bg-accent rounded-full mx-auto mt-4" />
          </div>
          <div className="mb-10">
            <FeaturedProjects projects={proyectos} />
          </div>
          <div className="text-center">
            <Link
              href="/proyectos"
              className="inline-block bg-dark hover:bg-primary text-white px-8 py-3 rounded-button font-semibold transition-colors"
            >
              Ver Todos los Proyectos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
