# Zurano y Blazquez — Web corporativa

Sitio web corporativo de **Zurano y Blazquez**, especialistas en soluciones digitales para empresas: Microsoft 365, STEL Order, diseño y desarrollo de páginas web, dominios, hosting, correo profesional y soporte tecnológico.

Construido con [Astro 6](https://astro.build) priorizando **rendimiento, HTML semántico, SEO y facilidad de mantenimiento**. Esta es una primera versión funcional **sin backend** (el formulario de contacto es visual, todavía sin envío real).

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
    │   └── site.js           # Datos centrales: contacto, navegación y servicios
    ├── styles/
    │   └── global.css        # Sistema de diseño (variables, utilidades, componentes base)
    ├── layouts/
    │   └── MainLayout.astro   # Layout + <head> + SEO (title, meta, Open Graph, JSON-LD)
    ├── components/
    │   ├── Header.astro       # Cabecera con navegación y menú móvil
    │   ├── Footer.astro       # Pie con servicios, empresa, legal y contacto
    │   ├── Hero.astro         # Cabecera de página reutilizable
    │   ├── ServiceCard.astro  # Tarjeta de servicio
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
```

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

Todos los datos compartidos (navegación, servicios, contacto) viven en `src/data/site.js`. **Para cambiar un teléfono, un email o añadir un servicio, edita solo ese archivo.**

---

## SEO incluido

- Un único `<h1>` por página.
- `title` y `meta description` propios por página.
- Etiqueta `<link rel="canonical">` automática.
- Open Graph y Twitter Card.
- Datos estructurados JSON-LD (`Organization`).
- `sitemap.xml` generado por un endpoint nativo (`src/pages/sitemap.xml.ts`), sin dependencias externas y compatible con cualquier versión de Astro.
- `robots.txt` con referencia al sitemap.
- Páginas legales y de error marcadas como `noindex`.
- HTML semántico y atributos de accesibilidad (skip link, `aria-*`).

> Importante: actualiza el `site` en `astro.config.mjs` y los datos de `src/data/site.js` (email, teléfono, dirección) con la información real antes de publicar.

---

## Próximos pasos sugeridos (por features)

- Conectar el formulario de contacto a un servicio de envío real (endpoint propio, Formspree, Resend, etc.).
- Migrar el blog a [Content Collections](https://docs.astro.build/es/guides/content-collections/) para gestionar artículos en Markdown.
- Añadir imágenes/optimización con `astro:assets`.
- Revisar y completar los textos legales con asesoramiento profesional.
- Sustituir la imagen Open Graph por una versión definitiva de marca.

---

## Despliegue

El proyecto genera un sitio estático en `dist/`, desplegable en cualquier hosting estático o CDN (Netlify, Vercel, Cloudflare Pages, o un alojamiento tradicional). El dominio objetivo es **zuranoyblazquez.com**.
