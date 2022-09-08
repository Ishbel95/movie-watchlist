const renderWatchlist = document.getElementById("filmWatchlist");
import { getResults } from "/utils.js";

function addMovie() {
  let addToWatchlist = Array.from(document.querySelectorAll("button"));
  for (let btn of addToWatchlist) {
    btn.addEventListener("click", (event) => {
      const movie = event.target;
      const movieID = movie.id;
        console.log(movieID); 
        
     
    });
  }
}

export { addMovie };
