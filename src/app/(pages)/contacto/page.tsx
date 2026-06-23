'use client';

import { FormEvent, useState } from 'react';

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí iría la integración con Resend o email service
    console.log('Form data:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-primary/90 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-text-inverse">Contacto</h1>
          <p className="text-lg text-text-inverse_secondary">Estamos aquí para ayudarte. Cuéntanos sobre tu proyecto</p>
        </div>
      </section>

      {/* Contenido */}
      <section className="py-section bg-background-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Información de contacto */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-text-title">Información de Contacto</h2>
              <div className="space-y-6">
                <div className="bg-background-surface p-4 rounded-card border border-border">
                  <h3 className="font-bold text-text-title mb-2">📞 Teléfono</h3>
                  <a href="tel:+56979877883" className="text-accent hover:text-accent-hover font-semibold">
                    +56 9 7987 7883
                  </a>
                </div>
                <div className="bg-background-surface p-4 rounded-card border border-border">
                  <h3 className="font-bold text-text-title mb-2">📧 Email</h3>
                  <a href="mailto:brabanales@rcap.cl" className="text-accent hover:text-accent-hover font-semibold break-all">
                    brabanales@rcap.cl
                  </a>
                </div>
                <div className="bg-background-surface p-4 rounded-card border border-border">
                  <h3 className="font-bold text-text-title mb-2">📍 Ubicación</h3>
                  <p className="text-text-base">
                    Región Metropolitana<br />
                    Santiago, Chile
                  </p>
                </div>
                <div className="bg-background-surface p-4 rounded-card border border-border">
                  <h3 className="font-bold text-text-title mb-2">🕐 Horario</h3>
                  <p className="text-text-base">
                    Lunes - Viernes: 9:00 - 18:00<br />
                    <span className="text-text-secondary">Sábado: 10:00 - 14:00</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Formulario */}
            <div className="md:col-span-2">
              <div className="bg-background-surface p-8 rounded-card border border-border shadow-card">
                <h2 className="text-2xl font-bold mb-6 text-text-title">Envíanos un Mensaje</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Tu Nombre"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="px-4 py-3 border border-border rounded-button bg-background-surface text-text-title placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Tu Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="px-4 py-3 border border-border rounded-button bg-background-surface text-text-title placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Teléfono (Opcional)"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-button bg-background-surface text-text-title placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Asunto"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-button bg-background-surface text-text-title placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <textarea
                    name="message"
                    placeholder="Tu Mensaje"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-border rounded-button bg-background-surface text-text-title placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-button font-semibold transition-colors"
                  >
                    Enviar Mensaje
                  </button>
                </form>

                {submitted && (
                  <div className="mt-4 p-4 bg-green-50 border border-green-200 text-green-700 rounded-button">
                    ✓ Mensaje enviado correctamente. Nos pondremos en contacto pronto.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ubicación */}
      <section className="py-section bg-background-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6 text-center text-text-title">Ubicación</h2>
          <div className="bg-primary/10 h-96 rounded-card flex items-center justify-center border border-border">
            <div className="text-center">
              <p className="text-text-light text-lg mb-2">Región Metropolitana, Santiago</p>
              <p className="text-text-secondary">Mapa de ubicación (Placeholder)</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
