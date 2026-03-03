import "simplelightbox/dist/simple-lightbox.min.css";
import { images } from "./images.js";

globalThis.global = globalThis;

const mod = await import("simplelightbox");
const SimpleLightboxCtor = mod.default ?? mod;

const galleryEl = document.querySelector(".gallery");

const markup = images
  .map(
    ({ preview, original, description }) => `
      <li class="gallery-item">
        <a class="gallery-link" href="${original}">
          <img class="gallery-image" src="${preview}" alt="${description}" />
        </a>
      </li>
    `,
  )
  .join("");

galleryEl.innerHTML = markup;

const lightbox = new SimpleLightboxCtor(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,

  showCounter: true,
  nav: true,
  close: true,
  enableKeyboard: true,
});

lightbox.refresh();
