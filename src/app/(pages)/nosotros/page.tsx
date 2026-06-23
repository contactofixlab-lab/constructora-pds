export default function Nosotros() {
  return (
    <>
      {/* Header */}
      <section className="bg-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nosotros</h1>
          <p className="text-lg text-gray-200">Conoce la historia y valores de Constructora PDS</p>
        </div>
      </section>

      {/* Historia */}
      <section className="py-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-primary-800">Nuestra Historia</h2>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-gray-600">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="bg-primary-200 h-96 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Imagen Corporativa</span>
            </div>
          </div>
        </div>
      </section>

      {/* Misión, Visión, Valores */}
      <section className="py-section bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-primary-800">Misión</h3>
              <p className="text-gray-600">
                Desarrollar proyectos inmobiliarios de excelencia, comprometidos con la calidad, sostenibilidad y satisfacción del cliente.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-primary-800">Visión</h3>
              <p className="text-gray-600">
                Ser la constructora líder en innovación, confiabilidad y excelencia en la construcción de espacios que mejoran la calidad de vida.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-primary-800">Valores</h3>
              <ul className="text-gray-600 space-y-2">
                <li>✓ Compromiso</li>
                <li>✓ Calidad</li>
                <li>✓ Confianza</li>
                <li>✓ Profesionalismo</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experiencia */}
      <section className="py-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-primary-800">Experiencia</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-accent-500 mb-2">20+</div>
              <p className="text-gray-600">Años de Experiencia</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-500 mb-2">150+</div>
              <p className="text-gray-600">Proyectos Completados</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-500 mb-2">500+</div>
              <p className="text-gray-600">Clientes Satisfechos</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-500 mb-2">50+</div>
              <p className="text-gray-600">Profesionales</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
