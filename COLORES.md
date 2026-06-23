# 🎨 Paleta de Colores - Constructora PDS

## Colores Corporativos

### Primario (Azul)
- **Base:** `#1F3A5F`
- **Hover:** `#162B47`
- **Active:** `#122238`
- **Light:** `#EEF4FB`

**Uso:** Botones principales, enlaces activos, íconos destacados, CTA

---

### Acento (Dorado)
- **Base:** `#C58B39`
- **Hover:** `#A9742E`

**Uso:** Detalles, íconos secundarios, etiquetas, acentos decorativos

---

## Colores de Texto

| Elemento | Color | Hex |
|----------|-------|-----|
| Títulos principales | Muy oscuro | `#1B1F24` |
| Subtítulos | Oscuro medio | `#243244` |
| Texto base | Gris oscuro | `#4B5563` |
| Texto secundario | Gris medio | `#6B7280` |
| Placeholder | Gris claro | `#9CA3AF` |
| Texto sobre oscuro | Blanco | `#F9FAFB` |
| Texto secundario/oscuro | Gris claro | `#D1D5DB` |

---

## Colores de Fondo

| Sección | Color | Hex |
|---------|-------|-----|
| General | Gris muy claro | `#F7F8FA` |
| Superficie/Cards | Blanco | `#FFFFFF` |
| Alternado | Gris suave | `#F3F4F6` |
| Footer | Negro profundo | `#111827` |

---

## Colores de Bordes

| Tipo | Color | Hex |
|------|-------|-----|
| Estándar | Gris claro | `#E5E7EB` |
| Secundario | Gris medio | `#D1D5DB` |

---

## Estilos de Componentes

### Botón Principal
```
Fondo: #1F3A5F
Texto: #FFFFFF
Hover: #162B47
Border Radius: 10px
Padding: 12px 22px
```

### Botón Secundario (Outline)
```
Fondo: transparent
Texto: #1F3A5F
Borde: 1px #1F3A5F
Hover Fondo: #EEF4FB
Border Radius: 10px
Padding: 12px 22px
```

### Card
```
Fondo: #FFFFFF
Borde: 1px #E5E7EB
Border Radius: 14px
Sombra: 0 10px 30px rgba(15, 23, 42, 0.06)
```

### Input/Textarea
```
Fondo: #FFFFFF
Borde: 1px #D1D5DB
Texto: #1F2937
Placeholder: #9CA3AF
Altura: 48px
Border Radius: 10px
Focus Borde: #1F3A5F
Focus Sombra: 0 0 0 4px rgba(31, 58, 95, 0.12)
```

### Footer
```
Fondo: #111827
Texto principal: #F9FAFB
Texto secundario: #D1D5DB
Links hover: #C58B39
```

---

## Tipografía

**Fuente principal:** Inter

### Jerarquía
- **H1:** 700 weight, 42px desktop / 36px tablet / 30px mobile
- **H2:** 700 weight, 30px
- **H3:** 600 weight, 22px
- **H4:** 600 weight, 18px
- **Párrafo:** 400 weight, 16px, line-height 1.7
- **Small:** 400 weight, 14px

---

## Cómo usar en Tailwind

Los colores están configurados en `tailwind.config.ts` con las siguientes variables:

```javascript
// Colores
className="bg-primary"           // #1F3A5F
className="text-text-title"      // #1B1F24
className="bg-background-alt"    // #F3F4F6
className="bg-background-footer" // #111827
className="border-border"        // #E5E7EB
className="text-accent"          // #C58B39

// Bordes
className="rounded-button"       // 10px
className="rounded-card"         // 14px

// Sombras
className="shadow-card"          // Card shadow
className="shadow-focus"         // Focus shadow
```

---

## Referencias

- **Azul corporativo:** `#1F3A5F` - Solido, confiable, profesional
- **Dorado/Acento:** `#C58B39` - Calidez, experiencia, respaldo
- **Fondos:** Blancos y grises suaves para claridad
- **Textos:** Tonos oscuros para legibilidad
