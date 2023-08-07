let form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  let search = document.querySelector("#search").value;
  let fetchUrl = `https://www.omdbapi.com/?s=${search}&apikey=77188c7f`;

  let res = await fetch(fetchUrl);
  let data = await res.json();
  let movies = data.Search;
//   console.log(movies)
  document.querySelector(".movie-list").innerHTML=""
  movies.map((movie) => {
    let card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
            <img src="${movie.Poster}" alt="">
            <h3>${movie.Title}</h3>
            <button>Watch Now</button>
        `;

    document.querySelector(".movie-list").appendChild(card)
  });
});
