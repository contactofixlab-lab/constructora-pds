import Link from 'next/link';

export default function ProjectDetail({ params }: { params: { id: string } }) {
  return (
    <>
      {/* Header */}
      <section className="bg-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/proyectos" className="text-accent-400 hover:text-accent-300 mb-4 inline-block">
            ← Volver a Proyectos
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold">Proyecto {params.id}</h1>
        </div>
      </section>

      {/* Galería */}
      <section className="py-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-200 h-96 rounded-lg flex items-center justify-center mb-8">
            <span className="text-gray-500">Imagen Principal</span>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-primary-100 h-40 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Foto {i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Información */}
      <section className="py-section bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-4 text-primary-800">Descripción del Proyecto</h2>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-gray-600 mb-6">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <h3 className="text-2xl font-bold mb-4 text-primary-800">Características</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Característica 1</li>
                <li>✓ Característica 2</li>
                <li>✓ Característica 3</li>
                <li>✓ Característica 4</li>
              </ul>
            </div>

            {/* Info Box */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 h-fit">
              <h3 className="font-bold text-lg mb-4 text-primary-800">Información</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Tipo de Obra</p>
                  <p className="font-semibold text-primary-800">Residencial</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Ubicación</p>
                  <p className="font-semibold text-primary-800">Ciudad, Región</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Año</p>
                  <p className="font-semibold text-primary-800">2024</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Área</p>
                  <p className="font-semibold text-primary-800">5,000 m²</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-primary-800">¿Interesado en Este Proyecto?</h2>
          <Link
            href="/contacto"
            className="inline-block bg-primary-800 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Solicitar Información
          </Link>
        </div>
      </section>
    </>
  );
}
