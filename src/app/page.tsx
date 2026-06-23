import Link from 'next/link';

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

  const proyectos = [
    {
      id: 1,
      nombre: 'NeoBrisas',
      tipo: 'Residencial',
      comuna: 'La Cisterna',
      descripcion: 'Proyecto que combina la tranquilidad deseada con una conectividad insuperable.',
      departamentos: 108,
      image: 'https://media.base44.com/images/public/69a09e53eec4ebfa03c40bec/89f873117_FACHADA_NEOBRISAS.jpg',
    },
    {
      id: 2,
      nombre: 'NeoYungay',
      tipo: 'Residencial',
      comuna: 'Santiago',
      descripcion: 'Un proyecto con esencia de barrio, que conecta a las personas con un entorno único.',
      departamentos: 105,
      image: 'https://media.base44.com/images/public/69a09e53eec4ebfa03c40bec/1c4a95389_Edificio__NeoYungay.jpg',
    },
  ];

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative bg-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark to-primary/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="max-w-3xl">
            <span className="inline-block text-accent font-semibold tracking-wide uppercase text-sm mb-4">
              Constructora PDS
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-text-inverse">
              Construyendo con <span className="text-accent">Pasión</span> y Excelencia
            </h1>
            <p className="text-lg text-text-inverse_secondary mb-8 max-w-2xl">
              Desarrollamos proyectos de construcción de alto estándar, enfocados en la calidad,
              el cumplimiento y la confianza en cada etapa del proceso.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link
                href="/proyectos"
                className="bg-accent hover:bg-accent-hover text-dark px-7 py-3 rounded-button font-semibold transition-colors"
              >
                Ver Proyectos
              </Link>
              <Link
                href="/contacto"
                className="border border-white/30 hover:bg-white/10 text-white px-7 py-3 rounded-button font-semibold transition-colors"
              >
                Contáctanos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== NOSOTROS (intro) ===== */}
      <section className="py-section bg-background-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Imagen + badge */}
            <div className="relative">
              <div className="bg-primary/10 rounded-card h-80 md:h-96 flex items-center justify-center overflow-hidden border border-border">
                <span className="text-text-light">Imagen de obra</span>
              </div>
              <div className="absolute -bottom-6 -left-2 md:left-6 bg-accent text-dark rounded-card px-6 py-4 shadow-card">
                <div className="text-3xl font-bold leading-none">+10</div>
                <div className="text-xs font-semibold uppercase tracking-wide mt-1">
                  Años de experiencia
                </div>
              </div>
            </div>

            {/* Texto + checklist */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-title">
                Construyendo con <span className="text-accent">Pasión</span> y Excelencia
              </h2>
              <p className="text-text-base mb-6">
                Somos una constructora especializada en el desarrollo de proyectos residenciales y
                comerciales. Nos enfocamos en ser el brazo constructor de cada proyecto, aportando
                calidad y compromiso en todas sus etapas.
              </p>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-8">
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
                href="/equipo"
                className="inline-flex items-center gap-2 bg-dark hover:bg-primary text-white px-6 py-3 rounded-button font-semibold transition-colors"
              >
                Conoce a Nuestro Equipo
                <span>→</span>
              </Link>
            </div>
          </div>
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {razones.map((razon) => (
              <div
                key={razon.titulo}
                className="bg-background-surface rounded-card border border-border p-8 text-center hover:shadow-card hover:-translate-y-1 transition-all"
              >
                <div className="w-14 h-14 rounded-card bg-accent-soft flex items-center justify-center mx-auto mb-5">
                  <svg className="w-7 h-7 text-accent-hover" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {razon.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-text-title mb-3">{razon.titulo}</h3>
                <p className="text-text-base text-sm leading-relaxed">{razon.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS (banda oscura ondulada) ===== */}
      <section className="relative bg-dark py-20 my-2">
        {/* onda superior */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] -translate-y-px">
          <svg className="relative block w-full h-[60px]" viewBox="0 0 1440 60" preserveAspectRatio="none">
            <path fill="var(--color-background-default)" d="M0,32 C240,64 480,0 720,16 C960,32 1200,64 1440,24 L1440,0 L0,0 Z" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">+100.000</div>
              <div className="text-text-inverse_secondary uppercase tracking-wide text-xs font-semibold">
                Metros cuadrados construidos
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">6</div>
              <div className="text-text-inverse_secondary uppercase tracking-wide text-xs font-semibold">
                Alianzas
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">+10</div>
              <div className="text-text-inverse_secondary uppercase tracking-wide text-xs font-semibold">
                Años de experiencia
              </div>
            </div>
          </div>
        </div>

        {/* onda inferior */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180 translate-y-px">
          <svg className="relative block w-full h-[60px]" viewBox="0 0 1440 60" preserveAspectRatio="none">
            <path fill="var(--color-background-default)" d="M0,32 C240,64 480,0 720,16 C960,32 1200,64 1440,24 L1440,0 L0,0 Z" />
          </svg>
        </div>
      </section>

      {/* ===== PROYECTOS DESTACADOS ===== */}
      <section className="py-section bg-background-default">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-text-title inline-block">
              Proyectos Destacados
            </h2>
            <div className="w-16 h-1 bg-accent rounded-full mx-auto mt-4" />
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {proyectos.map((p) => (
              <Link key={p.id} href={`/proyectos/${p.id}`}>
                <div className="bg-background-surface rounded-card overflow-hidden shadow-card hover:shadow-lg transition-shadow group">
                  <div className="h-56 overflow-hidden bg-primary/10">
                    <img
                      src={p.image}
                      alt={p.nombre}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <span className="inline-block bg-accent-soft text-accent-hover px-3 py-1 rounded-full text-sm font-semibold">
                        {p.tipo}
                      </span>
                      <span className="text-text-secondary text-sm font-medium">{p.departamentos} depts</span>
                    </div>
                    <h3 className="text-2xl font-bold text-text-title mb-1">{p.nombre}</h3>
                    <p className="text-text-secondary text-sm mb-3">📍 {p.comuna}</p>
                    <p className="text-text-base text-sm mb-4">{p.descripcion}</p>
                    <span className="text-accent-hover font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Ver Detalles <span>→</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/proyectos"
              className="inline-block bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-button font-semibold transition-colors"
            >
              Ver Todos los Proyectos
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="bg-background-surface py-section">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-dark rounded-card px-8 py-14 text-center">
            <h2 className="text-3xl font-bold mb-4 text-text-inverse">
              ¿Listo para comenzar tu proyecto?
            </h2>
            <p className="text-lg mb-8 text-text-inverse_secondary max-w-2xl mx-auto">
              Contáctanos y déjanos ser el brazo constructor que haga realidad tu visión.
            </p>
            <Link
              href="/contacto"
              className="inline-block bg-accent hover:bg-accent-hover text-dark px-8 py-4 rounded-button font-semibold transition-colors"
            >
              Solicitar Cotización
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
