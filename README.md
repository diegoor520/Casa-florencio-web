# Casa Florencio Web

Web estática sin dependencias para Casa Florencio, preparada para publicarse en GitHub Pages.

## Datos usados

- Nombre: Casa Florencio
- Tipo: bar restaurante de cocina tradicional
- Dirección: C. del Mar Caspio, 39, Hortaleza, 28033 Madrid
- Teléfono: 917 63 01 16
- CTAs activos: llamada telefónica y Google Maps
- Sin email, sin redes sociales y sin enlace a web externa

## Datos pendientes de revisión antes de publicar

- Horario habitual mostrado:
  - Lunes a viernes: 08:00 - 00:00
  - Sábado: 12:30 - 00:00
  - Domingo: cerrado
- Carta y precios: la web incluye los precios visibles en las fotos de carta seleccionadas.

## Desarrollo

```bash
npm run dev
```

## Validación

```bash
npm run build
```

## Publicación en GitHub Pages

El repositorio incluye `.github/workflows/deploy.yml`. Para publicar:

1. Subir estos archivos a un repositorio de GitHub.
2. Activar GitHub Pages con fuente `GitHub Actions`.
3. Hacer push a la rama `main`.

El workflow valida los archivos y publica la web estática directamente.

## Estructura

- `index.html`: entrada principal.
- `main.js`: contenido y comportamiento del menú móvil.
- `styles.css`: diseño responsive.
- `images/`: fotos optimizadas en formato WebP.
- `.github/workflows/deploy.yml`: publicación con GitHub Actions.
