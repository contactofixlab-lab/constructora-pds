// ============================================================
//  EMPRESA — Constructora Puerta del Sol
//  Contenido de la home: cards "¿Por qué elegirnos?", estadísticas,
//  servicios (checks de la sección Nosotros) y socios comerciales.
// ============================================================

// Tarjetas "¿Por qué elegirnos?" — home
// iconPath: atributo "d" del SVG (viewBox 0 0 24 24, stroke, no fill)
export const razones = [
  {
    titulo: 'Calidad',
    texto: 'Control de calidad certificado en cada etapa de tus proyectos.',
    iconPath:
      'M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z',
  },
  {
    titulo: 'Plazos',
    texto: 'Cumplimos los plazos acordados para que tu proyecto avance sin contratiempos.',
    iconPath: 'M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
  },
  {
    titulo: 'Confianza',
    texto:
      'Comunicación clara y constante durante todo el proceso, con información precisa sobre avances, costos y decisiones.',
    iconPath:
      'M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z',
  },
  {
    titulo: 'Experiencia',
    texto: 'Equipo especializado y años de experiencia desarrollando proyectos de construcción de alto estándar.',
    iconPath:
      'M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18',
  },
];

// Estadísticas — banda oscura en home
// valor: texto que se muestra grande (puede incluir + o símbolos)
export const stats = [
  { valor: '+100.000', label: 'Metros cuadrados construidos' },
  { valor: '6',        label: 'Alianzas' },
  { valor: '+10',      label: 'Años de experiencia' },
];

// Servicios — checklist en la sección "Construyendo con Pasión" (home)
export const servicios = [
  'Proyectos Habitacionales',
  'Proyectos Comerciales',
  'Urbanización',
  'Edificación en Extensión',
  'Edificación en Altura',
];

// Socios comerciales — carrusel en home
// src: nombre del archivo en public/ (incluye la barra inicial)
export const socios = [
  { nombre: 'Sodimac',   src: '/ee3be69ef_logo_sodimac.svg' },
  { nombre: 'Iencinas',  src: '/iencinas logo.png' },
  { nombre: 'NeoYungay', src: '/NEOYUNGAY NEGRO.png' },
  { nombre: 'NeoBrisas', src: '/Logo-NeoBrisas1.png' },
  { nombre: 'MK',        src: '/MK LOGO.png' },
];
