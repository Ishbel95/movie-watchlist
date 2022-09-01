const form = document.getElementById("form");
const searchFilm = document.getElementById("searchFilm");
const filmResults = document.getElementById("filmResults");

form.addEventListener("submit", getFilm);

function getResults(data) {
  const key = "9cac240a";
  filmResults.innerHTML = "";
  for (let i = 0; i < data.Search.length; i++) {
    fetch(`http://www.omdbapi.com/?apikey=${key}&i=${data.Search[i].imdbID}`)
      .then((response) => response.json())
      .then((film) => {
        console.log(film);
        if (
          film.Poster !== "N/A" &&
          film.Title !== "N/A" &&
          film.imdbRating !== "N/A" &&
          film.Runtime !== "N/A" &&
          film.Genre !== "N/A" &&
          film.Plot !== "N/A"
        ) {
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
                <div>
                   <button>
                      <i class="fa-solid fa-circle-plus"></i>
                   </button>
                   <span>Watchlist</span>
                </div>
                </div>
                <div>
                   <p>${film.Plot}<p>
                </div>
            </div>`;
        } else {
          html = "";
        }
        filmResults.innerHTML += html;
      });
  }
}

function getFilm(event) {
  event.preventDefault();

  const key = "9cac240a";
  const film = searchFilm.value;
  fetch(`http://www.omdbapi.com/?apikey=${key}&s=${film}&plot=full&type=movie`)
    .then((response) => response.json())
    .then((data) => {
      getResults(data);
    });
}
