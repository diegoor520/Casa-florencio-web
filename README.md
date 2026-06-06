# Casa Florencio Web

Web estatica sin dependencias para Casa Florencio, preparada para publicarse en GitHub Pages.

## Datos usados

- Nombre: Casa Florencio
- Tipo: bar restaurante de cocina tradicional
- Direccion: C. del Mar Caspio, 39, Hortaleza, 28033 Madrid
- Telefono: 917 63 01 16
- CTAs activos: llamada telefonica y Google Maps
- Sin email, sin redes sociales y sin enlace a web externa

## Datos pendientes de revision antes de publicar

- Horario habitual mostrado:
  - Lunes a viernes: 08:00 - 00:00
  - Sabado: 12:30 - 00:00
  - Domingo: cerrado
- Carta y precios exactos: se muestran categorias y fotos de carta, pero no se transcriben precios para evitar errores.

## Desarrollo

```bash
npm run dev
```

## Validacion

```bash
npm run build
```

## Publicacion en GitHub Pages

El repositorio incluye `.github/workflows/deploy.yml`. Para publicar:

1. Subir estos archivos a un repositorio de GitHub.
2. Activar GitHub Pages con fuente `GitHub Actions`.
3. Hacer push a la rama `main`.

El workflow valida los archivos y publica la web estatica directamente.

## Estructura

- `index.html`: entrada principal.
- `main.js`: contenido y comportamiento del menu movil.
- `styles.css`: diseno responsive.
- `images/`: fotos optimizadas en formato WebP.
- `.github/workflows/deploy.yml`: publicacion con GitHub Actions.
