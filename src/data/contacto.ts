// ============================================================
//  CONTACTO — Constructora Puerta del Sol
//  Esta información aparece en: sidebar de /contacto, footer,
//  y el botón de WhatsApp.
//  Edita aquí y se actualiza en toda la página automáticamente.
// ============================================================

export const contactoInfo = {
  telefono: '+56 9 7987 7883',
  telefonoHref: 'tel:+56979877883',
  whatsapp: 'https://wa.me/56979877883?text=Hola,%20me%20gustaría%20más%20información%20sobre%20sus%20proyectos.',
  email: 'brabanales@rcap.cl',
  emailHref: 'mailto:brabanales@rcap.cl',
  ubicacion: 'Santiago, Región Metropolitana',
  horario: 'Lun–Vie 9:00–18:00',
  horario2: 'Sáb 10:00–14:00',
};

// ============================================================
//  PREGUNTAS FRECUENTES — /contacto
//  Agrega, edita o elimina preguntas libremente.
// ============================================================

export const faqs = [
  {
    q: '¿En qué tipo de proyectos se especializa Constructora Puerta del Sol?',
    a: 'Nos especializamos en proyectos habitacionales y comerciales de alto estándar, incluyendo edificación en altura, edificación en extensión y urbanización. Somos el brazo constructor de cada proyecto, garantizando calidad y compromiso en todas las etapas.',
  },
  {
    q: '¿Cómo puedo trabajar con Constructora Puerta del Sol?',
    a: 'Puedes contactarnos a través de este formulario o directamente por teléfono o email. Nuestro equipo evaluará tu proyecto y te orientará sobre los pasos a seguir para iniciar una colaboración.',
  },
  {
    q: '¿En qué comunas o regiones trabajan?',
    a: 'Operamos principalmente en la Región Metropolitana de Santiago. Proyectos como NeoYungay (Santiago) y NeoBrisas (La Cisterna) son ejemplos de nuestra presencia en distintas comunas.',
  },
  {
    q: '¿Cuánto tiempo toma un proyecto de construcción típico?',
    a: 'El plazo varía según la escala y complejidad del proyecto. En cada caso definimos un cronograma detallado y nos comprometemos a cumplirlo, manteniendo comunicación constante con nuestros socios y clientes.',
  },
  {
    q: '¿Es posible visitar una obra en ejecución?',
    a: 'Sí, podemos coordinar visitas guiadas a obras en desarrollo, siempre respetando los protocolos de seguridad vigentes. Contáctanos para agendar una visita.',
  },
];

export type FAQ = typeof faqs[number];
