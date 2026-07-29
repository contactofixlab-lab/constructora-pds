import Link from 'next/link';
import { contactoInfo } from '@/data/contacto';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-footer text-text-inverse pt-14 pb-8 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Logo + descripción con ícono decorativo detrás */}
          <div className="relative overflow-hidden">
            {/* Ícono decorativo — ancla top-left, cubre logo + descripción */}
            <img
              src="/icons/edificio.png"
              alt=""
              aria-hidden="true"
              className="absolute top-0 left-0 w-72 h-96 object-contain object-top opacity-[0.10] pointer-events-none select-none"
            />
            <img
              src="/logos/puertas-del-sol.png"
              alt="Constructora Puerta del Sol"
              className="relative z-10 h-36 w-auto object-contain mb-5 brightness-0 invert"
            />
            <p className="relative z-10 text-text-inverse_secondary text-sm max-w-xs">
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
                <a href={contactoInfo.telefonoHref} className="hover:text-accent transition-colors">{contactoInfo.telefono}</a>
              </li>
              <li>
                <a href={contactoInfo.emailHref} className="hover:text-accent transition-colors">{contactoInfo.email}</a>
              </li>
              <li>{contactoInfo.ubicacion}</li>
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
