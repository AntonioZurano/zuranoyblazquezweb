# Guía de despliegue — zuranoyblazquez.com

Esta guía explica cómo generar y publicar la web de **Zurano y Blazquez** en un
VPS (con o sin Plesk). El proyecto es un **sitio estático**: el resultado del
build es una carpeta `dist/` con HTML, CSS y assets que se sirve directamente.

> Requisito: **Node.js 22.12+** (ver `.nvmrc`). Con nvm: `nvm use`.

---

## 1. Generar la build de producción

```bash
npm install      # instala dependencias (solo la primera vez o tras cambios)
npm run build    # genera el sitio estático en dist/
npm run preview  # (opcional) previsualiza la build en local antes de subir
```

Tras `npm run build`, la carpeta `dist/` contiene todo lo necesario:

```
dist/
├── index.html
├── 404.html
├── sitemap.xml
├── robots.txt
├── favicon.svg
├── og-default.svg · og-default.png
├── empresa/ · servicios/ · blog/ · contacto/ · gracias/ · (legales)/
└── _astro/            # CSS y JS optimizados
```

Comprueba que `dist/` se ha generado sin errores antes de continuar.

---

## 2. Configuración previa del dominio

La URL del sitio ya está fijada en `astro.config.mjs`:

```js
site: 'https://zuranoyblazquez.com'
```

Esto afecta al **sitemap** (`/sitemap.xml`), a las **URLs canónicas** y a las
etiquetas Open Graph. Si cambia el dominio, actualiza este valor y también
`url`/`domain` en `src/data/site.ts`, y vuelve a compilar.

---

## 3. Estrategia de despliegue

### Opción A — VPS con Plesk

1. **Crea el dominio** `zuranoyblazquez.com` en Plesk (Sitios web y dominios → Añadir dominio).
2. En **Hosting**, fija la raíz de documentos (document root), por ejemplo `httpdocs`.
3. Genera la build en local (`npm run build`).
4. Sube el **contenido de `dist/`** (no la carpeta en sí) a `httpdocs` vía:
   - el **Administrador de archivos** de Plesk, o
   - **FTP/SFTP**, o
   - Git + un hook de despliegue.
5. En **SSL/TLS Certificates**, instala un certificado **Let's Encrypt** gratuito
   y activa la redirección permanente de HTTP a HTTPS.
6. Configura la **redirección www / no-www** (ver sección 4).

### Opción B — VPS con Nginx (sin panel)

1. Sube el contenido de `dist/` al servidor, por ejemplo a `/var/www/zuranoyblazquez`.
2. Configura un server block de Nginx:

   ```nginx
   server {
     listen 80;
     server_name zuranoyblazquez.com www.zuranoyblazquez.com;
     root /var/www/zuranoyblazquez;
     index index.html;

     # Páginas con formato "directory" (trailing slash)
     location / {
       try_files $uri $uri/ $uri.html /404.html;
     }

     error_page 404 /404.html;
   }
   ```

3. Instala SSL con Certbot:

   ```bash
   sudo certbot --nginx -d zuranoyblazquez.com -d www.zuranoyblazquez.com
   ```

4. Certbot añadirá la redirección a HTTPS automáticamente.

### Despliegue continuo (resumen)

```
1. npm run build        # en local o en CI
2. subir dist/*         # al document root del servidor
3. (opcional) limpiar archivos antiguos del servidor
```

---

## 4. Redirección www / no-www

Elige una versión canónica (recomendado: **sin www**, `zuranoyblazquez.com`) y
redirige la otra con un **301**.

- **Plesk**: Sitios web y dominios → Reglas de redirección / "Redirección permanente".
- **Nginx**:

  ```nginx
  server {
    listen 80;
    server_name www.zuranoyblazquez.com;
    return 301 https://zuranoyblazquez.com$request_uri;
  }
  ```

---

## 5. Checklist de publicación

Antes de dar la web por publicada, verifica:

- [ ] **DNS**: los registros A/AAAA (o CNAME) apuntan al VPS y han propagado.
- [ ] **Hosting**: el contenido de `dist/` está en el document root correcto.
- [ ] **SSL**: certificado válido y redirección HTTP → HTTPS activa.
- [ ] **www/no-www**: redirección 301 a la versión canónica.
- [ ] **Formulario**: activado en Formsubmit (correo de confirmación) y probado el envío real → redirige a `/gracias/`.
- [ ] **Páginas legales**: textos revisados por asesoría (dejan de ser provisionales).
- [ ] **Sitemap**: accesible en `https://zuranoyblazquez.com/sitemap.xml` con el dominio final.
- [ ] **robots.txt**: accesible y apuntando al sitemap correcto.
- [ ] **Favicon** y **imagen Open Graph** definitiva (sustituir el SVG provisional por PNG/JPG 1200×630).
- [ ] **Responsive** verificado en móvil, tablet y escritorio.
- [ ] **Enlaces** internos y externos sin roturas.
- [ ] **Search Console**: dominio verificado y sitemap enviado a Google.

---

## 6. Notas importantes

- **No publicar todavía** si faltan la revisión legal o la prueba real del formulario.
- La web no usa cookies no técnicas, por lo que **no requiere banner de cookies**.
- Cualquier cambio de contenido implica volver a ejecutar `npm run build` y subir `dist/`.
