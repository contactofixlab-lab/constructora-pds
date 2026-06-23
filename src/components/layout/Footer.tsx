import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Empresa */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-accent-500">Constructora PDS</h3>
            <p className="text-gray-300 text-sm">
              Desarrollando proyectos de calidad con compromiso y profesionalismo.
            </p>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h4 className="font-bold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-accent-500 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="text-gray-300 hover:text-accent-500 transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/proyectos" className="text-gray-300 hover:text-accent-500 transition-colors">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="/equipo" className="text-gray-300 hover:text-accent-500 transition-colors">
                  Equipo
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-bold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="tel:+56912345678" className="hover:text-accent-500 transition-colors">
                  +56 9 1234 5678
                </a>
              </li>
              <li>
                <a href="mailto:contacto@pds.cl" className="hover:text-accent-500 transition-colors">
                  contacto@pds.cl
                </a>
              </li>
              <li>Ciudad, Región</li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div>
            <h4 className="font-bold mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-primary-700 hover:bg-accent-500 rounded-lg flex items-center justify-center transition-colors">
                <span className="text-sm">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-primary-700 hover:bg-accent-500 rounded-lg flex items-center justify-center transition-colors">
                <span className="text-sm">in</span>
              </a>
              <a href="#" className="w-10 h-10 bg-primary-700 hover:bg-accent-500 rounded-lg flex items-center justify-center transition-colors">
                <span className="text-sm">ig</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {currentYear} Constructora PDS. Todos los derechos reservados.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-accent-500 transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="hover:text-accent-500 transition-colors">
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
