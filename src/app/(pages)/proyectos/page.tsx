import Link from 'next/link';

export default function Proyectos() {
  const projects = [
    {
      id: 1,
      title: 'NeoBrisas',
      type: 'Residencial',
      ubicacion: 'La Cisterna',
      descripcion: 'Proyecto que combina la tranquilidad deseada con una conectividad insuperable.',
      departamentos: 108,
      image: 'https://media.base44.com/images/public/69a09e53eec4ebfa03c40bec/89f873117_FACHADA_NEOBRISAS.jpg'
    },
    {
      id: 2,
      title: 'NeoYungay',
      type: 'Residencial',
      ubicacion: 'Santiago',
      descripcion: 'Un proyecto con esencia de barrio, conectando a las personas con un entorno único.',
      departamentos: 105,
      image: 'https://media.base44.com/images/public/69a09e53eec4ebfa03c40bec/1c4a95389_Edificio__NeoYungay.jpg'
    },
  ];

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-primary/90 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-text-inverse">Proyectos</h1>
          <p className="text-lg text-text-inverse_secondary">Portafolio de proyectos residenciales de calidad</p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-section bg-background-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Link key={project.id} href={`/proyectos/${project.id}`}>
                <div className="bg-background-surface rounded-card overflow-hidden shadow-card hover:shadow-lg transition-shadow cursor-pointer group">
                  <div className="bg-primary/10 h-56 flex items-center justify-center group-hover:bg-primary/20 transition-colors overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-semibold">
                        {project.type}
                      </span>
                      <span className="text-text-secondary text-sm font-medium">{project.departamentos} depts</span>
                    </div>
                    <h3 className="text-2xl font-bold text-text-title mb-2">{project.title}</h3>
                    <p className="text-text-secondary text-sm mb-3">📍 {project.ubicacion}</p>
                    <p className="text-text-base text-sm mb-4">
                      {project.descripcion}
                    </p>
                    <div className="text-accent font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                      Ver Detalles <span>→</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section bg-background-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-text-title">¿Interesado en Alguno de Nuestros Proyectos?</h2>
          <p className="text-text-base mb-8 max-w-2xl mx-auto">
            Contáctanos para obtener más información, cotizaciones y conocer todas las opciones disponibles.
          </p>
          <Link
            href="/contacto"
            className="inline-block bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-button font-semibold transition-colors"
          >
            Solicitar Información
          </Link>
        </div>
      </section>
    </>
  );
}
