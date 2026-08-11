'use client';

import Link from 'next/link';
import { contactoInfo } from '@/data/contacto';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-background-footer via-background-footer to-dark text-text-inverse pt-14 pb-8 relative overflow-hidden">
      {/* Fondo decorativo con gradientes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/3 rounded-full blur-3xl" />
      </div>

      {/* Logo decorativo gigante y translúcido en esquina inferior derecha */}
      <motion.img
        src="/logos/puertas-del-sol.png"
        alt=""
        aria-hidden="true"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.08 }}
        transition={{ duration: 1 }}
        className="pointer-events-none select-none absolute -right-32 -bottom-40 w-96 h-auto rotate-12 brightness-0 invert"
      />
      {/* Logo decorativo gigante y translúcido en esquina superior izquierda (solo desktop) */}
      <motion.img
        src="/logos/puertas-del-sol.png"
        alt=""
        aria-hidden="true"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.07 }}
        transition={{ duration: 1 }}
        className="pointer-events-none select-none absolute -left-24 -top-32 w-64 h-auto -rotate-12 hidden md:block brightness-0 invert"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Logo + descripción con ícono decorativo detrás */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden"
          >
            {/* Ícono decorativo — ancla top-left */}
            <img
              src="/icons/edificio.png"
              alt=""
              aria-hidden="true"
              className="absolute top-0 left-0 w-72 h-96 object-contain object-top opacity-[0.05] pointer-events-none select-none"
            />
            <motion.img
              src="/logos/puertas-del-sol.png"
              alt="Constructora Puerta del Sol"
              whileHover={{ scale: 1.05 }}
              className="relative z-10 h-36 w-auto object-contain mb-5 brightness-0 invert cursor-pointer transition-transform"
            />
            <p className="relative z-10 text-text-inverse_secondary text-sm max-w-xs leading-relaxed">
              Desarrollamos proyectos de construcción de alto estándar, con calidad y compromiso en
              cada etapa.
            </p>
          </motion.div>

          {/* Secciones */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-bold mb-4 text-text-inverse uppercase text-sm tracking-widest">Secciones</h4>
            <ul className="space-y-3 text-sm">
              <motion.li whileHover={{ x: 4 }}>
                <Link href="/" className="text-text-inverse_secondary hover:text-accent transition-colors inline-flex items-center gap-2">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent/40 group-hover:bg-accent" />
                  Inicio
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 4 }}>
                <Link href="/nosotros" className="text-text-inverse_secondary hover:text-accent transition-colors inline-flex items-center gap-2">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent/40 group-hover:bg-accent" />
                  Nosotros
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 4 }}>
                <Link href="/proyectos" className="text-text-inverse_secondary hover:text-accent transition-colors inline-flex items-center gap-2">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent/40 group-hover:bg-accent" />
                  Proyectos
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 4 }}>
                <Link href="/contacto" className="text-text-inverse_secondary hover:text-accent transition-colors inline-flex items-center gap-2">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent/40 group-hover:bg-accent" />
                  Contacto
                </Link>
              </motion.li>
            </ul>
          </motion.div>

          {/* Contacto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-bold mb-4 text-text-inverse uppercase text-sm tracking-widest">Contacto</h4>
            <ul className="space-y-3 text-sm text-text-inverse_secondary">
              <motion.li whileHover={{ scale: 1.05 }}>
                <a href={contactoInfo.telefonoHref} className="hover:text-accent transition-colors inline-flex items-center gap-2">
                  <span className="text-accent">📱</span>
                  {contactoInfo.telefono}
                </a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.05 }}>
                <a href={contactoInfo.emailHref} className="hover:text-accent transition-colors inline-flex items-center gap-2">
                  <span className="text-accent">📧</span>
                  {contactoInfo.email}
                </a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.05 }} className="inline-flex items-center gap-2">
                <span className="text-accent">📍</span>
                {contactoInfo.ubicacion}
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-white/20 pt-6 text-center md:text-left"
        >
          <p className="text-text-inverse_secondary text-sm">
            &copy; {currentYear} Constructora Puerta del Sol. Todos los derechos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
