console.log("Hello");

const form = document.getElementById("imgSearchForm");
let imageContainer = document.getElementsByClassName("img-container");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let query = event.target.input.value;
  search(query);
});

async function search(queryParam) {
  let response = await fetch(
    `https://api.unsplash.com/search/photos?page=1&query=${queryParam}&client_id=ib4uIfBhjX9GrxzV6cztReU-W-_T6UMr5JRI5abvXjA`
  );
  console.log(response);
  let data = await response.json();
  console.log(data.results);
}
//   let img = document.createElement("img");
//   img.src = data.results;
//   imageContainer.appendChild(img);
//
