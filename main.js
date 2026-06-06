const phoneNumber = "917630116";
const displayPhone = "917 63 01 16";
const address = "C. del Mar Caspio, 39, Hortaleza, 28033 Madrid";
const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Casa%20Florencio%20Calle%20Mar%20Caspio%2039%20Madrid";

const gallery = [
  ["plato-cazuela.webp", "Cazuela de la casa"],
  ["calamares.webp", "Calamares con limon"],
  ["huevos-rotos.webp", "Huevos rotos"],
  ["entrecot.webp", "Entrecot a la plancha"],
  ["tortilla.webp", "Tortilla espanola"],
  ["croquetas.webp", "Croquetas"],
  ["pollo-frito.webp", "Racion para compartir"],
  ["pulpo-pimientos.webp", "Pulpo con pimientos"],
  ["sardinas.webp", "Sardinas"],
  ["percebes.webp", "Marisco"],
  ["mejillones.webp", "Mejillones"],
  ["tomate-ventresca.webp", "Tomate con ventresca"],
];

const menuHighlights = [
  {
    title: "De la casa",
    text: "Raciones honestas, platos de siempre y cocina de barrio preparada para compartir sin prisa.",
  },
  {
    title: "Para compartir",
    text: "Croquetas, huevos rotos, jamon, tortilla, frituras y entrantes para empezar la mesa.",
  },
  {
    title: "Mar salada",
    text: "Calamares, sardinas, mejillones, percebes y sugerencias del dia segun temporada.",
  },
  {
    title: "Carnes y parrilla",
    text: "Entrecot, carnes a la plancha y platos contundentes para una comida castiza.",
  },
];

document.querySelector("#app").innerHTML = `
  <header class="site-header" data-header>
    <a class="brand" href="#inicio" aria-label="Ir al inicio">
      <span class="brand-mark">CF</span>
      <span>Casa Florencio</span>
    </a>
    <button class="menu-toggle" type="button" aria-label="Abrir menu" aria-expanded="false" data-menu-toggle>
      <span></span><span></span><span></span>
    </button>
    <nav class="main-nav" data-nav>
      <a href="#carta">Carta</a>
      <a href="#galeria">Galeria</a>
      <a href="#horarios">Horarios</a>
      <a href="#ubicacion">Ubicacion</a>
      <a class="nav-call" href="tel:${phoneNumber}">Llamar</a>
    </nav>
  </header>

  <main>
    <section class="hero" id="inicio" aria-label="Casa Florencio">
      <picture>
        <source srcset="./images/entrecot.webp" media="(min-width: 900px)" />
        <img src="./images/plato-cazuela.webp" alt="Plato tradicional servido en Casa Florencio" />
      </picture>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <p class="eyebrow">Bar restaurante en Hortaleza</p>
        <h1>Casa Florencio</h1>
        <p class="hero-copy">
          Cocina tradicional, raciones generosas y mesa de barrio para comer como en casa.
        </p>
        <div class="hero-actions">
          <a class="button primary" href="tel:${phoneNumber}">Llamar ahora</a>
          <a class="button secondary" href="${mapsUrl}" target="_blank" rel="noopener">Ver en Maps</a>
        </div>
      </div>
      <aside class="hero-note" aria-label="Informacion rapida">
        <strong>${displayPhone}</strong>
        <span>${address}</span>
      </aside>
    </section>

    <section class="intro section-shell">
      <div class="intro-copy">
        <p class="eyebrow">Cocina de siempre</p>
        <h2>Una barra cercana, una mesa sencilla y platos que no necesitan artificio.</h2>
      </div>
      <p>
        Casa Florencio mantiene el pulso del bar restaurante tradicional: desayunos, raciones,
        carnes, pescado, platos del dia y una bodega pensada para acompanar la comida.
      </p>
    </section>

    <section class="menu-section" id="carta">
      <div class="section-shell section-heading">
        <p class="eyebrow">Carta</p>
        <h2>Sabores castizos para mesa, barra y sobremesa.</h2>
      </div>
      <div class="menu-grid section-shell">
        ${menuHighlights
          .map(
            (item) => `
              <article class="menu-item">
                <h3>${item.title}</h3>
                <p>${item.text}</p>
              </article>
            `
          )
          .join("")}
      </div>
      <div class="menu-photos section-shell" aria-label="Fotos de carta">
        <img src="./images/carta-casa.webp" alt="Carta de Casa Florencio con platos de la casa" loading="lazy" />
        <img src="./images/carta-bodega.webp" alt="Carta y bodega de Casa Florencio" loading="lazy" />
        <img src="./images/carta-pinchos.webp" alt="Carta de pinchos y sugerencias" loading="lazy" />
      </div>
      <div class="section-shell menu-note">
        <p>Los precios y platos exactos deben revisarse en la carta actual del local antes de publicar cambios definitivos.</p>
      </div>
    </section>

    <section class="gallery-section" id="galeria">
      <div class="section-shell section-heading">
        <p class="eyebrow">Galeria</p>
        <h2>Raciones, cazuelas y platos reconocibles desde el primer vistazo.</h2>
      </div>
      <div class="photo-grid">
        ${gallery
          .map(
            ([src, alt]) => `
              <figure>
                <img src="./images/${src}" alt="${alt}" loading="lazy" />
              </figure>
            `
          )
          .join("")}
      </div>
    </section>

    <section class="visit-section" id="horarios">
      <div class="section-shell visit-layout">
        <div>
          <p class="eyebrow">Visitanos</p>
          <h2>Comida tradicional en el barrio de Hortaleza.</h2>
          <p>
            Para reservar o confirmar disponibilidad, llama directamente al restaurante.
          </p>
        </div>
        <div class="hours">
          <h3>Horario habitual</h3>
          <dl>
            <div><dt>Lunes a viernes</dt><dd>08:00 - 00:00</dd></div>
            <div><dt>Sabado</dt><dd>12:30 - 00:00</dd></div>
            <div><dt>Domingo</dt><dd>Cerrado</dd></div>
          </dl>
          <p>Horario pendiente de confirmar antes de la publicacion final.</p>
        </div>
      </div>
    </section>

    <section class="location-section" id="ubicacion">
      <div class="section-shell location-layout">
        <div>
          <p class="eyebrow">Ubicacion</p>
          <h2>${address}</h2>
          <div class="location-actions">
            <a class="button primary" href="tel:${phoneNumber}">Llamar ${displayPhone}</a>
            <a class="button dark" href="${mapsUrl}" target="_blank" rel="noopener">Abrir en Google Maps</a>
          </div>
        </div>
        <a class="map-panel" href="${mapsUrl}" target="_blank" rel="noopener" aria-label="Abrir Casa Florencio en Google Maps" style="--map-image: url('./images/tomate-ventresca.webp')">
          <span>Casa Florencio</span>
          <strong>Ver ubicacion en Maps</strong>
          <small>${address}</small>
        </a>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="section-shell footer-layout">
      <div>
        <strong>Casa Florencio</strong>
        <p>Bar restaurante de cocina tradicional en Hortaleza, Madrid.</p>
      </div>
      <div>
        <a href="tel:${phoneNumber}">${displayPhone}</a>
        <a href="${mapsUrl}" target="_blank" rel="noopener">Google Maps</a>
      </div>
    </div>
  </footer>
`;

const menuToggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");
const header = document.querySelector("[data-header]");

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  header.classList.toggle("menu-open", isOpen);
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    header.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const revealTargets = document.querySelectorAll(
  ".intro, .menu-item, .menu-photos img, .photo-grid figure, .visit-layout, .location-layout"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

revealTargets.forEach((target) => observer.observe(target));
