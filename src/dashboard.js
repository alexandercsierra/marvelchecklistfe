import {getReviews, reviewArr, addReview, getAverageRating} from './utils.js';
let movies = [];
let currentMovie = "";
let clickedMovies = [];
getReviews();
console.log('reviewObj', reviewArr)



// getMovies(movies, currentMovie);
console.log('currentmovie from dashboard', currentMovie)

const container = document.querySelector(".container");

export function appendMovies(movies) {
  for (let i = 0; i < movies.length; i++) {

    let avgRating = getAverageRating(movies[i].id, reviewArr);
    console.log(avgRating)


    let card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute('id', movies[i].id)

    let title = document.createElement("h3");
    title.textContent = movies[i].title;

    let rating = document.createElement("p");
    if(avgRating){
      rating.textContent = `rating: ${avgRating}`
    } else {
      rating.textContent = 'no ratings yet'
    }

    let imgDiv = document.createElement("div");
    imgDiv.classList.add("imgDiv");

    let poster = document.createElement("img");
    poster.src = movies[i].img;
    poster.setAttribute("id", movies[i].id) 

    let year = document.createElement("p");
    year.textContent = movies[i].year;
    

    let addReviewBtn = document.createElement("button");
    addReviewBtn.setAttribute("id", `${movies[i].id}btn`) 
    addReviewBtn.setAttribute("type", "button") 
    addReviewBtn.setAttribute("data-toggle", "modal") 
    addReviewBtn.setAttribute("data-target", "#exampleModal") 
    addReviewBtn.textContent="add a review";
    addReviewBtn.classList.add("hidden");
    addReviewBtn.classList.add("btn");
    addReviewBtn.classList.add("btn-primary");

    addReviewBtn.addEventListener("click", () => {
      // myModal.modal("show");
      reviewTitle.textContent = currentMovie.title;
      console.log("current title", currentMovie.title);
    });

    let titleDiv = document.createElement('div');
    titleDiv.appendChild(title);
    titleDiv.style.height = "40px"

    
    let ratingDiv = document.createElement('div');
    ratingDiv.appendChild(rating);

    let yearDiv = document.createElement('div');
    yearDiv.appendChild(year);
    yearDiv.style.padding = "10% 0"


    // title.setAttribute('style', "width: 85%")
    // rating.setAttribute('style', "width: 25%")
    // poster.setAttribute('style', "width: 25%")
    // year.setAttribute('style', "width: 25%")
    
    poster.style.width = "275px"

    imgDiv.appendChild(poster);
    // card.appendChild(title);
    card.appendChild(titleDiv);
    // card.appendChild(rating);
    card.appendChild(ratingDiv);
    card.appendChild(imgDiv);
    // card.appendChild(year);
    card.appendChild(yearDiv);
    card.appendChild(addReviewBtn);



    container.appendChild(card);
  }
}

const reviewBtn = document.querySelector(".review");
const myModal = document.querySelector("#exampleModal");
console.log(myModal);

let reviewTitle = document.querySelector("#exampleModalLabel");


var xhr = new XMLHttpRequest();
    xhr.onload = function () {
    
        if (xhr.status >= 200 && xhr.status < 300) {
            console.log('success!');
            let parsed = JSON.parse(xhr.response);
            movies = parsed;
            appendMovies(movies);
            document.querySelectorAll(".card").forEach(card => {
            card.addEventListener("click", e => {
                currentMovie = movies[card.id-1]
                clickedMovies.push(card.id);
                
                for(let i=0; i<clickedMovies.length; i++){
                  let aClickedCard = document.getElementById(`${clickedMovies[i]}`)
                  let btn = document.getElementById(`${clickedMovies[i]}btn`)
                  if(clickedMovies[i] === clickedMovies[clickedMovies.length-1]){
                    aClickedCard.classList.add('greenText')
                    btn.classList.remove('hidden')
                  } else {
                    aClickedCard.classList.remove('greenText')
                    btn.classList.add('hidden')
                  }
                }
                
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

    const signoutBtn = document.querySelector(".signOut");
    signoutBtn.addEventListener("click", e=> {
      localStorage.clear();  
      window.location.href = "../index.html";
    })
    const rating = document.querySelector("#rating-scale");
    const comment = document.querySelector("#message-text");
    const ratingForm = document.querySelector(".ratingForm");

    const addButton = document.querySelector(".addButton")

    function clearGreenText(card){
      card.classList.remove('greenText')
      console.log('cleared', card, card.classList)
    }

    addButton.addEventListener("click", e => {
      e.preventDefault();
    
      let ratStr = rating.value.toString();

      let movieRating = {
       rating:ratStr,
       comment:comment.value
      };
    // console.log("the rating", movieRating, 'id', currentMovie.id)
    addReview(movieRating, currentMovie.id)
    // addRating(movieRating);
    });