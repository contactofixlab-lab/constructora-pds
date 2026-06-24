# PLAN DE DESARROLLO - Constructora Puerta del Sol

**Estado:** 🟡 Refinamiento visual en curso  
**Plazo:** Finales de junio 2026  
**Stack:** Next.js 16.2.9 + TypeScript + Tailwind v4  
**GitHub:** https://github.com/contactofixlab-lab/constructora-pds  
**Hosting destino:** Vercel  

---

## ✅ FASE 1: ESTRUCTURA BASE (COMPLETADA — 23/6)

- [x] Proyecto Next.js 16.2.9 inicializado (`src/app/` App Router)
- [x] **Tailwind v4** configurado (`@import "tailwindcss"; @theme {}`) — NO v3
- [x] Paleta corporativa en tokens CSS: `--color-primary`, `--color-accent`, `--color-dark`, etc.
- [x] Navbar responsive con mobile menu (`'use client'`)
- [x] Footer con logo, secciones y contacto
- [x] WhatsApp button flotante (`wa.me/56979877883`)
- [x] Layout wrapper `src/app/layout.tsx`
- [x] Rutas: `/` · `/nosotros` · `/proyectos` · `/proyectos/[id]` · `/contacto` · `/equipo`
- [x] Git + GitHub configurados (push automático en cada sesión)

---

## ✅ FASE 2: CONTENIDO REAL (COMPLETADA — 23/6)

- [x] Textos institucionales desde referencia Base44
- [x] **Equipo real** — Benjamín Rabanales y Andrés Pizarro (Socios Directores) con foto, highlights y contacto
- [x] **Proyectos reales:**
  - NeoYungay — Av. General Bulnes 1239, Santiago (105 depts / 48 bodegas / 62 estac.)
  - NeoBrisas — Las Brisas 177, La Cisterna (108 depts / 110 bodegas / 56 estac.)
- [x] Información de contacto real: `+56 9 7987 7883` · `brabanales@rcap.cl`
- [x] Logos socios en carrusel: Sodimac, Iencinas, NeoYungay, NeoBrisas, MK
- [x] Fotos reales en `public/` (NOSOTROS ARRIBA.png, PROYECTOS ARRIBA.png, fachadas JPG)

---

## ✅ FASE 3: REFINAMIENTO VISUAL (COMPLETADA — 24/6)

### Home (page.tsx)

- [x] **Hero:** foto real de trabajadores (`NOSOTROS ARRIBA.png`), overlay 60%, animación CSS `fadeUp` escalonada en h1 / párrafo / botón
- [x] **Onda hero:** fuera del `overflow-hidden` (sibling div con `marginTop:-70px`) → sin artifact de línea
- [x] **¿Por qué elegirnos?:** 4 cards verticales `min-h-340px` en `grid-cols-4`, hover con línea verde superior animada, número decorativo, escala en ícono, `FadeIn` escalonado 120ms/card
- [x] **Stats banda oscura:** ondas de 90px (tipo lente) con `py-28`, FadeIn escalonado en las 3 cifras
- [x] **Sección Nosotros (home):** foto real (`NOSOTROS ARRIBA.png`), imagen `h-520px`, título `text-5xl`, checklist `gap-y-5`, más espaciada (`py-32`). FadeIn izquierda/derecha
- [x] **Socios Comerciales:** fondo `rgba(132,204,22,0.07)` (7% verde, casi blanco), curvas arriba y abajo (`#FFFFFF`), carrusel infinito (6 copias × 5 logos, keyframe `-1000px`)
- [x] **Nuestros Proyectos:** `FeaturedProjects` carousel con prev/next arrows y dot indicators

### Navbar

- [x] Logo `h-32`, navbar `py-1` (compacto, sin altura fija)
- [x] 4 ítems: Inicio · Nosotros · Proyectos · Contacto (sin "Cotizar")

### Footer

- [x] Logo `h-36`, sin filtro `brightness-0 invert` (colores originales)
- [x] 3 columnas: logo+desc · Secciones · Contacto
- [x] Fondo `bg-background-footer` = `#111827`

### Páginas internas

