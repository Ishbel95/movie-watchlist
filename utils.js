function render(film) {
  if (
    film.Poster !== "N/A" &&
    film.Title !== "N/A" &&
    film.imdbRating !== "N/A" &&
    film.Runtime !== "N/A" &&
    film.Genre !== "N/A" &&
    film.Plot !== "N/A"
  ) {
    let buttonHtml = `<i class="fa-solid fa-circle-plus"></i>`;
    return `
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
                      <button class="addToWatchlist" id="watchlist-id-${film.imdbID}" >
                        ${buttonHtml}
                     </button><span>Watchlist</span>
                  </div>
                  <div>
                     <p>${film.Plot}<p>
                  </div>
              </div>`;
  }
}

export { render };

// const button = document.getElementById(`watchlist-id-${film.imdbID}`);
// button.addEventListener("click", () => {
//   console.log(film.imdbID);
// });
// let btns = document.querySelectorAll("button");

// for (i of btns) {
//   i.addEventListener("click", addMovie(film.imdbID));
// }
