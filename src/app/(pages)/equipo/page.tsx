export default function Equipo() {
  const team = [
    {
      name: 'Benjamín Rabanales',
      role: 'Socio Director',
      specialty: 'Evaluación y Desarrollo de Proyectos',
      description: 'Ingeniero Comercial, MBA. Gran experiencia en la industria bancaria y en diversos sectores comerciales en posiciones gerenciales, tanto para el país como en el extranjero. Últimos 8 años relacionado directamente con el sector inmobiliario.',
      highlights: ['8 años en sector inmobiliario', 'Evaluación y Desarrollo de Proyectos', 'Ventas y Generación de planos'],
      email: 'brabanales@rcap.cl',
      telefono: '+56 9 7987 7883'
    },
    {
      name: 'Andrés Pizarro',
      role: 'Socio Director',
      specialty: 'Gerencia General e Inmobiliario',
      description: 'Ingeniero Comercial de gran experiencia en la industria bancaria y en el sector inmobiliario, desempeñando funciones en gerencias de ventas, rentas inmobiliarias y gerencia general para diversas empresas. Últimos 15 años en industria inmobiliaria.',
      highlights: ['15 años en industria inmobiliaria', 'Experiencia en gerencia general', 'Gestión de proyectos inmobiliarios y ventas'],
      email: 'apizarro@rcap.cl',
      telefono: '+56 9 6628 2839'
    },
  ];

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-primary/90 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-text-inverse">Nuestro Equipo</h1>
          <p className="text-lg text-text-inverse_secondary">Profesionales de excelencia con amplia experiencia en el sector inmobiliario</p>
        </div>
      </section>

      {/* Introducción */}
      <section className="py-section bg-background-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <p className="text-text-base max-w-3xl mx-auto text-lg">
            Contamos con un equipo directivo consolidado, con más de 15 años de experiencia combinada en gestión inmobiliaria, evaluación de proyectos y desarrollo comercial.
          </p>
        </div>

        {/* Team Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member, i) => (
              <div
                key={i}
                className="bg-background-surface rounded-card overflow-hidden shadow-card hover:shadow-lg transition-shadow border border-border"
              >
                <div className="bg-primary/10 h-56 flex items-center justify-center">
                  <span className="text-text-light">Foto {member.name}</span>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-text-title mb-1">{member.name}</h3>
                  <p className="text-accent font-bold text-sm mb-4">{member.role}</p>
                  <p className="text-text-subtitle font-semibold mb-4">{member.specialty}</p>
                  <p className="text-text-base text-sm mb-4 leading-relaxed">
                    {member.description}
                  </p>
                  <div className="border-t border-border pt-4 mt-4">
                    <p className="text-text-secondary text-sm mb-2">
                      <span className="font-semibold">Email:</span> {member.email}
                    </p>
                    <p className="text-text-secondary text-sm">
                      <span className="font-semibold">Teléfono:</span> {member.telefono}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competencias */}
      <section className="py-section bg-background-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-text-title">Nuestras Fortalezas</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="text-accent text-3xl flex-shrink-0">🎯</div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-text-title">Profesionalismo</h3>
                <p className="text-text-base">Dedicación y excelencia en cada proyecto que ejecutamos.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-accent text-3xl flex-shrink-0">🤝</div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-text-title">Compromiso</h3>
                <p className="text-text-base">Con nuestros clientes, proyectos y resultados de calidad.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-accent text-3xl flex-shrink-0">💡</div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-text-title">Experiencia</h3>
                <p className="text-text-base">Más de 15 años en el sector inmobiliario y dirección comercial.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-accent text-3xl flex-shrink-0">✓</div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-text-title">Confianza</h3>
                <p className="text-text-base">Base fundamental de nuestras relaciones con clientes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