- [x] **Nosotros:** banner con onda (fuera del `overflow-hidden`, sin artifact) + Directiva + Equipo
- [x] **Proyectos:** banner con onda (mismo fix) + filas alternadas imagen/texto + checklist verde + stats
- [x] **Contacto:** banner + sidebar `bg-primary` (datos de contacto) + formulario + FAQ acordeón

### Componentes nuevos

- [x] `FadeIn.tsx` — IntersectionObserver puro, soporta `direction` (up/left/right) y `delay` escalonado
- [x] `FeaturedProjects.tsx` — carousel client-side con estado local

### Correcciones técnicas

- [x] Tailwind v4 vs v3 (`@import "tailwindcss"` no `@tailwind base`)
- [x] `tsconfig` path alias `"@/*": ["./src/*"]`
- [x] `app/` duplicado en raíz (eliminado)
- [x] Marquee con `pr-6` por ítem + 6 copias + keyframe pixel fijo (no `calc()`)
- [x] `onError` removido de Server Components
- [x] Ondas SVG: artifact de línea resuelto moviendo el `<div>` de onda FUERA de `overflow-hidden`

---

## ⬜ FASE 4: QA & VERIFICACIÓN (PENDIENTE)

- [x] Build sin errores (verificado en cada sesión)
- [x] Responsive testing completo — fixes aplicados: logo responsive (h-14→lg:h-32), hero padding mobile, cards min-height, badge nosotros, gap columnas
- [ ] Links internos verificados en todas las páginas
- [ ] Formulario de contacto — integrar **Resend** para envío real de email
- [ ] Meta tags y SEO básico (`<title>`, `<meta description>`, Open Graph)
- [ ] Performance (imágenes: `next/image` con `width`/`height`)
- [ ] Accesibilidad básica (alt texts, aria-labels)

---

## ⬜ FASE 5: DEPLOY A VERCEL (PENDIENTE)

- [ ] Conectar repo GitHub a Vercel
- [ ] Variables de entorno (si se integra Resend)
- [ ] Primera publicación
- [ ] Verificar en producción
- [ ] DNS / dominio (si aplica)

---

## 📌 PENDIENTES / MEJORAS FUTURAS

| Ítem | Detalle |
|------|---------|
| Foto trabajadores en obra | La sección Nosotros (home) usa `NOSOTROS ARRIBA.png` pero la referencia muestra trabajadores en obra con cascos naranjos — proporcionar foto si existe |
| Sección Comentarios | Fue removida de la home (el usuario no la solicitó explícitamente) |
| Resend | Formulario contacto actualmente simula envío (`setTimeout`) |
| Página `/equipo` | Existe la ruta pero redirige al contenido de Nosotros; revisar si se necesita independiente |
| SEO | Ningún `<title>` ni `<meta>` personalizado por página aún |

---

## 🏗️ ESTRUCTURA ACTUAL DEL PROYECTO

```
src/
├── app/
│   ├── globals.css          ← Tailwind v4 + tokens corporativos + keyframes
│   ├── layout.tsx           ← Inter font, Navbar + Footer + WhatsApp
│   ├── page.tsx             ← Home (Hero → Cards → Stats → Nosotros → Socios → Proyectos)
│   └── (pages)/
│       ├── nosotros/page.tsx
│       ├── proyectos/page.tsx
│       ├── proyectos/[id]/page.tsx
│       ├── contacto/page.tsx
│       └── equipo/page.tsx
├── components/
│   ├── FadeIn.tsx           ← IntersectionObserver scroll animations
│   ├── FeaturedProjects.tsx ← Carousel de proyectos (client)
│   └── layout/
│       ├── Navbar.tsx
│       ├── Footer.tsx
│       └── WhatsAppButton.tsx
public/
├── 30ee6226e_logo_puertas.png
├── NOSOTROS ARRIBA.png
├── PROYECTOS ARRIBA.png
├── 89f873117_FACHADA_NEOBRISAS.jpg
├── 1c4a95389_Edificio__NeoYungay.jpg
├── 1db77f81e_benjamin.png
├── 037526a5a_Andres-2.png
└── [logos socios: iencinas, MK, sodimac, NeoYungay, NeoBrisas]
```

---

## 🔗 REFERENCIAS

- **GitHub:** https://github.com/contactofixlab-lab/constructora-pds
- **Local:** http://localhost:3000
- **Base44 original:** https://constructora-pds.base44.app
- **Vercel:** (pendiente)
