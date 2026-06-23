import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-800 to-primary-600 text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Construyendo Sueños, Entregando Calidad
              </h1>
              <p className="text-lg text-gray-200 mb-8">
                En Constructora PDS, combinamos experiencia, profesionalismo y compromiso para desarrollar proyectos inmobiliarios de excelencia.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link
                  href="/proyectos"
                  className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Ver Proyectos
                </Link>
                <Link
                  href="/contacto"
                  className="bg-white hover:bg-gray-100 text-primary-800 px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Contactar
                </Link>
              </div>
            </div>
            <div className="bg-primary-700 h-64 md:h-96 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">Imagen Hero (Placeholder)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section className="py-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary-800">
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
                className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-primary-800">{service.title}</h3>
                <p className="text-gray-600">
                  Experiencia en todos los tipos de proyectos inmobiliarios.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proyectos Destacados */}
      <section className="py-section bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary-800">
            Proyectos Destacados
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="bg-primary-300 h-48 flex items-center justify-center">
                  <span className="text-gray-500">Imagen Proyecto</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary-800 mb-2">Proyecto {i}</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Descripción breve del proyecto inmobiliario.
                  </p>
                  <Link href="/proyectos" className="text-accent-500 font-semibold hover:text-accent-600">
                    Ver Detalles →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/proyectos"
              className="inline-block bg-primary-800 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Ver Todos los Proyectos
            </Link>
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary-800">
            Por Qué Elegirnos
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="text-accent-500 text-3xl flex-shrink-0">✓</div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-primary-800">Experiencia Comprobada</h3>
                <p className="text-gray-600">Años de trayectoria en proyectos de diversa envergadura.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-accent-500 text-3xl flex-shrink-0">✓</div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-primary-800">Calidad Garantizada</h3>
                <p className="text-gray-600">Procesos rigurosos de control y supervisión.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-accent-500 text-3xl flex-shrink-0">✓</div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-primary-800">Cumplimiento de Plazos</h3>
                <p className="text-gray-600">Compromiso con entregas puntuales y sin sorpresas.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-accent-500 text-3xl flex-shrink-0">✓</div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-primary-800">Atención Personalizada</h3>
                <p className="text-gray-600">Equipo dedicado a satisfacer tus necesidades.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-r from-primary-800 to-primary-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para Comenzar tu Proyecto?</h2>
          <p className="text-lg mb-8 text-gray-200">
            Contacta con nuestro equipo y déjanos ayudarte a hacer realidad tu visión.
          </p>
          <Link
            href="/contacto"
            className="inline-block bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            Solicitar Cotización
          </Link>
        </div>
      </section>
    </>
  );
}
