const form = document.getElementById("form");
const searchFilm = document.getElementById("searchFilm");
const filmResults = document.getElementById("filmResults");
import { render } from "/utils.js";

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

async function getResults(data) {
  filmResults.innerHTML = "";
  for (let i = 0; i < data.Search.length; i++) {
    const id = data.Search[i].imdbID;
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=9cac240a&i=${id}`
    );

    const film = await response.json();
    filmResults.innerHTML += render(film);

    let addToWatchlist = Array.from(document.querySelectorAll("button"));
    for (let btn of addToWatchlist) {
      btn.addEventListener("click", () => {
        console.log("hello");
      });
    }
  }
}
