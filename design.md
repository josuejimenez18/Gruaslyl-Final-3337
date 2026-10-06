# Grúas L&L S.A. — Design

Sitio web corporativo bilingüe (ES/EN) para Grúas L&L S.A., empresa costarricense de alquiler de grúas telescópicas y transporte de cargas. Plataforma: web. Objetivo principal: captación de leads (cotizaciones, llamadas y WhatsApp) y presencia sólida en búsquedas de Google.

Dirección visual: industrial-premium. Base negro carbón + hueso, acento amarillo seguridad (tomado del código de color de maquinaria de izaje). El logo del cliente es monocromo blanco, así que vive sobre superficies oscuras. Hero oscuro a sangre con esquinas inferiores redondeadas y tarjeta de beneficios flotante (inspiración entregada por el cliente), tipografía condensada en mayúsculas para titulares y números de tonelaje muy grandes.

## Brand & Colors

CSS variables en `packages/web/src/web/styles.css`.

| Token | Valor | Uso |
|-------|-------|-----|
| ink | #0D0F10 | Fondo oscuro, header, footer, hero |
| ink-soft | #16191B | Tarjetas sobre oscuro |
| bone | #F4F3F0 | Fondo claro de secciones |
| white | #FFFFFF | Tarjetas claras |
| accent | #FFC61A | Amarillo seguridad: CTAs, subrayados, números |
| accent-deep | #E0A800 | Hover del acento |
| steel | #9AA3A6 | Texto secundario sobre oscuro |
| foreground | #101314 | Texto principal sobre claro |
| muted | #5C6467 | Texto secundario sobre claro |
| border | #E2E0DA / rgba(255,255,255,.12) | Hairlines claro / oscuro |

Regla: el amarillo es para acción y énfasis, nunca para grandes áreas. Nada de degradados morados ni cards genéricas todas iguales.

## Typography

- **Display**: Archivo (600/700/800), tracking cerrado, títulos en mayúsculas para secciones cortas.
- **Body**: Barlow (400/500/600), line-height generoso (1.65).
- Jerarquía: h1 clamp(2.6rem, 6vw, 5rem); números de tonelaje hasta 5rem con acento.

## Pages

- **Inicio** (`pages/index.tsx`) — hero, tarjeta de beneficios, capacidades 10/25/55/60 T, servicios, por qué L&L, proyectos, noticias, banda CTA.
- **Servicios** (`pages/servicios.tsx`) — izaje y manejo de carga, montaje industrial, transporte de maquinaria, alquiler por hora/día/proyecto.
- **Flota** (`pages/flota.tsx`) — fichas técnicas por grúa (10 T, 25 T, 55 T, 60 T) + cabezales y lowboy.
- **Proyectos** (`pages/proyectos.tsx`) — casos por sector.
- **Nosotros** (`pages/nosotros.tsx`) — historia, misión, cobertura nacional.
- **Seguridad** (`pages/seguridad.tsx`) — protocolos, planes de izaje, pólizas y certificaciones.
- **Noticias** (`pages/noticias.tsx`) — bitácora de trabajos; detalle en `pages/noticia.tsx`.
- **Contacto / Cotización** (`pages/contacto.tsx`) — formulario que guarda el lead y ofrece envío directo por WhatsApp.
- **Panel de cotizaciones** (`pages/cotizaciones.tsx`) — listado de leads protegido por código de acceso.

## Key User Flows

1. Visitante llega desde Google → hero → CTA "Solicitar cotización" → formulario (equipo, tonelaje, fecha, ubicación) → lead guardado en base de datos → pantalla de confirmación con botón de WhatsApp precargado.
2. Visitante móvil → botón flotante de WhatsApp o llamada directa a 8820-4956 / 8682-9321.
3. Personal de L&L → `/cotizaciones` con código de acceso → revisa leads recibidos.

## SEO

`useSeo` por página (title, description, canonical, Open Graph, JSON-LD LocalBusiness/Service), `public/robots.txt`, `public/sitemap.xml`, `hreflang` es/en, textos con intención local ("alquiler de grúas telescópicas en Costa Rica").

## Architecture

- **API**: oRPC `leads.create`, `leads.list` (con passcode) en `src/api/routes/leads.ts`; tabla `leads` en Drizzle/Turso.
- **i18n**: contexto propio en `lib/i18n.tsx` + diccionarios en `lib/content.ts`; idioma persistido en localStorage.
- **Motion**: componente `Reveal` (IntersectionObserver + transiciones CSS), una orquestación por carga de página.
