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
      <section className="bg-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contacto</h1>
          <p className="text-lg text-gray-200">Estamos aquí para ayudarte. Contacta con nosotros</p>
        </div>
      </section>

      {/* Contenido */}
      <section className="py-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Información de contacto */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-primary-800">Información de Contacto</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-primary-800 mb-2">Teléfono</h3>
                  <a href="tel:+56912345678" className="text-accent-600 hover:text-accent-700">
                    +56 9 1234 5678
                  </a>
                </div>
                <div>
                  <h3 className="font-bold text-primary-800 mb-2">Email</h3>
                  <a href="mailto:contacto@pds.cl" className="text-accent-600 hover:text-accent-700">
                    contacto@pds.cl
                  </a>
                </div>
                <div>
                  <h3 className="font-bold text-primary-800 mb-2">Dirección</h3>
                  <p className="text-gray-600">Calle Principal 123<br />Ciudad, Región</p>
                </div>
                <div>
                  <h3 className="font-bold text-primary-800 mb-2">Horario Atención</h3>
                  <p className="text-gray-600">Lunes - Viernes: 9:00 - 18:00<br />Sábado: 10:00 - 14:00</p>
                </div>
              </div>
            </div>

            {/* Formulario */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-6 text-primary-800">Envíanos un Mensaje</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Tu Nombre"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Tu Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500"
                  />
                </div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Teléfono (Opcional)"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Asunto"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500"
                />
                <textarea
                  name="message"
                  placeholder="Tu Mensaje"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500"
                />
                <button
                  type="submit"
                  className="w-full bg-primary-800 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Enviar Mensaje
                </button>
              </form>

              {submitted && (
                <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  ✓ Mensaje enviado correctamente. Nos pondremos en contacto pronto.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Mapa (Placeholder) */}
      <section className="py-section bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6 text-center text-primary-800">Ubicación</h2>
          <div className="bg-primary-200 h-96 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Mapa de Ubicación (Placeholder)</span>
          </div>
        </div>
      </section>
    </>
  );
}
