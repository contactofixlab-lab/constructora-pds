// ============================================================
//  EQUIPO — Constructora Puerta del Sol
//  Edita aquí para agregar / modificar / eliminar miembros.
//  foto: nombre del archivo en la carpeta public/ (incluye la barra inicial)
// ============================================================

export const equipo = [
  {
    nombre: 'Benjamín Rabanales',
    rol: 'Socio Director',
    foto: '/images/equipo/benjamin.png',
    descripcion:
      'Ingeniero Comercial, MBA. Gran experiencia en la industria bancaria y en diversos sectores comerciales en posiciones gerenciales, tanto para el país como en el extranjero. Últimos 8 años relacionado directamente con el sector inmobiliario, desempeñando funciones en Evaluación y Desarrollo de Proyectos.',
    highlights: [
      '8 años en sector inmobiliario',
      'Evaluación y Desarrollo de Proyectos',
      'Ventas y generación de planos inmobiliarios',
    ],
    email: 'brabanales@rcap.cl',
    telefono: '+56 9 7987 7883',
  },
  {
    nombre: 'Andrés Pizarro',
    rol: 'Socio Director',
    foto: '/images/equipo/andres.png',
    descripcion:
      'Ingeniero Comercial de gran experiencia en la industria bancaria y en el sector inmobiliario, desempeñando funciones en gerencias de ventas, rentas inmobiliarias y gerencia general para diversas empresas. Últimos 15 años relacionado directamente con la industria inmobiliaria gerenciando proyectos emblemáticos.',
    highlights: [
      '15 años en industria inmobiliaria',
      'Experiencia en gerencia general',
      'Gestión de proyectos inmobiliarios y ventas',
    ],
    email: 'apizarro@rcap.cl',
    telefono: '+56 9 6628 2839',
  },
];

export type MiembroEquipo = typeof equipo[number];
