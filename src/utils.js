
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


  export const addReview = (review) => {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
    
        if (xhr.status >= 200 && xhr.status < 300) {
            console.log('success!');
            window.location.href = "../index.html";
        } else {
            console.log('The request failed!', xhr);
        }
    };
  
  
    let jsonStr = JSON.stringify(review);
    xhr.open('POST', 'https://marvelchecklist.herokuapp.com/api/reviews/id');
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(jsonStr);
  }