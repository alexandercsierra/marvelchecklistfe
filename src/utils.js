
  export const login = (user) => {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
    
        if (xhr.status >= 200 && xhr.status < 300) {
            console.log('success!');
        let parsed = JSON.parse(xhr.response);
        localStorage.setItem('token', parsed.token);
        // getMovies(movies);
        window.location.href = "../dashboard.html"
        } else {
            console.log('The request failed!', xhr);
        }
    };
  
  
    let jsonStr = JSON.stringify(user);
    xhr.open('POST', 'https://marvelchecklist.herokuapp.com/api/auth/login');
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(jsonStr);
  }
  
  export const register = (user) => {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
    
        if (xhr.status >= 200 && xhr.status < 300) {
            console.log('success!');
            window.location.href = "../index.html";
        } else {
            console.log('The request failed!', xhr);
        }
    };
  
  
    let jsonStr = JSON.stringify(user);
    xhr.open('POST', 'https://marvelchecklist.herokuapp.com/api/auth/register');
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(jsonStr);
  }

  const signOut = document.querySelector(".signOut");
  signOut.addEventListener("click", e =>{
    localStorage.clear();
    window.location.href = "../index.html"
  } )


  export const addReview = (review, id) => {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
    
        if (xhr.status >= 200 && xhr.status < 300) {
            console.log('success!');
            // window.location.href = "../dashboard.html";
            window.location.reload(false);
        } else {
            console.log('The request failed!', xhr);
        }
    };

  
    let token = localStorage.getItem('token')
    let jsonStr = JSON.stringify(review);
    xhr.open('POST', `https://marvelchecklist.herokuapp.com/api/reviews/${id}`);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Authorization", token);
    xhr.send(jsonStr);
  }




  export let reviewArr = [];
  export const getReviews = () => {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
    
        if (xhr.status >= 200 && xhr.status < 300) {
            console.log('success!');
            let parsed = JSON.parse(xhr.response);
            let reviews = parsed;
            console.log('reviews', reviews)
            reviewArr = reviews;


        } else {
            console.log('The request failed!', xhr);
        }
    };


    let token = localStorage.getItem('token')
    xhr.open('GET', `https://marvelchecklist.herokuapp.com/api/reviews/`);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Authorization", token);
    xhr.send();
  }


  export function getAverageRating(currentMovieId, reviews){
    console.log('reviews from getavg', reviews)
    let ratings = [];
    for (let i = 0; i < reviews.length; i++){
      if (currentMovieId === reviews[i].movie_id){
        ratings.push(reviews[i].rating)
      }
    }
    let total = 0;
    
    for(let i=0; i<ratings.length; i++){
      total += Number(ratings[i]);
    }
    return total/ratings.length;
  }