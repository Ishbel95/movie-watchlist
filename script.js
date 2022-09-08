import { getResults } from "./utils";
const form = document.getElementById("form");
const searchFilm = document.getElementById("searchFilm");

form.addEventListener("submit", getFilm);
async function getFilm(event) {
  event.preventDefault();
  const film = searchFilm.value;
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=9cac240a&s=${film}&plot=full&type=movie`
  );
  const data = await response.json();
  getResults(data);
}
