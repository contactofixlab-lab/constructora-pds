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
    localesComerciales: 0,
    image: '/images/proyectos/neoyungay.jpg',
    urlProyecto: 'https://neourbe.cl/proyectos-inmobiliarios/neoyungay',
  },
  {
    id: 'boulevard-santa-rosa',
    nombre: 'Boulevard Santa Rosa',
    tipo: 'Residencial / Comercial',
    status: 'En Construcción',
    direccion: 'León Prado 515, esquina Av. Santa Rosa',
    comuna: 'San Miguel',
    descripcion:
      'Proyecto residencial y comercial ubicado en un punto estratégico de San Miguel, en la esquina de León Prado con Av. Santa Rosa. Considera departamentos de 1 y 2 dormitorios, locales comerciales y áreas comunes pensadas para la vida urbana y la inversión. Destaca por su conectividad, al estar frente a la futura estación de Metro Línea 9 y cercano a servicios, comercio, salud y educación.',
    highlights: [
      'Frente a la futura estación de Metro Línea 9',
      'Conexión directa con Av. Santa Rosa, Av. Departamental y Gran Avenida',
      'Proyecto mixto con 94 departamentos y 19 locales comerciales',
      'Áreas comunes: cowork, gimnasio, sala de cine, zona gamer, salón gourmet y quincho',
    ],
    departamentos: 94,
    bodegas: 68,
    estacionamientos: 61,
    localesComerciales: 19,
    image: '/images/proyectos/boulevard.jpg',
    urlProyecto: 'https://boulevardsantarosa.cl',
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
    localesComerciales: 0,
    image: '/images/proyectos/neobrisas.jpg',
    urlProyecto: 'https://neourbe.cl/proyectos-inmobiliarios/neobrisas',
  },
];

export type Proyecto = typeof proyectos[number] & {
  urlProyecto?: string;
};
