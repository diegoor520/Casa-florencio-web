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

const writtenMenu = [
  {
    category: "Para compartir",
    dishes: [
      ["Croquetas caseras", "Cremosas por dentro, crujientes por fuera y pensadas para empezar la mesa."],
      ["Huevos rotos", "Patatas, huevo y embutido en una racion de sabor castizo."],
      ["Jamon", "Corte tradicional para acompanar con pan y bebida."],
      ["Tortilla espanola", "Pincho clasico de barra, jugoso y reconocible."],
    ],
  },
  {
    category: "De la casa",
    dishes: [
      ["Cazuela de la casa", "Plato caliente de cocina tradicional, servido en barro."],
      ["Racion para compartir", "Propuesta generosa para una comida informal y cercana."],
      ["Tomate con ventresca", "Ensalada fresca con tomate, ventresca, cebolla y aceitunas."],
    ],
  },
  {
    category: "Mar salada",
    dishes: [
      ["Calamares", "Fritura dorada con limon, ideal para compartir."],
      ["Sardinas", "Pescado sencillo de sabor intenso y presentacion clasica."],
      ["Mejillones", "Racion marinera con guarnicion fresca."],
      ["Percebes", "Marisco para ocasiones especiales, segun disponibilidad."],
    ],
  },
  {
    category: "Carnes y parrilla",
    dishes: [
      ["Entrecot a la plancha", "Carne marcada al punto con patatas y pimientos."],
      ["Pulpo con pimientos", "Pulpo troceado con pimientos asados y aceite de oliva."],
      ["Platos del dia", "Sugerencias de cocina tradicional segun temporada y disponibilidad."],
    ],
  },
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

const addWrittenMenu = () => {
  const menuPhotos = document.querySelector(".menu-photos");
  if (!menuPhotos || document.querySelector(".written-menu")) return;

  const menu = document.createElement("div");
  menu.className = "written-menu section-shell";
  menu.setAttribute("aria-label", "Carta escrita");
  menu.innerHTML = writtenMenu
    .map(
      (group) => `
        <article class="written-menu-group">
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

  menuPhotos.insertAdjacentElement("afterend", menu);
};

addGalleryLabels();
addWrittenMenu();
