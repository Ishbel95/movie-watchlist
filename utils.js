import { addMovie } from "/watchlist.js";
const filmResults = document.getElementById("filmResults");
let html;

async function getResults(data) {
  filmResults.innerHTML = "";
  for (let i = 0; i < data.Search.length; i++) {
    const id = data.Search[i].imdbID;
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=9cac240a&i=${id}`
    );

    const film = await response.json();

    if (
      film.Poster !== "N/A" &&
      film.Title !== "N/A" &&
      film.imdbRating !== "N/A" &&
      film.Runtime !== "N/A" &&
      film.Genre !== "N/A" &&
      film.Plot !== "N/A"
    ) {
      let buttonHtml = `<i class="fa-solid fa-circle-plus" id="${film.imdbID}"></i>`;
      html = `
                  <div class="film-poster-container">
                     <img src="${film.Poster}" alt="${film.Title} poster"/>
                  </div>
                  <div class="film-details-container">
                     <div>
                         <h2>${film.Title}<span>${film.imdbRating}</span></h2>
                      </div>
                      <div>
                         <p>
                           <span>${film.Runtime}</span>
                           <span>${film.Genre}</span>
                         </p>
                          <button class="addToWatchList" >
                            ${buttonHtml}
                         </button><span>Watchlist</span>
                      </div>
                      <div>
                         <p>${film.Plot}<p>
                      </div>
                  </div>`;
      filmResults.innerHTML += html;
    }
    addMovie();
  }
}

export { getResults };
