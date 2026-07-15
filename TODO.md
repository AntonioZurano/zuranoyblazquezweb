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
- [x] **v1.0.3** — Soporte multidioma Español / Inglés (`/en`).
- [x] **v1.1.0** — Refactor formulario de contacto + tipos compartidos.
- [x] **v1.1.2** — Migración i18n a TypeScript.
- [x] **v1.1.3** — Corrección del árbol de proyecto en README.
- [x] **v1.1.4** — Pulido i18n: blog, tema, servicios ES centralizados y alias de imports.
- [x] **v1.1.5** — Traducción de artículos del blog al inglés y rutas `/en/blog/`.
- [x] **v1.1.6** — Cambio textos políticas (aviso legal, privacidad y cookies ES; formulario).
- [x] **v1.1.6.1** — Alineación de textos legales con la configuración real del sitio.
- [x] **v1.1.7** — Auditoría: bugs de correctitud, SEO/JSON-LD, accesibilidad, formulario, tooling y limpieza de código muerto.
- [x] **v1.1.8** — Botón flotante de WhatsApp (wa.me) con mensaje ES/EN y teléfono de contacto enlazado a WhatsApp; sin plugins ni librerías externas.
- [x] **v1.1.9** — Eliminada la opción duplicada «Escríbenos»/«Write to us» del menú principal; se mantiene «Contacto» como botón destacado (ES/EN, escritorio y móvil).
- [x] **v1.1.9.1** — Corregida la visibilidad del icono del botón claro/oscuro en modo oscuro y mejorado el contraste (hover/focus).

## Pendientes conocidos / notas

- Textos legales en **español** oficiales (aviso legal, privacidad, cookies). **Inglés:** aviso legal y privacidad siguen como placeholders; sus enlaces redirigen a la versión oficial en español. Cookies policy traducida al inglés.
- El formulario de contacto (Formsubmit) requiere activación y prueba real en producción; sustituir `recipient` por el alias para no exponer el correo.
- Imagen Open Graph: `public/og-default.png` (1200×630) generada desde el SVG con `npm run og`.
- Criterio de marca: por decisión de negocio, el nombre se escribe **«ZURANO Y BLAZQUEZ» sin tilde** en todas las superficies (comercial y razón social) para evitar incompatibilidades.
