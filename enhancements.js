const galleryLabels = [
  {
    title: "Cazuela de la casa",
    description: "Guiso tradicional servido en barro, con sabor profundo y mesa de cuchara.",
  },
  {
    title: "Calamares",
    description: "Fritura clásica, dorada y ligera, acompañada de limón.",
  },
  {
    title: "Huevos rotos",
    description: "Patatas, huevo y embutido en una ración sencilla y contundente.",
  },
  {
    title: "Entrecot a la plancha",
    description: "Carne marcada a la plancha con guarnición de patata y pimientos.",
  },
  {
    title: "Tortilla española",
    description: "Pincho de tortilla jugosa, perfecto para barra o desayuno.",
  },
  {
    title: "Croquetas caseras",
    description: "Bocado cremoso por dentro y crujiente por fuera.",
  },
  {
    title: "Ración para compartir",
    description: "Plato generoso para abrir mesa entre amigos o familia.",
  },
  {
    title: "Pulpo con pimientos",
    description: "Pulpo troceado con pimientos asados y aceite de oliva.",
  },
  {
    title: "Sardinas",
    description: "Pescado sencillo, sabroso y servido con limón.",
  },
  {
    title: "Percebes",
    description: "Marisco de sabor intenso para una mesa especial.",
  },
  {
    title: "Mejillones",
    description: "Mejillones al punto, con guarnición fresca y toque marinero.",
  },
  {
    title: "Tomate con ventresca",
    description: "Tomate, ventresca, cebolla y aceitunas en una ensalada directa y fresca.",
  },
];

const fullMenu = [
  {
    category: "De la casa",
    dishes: [
      ["Callos a la madrileña", "Ración pequeña.", "8,00 €"],
      ["Callos a la madrileña", "Ración grande.", "15,00 €"],
      ["Conejo al ajillo", "Guiso tradicional con ajo.", "25,00 €"],
      ["Conejo con pimientos verdes y tomate", "Conejo guisado con verdura y tomate.", "25,00 €"],
      ["Parrillada de carne", "Con pimientos y patatas para dos personas.", "28,00 €"],
      ["Rabo de toro", "Guiso tradicional de carne.", "18,00 €"],
    ],
  },
  {
    category: "Para compartir",
    dishes: [
      ["Croquetas caseras", "Cremosas por dentro y crujientes por fuera.", "8,00 €"],
      ["Surtido de ibéricos", "Selección de embutidos para compartir.", "22,00 €"],
      ["Jamón ibérico", "Jamón de corte tradicional.", "20,00 €"],
      ["Lomo de bellota", "Embutido ibérico de sabor suave e intenso.", "20,00 €"],
      ["Chorizo de Guijuelo", "Chorizo ibérico para tabla o ración.", "12,00 €"],
      ["Salchichón ibérico", "Embutido clásico de mesa.", "12,00 €"],
      ["Morcilla de Burgos", "Morcilla tradicional ideal para compartir.", "12,00 €"],
      ["Chistorra de Navarra", "Con pimientos de Padrón y patatas.", "12,00 €"],
    ],
  },
  {
    category: "Nuestras carnes",
    dishes: [
      ["Solomillo a la parrilla", "Solomillo marcado a la parrilla.", "22,00 €"],
      ["Entrecot de ternera", "Carne a la plancha con guarnición.", "20,00 €"],
      ["Chuletillas de lechal", "Carne de lechal preparada a la parrilla.", "18,00 €"],
      ["Otras carnes variadas", "Consultar disponibilidad en el local.", "S/M"],
    ],
  },
  {
    category: "De la mar salada",
    dishes: [
      ["Pulpo clásico a la gallega", "Pulpo preparado al estilo gallego.", "20,00 €"],
      ["Calamares a la romana", "Fritura dorada con limón.", "12,00 €"],
      ["Chopitos a la andaluza", "Fritura pequeña, crujiente y marinera.", "12,00 €"],
      ["Gambas a la plancha", "Gambas de Huelva preparadas a la plancha.", "22,00 €"],
      ["Ración de pan", "Servicio de pan.", "0,60 €"],
    ],
  },
  {
    category: "Huevos rotos",
    dishes: [
      ["Jamón ibérico", "Patatas fritas y pimientos de Padrón.", "12,00 €"],
      ["Chistorra camperos", "Morcilla, chistorra y pimientos.", "12,00 €"],
      ["Patatas fritas con nuestros pimientos", "Guarnición sencilla y castiza.", "Consultar"],
    ],
  },
  {
    category: "De la huerta",
    dishes: [
      ["Ensalada de pimientos y ventresca", "Pimientos asados en casa con ventresca.", "12,00 €"],
      ["Ensalada de tomate", "Con cebolleta, ventresca, aceite de oliva y sal.", "12,00 €"],
      ["Ensalada mixta", "La ensalada de toda la vida.", "12,00 €"],
      ["Ensalada Casa Florencio", "Tomate pelado, aceitunas, espárragos, bonito y pimientos.", "15,00 €"],
      ["Espárragos blancos", "Ración fría y sencilla de huerta.", "10,00 €"],
    ],
  },
  {
    category: "Obrador",
    dishes: [
      ["Postres de la casa", "Postres caseros disponibles en el local.", "4,00 €"],
      ["Frutas del tiempo", "Fruta de temporada.", "4,00 €"],
    ],
  },
  {
    category: "Bebidas",
    dishes: [
      ["Copa de cerveza", "Bebida de barra.", "3,00 €"],
      ["Tinto de verano", "Refresco clásico de terraza.", "3,00 €"],
      ["Refresco", "Bebida fría.", "2,50 €"],
      ["Copa de vino blanco Rueda", "Vino blanco por copa.", "2,50 €"],
      ["Copa de Rioja crianza", "Vino tinto por copa.", "2,80 €"],
      ["Copa de Ribera crianza", "Vino tinto por copa.", "2,80 €"],
      ["Café", "Servicio de café.", "1,50 €"],
      ["Combinado nacional", "Copa nacional.", "5,00 €"],
      ["Combinado importación", "Copa de importación.", "6,00 €"],
      ["Ron premium", "Copa premium.", "8,00 €"],
      ["Ginebra premium", "Copa premium.", "8,00 €"],
      ["Whisky reserva", "Copa reserva.", "10,00 €"],
      ["Licores", "Servicio de sobremesa.", "3,00 €"],
    ],
  },
  {
    category: "Bodega",
    dishes: [
      ["Señorío de los Llanos", "Vino de la bodega.", "9,00 €"],
      ["Beronia crianza", "Vino tinto crianza.", "18,00 €"],
      ["Azpilicueta crianza", "Vino tinto crianza.", "18,00 €"],
      ["Blancos de Rueda", "Vino blanco.", "15,00 €"],
      ["Barbadillo", "Vino blanco.", "15,00 €"],
      ["Rosados", "Selección de rosados.", "15,00 €"],
      ["Marqués de Soria crianza", "Vino tinto crianza.", "18,00 €"],
    ],
  },
];

const menuPhotoItems = [
  ["carta-casa.webp", "Carta de platos de la casa"],
  ["carta-bodega.webp", "Carta de huerta, bebidas y bodega"],
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
  menu.setAttribute("aria-label", "Menú completo");
  menu.innerHTML = fullMenu
    .map(
      (group) => `
        <article class="full-menu-group">
          <h3>${group.category}</h3>
          <ul>
            ${group.dishes
              .map(
                ([name, description, price]) => `
                  <li>
                    <div>
                      <strong>${name}</strong>
                      <span>${description}</span>
                    </div>
                    <em>${price}</em>
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
