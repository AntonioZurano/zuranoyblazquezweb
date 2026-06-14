# zuranoyblazquezweb

Sitio web corporativo de **Zurano y Blázquez** — asesoría jurídica y empresarial — desarrollado con [Astro](https://astro.build) y [Tailwind CSS](https://tailwindcss.com), listo para desplegar en VPS.

## Tecnologías

- [Astro](https://astro.build) v4
- [Tailwind CSS](https://tailwindcss.com) v3 (integración `@astrojs/tailwind`)
- TypeScript

## Estructura del proyecto

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Services.astro
│   │   ├── About.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## Desarrollo local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo (http://localhost:4321)
npm run dev

# Generar build de producción
npm run build

# Previsualizar el build
npm run preview
```

## Despliegue en VPS

1. Ejecutar `npm run build` para generar los archivos estáticos en `dist/`.
2. Copiar el contenido de `dist/` al directorio raíz del servidor web (Nginx o Apache).
3. Configurar el servidor para servir `index.html` para todas las rutas.

### Ejemplo de configuración Nginx

```nginx
server {
    listen 80;
    server_name zuranoyblazquez.com www.zuranoyblazquez.com;
    root /var/www/zuranoyblazquezweb/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

