const equipo = [
  {
    nombre: 'Benjamín Rabanales',
    rol: 'Socio Director',
    foto: '/1db77f81e_benjamin.png',
    descripcion:
      'Ingeniero Comercial, MBA. Gran experiencia en la industria bancaria y en diversos sectores comerciales en posiciones gerenciales, tanto para el país como en el extranjero. Últimos 8 años relacionado directamente con el sector inmobiliario, desempeñando funciones en Evaluación y Desarrollo de Proyectos.',
    highlights: [
      '8 años en sector inmobiliario',
      'Evaluación y Desarrollo de Proyectos',
      'Ventas y generación de planos inmobiliarios',
    ],
    email: 'brabanales@rcap.cl',
    telefono: '+56 9 7987 7883',
  },
  {
    nombre: 'Andrés Pizarro',
    rol: 'Socio Director',
    foto: '/037526a5a_Andres-2.png',
    descripcion:
      'Ingeniero Comercial de gran experiencia en la industria bancaria y en el sector inmobiliario, desempeñando funciones en gerencias de ventas, rentas inmobiliarias y gerencia general para diversas empresas. Últimos 15 años relacionado directamente con la industria inmobiliaria gerenciando proyectos emblemáticos.',
    highlights: [
      '15 años en industria inmobiliaria',
      'Experiencia en gerencia general',
      'Gestión de proyectos inmobiliarios y ventas',
    ],
    email: 'apizarro@rcap.cl',
    telefono: '+56 9 6628 2839',
  },
];

export default function Nosotros() {
  return (
    <>
      {/* ===== Banner ===== */}
      <section className="relative h-[340px] md:h-[420px] flex items-center justify-center overflow-hidden">
        <img src="/NOSOTROS ARRIBA.png" alt="Nuestro equipo" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-dark/65" />
        <div className="relative text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Nuestro Equipo</h1>
          <p className="text-lg text-text-inverse_secondary max-w-2xl mx-auto">
            Profesionales comprometidos con la excelencia en cada proyecto
          </p>
        </div>
        {/* onda inferior */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
          <svg className="relative block w-full h-[50px]" viewBox="0 0 1440 50" preserveAspectRatio="none">
            <path fill="var(--color-background-surface)" d="M0,25 C240,50 480,0 720,12 C960,25 1200,50 1440,18 L1440,0 L0,0 Z" />
          </svg>
        </div>
      </section>

      {/* ===== Directiva ===== */}
      <section className="py-section bg-background-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-title inline-block">Directiva</h2>
            <div className="w-16 h-1 bg-accent rounded-full mx-auto mt-4" />
          </div>
          <div className="bg-background-alt rounded-card border border-border h-72 flex items-center justify-center mb-10">
            <span className="text-text-light">📷 Foto Directiva de Socios</span>
          </div>
          <p className="text-text-base text-center max-w-3xl mx-auto">
            Somos una constructora especializada en el desarrollo de proyectos residenciales y
            comerciales. Nos enfocamos en ser el brazo constructor de cada proyecto, con un equipo
            comprometido con la excelencia y la calidad en cada una de sus etapas.
          </p>
        </div>
      </section>

      {/* ===== Equipo ===== */}
      <section className="py-section bg-background-default">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-text-title inline-block">Equipo</h2>
            <div className="w-16 h-1 bg-accent rounded-full mx-auto mt-4" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {equipo.map((m) => (
              <div
                key={m.nombre}
                className="bg-background-surface rounded-card border border-border p-6 md:p-8 hover:shadow-card transition-shadow"
              >
                <div className="flex flex-col sm:flex-row gap-6">
                  <img
                    src={m.foto}
                    alt={m.nombre}
                    className="w-32 h-32 rounded-card object-cover flex-shrink-0 mx-auto sm:mx-0"
                  />
                  <div>
                    <span className="text-accent text-xs font-bold uppercase tracking-wide">{m.rol}</span>
                    <h3 className="text-xl font-bold text-text-title mt-1 mb-3">{m.nombre}</h3>
                    <p className="text-text-base text-sm leading-relaxed">{m.descripcion}</p>
                  </div>
                </div>
                <ul className="mt-6 space-y-2">
                  {m.highlights.map((h) => (
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
                <div className="mt-6 pt-5 border-t border-border flex flex-wrap gap-x-6 gap-y-2 text-sm">
                  <a href={`mailto:${m.email}`} className="text-text-secondary hover:text-accent transition-colors inline-flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
                    {m.email}
                  </a>
                  <a href={`tel:${m.telefono.replace(/\s/g, '')}`} className="text-text-secondary hover:text-accent transition-colors inline-flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>
                    {m.telefono}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
