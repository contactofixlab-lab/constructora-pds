'use client';

import { FormEvent, useState, useRef, useEffect } from 'react';
import { contactoInfo, faqs } from '@/data/contacto';

const inputCls =
  'w-full px-4 py-3 border border-border rounded-card bg-background-alt text-text-title placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors text-sm';

const SUBJECT_OPTIONS = [
  'Información general',
  'Alianza comercial',
  'Visita a proyecto',
  'Trabajo con nosotros',
  'Otro',
];

function CustomSelect({
  value,
  onChange,
}: {
  value: string;
  onChange: (val: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`w-full px-4 py-3 border rounded-card bg-background-alt transition-colors text-sm flex items-center justify-between text-left ${
          open
            ? 'border-accent ring-2 ring-accent outline-none'
            : 'border-border hover:border-accent/60'
        } ${value ? 'text-text-title' : 'text-text-light'}`}
      >
        <span>{value || 'Selecciona un tema'}</span>
        <svg
          className={`w-4 h-4 text-text-light flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180 text-accent' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full mt-1.5 bg-white rounded-card border border-border shadow-card z-20 overflow-hidden py-1">
          {SUBJECT_OPTIONS.map((opt) => {
            const selected = value === opt;
            return (
              <button
                key={opt}
                type="button"
                onClick={() => { onChange(opt); setOpen(false); }}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm text-left transition-colors ${
                  selected
                    ? 'bg-accent-soft text-accent-hover font-semibold'
                    : 'text-text-base hover:bg-background-alt hover:text-text-title'
                }`}
              >
                <span className={`w-4 h-4 flex-shrink-0 flex items-center justify-center rounded-full border transition-colors ${
                  selected ? 'border-accent bg-accent' : 'border-border bg-transparent'
                }`}>
                  {selected && (
                    <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  )}
                </span>
                {opt}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.subject) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 4000);
  };

  const contactItems = [
    {
      label: 'Teléfono',
      value: contactoInfo.telefono,
      href: contactoInfo.telefonoHref,
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
      ),
    },
    {
      label: 'Email',
      value: contactoInfo.email,
      href: contactoInfo.emailHref,
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      ),
    },
    {
      label: 'Ubicación',
      value: contactoInfo.ubicacion,
      href: null as null,
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      ),
    },
    {
      label: 'Horario',
      value: contactoInfo.horario,
      value2: contactoInfo.horario2,
      href: null as null,
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      ),
    },
  ];

  return (
    <>
      {/* ===== Banner ===== */}
      <section className="relative h-[280px] md:h-[340px] flex items-center justify-center overflow-hidden -mt-16 sm:-mt-[88px] md:-mt-[120px] lg:-mt-[136px]">
        <img src="/NOSOTROS ARRIBA.png" alt="Contacto" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-dark/70" />
        <div className="relative text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Contáctanos</h1>
          <p className="text-lg text-text-inverse_secondary max-w-xl mx-auto">
            Cuéntanos sobre tu proyecto y te responderemos a la brevedad
          </p>
        </div>
      </section>

      {/* ===== Formulario + Info lateral ===== */}
      <section className="py-section bg-background-alt">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-card overflow-hidden shadow-card grid md:grid-cols-5">

            {/* ── Sidebar de contacto ── */}
            <div className="md:col-span-2 bg-primary p-8 md:p-10 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Información de Contacto</h2>
                <div className="w-10 h-1 bg-accent rounded-full mb-8" />

                <div className="space-y-7">
                  {contactItems.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          {item.icon}
                        </svg>
                      </div>
                      <div>
                        <p className="text-accent text-xs font-bold uppercase tracking-wide mb-1">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-white hover:text-accent transition-colors font-medium text-sm">
                            {item.value}
                          </a>
                        ) : (
                          <>
                            <p className="text-white font-medium text-sm">{item.value}</p>
                            {'value2' in item && item.value2 && (
                              <p className="text-white/60 text-sm">{item.value2}</p>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decoración inferior */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-white/50 text-xs">Constructora Puerta del Sol · Santiago, Chile</p>
              </div>
            </div>

            {/* ── Formulario ── */}
            <div className="md:col-span-3 bg-white p-8 md:p-10">
              <h2 className="text-2xl font-bold text-text-title mb-1">
                Envíanos un <span className="text-accent-hover">Mensaje</span>
              </h2>
              <p className="text-text-secondary text-sm mb-7">Completa el formulario y te responderemos pronto.</p>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16">
                  <div className="w-16 h-16 rounded-full bg-accent-soft flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-accent-hover" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-text-title mb-2">¡Mensaje enviado!</h3>
                  <p className="text-text-base text-sm">Nos pondremos en contacto a la brevedad.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-text-title uppercase tracking-wide mb-1.5">Nombre *</label>
                      <input type="text" name="name" placeholder="Juan Pérez" value={formData.name} onChange={handleChange} required className={inputCls} />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-text-title uppercase tracking-wide mb-1.5">Email *</label>
                      <input type="email" name="email" placeholder="juan@ejemplo.cl" value={formData.email} onChange={handleChange} required className={inputCls} />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-text-title uppercase tracking-wide mb-1.5">Teléfono <span className="normal-case font-normal text-text-light">(opcional)</span></label>
                      <input type="tel" name="phone" placeholder="+56 9 xxxx xxxx" value={formData.phone} onChange={handleChange} className={inputCls} />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-text-title uppercase tracking-wide mb-1.5">Asunto *</label>
                      <CustomSelect
                        value={formData.subject}
                        onChange={(val) => setFormData({ ...formData, subject: val })}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-text-title uppercase tracking-wide mb-1.5">Mensaje *</label>
                    <textarea name="message" placeholder="Cuéntanos sobre tu consulta o proyecto…" value={formData.message} onChange={handleChange} required rows={6} className={inputCls + ' resize-none'} />
                  </div>
                  <button type="submit" className="w-full bg-accent hover:bg-accent-hover text-dark font-bold py-3.5 rounded-card transition-colors text-sm uppercase tracking-wider">
                    Enviar Mensaje
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Preguntas Frecuentes ===== */}
      <section className="py-section bg-background-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-title inline-block">
              Preguntas <span className="text-accent-hover">Frecuentes</span>
            </h2>
            <div className="w-16 h-1 bg-accent rounded-full mx-auto mt-4" />
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-card border border-border overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-background-alt transition-colors"
                >
                  <span className="font-semibold text-text-title pr-4 text-sm">{faq.q}</span>
                  <svg
                    className={`w-5 h-5 text-accent flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-text-base text-sm leading-relaxed border-t border-border pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
