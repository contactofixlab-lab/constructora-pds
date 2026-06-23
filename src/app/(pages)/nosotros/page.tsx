export default function Nosotros() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-primary/90 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-text-inverse">Nosotros</h1>
          <p className="text-lg text-text-inverse_secondary">Expertos en desarrollo inmobiliario con más de 15 años de trayectoria</p>
        </div>
      </section>

      {/* Historia */}
      <section className="py-section bg-background-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-text-title">Nuestra Historia</h2>
              <p className="text-text-base mb-4">
                Constructora PDS es una empresa consolidada en el sector inmobiliario, fundada por profesionales con más de 15 años de experiencia en el desarrollo de proyectos residenciales. Nuestro equipo posee una sólida trayectoria en gerencia general, evaluación de proyectos y gestión comercial.
              </p>
              <p className="text-text-base">
                Nos especializamos en la creación de proyectos residenciales que combinan conectividad, tranquilidad y acceso conveniente a todo lo necesario en la vida diaria. Cada proyecto refleja nuestro compromiso con la calidad, la innovación y la satisfacción de nuestros clientes.
              </p>
            </div>
            <div className="bg-primary/10 h-96 rounded-card flex items-center justify-center border border-border">
              <span className="text-text-light">Imagen Corporativa</span>
            </div>
          </div>
        </div>
      </section>

      {/* Misión, Visión, Valores */}
      <section className="py-section bg-background-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background-surface p-8 rounded-card border border-border">
              <h3 className="text-2xl font-bold mb-4 text-text-title">Misión</h3>
              <p className="text-text-base">
                Desarrollar proyectos inmobiliarios de excelencia que combinen innovación, calidad y conectividad, creando espacios donde las personas puedan disfrutar de la tranquilidad y acceso a todo lo necesario en sus vidas.
              </p>
            </div>
            <div className="bg-background-surface p-8 rounded-card border border-border">
              <h3 className="text-2xl font-bold mb-4 text-text-title">Visión</h3>
              <p className="text-text-base">
                Ser la constructora líder en proyectos residenciales, reconocida por nuestra excelencia, profesionalismo y compromiso con la satisfacción del cliente. Aspiramos a transformar la forma en que las personas habitan sus espacios.
              </p>
            </div>
            <div className="bg-background-surface p-8 rounded-card border border-border">
              <h3 className="text-2xl font-bold mb-4 text-text-title">Valores</h3>
              <ul className="text-text-base space-y-2">
                <li className="flex gap-2"><span className="text-accent">✓</span> Compromiso profesional</li>
                <li className="flex gap-2"><span className="text-accent">✓</span> Calidad en ejecución</li>
                <li className="flex gap-2"><span className="text-accent">✓</span> Confianza y transparencia</li>
                <li className="flex gap-2"><span className="text-accent">✓</span> Innovación continua</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experiencia */}
      <section className="py-section bg-background-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-text-title">Experiencia y Trayectoria</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-background-alt p-8 rounded-card border border-border">
              <div className="text-4xl font-bold text-accent mb-2">15+</div>
              <p className="text-text-base font-semibold">Años en Industria Inmobiliaria</p>
              <p className="text-text-secondary mt-2">Experiencia consolidada y probada</p>
            </div>
            <div className="bg-background-alt p-8 rounded-card border border-border">
              <div className="text-4xl font-bold text-accent mb-2">2</div>
              <p className="text-text-base font-semibold">Proyectos Emblemáticos</p>
              <p className="text-text-secondary mt-2">NeoBrisas y NeoYungay en desarrollo</p>
            </div>
            <div className="bg-background-alt p-8 rounded-card border border-border">
              <div className="text-4xl font-bold text-accent mb-2">+200</div>
              <p className="text-text-base font-semibold">Departamentos en Oferta</p>
              <p className="text-text-secondary mt-2">Opciones residenciales de calidad</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
