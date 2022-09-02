const form = document.getElementById("form");
const searchFilm = document.getElementById("searchFilm");

import { getResults } from "/utils.js";

form.addEventListener("submit", getFilm);

function getFilm(event) {
  event.preventDefault();
  const key = "9cac240a";
  const film = searchFilm.value;
  fetch(`https://www.omdbapi.com/?apikey=${key}&s=${film}&plot=full&type=movie`)
    .then((response) => response.json())
    .then((data) => {
      getResults(data);
    });
}
