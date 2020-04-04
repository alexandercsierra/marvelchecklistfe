let movies = [];
let currentMovie = "";

// getMovies(movies, currentMovie);
console.log('currentmovie from dashboard', currentMovie)

const container = document.querySelector(".container");

export function appendMovies(movies) {
  for (let i = 0; i < movies.length; i++) {
    let card = document.createElement("div");
    card.classList.add("card");

    let title = document.createElement("h3");
    title.textContent = movies[i].title;

    let imgDiv = document.createElement("div");
    imgDiv.classList.add("imgDiv");

    let poster = document.createElement("img");
    poster.src = movies[i].img;

    let year = document.createElement("p");
    year.textContent = movies[i].year;

    imgDiv.appendChild(poster);
    card.appendChild(title);
    card.appendChild(imgDiv);
    card.appendChild(year);
    container.appendChild(card);
  }
}

const reviewBtn = document.querySelector(".review");
const myModal = document.querySelector("#exampleModal");
console.log(myModal);

let reviewTitle = document.querySelector("#exampleModalLabel");

reviewBtn.addEventListener("click", () => {
  // myModal.modal("show");
  reviewTitle.textContent = currentMovie;
  console.log("current title", currentMovie);
});


var xhr = new XMLHttpRequest();
    xhr.onload = function () {
    
        if (xhr.status >= 200 && xhr.status < 300) {
            console.log('success!');
            let parsed = JSON.parse(xhr.response);
            movies = parsed;
            appendMovies(movies);
            document.querySelectorAll(".card").forEach(card => {
            card.addEventListener("click", e => {
                currentMovie = e.path[2].innerText;
                console.log("currentMovie", currentMovie);
            });
            });
        } else {
            console.log('The request failed!', xhr);
        }
    };
    
    let token = localStorage.getItem('token')
    xhr.open('GET', 'https://marvelchecklist.herokuapp.com/api/movies');
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Authorization", token);
    xhr.send();

