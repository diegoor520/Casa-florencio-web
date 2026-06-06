import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const index = readFileSync(join(root, "index.html"), "utf8");
const main = readFileSync(join(root, "main.js"), "utf8");
const styles = readFileSync(join(root, "styles.css"), "utf8");
const allText = `${index}\n${main}\n${styles}`;

const requiredFiles = [
  "index.html",
  "main.js",
  "styles.css",
  "favicon.svg",
  "images/entrecot.webp",
  "images/plato-cazuela.webp",
  "images/carta-casa.webp",
  "images/carta-bodega.webp",
  "images/carta-pinchos.webp",
  ".github/workflows/deploy.yml",
];

const forbiddenPatterns = [
  /mailto:/i,
  /instagram\.com/i,
  /facebook\.com/i,
  /twitter\.com/i,
  /x\.com/i,
  /restaurantecasaflorencio\.shop/i,
  /lorem ipsum/i,
];

const errors = [];

for (const file of requiredFiles) {
  if (!existsSync(join(root, file))) {
    errors.push(`Missing required file: ${file}`);
  }
}

for (const pattern of forbiddenPatterns) {
  if (pattern.test(allText)) {
    errors.push(`Forbidden content found: ${pattern}`);
  }
}

const imageMatches = [...main.matchAll(/\.\/images\/([^"')]+)/g)]
  .map((match) => match[1])
  .filter((image) => !image.includes("${"));
for (const image of imageMatches) {
  if (!existsSync(join(root, "images", image))) {
    errors.push(`Missing image referenced in main.js: ${image}`);
  }
}

if (!/href="tel:\$\{phoneNumber\}"/.test(main)) {
  errors.push("Phone CTA is missing.");
}

if (!/Google Maps/.test(main) || !/google\.com\/maps/.test(main)) {
  errors.push("Google Maps CTA is missing.");
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log("Static validation passed.");
