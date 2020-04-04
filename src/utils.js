
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

//   export function getMovies(movies, currentMovie){
//     console.log('inside get movies')
//     var xhr = new XMLHttpRequest();
//     xhr.onload = function () {
    
//         if (xhr.status >= 200 && xhr.status < 300) {
//             console.log('success!');
//             let parsed = JSON.parse(xhr.response);
//             movies = parsed;
//             appendMovies(movies);
//             document.querySelectorAll(".card").forEach(card => {
//             card.addEventListener("click", e => {
//                 currentMovie = e.path[2].innerText;
//                 console.log("currentMovie", currentMovie);
//             });
//             });
//         } else {
//             console.log('The request failed!', xhr);
//         }
//     };
    
//     let token = localStorage.getItem('token')
//     xhr.open('GET', 'https://marvelchecklist.herokuapp.com/api/movies');
//     xhr.setRequestHeader("Content-Type", "application/json");
//     xhr.setRequestHeader("Authorization", token);
//     xhr.send();
//   }

