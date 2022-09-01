const form = document.getElementById("form");
const searchFilm = document.getElementById("searchFilm");
const filmResults = document.getElementById("filmResults");

form.addEventListener("submit", getFilm);

function getFilm(event) {
  event.preventDefault();
  const key = "9cac240a";
  const film = searchFilm.value;

  fetch(`http://www.omdbapi.com/?apikey=${key}&t=${film}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data) {
        filmResults.innerHTML = `
            <div class="film-poster-container">
               <img src="${data.Poster}" alt="${data.Title} poster"/>
            </div>
            <div class="film-details-container">
               <div>
                   <h2>${data.Title}</h2>
                   <span>${data.imdbRating}</span>
                </div>
                <div>
                   <p>${data.Runtime}</p>
                   <p>${data.Genre}</p>
                   <div><button><i class="fa-solid fa-circle-plus"></i></button<span>Watchlist</span></div>
                </div>
                <div>
                   <p>${data.Plot}<p>
                </div>
            </div>`;
      }
    });
}
