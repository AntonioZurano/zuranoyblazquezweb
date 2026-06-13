# Changelog

Todos los cambios destacables de este proyecto se documentan aquí.
El formato sigue, de forma aproximada, [Keep a Changelog](https://keepachangelog.com/es-ES/)
y el proyecto usa [Versionado Semántico](https://semver.org/lang/es/).

## [Sin publicar]

## [0.4.0] - 2026-06-13

### Añadido
- Meta `robots` explícito (`index, follow` / `noindex, nofollow`) en todas las páginas.
- `og:type` configurable por página (preparado para artículos del blog), `og:image:alt`, `og:image:width/height` y `twitter:image:alt`.
- Esquema JSON-LD `WebSite` además de `Organization`.
- Prop `schema` en `MainLayout` para añadir JSON-LD específico por página de forma reutilizable.

### Verificado
- `title` y `description` únicos por página, canonical, sitemap, `robots.txt`, favicon y URLs limpias.
- Un único `<h1>` por página y jerarquía de encabezados correcta.
- Variable global de URL del sitio (`site.url` = `https://zuranoyblazquez.com`) y `site` en `astro.config.mjs`.

### Pendiente
- La imagen Open Graph es un SVG provisional; algunas redes sociales requieren PNG/JPG. Sustituir por una imagen rasterizada definitiva antes de publicar.

## [0.3.0] - 2026-06-13

### Mejorado
- Contenido profesional ampliado en las seis páginas de servicio para cubrir todas las prestaciones clave:
  - **Microsoft 365**: correo, Office, OneDrive, colaboración, dominio, usuarios/licencias y seguridad.
  - **STEL Order**: gestión comercial, presupuestos, facturas, productos, compras, gastos y agenda.
  - **Páginas web**: web corporativa, landing pages, responsive, SEO, formularios, publicación y mantenimiento.
  - **Dominios, hosting y correo**: dominios, hosting, SSL, DNS, correo y migraciones.
  - **Soporte tecnológico**: ayuda técnica, configuración, incidencias y acompañamiento.
  - **Soluciones para empresas**: perfiles "empezar", "organizarse" y "vender más".

### Nota
- Se mantiene la estructura de rutas `/servicios/<slug>/` (en lugar de rutas raíz) para no romper enlaces internos ni el sitemap. Los enlaces desde Home, Servicios y Footer se generan desde `src/data/site.js`.

## [0.2.0] - 2026-06-13

### Mejorado
- Sistema de variables CSS reorganizado y documentado por categorías: color principal, **color secundario** explícito, texto, fondo, borde, radios, sombras y tamaños máximos de contenedor.
- Contraste de color mejorado (`--color-text-muted` oscurecido para cumplir AA).
- Accesibilidad de botones: objetivo táctil mínimo de 44px, estado `:active` y anillo de foco visible (`:focus-visible`).
- Añadidas variables `--container-wide`, `--color-border-strong`, `--radius-full`, `--focus-ring` y `--tap-target`.
- Documentados los breakpoints de referencia (mobile-first).

## [0.1.0] - 2026-06-13

### Añadido
- Estructura inicial del proyecto con **Astro 6** (Node 22).
- Layout principal `MainLayout` con SEO (title, description, canonical, Open Graph, Twitter Card y JSON-LD).
- Componentes reutilizables: `Header`, `Footer`, `Hero`, `ServiceCard`, `ServiceDetail`, `CTA`, `SectionTitle`, `Icon`, `LegalPage`.
- Páginas: Inicio, Empresa, Servicios (+6 subpáginas de servicio), Blog (estático), Contacto (formulario visual), 404 y páginas legales.
- Sistema de estilos global con variables CSS.
- Sitemap nativo (`src/pages/sitemap.xml.ts`) y `robots.txt`.
- Datos centralizados en `src/data/site.js`.

[Sin publicar]: https://github.com/
[0.1.0]: https://github.com/
