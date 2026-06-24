const proyectos = [
  {
    nombre: 'NeoYungay',
    tipo: 'Residencial',
    status: 'Entrega Inmediata',
    direccion: 'Av. General Bulnes 1239',
    comuna: 'Santiago',
    descripcion:
      'Una nueva posibilidad comienza en Santiago, conectando a las personas con un entorno único cargado de historia. NeoYungay es un proyecto con esencia de barrio, que ofrece todo lo necesario para complementar cada uno de tus días.',
    highlights: ['Una ubicación privilegiada', 'Supermercados y restaurantes', 'Colegios cercanos', 'Plaza Yungay'],
    departamentos: 105,
    bodegas: 48,
    estacionamientos: 62,
    image: '/1c4a95389_Edificio__NeoYungay.jpg',
  },
  {
    nombre: 'NeoBrisas',
    tipo: 'Residencial',
    status: 'Entrega Inmediata',
    direccion: 'Las Brisas 177',
    comuna: 'La Cisterna',
    descripcion:
      'Proyecto que combina la tranquilidad deseada con una conectividad insuperable. Ubicado estratégicamente, brinda acceso conveniente a todo lo necesario en la vida diaria.',
    highlights: ['Comercios, servicios y bancos', 'Metro y Municipalidad', 'Mercado y áreas verdes'],
    departamentos: 108,
    bodegas: 110,
    estacionamientos: 56,
    image: '/89f873117_FACHADA_NEOBRISAS.jpg',
  },
];

export default function Proyectos() {
  return (
    <>
      {/* ===== Banner ===== */}
      <section className="relative h-[340px] md:h-[420px] flex items-center justify-center overflow-hidden">
        <img src="/PROYECTOS ARRIBA.png" alt="Nuestros proyectos" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-dark/65" />
        <div className="relative text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Nuestros Proyectos</h1>
          <p className="text-lg text-text-inverse_secondary max-w-2xl mx-auto">
            Desarrollos inmobiliarios que combinan calidad, ubicación y diseño
          </p>
        </div>
        {/* Curva inferior — sin artifact de línea */}
        <div className="absolute bottom-0 left-0 right-0" style={{ lineHeight: 0 }}>
          <svg viewBox="0 0 1440 72" preserveAspectRatio="none" style={{ display: 'block' }} className="w-full">
            <path fill="#F7F8FA" d="M0,36 C360,72 1080,0 1440,36 L1440,72 L0,72 Z" />
          </svg>
        </div>
      </section>

      {/* ===== Proyectos ===== */}
      <section className="py-section bg-background-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {proyectos.map((p, i) => (
            <div
              key={p.nombre}
              className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}
            >
              {/* Imagen */}
              <div className="relative">
                <img
                  src={p.image}
                  alt={p.nombre}
                  className="w-full h-72 md:h-96 object-cover rounded-card shadow-card"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-accent text-dark text-xs font-bold px-3 py-1 rounded-full">{p.status}</span>
                  <span className="bg-white/90 text-text-title text-xs font-bold px-3 py-1 rounded-full">{p.tipo}</span>
                </div>
              </div>

              {/* Contenido */}
              <div>
                <span className="text-accent text-xs font-bold uppercase tracking-wide">{p.tipo}</span>
                <h2 className="text-3xl font-bold text-text-title mt-1 mb-2">{p.nombre}</h2>
                <p className="text-text-secondary text-sm mb-4">📍 {p.direccion} — {p.comuna}</p>
                <p className="text-text-base mb-6">{p.descripcion}</p>

                <ul className="space-y-2 mb-8">
                  {p.highlights.map((h) => (
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
                    { n: p.departamentos, l: 'Deptos' },
                    { n: p.bodegas, l: 'Bodegas' },
                    { n: p.estacionamientos, l: 'Estac.' },
                  ].map((s) => (
                    <div key={s.l} className="bg-background-alt rounded-card border border-border py-4 text-center">
                      <div className="text-2xl font-bold text-accent-hover">{s.n}</div>
                      <div className="text-text-secondary text-xs uppercase tracking-wide mt-1">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
