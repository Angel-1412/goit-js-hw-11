import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export function renderGallery(images, galleryElement) {
  if (images.length === 0) {
    galleryElement.innerHTML = "<p>Sorry, there are no images matching your search query. Please try again!</p>";
    return;
  }

  const markup = images
    .map(
      (image) => `
      <div class="image-card">
        <a href="${image.largeImageURL}" target="_blank">
          <img src="${image.webformatURL}" alt="${image.tags}">
        </a>
        <div class="info">
          <p>Likes <span>${image.likes}</span></p>
          <p>Views <span>${image.views}</span></p>
          <p>Comments <span>${image.comments}</span></p>
          <p>Downloads <span>${image.downloads}</span></p>
        </div>
      </div>`
    )
    .join("");

  galleryElement.innerHTML = markup;
  
  const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
  lightbox.refresh();
}

export function showLoader(loaderElement) {
  loaderElement.classList.add("loading-spinner");
  loaderElement.style.display = "block";
}

export function hideLoader(loaderElement) {
  loaderElement.style.display = "none";
}
