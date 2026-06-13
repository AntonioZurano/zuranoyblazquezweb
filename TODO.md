# Roadmap — Zurano y Blazquez Web

Seguimiento incremental del proyecto hasta la versión estable `v1.0.0`.
Cada versión se desarrolla en su propia rama, se prueba con `npm run build`,
se fusiona en `main` y se etiqueta.

> Decisión de arquitectura: las páginas de servicio se mantienen bajo
> `/servicios/<slug>/` (ya existentes y enlazadas) en lugar de rutas raíz como
> `/microsoft-365`, para no romper enlaces internos ni el sitemap.

## Estado de versiones

- [x] **v0.1.0** — Baseline inicial del proyecto.
- [x] **v0.2.0** — Mejora visual y responsive.
- [x] **v0.3.0** — Páginas individuales de servicios (contenido y enlaces).
- [x] **v0.4.0** — SEO básico y metadatos.
- [x] **v0.5.0** — Blog inicial (Content Collections + 3 artículos).
- [x] **v0.6.0** — Formulario de contacto funcional (Formsubmit).
- [x] **v0.7.0** — Páginas legales y privacidad.
- [x] **v0.8.0** — Rendimiento, accesibilidad y calidad.
- [x] **v0.9.0** — Preparación para despliegue en VPS.
- [x] **v1.0.0** — Versión estable lista para publicar. 🎉
- [x] **v1.0.2** — Modo claro / modo oscuro (selector de tema).

## Pendientes conocidos / notas

- Los textos legales son **provisionales** y deben revisarse por asesoría legal.
- El formulario de contacto requiere verificación real una vez publicado el dominio.
- La imagen Open Graph (`/og-default.svg`) es provisional; sustituir por PNG/JPG 1200×630 definitivo.
