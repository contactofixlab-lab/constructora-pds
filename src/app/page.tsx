import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/90 text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-text-inverse">
                Construyendo Sueños, Entregando Calidad
              </h1>
              <p className="text-lg text-text-inverse_secondary mb-8">
                En Constructora PDS, combinamos experiencia, profesionalismo y compromiso para desarrollar proyectos inmobiliarios de excelencia.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link
                  href="/proyectos"
                  className="bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-button font-semibold transition-colors"
                >
                  Ver Proyectos
                </Link>
                <Link
                  href="/contacto"
                  className="bg-white hover:bg-background-alt text-primary px-6 py-3 rounded-button font-semibold transition-colors"
                >
                  Contactar
                </Link>
              </div>
            </div>
            <div className="bg-primary/20 h-64 md:h-96 rounded-card flex items-center justify-center border border-white/10">
              <span className="text-white/40">Imagen Hero (Placeholder)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section className="py-section bg-background-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-text-title">
            Nuestros Servicios
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Construcción Habitacional', icon: '🏠' },
              { title: 'Proyectos Comerciales', icon: '🏢' },
              { title: 'Remodelaciones', icon: '🔨' },
            ].map((service, i) => (
              <div
                key={i}
                className="bg-background-surface p-8 rounded-card border border-border hover:shadow-card transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-text-title">{service.title}</h3>
                <p className="text-text-base">
                  Experiencia en todos los tipos de proyectos inmobiliarios.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proyectos Destacados */}
      <section className="py-section bg-background-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-text-title">
            Proyectos Destacados
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-background-surface rounded-card overflow-hidden shadow-card hover:shadow-lg transition-shadow"
              >
                <div className="bg-primary/10 h-48 flex items-center justify-center">
                  <span className="text-text-light">Imagen Proyecto</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-text-title mb-2">Proyecto {i}</h3>
                  <p className="text-text-base text-sm mb-4">
                    Descripción breve del proyecto inmobiliario.
                  </p>
                  <Link href="/proyectos" className="text-accent hover:text-accent-hover font-semibold transition-colors">
                    Ver Detalles →
                  </Link>
                </div>
              </div>
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

      {/* Por qué elegirnos */}
      <section className="py-section bg-background-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-text-title">
            Por Qué Elegirnos
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="text-accent text-3xl flex-shrink-0">✓</div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-text-title">Experiencia Comprobada</h3>
                <p className="text-text-base">Años de trayectoria en proyectos de diversa envergadura.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-accent text-3xl flex-shrink-0">✓</div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-text-title">Calidad Garantizada</h3>
                <p className="text-text-base">Procesos rigurosos de control y supervisión.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-accent text-3xl flex-shrink-0">✓</div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-text-title">Cumplimiento de Plazos</h3>
                <p className="text-text-base">Compromiso con entregas puntuales y sin sorpresas.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-accent text-3xl flex-shrink-0">✓</div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-text-title">Atención Personalizada</h3>
                <p className="text-text-base">Equipo dedicado a satisfacer tus necesidades.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-r from-primary to-primary/90 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-text-inverse">¿Listo para Comenzar tu Proyecto?</h2>
          <p className="text-lg mb-8 text-text-inverse_secondary">
            Contacta con nuestro equipo y déjanos ayudarte a hacer realidad tu visión.
          </p>
          <Link
            href="/contacto"
            className="inline-block bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-button font-semibold transition-colors"
          >
            Solicitar Cotización
          </Link>
        </div>
      </section>
    </>
  );
}
