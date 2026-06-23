import Link from 'next/link';

export default function Proyectos() {
  const projects = [
    { id: 1, title: 'Proyecto Residencial A', type: 'Habitacional', year: '2024' },
    { id: 2, title: 'Centro Comercial B', type: 'Comercial', year: '2023' },
    { id: 3, title: 'Conjunto Residencial C', type: 'Habitacional', year: '2023' },
    { id: 4, title: 'Remodelación Oficinas', type: 'Comercial', year: '2022' },
    { id: 5, title: 'Proyecto Mixto D', type: 'Mixto', year: '2022' },
    { id: 6, title: 'Complejo Residencial E', type: 'Habitacional', year: '2021' },
  ];

  return (
    <>
      {/* Header */}
      <section className="bg-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Proyectos</h1>
          <p className="text-lg text-gray-200">Portafolio de nuestras obras más destacadas</p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link key={project.id} href={`/proyectos/${project.id}`}>
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer group">
                  <div className="bg-primary-300 h-48 flex items-center justify-center group-hover:bg-primary-400 transition-colors">
                    <span className="text-gray-500">Imagen {project.id}</span>
                  </div>
                  <div className="p-6">
                    <span className="inline-block bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-sm font-semibold mb-2">
                      {project.type}
                    </span>
                    <h3 className="text-xl font-bold text-primary-800 mb-2">{project.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{project.year}</p>
                    <div className="text-accent-500 font-semibold">Ver Detalles →</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
