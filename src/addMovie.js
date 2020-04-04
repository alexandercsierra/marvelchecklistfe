// import axios from "axios";

// const axiosWithAuth = () => {
//   return axios.create({
//     baseURL: "https://marvelchecklist.herokuapp.com/api",
//     headers: {
//       Authorization: localStorage.getItem("token")
//     }
//   });
// };

// function addMovie(movie) {
//   axiosWithAuth()
//     .post("/movies", movie)
//     .then(res => console.log(res))
//     .catch(err => console.log(err));
// }

// const title = document.querySelector("#title");
// const img = document.querySelector("#img");
// const year = document.querySelector("#year");
// const form = document.querySelector("form");

// form.addEventListener("submit", e => {
//   e.preventDefault();
//   const movie = {
//     title: title.value,
//     img: img.value,
//     year: year.value
//   };

//   addMovie(movie);
//   title.value = "";
//   img.value = "";
//   year.value = "";
// });
