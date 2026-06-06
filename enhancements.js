const galleryLabels = [
  {
    title: "Cazuela de la casa",
    description: "Guiso tradicional servido en barro, con sabor profundo y mesa de cuchara.",
  },
  {
    title: "Calamares",
    description: "Fritura clasica, dorada y ligera, acompanada de limon.",
  },
  {
    title: "Huevos rotos",
    description: "Patatas, huevo y embutido en una racion sencilla y contundente.",
  },
  {
    title: "Entrecot a la plancha",
    description: "Carne marcada a la plancha con guarnicion de patata y pimientos.",
  },
  {
    title: "Tortilla espanola",
    description: "Pincho de tortilla jugosa, perfecto para barra o desayuno.",
  },
  {
    title: "Croquetas caseras",
    description: "Bocado cremoso por dentro y crujiente por fuera.",
  },
  {
    title: "Racion para compartir",
    description: "Plato generoso para abrir mesa entre amigos o familia.",
  },
  {
    title: "Pulpo con pimientos",
    description: "Pulpo troceado con pimientos asados y aceite de oliva.",
  },
  {
    title: "Sardinas",
    description: "Pescado sencillo, sabroso y servido con limon.",
  },
  {
    title: "Percebes",
    description: "Marisco de sabor intenso para una mesa especial.",
  },
  {
    title: "Mejillones",
    description: "Mejillones al punto, con guarnicion fresca y toque marinero.",
  },
  {
    title: "Tomate con ventresca",
    description: "Tomate, ventresca, cebolla y aceitunas en una ensalada directa y fresca.",
  },
];

const fullMenu = [
  {
    category: "Aperitivos y conservas",
    dishes: [
      ["Boquerones en vinagre", "Conserva clasica para abrir boca."],
      ["Anchoas del Cantabrico", "Anchoas de sabor intenso y salino."],
      ["Anchoas de Santona especiales", "Seleccion especial de anchoas."],
      ["Matrimonio", "Boqueron y anchoa en una combinacion tradicional."],
    ],
  },
  {
    category: "Para compartir",
    dishes: [
      ["Croquetas caseras", "Cremosas por dentro, crujientes por fuera y pensadas para empezar la mesa."],
      ["Surtido de ibericos", "Seleccion de embutidos para compartir."],
      ["Cecina", "Corte curado de sabor profundo."],
      ["Pate de perdiz", "Entrante clasico para acompanar con pan."],
      ["Jamon iberico", "Jamon de corte tradicional."],
      ["Lomo de bellota", "Embutido iberico de sabor suave e intenso."],
      ["Chorizo de Guijuelo", "Chorizo iberico para tabla o racion."],
      ["Salchichon iberico", "Embutido clasico de mesa."],
      ["Queso de oveja 100%", "Queso curado de oveja."],
      ["Morcilla de Burgos", "Morcilla tradicional, ideal para compartir."],
      ["Chistorra de Navarra con pimientos", "Chistorra con pimientos como racion caliente."],
      ["Lacon a la gallega", "Lacon con presentacion clasica."],
      ["Lacon de la casa", "Racion de lacon al estilo de Casa Florencio."],
      ["Alitas de pollo", "Racion de pollo para compartir."],
    ],
  },
  {
    category: "Huevos rotos",
    dishes: [
      ["Huevos rotos con jamon iberico", "Patatas fritas, jamon iberico y pimientos de Padron."],
      ["Huevos rotos camperos", "Patatas fritas con morcilla, chistorra y pimientos."],
    ],
  },
  {
    category: "De la huerta",
    dishes: [
      ["Ensalada de pimientos y ventresca", "Pimientos asados en casa con ventresca."],
      ["Ensalada de tomate con ventresca", "Tomate, cebolleta, ventresca, aceite de oliva y sal."],
      ["Ensalada mixta", "La ensalada de toda la vida."],
      ["Ensalada Casa Florencio", "Tomate pelado, aceitunas, esparragos, bonito y pimientos."],
      ["Alcachofas a la plancha", "Alcachofas con huevos de codorniz."],
      ["Esparragos blancos", "Racion fria y sencilla de huerta."],
      ["Ensalada templada de queso", "Ensalada con queso como protagonista."],
      ["Tomate alinado", "Tomate preparado con aceite y sal."],
    ],
  },
  {
    category: "De la casa",
    dishes: [
      ["Callos a la madrilena", "Disponibles en racion pequena o grande."],
      ["Conejo al ajillo", "Guiso tradicional con ajo."],
      ["Medio conejo al ajillo", "Media racion del clasico conejo al ajillo."],
      ["Conejo con pimientos verdes y tomate", "Conejo guisado con verdura y tomate."],
      ["Medio conejo con pimientos verdes y tomate", "Media racion de conejo con pimientos y tomate."],
      ["Parrillada de carne", "Parrillada con pimientos y patatas para dos personas."],
      ["Rabo de toro", "Guiso tradicional de carne."],
      ["Fritura con ensalada", "Fritura acompanada de ensalada."],
    ],
  },
  {
    category: "Nuestras carnes",
    dishes: [
      ["Chuletillas de cordero", "Carne de cordero preparada a la parrilla."],
      ["Solomillo a la parrilla", "Solomillo marcado a la parrilla."],
      ["Entrecot de ternera", "Carne a la plancha con guarnicion."],
      ["Chuleton", "Corte contundente para los amantes de la carne."],
      ["Presa iberica", "Corte iberico sabroso y jugoso."],
      ["Otras carnes variadas", "Consultar disponibilidad en el local."],
    ],
  },
  {
    category: "De la mar salada",
    dishes: [
      ["Calamares", "Fritura dorada con limon, ideal para compartir."],
      ["Pulpo clasico a la gallega", "Pulpo preparado al estilo gallego."],
      ["Chopitos a la andaluza", "Fritura pequena, crujiente y marinera."],
      ["Gambas a la plancha", "Gambas de Huelva preparadas a la plancha."],
      ["Boquerones fritos", "Pescado frito de sabor clasico."],
      ["Bienmesabe gaditano", "Adobo marinero al estilo gaditano."],
      ["Sepia a la plancha", "Sepia marcada a la plancha."],
      ["Calamar de potera a la plancha", "Calamar preparado a la plancha."],
      ["Rape al horno", "Rape con patatas panaderas, segun disponibilidad."],
      ["Fritura con ensalada", "Fritura marinera acompanada de ensalada."],
    ],
  },
  {
    category: "Obrador y postres",
    dishes: [
      ["Postres de la casa", "Postres caseros disponibles en el local."],
      ["Frutas del tiempo", "Fruta de temporada."],
    ],
  },
  {
    category: "Platos de encargo",
    dishes: [
      ["Arroces", "Preparaciones por encargo."],
      ["Cabrito asado", "Plato especial bajo reserva."],
      ["Paletillas", "Asado por encargo."],
      ["Menu cocido madrileno", "Consultar condiciones y disponibilidad."],
      ["Platos fuera de carta", "Consultar platos del dia y sugerencias del local."],
    ],
  },
  {
    category: "Bebidas y bodega",
    dishes: [
      ["Cerveza, refrescos y copas", "Bebidas de barra para acompanar la comida."],
      ["Cafe, combinados y licores", "Servicio de sobremesa."],
      ["Vinos de la bodega", "Seleccion de vinos tintos, blancos, rosados y crianzas."],
    ],
  },
];

