# Changelog

Todos los cambios destacables de este proyecto se documentan aquí.
El formato sigue, de forma aproximada, [Keep a Changelog](https://keepachangelog.com/es-ES/)
y el proyecto usa [Versionado Semántico](https://semver.org/lang/es/).

## [Sin publicar]

### Cambiado
- Cambio textos políticas.
- Política de privacidad (ES): texto oficial completo con 25 secciones.
- Formulario de contacto: aviso reducido de protección de datos (ES/EN).

## [1.1.5] - 2026-06-14

### Corregido
- Soporte multidioma de artículos del blog: rutas inglesas bajo `/en/blog/` y selector ES/EN en cada post.

### Añadido
- Traducciones al inglés de los 3 artículos existentes del blog.
- Estructura `src/content/blog/es/` y `src/content/blog/en/` con `lang` y `translationKey`.
- Módulo `src/i18n/blog.ts` con rutas equivalentes y helpers (`getPostHref`, `getBlogPostAlternateRoute`).
- Ruta dinámica `src/pages/en/blog/[...slug].astro`.

### Cambiado
- Índices `/blog/` y `/en/blog/` listan solo artículos de su idioma.
- Sitemap incluye posts en español e inglés.
- Metadatos SEO (`lang`, canonical, hreflang) correctos en cada artículo.

## [1.1.4] - 2026-06-14

### Añadido
- `src/i18n/format.ts` con `formatDate()` para fechas localizadas (ES/EN).
- `src/i18n/es/services.ts` con contenido centralizado de las 6 páginas de servicio en español.
- Textos de blog, artículos y selector de tema en `ui.ts` (`blogIndex`, `blogPost`, `themeToggle`).

### Cambiado
- `ThemeToggle`, `PostLayout` y `BlogCard` usan textos y fechas según idioma.
- Páginas `/servicios/*` simplificadas; importan contenido desde `@i18n/es/services`.
- Índices de blog ES/EN unificados con `getUi().blogIndex` (eliminado `blogPageEn` de `en/data.ts`).
- Imports migrados a alias `@i18n/*`, `@types/*`, `@data/*`, `@components/*` y `@layouts/*`.
- Página Empresa: sección de valores ampliada a 6 tarjetas con grid responsive (3×2 en escritorio).

## [1.1.3] - 2026-06-14

### Corregido
- Árbol de directorios en `README.md` actualizado tras la migración i18n a TypeScript (`routes.ts`, `ui.ts`).

## [1.1.2] - 2026-06-14

### Cambiado
- Migración de i18n de JavaScript a TypeScript: `routes.ts`, `ui.ts`, `en/data.ts`, `en/services.ts`.
- Tipos completos en `src/types/i18n.ts` (`LocaleUi`, `UiDictionary`) y `src/types/service.ts` (`ServicePageContent`, contenido EN).
- `ui.ts` usa `satisfies UiDictionary` para garantizar paridad ES/EN en compile time.
- Contenido EN validado con `satisfies` (`HomePageContent`, `CompanyPageContent`, servicios, etc.).
- Componentes `ServiceDetail`, `CTA`, `MainLayout` y páginas de contacto usan el tipo `Locale` compartido.

### Eliminado
- Archivos JavaScript obsoletos en `src/i18n/` (`routes.js`, `ui.js`, `en/data.js`, `en/services.js`).

## [1.1.0] - 2026-06-14

### Añadido
- Tipos compartidos en `src/types/` (`locale.ts`, `i18n.ts`, `site.ts`).
- Componentes reutilizables de contacto: `ContactInfo`, `ContactForm` y `ContactSection`.
- Función `getContactFormConfig(locale)` para centralizar Formsubmit por idioma.

### Cambiado
- `src/data/site.js` migrado a `src/data/site.ts` (servicios y footer sin cambios funcionales).
- Páginas `/contacto/` y `/en/contact/` simplificadas; formulario e info de contacto unificados.
- Textos de contacto en `ui.js`: `privacyHref`, `honeypotLabel` y notas legales por idioma.
- Eliminados `contactForm`, `contactFormEn` y `mainNav` duplicados de `site.ts` (nav solo en i18n).

### Mejorado
- ~400 líneas duplicadas entre páginas de contacto ES/EN eliminadas.
- IDs de campos del formulario únicos por idioma (accesibilidad).

## [1.0.3] - 2026-06-13

### Añadido
- Soporte multidioma Español/Inglés con rutas inglesas bajo `/en/`.
- Selector de idioma ES | EN en la cabecera, junto al selector de tema.
- Metadatos `lang`, `canonical` y `hreflang` (`es`, `en`, `x-default`) en `MainLayout`.
- Estructura de traducciones en `src/i18n/` (`routes.js`, `ui.js`, `en/data.js`, `en/services.js`).
- Páginas principales traducidas al inglés: home, empresa, servicios, contacto, gracias y legales.
- Formulario de contacto en inglés con redirección a `/en/thank-you/`.
- Índice del blog en inglés (`/en/blog/`); artículos pendientes de traducción.

### Mejorado
- Header y Footer adaptados al idioma activo (navegación, textos y enlaces).
- `ServiceDetail`, `CTA` y `ServiceCard` con soporte de locale para CTAs y etiquetas.
- Página 404 con contenido según idioma de la ruta y enlace a la home alternativa.
- Sitemap actualizado con rutas inglesas indexables.

## [1.0.2] - 2026-06-13

### Añadido
- Selector de modo claro/oscuro (`ThemeToggle`) visible en la cabecera, junto a la marca.
- Modo claro por defecto (sin usar `prefers-color-scheme` del sistema).
- Preferencia de tema guardada en `localStorage` (clave `zb-theme`, valores `light` / `dark`).
- Script temprano en `MainLayout` para aplicar el tema guardado antes del renderizado y evitar parpadeo.
- Sistema de variables CSS ampliado para ambos temas (`data-theme` en `<html>`).

### Mejorado
- Adaptación visual de Header, Footer, tarjetas, formularios, blog y componentes principales al modo oscuro.
- Reducción de colores fijos en componentes; sustituidos por variables semánticas (`--color-card`, `--color-header-bg`, etc.).
- Accesibilidad del botón de tema: `aria-label`, `title`, foco visible e iconos sol/luna en SVG inline.

## [1.0.1] - 2026-06-13

### Corregido
- Actualizado el número de teléfono de contacto a **617 414 350** (`+34 617 414 350`).
  El cambio se realiza en un único lugar (`src/data/site.js`) y se propaga automáticamente a
  todas las páginas y componentes: Footer, Contacto, Gracias, el CTA y el dato estructurado
  `telephone` (JSON-LD). Verificado que no quedan números escritos a mano en el código.

## [1.0.0] - 2026-06-13

**Primera versión estable, lista para publicar en `zuranoyblazquez.com`.**

### Resumen
- Consolidación de todo el trabajo de las versiones 0.2.0–0.9.0.
- Revisión completa de las 19 páginas: `title`, `description`, único `<h1>` y canonical correctos en todas.
- Verificación automática de enlaces internos: **sin enlaces rotos**.
- Navegación, footer, formulario, SEO, sitemap, `robots.txt`, favicon, responsive y accesibilidad revisados.
- Documentación actualizada (`README.md`, `TODO.md`, `CHANGELOG.md`, `DEPLOY.md`).

### Pendiente antes de la publicación definitiva
- Revisión legal de los textos (provisionales).
- Activación y prueba real del formulario en el dominio publicado.
- Imagen Open Graph definitiva en formato rasterizado.

## [0.9.0] - 2026-06-13

### Añadido
- `DEPLOY.md`: guía completa de despliegue en VPS (Plesk y Nginx), con comandos, estrategia, configuración de dominio/SSL, redirección www/no-www y checklist de publicación.

### Verificado
- La build estática se genera correctamente en `dist/`.
- `site` en `astro.config.mjs` apunta a `https://zuranoyblazquez.com`.
- Sitemap y `robots.txt` usan el dominio final.

## [0.8.0] - 2026-06-13

### Accesibilidad
- Corregido el contraste de los botones de acento: el texto blanco pasa a mostrarse sobre el turquesa oscuro (`#00807f`, ~4.77:1) para cumplir WCAG AA.
- Añadido `aria-current="page"` en la navegación (solo en la página exacta) para lectores de pantalla.
- Verificados: foco visible, labels en formularios, navegación por teclado, estructura semántica y jerarquía de encabezados.

### Rendimiento y calidad
- Confirmado un peso de assets reducido (build estática ~0,5 MB, JavaScript mínimo: solo el menú móvil).
- CSS basado en variables y estilos con ámbito por componente (sin frameworks pesados).
- Revisión de enlaces internos y de la página 404 personalizada (ya existente).
- Estados hover/focus coherentes en botones, tarjetas y enlaces.

## [0.7.0] - 2026-06-13

### Mejorado
- Política de cookies clarificada: se indica expresamente que el sitio **no usa cookies no técnicas** y que, por tanto, **no se muestra banner de cookies**.

### Verificado
- Páginas legales `/aviso-legal/`, `/politica-de-privacidad/` y `/politica-de-cookies/` con `title` y `description` propios y marcadas como `noindex`.
- Enlaces legales en el Footer y enlace a la política de privacidad desde el formulario.
- Checkbox legal obligatorio en el formulario de contacto.
- Textos legales marcados como **provisionales** y pendientes de revisión por asesoría.

### Nota
- Se mantienen las rutas existentes (`/politica-de-privacidad/`, `/politica-de-cookies/`) en lugar de las variantes cortas del roadmap, para no romper enlaces ya publicados.

## [0.6.0] - 2026-06-13

### Añadido
- Formulario de contacto funcional mediante **Formsubmit.co** (sin backend propio): método `POST`, campos con `name` correctos y validación HTML5 (`required`, `type=email`, `type=tel`).
- Página de agradecimiento `/gracias` y redirección tras el envío (`_next`).
- Honeypot antispam (`_honey`) y captcha desactivado (`_captcha=false`).
- Configuración centralizada del formulario en `contactForm` (`src/data/site.js`) y documentación en el README sobre cómo activar/cambiar el correo de destino.

### Notas
- El envío real requiere activar el formulario una vez publicado el dominio (correo de confirmación de Formsubmit).
- Se recomienda usar el alias de Formsubmit en producción para no exponer el correo en el HTML.

## [0.5.0] - 2026-06-13

### Añadido
- Blog basado en **Content Collections** de Astro 6 (`src/content/blog`) con esquema validado (Zod).
- Página índice `/blog/` que lista los artículos publicados y ruta dinámica `/blog/<slug>/` para cada artículo.
- Layout de artículo `PostLayout` con estilos de lectura (prose) y JSON-LD `BlogPosting`.
- Componentes `BlogCard` y `CategoryBadge` reutilizables.
- Categorías iniciales: Microsoft 365, STEL Order, Páginas web, Hosting y dominios, Digitalización.
- Tres artículos iniciales:
  - "Qué necesita una pyme para empezar su digitalización".
  - "Microsoft 365 para empresas: qué plan elegir".
  - "STEL Order: gestión comercial para autónomos y pymes".
- Sección de "Últimos artículos" en la Home.

### Cambiado
- El blog estático anterior (`src/pages/blog.astro`) se sustituye por el sistema dinámico de colecciones (justificado: el roadmap requiere artículos en Markdown).
- El sitemap nativo ahora omite plantillas dinámicas e incluye las URLs reales de los artículos del blog.

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
