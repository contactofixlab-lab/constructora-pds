import Link from 'next/link';
import FeaturedProjects from '@/components/FeaturedProjects';
import FadeIn from '@/components/FadeIn';

export default function Home() {
  const servicios = [
    'Proyectos Habitacionales',
    'Proyectos Comerciales',
    'Urbanización',
    'Edificación en Extensión',
    'Edificación en Altura',
  ];

  const razones = [
    {
      titulo: 'Calidad',
      texto: 'Control de calidad certificado en cada etapa de tus proyectos.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
      ),
    },
    {
      titulo: 'Plazos',
      texto: 'Cumplimos los plazos acordados para que tu proyecto avance sin contratiempos.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      ),
    },
    {
      titulo: 'Confianza',
      texto: 'Comunicación clara y constante durante todo el proceso, con información precisa sobre avances, costos y decisiones.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      ),
    },
    {
      titulo: 'Experiencia',
      texto: 'Equipo especializado y años de experiencia desarrollando proyectos de construcción de alto estándar.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      ),
    },
  ];

  const socios = [
    { nombre: 'Sodimac', src: '/ee3be69ef_logo_sodimac.svg' },
    { nombre: 'Iencinas', src: '/iencinas logo.png' },
    { nombre: 'NeoYungay', src: '/NEOYUNGAY NEGRO.png' },
    { nombre: 'NeoBrisas', src: '/Logo-NeoBrisas1.png' },
    { nombre: 'MK', src: '/MK LOGO.png' },
  ];

  const proyectos = [
    {
      nombre: 'NeoYungay',
      tipo: 'Residencial',
      direccion: 'Av. General Bulnes 1239',
      comuna: 'Santiago',
      descripcion: 'Un proyecto con esencia de barrio, que conecta a las personas con un entorno único cargado de historia.',
      departamentos: 105,
      bodegas: 48,
      estacionamientos: 62,
      image: '/1c4a95389_Edificio__NeoYungay.jpg',
    },
    {
      nombre: 'NeoBrisas',
      tipo: 'Residencial',
      direccion: 'Las Brisas 177',
      comuna: 'La Cisterna',
      descripcion: 'Proyecto que combina la tranquilidad deseada con una conectividad insuperable, ubicado estratégicamente.',
      departamentos: 108,
      bodegas: 110,
      estacionamientos: 56,
      image: '/89f873117_FACHADA_NEOBRISAS.jpg',
    },
  ];

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative bg-dark text-white overflow-hidden">
        <img src="/NOSOTROS ARRIBA.png" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-dark/60" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-40 pb-36 text-center">
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
        {/* Curva inferior → bg-background-default */}
        <div className="absolute bottom-0 left-0 right-0" style={{ lineHeight: 0 }}>
          <svg viewBox="0 0 1440 72" preserveAspectRatio="none" style={{ display: 'block' }} className="w-full">
            <path fill="#F7F8FA" d="M0,36 C360,72 1080,0 1440,36 L1440,72 L0,72 Z" />
          </svg>
        </div>
      </section>

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
                <div className="group relative overflow-hidden rounded-2xl border border-border bg-white p-8 flex flex-col hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 cursor-default min-h-[340px] h-full">
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
                      {razon.icon}
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

      {/* ===== STATS (banda oscura ondulada) ===== */}
      <section className="relative bg-dark py-28">
        {/* onda superior — 90px, curva profunda tipo lente */}
        <div className="absolute top-0 left-0 w-full" style={{ lineHeight: 0 }}>
          <svg viewBox="0 0 1440 90" preserveAspectRatio="none" style={{ display: 'block' }} className="w-full">
            <path fill="#FFFFFF" d="M0,45 C480,90 960,0 1440,45 L1440,0 L0,0 Z" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
            <FadeIn delay={0}>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">+100.000</div>
              <div className="text-text-inverse_secondary uppercase tracking-wide text-xs font-semibold">
                Metros cuadrados construidos
              </div>
            </FadeIn>
            <FadeIn delay={150}>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">6</div>
              <div className="text-text-inverse_secondary uppercase tracking-wide text-xs font-semibold">
                Alianzas
              </div>
            </FadeIn>
            <FadeIn delay={300}>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">+10</div>
              <div className="text-text-inverse_secondary uppercase tracking-wide text-xs font-semibold">
                Años de experiencia
              </div>
            </FadeIn>
          </div>
        </div>

        {/* onda inferior — 90px, curva profunda tipo lente */}
        <div className="absolute bottom-0 left-0 w-full" style={{ lineHeight: 0 }}>
          <svg viewBox="0 0 1440 90" preserveAspectRatio="none" style={{ display: 'block' }} className="w-full">
            <path fill="#FFFFFF" d="M0,45 C480,0 960,90 1440,45 L1440,90 L0,90 Z" />
          </svg>
        </div>
      </section>

      {/* ===== NOSOTROS (intro) ===== */}
      <section className="py-24 md:py-32 bg-background-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Imagen + badge */}
            <FadeIn direction="left">
              <div className="relative">
                <div className="rounded-2xl h-[420px] md:h-[520px] overflow-hidden shadow-xl">
                  <img
                    src="/NOSOTROS ARRIBA.png"
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
