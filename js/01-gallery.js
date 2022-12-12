import { galleryItems } from "./gallery-items.js";
// Change code below this line

// query div from html
const gallery = document.querySelector(".gallery");

// iterated array of objects, created a markup according to the template,joined to a string
const htmlString = galleryItems
    .map(
        (obj) => `<div class="gallery__item">
<a class="gallery__link" href=${obj.original}>
  <img
    class="gallery__image"
    src=${obj.preview}
    data-source=${obj.original}
    alt=${obj.description}
  />
</a>
</div>`
    )
    .join("");

// added markup to div
gallery.innerHTML = htmlString;

//created EventListener for div
gallery.addEventListener("click", handleClick);

// created cb function
function handleClick(event) {
    if (event.target.nodeName !== "IMG") {
        return;
    }
    event.preventDefault();
    const original = event.target.dataset.source;
    const instance = basicLightbox.create(` <img
    src=${original}
    />`);
    instance.show();
}
