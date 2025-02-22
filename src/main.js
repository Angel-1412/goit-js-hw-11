import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { fetchImages } from "./js/pixabay-api";
import { renderGallery } from "./js/render-function";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("search-form");
  const input = document.getElementById("search-input");
  const gallery = document.querySelector(".gallery");
  const loader = document.getElementById("loader");

  function showLoader() {
    loader.style.display = "block";
  }

  function hideLoader() {
    loader.style.display = "none";
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const query = input.value.trim();

    if (query === "") {
      iziToast.warning({
        title: "⚠️ Попередження",
        message: "Поле пошуку не може бути порожнім!",
        position: "topRight",
      });
      return;
    }

    gallery.innerHTML = ""; // Очищуємо галерею перед новим пошуком
    showLoader(); // Показуємо індикатор завантаження

    try {
      const images = await fetchImages(query);

      if (images.length === 0) {
        iziToast.info({
          message: "Sorry, there are no images matching your search query. Please try again!",
          position: "topRight",
        });
        return;
      }

      renderGallery(images, gallery);
    } catch (error) {
      iziToast.error({
        title: "❌ Помилка",
        message: "Не вдалося виконати запит. Спробуйте ще раз!",
        position: "topRight",
      });
    } finally {
      hideLoader(); // Ховаємо індикатор завантаження
    }
  });
});