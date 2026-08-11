'use client';

import { equipo } from '@/data/equipo';
import FadeIn from '@/components/FadeIn';
import { motion } from 'framer-motion';

export default function Nosotros() {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <>
      {/* ===== Banner ===== */}
      <section className="relative h-[340px] md:h-[420px] flex items-center justify-center overflow-hidden -mt-16 sm:-mt-[88px] md:-mt-[120px] lg:-mt-[136px]">
        <img src="/images/heroes/hero-home.png" alt="Nuestro equipo" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-dark/65" />
        <div className="relative text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-3"
          >
            Nuestro Equipo
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-text-inverse_secondary max-w-2xl mx-auto"
          >
            Profesionales comprometidos con la excelencia en cada proyecto
          </motion.p>
        </div>
      </section>
      {/* Onda entre banner y contenido — fuera del overflow-hidden para evitar artifact */}
      <div style={{ marginTop: '-70px', lineHeight: 0, position: 'relative', zIndex: 10 }}>
        <svg viewBox="0 0 1440 70" preserveAspectRatio="none" style={{ display: 'block' }} className="w-full">
          <path fill="#FFFFFF" d="M0,35 C360,70 1080,0 1440,35 L1440,70 L0,70 Z" />
        </svg>
      </div>

      {/* ===== Directiva ===== */}
      <section className="py-section bg-background-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-title inline-block">Directiva</h2>
            <div className="w-16 h-1 bg-accent rounded-full mx-auto mt-4" />
          </div>
          <div className="bg-background-alt rounded-card border border-border h-72 flex items-center justify-center mb-10">
            <span className="text-text-light">📷 Foto Directiva de Socios</span>
          </div>
          <p className="text-text-base text-center max-w-3xl mx-auto">
            Somos una constructora especializada en el desarrollo de proyectos residenciales y
            comerciales. Nos enfocamos en ser el brazo constructor de cada proyecto, con un equipo
            comprometido con la excelencia y la calidad en cada una de sus etapas.
          </p>
        </div>
      </section>

      {/* ===== Equipo ===== */}
      <section className="relative py-section bg-background-default overflow-hidden">
        {/* Fondo decorativo con gradientes */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-title inline-block">Equipo</h2>
            <div className="w-16 h-1 bg-accent rounded-full mx-auto mt-4" />
          </motion.div>

          {/* Socios Directores — siempre 2 en fila, tarjetas grandes con efectos */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 mb-12"
          >
            {equipo.slice(0, 2).map((m, i) => (
              <motion.div
                key={m.nombre}
                variants={itemVariants}
                className="group relative"
              >
              <div
                className="relative bg-gradient-to-br from-background-surface via-background-surface to-background-alt rounded-card border border-border/50 p-6 md:p-8 hover:border-accent/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 overflow-hidden"
              >
                {/* Efecto de brillo en hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex flex-col sm:flex-row gap-6">
                  <motion.img
                    src={m.foto}
                    alt={m.nombre}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="w-40 h-40 rounded-2xl object-cover flex-shrink-0 mx-auto sm:mx-0 shadow-lg border-2 border-accent/20"
                  />
                  <div className="flex-1">
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      className="text-accent text-xs font-bold uppercase tracking-widest"
                    >
                      {m.rol}
                    </motion.span>
                    <motion.h3
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                      className="text-2xl font-bold text-text-title mt-2 mb-3 bg-gradient-to-r from-text-title to-accent bg-clip-text text-transparent"
                    >
                      {m.nombre}
                    </motion.h3>
                    <p className="text-text-base text-sm leading-relaxed">{m.descripcion}</p>
                  </div>
                </div>
                <ul className="mt-6 space-y-2">
                  {m.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-3 text-sm text-text-base">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-accent-soft flex items-center justify-center">
                        <svg className="w-3 h-3 text-accent-hover" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-5 border-t border-border flex flex-wrap gap-x-6 gap-y-2 text-sm">
                  <a href={`mailto:${m.email}`} className="text-text-secondary hover:text-accent transition-colors inline-flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
                    {m.email}
                  </a>
                  <a href={`tel:${m.telefono.replace(/\s/g, '')}`} className="text-text-secondary hover:text-accent transition-colors inline-flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>
                    {m.telefono}
                  </a>
                </div>
              </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Resto del equipo — 3 por fila, tarjetas compactas con diseño mejorado */}
          {equipo.length > 2 && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {equipo.slice(2).map((m, i) => (
                <motion.div
                  key={m.nombre}
                  variants={itemVariants}
                  className="group"
                >
                <div
                  className="relative bg-gradient-to-br from-background-surface/80 via-background-surface to-background-alt/80 rounded-2xl border border-border/30 backdrop-blur-sm p-6 hover:border-accent/50 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 flex flex-col items-center text-center h-full overflow-hidden"
                >
                  {/* Efecto de luz en hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10 w-full">
                    <motion.img
                      src={m.foto}
                      alt={m.nombre}
                      whileHover={{ scale: 1.08, rotate: 2 }}
                      transition={{ duration: 0.3 }}
                      className="w-28 h-28 rounded-2xl object-cover mb-4 mx-auto shadow-md border-2 border-accent/20"
                    />
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      className="text-accent text-xs font-bold uppercase tracking-widest block mb-1"
                    >
                      {m.rol}
                    </motion.span>
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="text-lg font-bold text-text-title mb-3"
                    >
                      {m.nombre}
                    </motion.h3>
                    {m.highlights.length > 0 && (
                      <ul className="space-y-1.5 w-full text-left mb-4">
                        {m.highlights.map((h) => (
                          <li key={h} className="flex items-center gap-2 text-xs text-text-base">
                            <span className="flex-shrink-0 w-3.5 h-3.5 rounded-full bg-accent-soft flex items-center justify-center">
                              <svg className="w-2 h-2 text-accent-hover" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="m4.5 12.75 6 6 9-13.5" />
                              </svg>
                            </span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="mt-auto pt-4 border-t border-border/30 w-full flex flex-col gap-1.5 text-xs">
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        href={`mailto:${m.email}`}
                        className="text-text-secondary hover:text-accent transition-colors inline-flex items-center justify-center gap-1.5"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
                        {m.email}
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        href={`tel:${m.telefono.replace(/\s/g, '')}`}
                        className="text-text-secondary hover:text-accent transition-colors inline-flex items-center justify-center gap-1.5"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>
                        {m.telefono}
                      </motion.a>
                    </div>
                  </div>
                </div>
                </motion.div>
              ))}
            </motion.div>
          )}

        </div>
      </section>
    </>
  );
}
