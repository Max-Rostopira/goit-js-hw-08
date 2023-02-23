// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line



const galleryList = document.querySelector('.gallery');
const renderGalleryListItem = (img) => img.reduce((acc,{preview, original, description}) => acc +`<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`, '');

const incertListItem = ( string) => {
galleryList.insertAdjacentHTML('beforeend', string);
};

const result = renderGalleryListItem(galleryItems);
incertListItem(result);

const lightbox = new SimpleLightbox('.gallery a', {
    captionData: 'alt', captionPosition: 'bottom', captionDelay: 250
});
