# Zurano y Blazquez — Web corporativa

Sitio web corporativo de **Zurano y Blazquez**, especialistas en soluciones digitales para empresas: Microsoft 365, STEL Order, diseño y desarrollo de páginas web, dominios, hosting, correo profesional y soporte tecnológico.

Construido con [Astro 6](https://astro.build) priorizando **rendimiento, HTML semántico, SEO y facilidad de mantenimiento**.

> **Versión estable `v1.1.3`** — Incluye soporte multidioma Español/Inglés, páginas de servicio, blog con artículos en Markdown, formulario de contacto funcional (Formsubmit) y páginas legales (textos provisionales pendientes de revisión).

---

## Requisitos

- **Node.js 22.12 o superior** (Astro 6 ya no es compatible con Node 20).
- npm 10 o superior

El proyecto incluye un archivo `.nvmrc`. Si usas [nvm](https://github.com/nvm-sh/nvm):

```bash
nvm install 22   # solo la primera vez
nvm use          # usa la versión fijada en .nvmrc
```

## Puesta en marcha

```bash
npm install      # instala dependencias
npm run dev      # servidor de desarrollo en http://localhost:4321
npm run build    # genera el sitio estático en /dist
npm run preview  # previsualiza el build de producción
```

---

## Estructura del proyecto

```text
.
├── astro.config.mjs          # Configuración de Astro (site)
├── public/                   # Assets estáticos servidos tal cual
│   ├── favicon.svg
│   ├── og-default.svg        # Imagen para compartir en redes (Open Graph)
│   └── robots.txt
└── src/
    ├── data/
    │   └── site.ts           # Datos centrales: contacto, servicios y getContactFormConfig()
    ├── types/                # Tipos TypeScript compartidos (locale, i18n, service, site)
    ├── i18n/
    │   ├── routes.ts         # Mapeo de rutas ES ↔ EN
    │   ├── ui.ts             # Textos de interfaz (nav, footer, formulario, etc.)
    │   └── en/               # Contenido en inglés (home, servicios, etc.)
    ├── styles/
    │   └── global.css        # Sistema de diseño (variables, utilidades, componentes base)
    ├── layouts/
    │   └── MainLayout.astro   # Layout + <head> + SEO (title, meta, Open Graph, JSON-LD)
    ├── components/
    │   ├── Header.astro       # Cabecera con navegación, selector de idioma y tema
    │   ├── LanguageSwitcher.astro # Selector ES | EN
    │   ├── ThemeToggle.astro  # Selector modo claro/oscuro
    │   ├── Footer.astro       # Pie con servicios, empresa, legal y contacto
    │   ├── Hero.astro         # Cabecera de página reutilizable
    │   ├── ContactSection.astro # Bloque contacto (info + formulario)
    │   ├── ContactForm.astro  # Formulario Formsubmit reutilizable
    │   ├── ContactInfo.astro  # Datos de contacto (email, teléfono, horario)
    │   ├── ServiceDetail.astro# Plantilla de contenido para páginas de servicio
    │   ├── CTA.astro          # Bloque de llamada a la acción
    │   ├── SectionTitle.astro # Encabezado de sección
    │   ├── LegalPage.astro    # Plantilla para textos legales
    │   └── Icon.astro         # Iconos SVG inline (sin dependencias)
    └── pages/
        ├── index.astro                # Inicio
        ├── empresa.astro              # Empresa
        ├── blog.astro                 # Blog
        ├── contacto.astro             # Contacto (formulario visual)
        ├── sitemap.xml.ts             # Sitemap nativo (sin plugin)
        ├── 404.astro                  # Página de error
        ├── aviso-legal.astro          # Legal (noindex)
        ├── politica-de-privacidad.astro
        ├── politica-de-cookies.astro
        └── servicios/
            ├── index.astro            # Servicios (listado)
            ├── microsoft-365.astro
            ├── stel-order.astro
            ├── paginas-web.astro
            ├── dominios-hosting-correo.astro
            ├── soporte-tecnologico.astro
            └── soluciones-para-empresas.astro
        └── en/                        # Versión inglesa (prefijo /en/)
            ├── index.astro
            ├── company.astro
            ├── services/
            ├── contact.astro
            └── …                        # Servicios, legales, blog, thank-you
```

---

## Multidioma (Español / Inglés)

- **Idioma por defecto:** Español. Las rutas actuales se mantienen sin cambios (`/`, `/empresa/`, `/servicios/`, etc.).
- **Inglés:** bajo el prefijo `/en/` (`/en/`, `/en/company/`, `/en/services/`, `/en/contact/`, etc.).
- **Selector de idioma:** ES | EN en la cabecera, junto al selector de tema claro/oscuro.
- **SEO:** cada página incluye `lang`, `canonical` y enlaces `hreflang` (`es`, `en`, `x-default` → español).
- **Blog:** el índice existe en `/en/blog/`; los artículos siguen publicados solo en español (traducción pendiente).
- **Traducciones:** `src/i18n/ui.ts` (interfaz) y `src/i18n/en/` (contenido). Sin librerías externas de i18n.

### Rutas principales

| Español | Inglés |
| ------- | ------ |
| `/` | `/en/` |
| `/empresa/` | `/en/company/` |
| `/servicios/` | `/en/services/` |
| `/servicios/microsoft-365/` | `/en/microsoft-365/` |
| `/contacto/` | `/en/contact/` |
| `/blog/` | `/en/blog/` |

---

## Arquitectura de componentes

| Componente | Responsabilidad |
| ------------ | ----------------- |
| `MainLayout` | HTML base, `<head>`, SEO y montaje de Header/Footer |
| `Header` | Navegación principal, submenú de Servicios y menú móvil accesible |
| `Footer` | Enlaces de servicios, empresa, legal y datos de contacto |
| `Hero` | Cabecera de página con título (slot), subtítulo y CTAs |
| `ServiceCard` | Tarjeta clicable de servicio (usada en Inicio y Servicios) |
| `ServiceDetail` | Estructura común de las páginas de detalle de servicio |
| `CTA` | Bloque de conversión reutilizable |
| `SectionTitle` | Encabezado de sección (eyebrow + título + descripción) |
| `Icon` | Librería de iconos SVG inline |

Los servicios y datos de contacto globales viven en `src/data/site.ts`. La navegación y textos de interfaz están en `src/i18n/ui.ts`. **Para cambiar teléfono, email o servicios, edita `site.ts`.**

---

## SEO incluido

- Un único `<h1>` por página.
- `title` y `meta description` propios por página.
- Etiqueta `<link rel="canonical">` automática.
- Atributo `lang` en `<html>` y enlaces `hreflang` (`es`, `en`, `x-default`).
- Open Graph y Twitter Card.
- Datos estructurados JSON-LD (`Organization`).
- `sitemap.xml` generado por un endpoint nativo (`src/pages/sitemap.xml.ts`), sin dependencias externas y compatible con cualquier versión de Astro.
- `robots.txt` con referencia al sitemap.
- Páginas legales y de error marcadas como `noindex`.
- HTML semántico y atributos de accesibilidad (skip link, `aria-*`).

> Importante: actualiza el `site` en `astro.config.mjs` y los datos de `src/data/site.ts` (email, teléfono, dirección) con la información real antes de publicar.

---

## Próximos pasos sugeridos (post v1.0.0)

- Revisar y completar los **textos legales** con asesoramiento profesional (ahora provisionales).
- **Activar el formulario** en Formsubmit tras publicar el dominio y probar un envío real.
- Sustituir la **imagen Open Graph** por una versión rasterizada definitiva (PNG/JPG 1200×630).
- Añadir imágenes/optimización con `astro:assets` cuando haya fotografía real.
- Ampliar el blog con nuevos artículos en `src/content/blog`.
- Traducir los artículos del blog al inglés.

El historial completo de versiones está en [`CHANGELOG.md`](./CHANGELOG.md) y el
estado del roadmap en [`TODO.md`](./TODO.md). La guía de publicación está en
[`DEPLOY.md`](./DEPLOY.md).

---

## Formulario de contacto (Formsubmit)

El formulario de `/contacto` (español) y `/en/contact/` (inglés) envía los datos mediante [Formsubmit.co](https://formsubmit.co)
(sin backend propio). La configuración está centralizada en `src/data/site.ts`
mediante `getContactFormConfig(locale)`:

- `recipient`: correo de destino de los mensajes (por defecto, `site.email`).
- `redirectTo`: página de agradecimiento tras el envío (`/gracias/` o `/en/thank-you/`).
- `subject`: asunto del correo recibido.

### Activación (una sola vez, en producción)

1. Despliega la web en el dominio real.
2. Envía el formulario una vez: Formsubmit mandará un correo de activación a `recipient`.
3. Confirma ese correo. A partir de ahí, los envíos llegarán a tu bandeja.
4. (Recomendado) Sustituye `recipient`/`endpoint` por el **alias** que ofrece
   Formsubmit (`https://formsubmit.co/el/xxxxxxx`) para no exponer el correo real
   en el HTML público.

> El formulario incluye un honeypot antispam (`_honey`) y el captcha está
> desactivado (`_captcha=false`). Actívalo si recibes spam.

## Despliegue

El proyecto genera un sitio estático en `dist/`, desplegable en cualquier hosting estático o CDN (Netlify, Vercel, Cloudflare Pages, o un alojamiento tradicional). El dominio objetivo es **zuranoyblazquez.com**.
