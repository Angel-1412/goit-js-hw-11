import axios from "axios";

const API_KEY = "48926224-1e282cfdad2000a03e206ba59";
const BASE_URL = "https://pixabay.com/api/";

export async function fetchImages(query) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        t: Date.now(),
      },
    });

    return response.data.hits;
  } catch (error) {
    console.error("Помилка запиту:", error);
    throw new Error("Не вдалося отримати дані з Pixabay.");
  }
}