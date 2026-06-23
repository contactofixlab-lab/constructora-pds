export default function Equipo() {
  const team = [
    { name: 'Juan Pérez', role: 'Director General', specialty: 'Gestión de Proyectos' },
    { name: 'María García', role: 'Directora Técnica', specialty: 'Supervisión de Obras' },
    { name: 'Carlos López', role: 'Ingeniero Senior', specialty: 'Diseño Estructural' },
    { name: 'Ana Martínez', role: 'Coordinadora Comercial', specialty: 'Relaciones Clientela' },
    { name: 'Roberto Silva', role: 'Maestro Mayor', specialty: 'Ejecución de Obras' },
    { name: 'Patricia Ruiz', role: 'Administradora', specialty: 'Gestión Administrativa' },
  ];

  return (
    <>
      {/* Header */}
      <section className="bg-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestro Equipo</h1>
          <p className="text-lg text-gray-200">Profesionales comprometidos con la excelencia</p>
        </div>
      </section>

      {/* Introducción */}
      <section className="py-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <p className="text-gray-600 max-w-2xl mx-auto">
            Contamos con un equipo multidisciplinario de expertos en construcción, con años de experiencia y dedicación en cada uno de sus roles.
          </p>
        </div>

        {/* Team Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div
                key={i}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="bg-primary-300 h-48 flex items-center justify-center">
                  <span className="text-gray-500">Foto</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary-800 mb-1">{member.name}</h3>
                  <p className="text-accent-600 font-semibold text-sm mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-section bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-primary-800">Lo que nos define</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="text-accent-500 text-3xl flex-shrink-0">🎯</div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-primary-800">Profesionalismo</h3>
                <p className="text-gray-600">Dedicación y excelencia en cada proyecto que ejecutamos.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-accent-500 text-3xl flex-shrink-0">🤝</div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-primary-800">Compromiso</h3>
                <p className="text-gray-600">Con nuestros clientes, proyectos y resultados de calidad.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-accent-500 text-3xl flex-shrink-0">💡</div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-primary-800">Innovación</h3>
                <p className="text-gray-600">Buscamos constantemente nuevas formas de mejorar.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-accent-500 text-3xl flex-shrink-0">✓</div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-primary-800">Confianza</h3>
                <p className="text-gray-600">Base fundamental de nuestras relaciones con clientes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