const menuPhotoItems = [
  ["carta-carnes.webp", "Carta completa de Casa Florencio"],
  ["carta-casa.webp", "Carta de platos de la casa"],
  ["carta-bodega.webp", "Carta de huerta, bebidas y bodega"],
  ["carta-vinos.webp", "Carta de vinos"],
  ["carta-pinchos.webp", "Menu para eventos y pinchos"],
  ["carta-mano.webp", "Carta impresa de Casa Florencio"],
];

const addGalleryLabels = () => {
  document.querySelectorAll(".photo-grid figure").forEach((figure, index) => {
    const label = galleryLabels[index];
    if (!label || figure.querySelector("figcaption")) return;

    const caption = document.createElement("figcaption");
    caption.className = "dish-label";
    caption.innerHTML = `
      <strong>${label.title}</strong>
      <span>${label.description}</span>
    `;
    figure.append(caption);
  });
};

const rebuildMenuSection = () => {
  const menuGrid = document.querySelector(".menu-grid");
  const menuPhotosElement = document.querySelector(".menu-photos");
  const menuNote = document.querySelector(".menu-note p");
  if (!menuGrid || !menuPhotosElement || document.querySelector(".full-menu")) return;

  const menu = document.createElement("div");
  menu.className = "full-menu section-shell";
  menu.setAttribute("aria-label", "Menu completo");
  menu.innerHTML = fullMenu
    .map(
      (group) => `
        <article class="full-menu-group">
          <h3>${group.category}</h3>
          <ul>
            ${group.dishes
              .map(
                ([name, description]) => `
                  <li>
                    <strong>${name}</strong>
                    <span>${description}</span>
                  </li>
                `
              )
              .join("")}
          </ul>
        </article>
      `
    )
    .join("");

  const photoMarkup = menuPhotoItems
    .map(([src, alt]) => `<img src="./images/${src}" alt="${alt}" loading="lazy" />`)
    .join("");

  menuGrid.replaceWith(menu);
  menuPhotosElement.innerHTML = photoMarkup;

  if (menuNote) {
    menuNote.textContent = "Los precios y la disponibilidad deben confirmarse en el local.";
  }
};

addGalleryLabels();
rebuildMenuSection();
