// ============================================================
//  PROYECTOS — Constructora Puerta del Sol
//  Edita aquí para agregar / modificar / eliminar proyectos.
//  id: slug que aparece en la URL (/proyectos/neoyungay)
//  image: nombre del archivo en la carpeta public/
//  highlights: lista de puntos verdes (máximo recomendado: 4)
// ============================================================

export const proyectos = [
  {
    id: 'neoyungay',
    nombre: 'NeoYungay',
    tipo: 'Residencial',
    status: 'Entrega Inmediata',
    direccion: 'Av. General Bulnes 1239',
    comuna: 'Santiago',
    descripcion:
      'Una nueva posibilidad comienza en Santiago, conectando a las personas con un entorno único cargado de historia. NeoYungay es un proyecto con esencia de barrio, que ofrece todo lo necesario para complementar cada uno de tus días.',
    highlights: [
      'Una ubicación privilegiada',
      'Supermercados y restaurantes',
      'Colegios cercanos',
      'Plaza Yungay',
    ],
    departamentos: 105,
    bodegas: 48,
    estacionamientos: 62,
    image: '/1c4a95389_Edificio__NeoYungay.jpg',
  },
  {
    id: 'neobrisas',
    nombre: 'NeoBrisas',
    tipo: 'Residencial',
    status: 'Entrega Inmediata',
    direccion: 'Las Brisas 177',
    comuna: 'La Cisterna',
    descripcion:
      'Proyecto que combina la tranquilidad deseada con una conectividad insuperable. Ubicado estratégicamente, brinda acceso conveniente a todo lo necesario en la vida diaria.',
    highlights: [
      'Comercios, servicios y bancos',
      'Metro y Municipalidad',
      'Mercado y áreas verdes',
    ],
    departamentos: 108,
    bodegas: 110,
    estacionamientos: 56,
    image: '/89f873117_FACHADA_NEOBRISAS.jpg',
  },
];

export type Proyecto = typeof proyectos[number];
