import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-footer text-text-inverse pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Logo + descripción */}
          <div>
            <img
              src="/30ee6226e_logo_puertas.png"
              alt="Constructora Puerta del Sol"
              className="h-28 w-auto object-contain mb-5"
            />
            <p className="text-text-inverse_secondary text-sm max-w-xs">
              Desarrollamos proyectos de construcción de alto estándar, con calidad y compromiso en
              cada etapa.
            </p>
          </div>

          {/* Secciones */}
          <div>
            <h4 className="font-bold mb-4 text-text-inverse uppercase text-sm tracking-wide">Secciones</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-text-inverse_secondary hover:text-accent transition-colors">Inicio</Link></li>
              <li><Link href="/nosotros" className="text-text-inverse_secondary hover:text-accent transition-colors">Nosotros</Link></li>
              <li><Link href="/proyectos" className="text-text-inverse_secondary hover:text-accent transition-colors">Proyectos</Link></li>
              <li><Link href="/contacto" className="text-text-inverse_secondary hover:text-accent transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-bold mb-4 text-text-inverse uppercase text-sm tracking-wide">Contacto</h4>
            <ul className="space-y-2 text-sm text-text-inverse_secondary">
              <li>
                <a href="tel:+56979877883" className="hover:text-accent transition-colors">+56 9 7987 7883</a>
              </li>
              <li>
                <a href="mailto:brabanales@rcap.cl" className="hover:text-accent transition-colors">brabanales@rcap.cl</a>
              </li>
              <li>Región Metropolitana, Santiago</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6 text-center md:text-left">
          <p className="text-text-inverse_secondary text-sm">
            &copy; {currentYear} Constructora Puerta del Sol. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
