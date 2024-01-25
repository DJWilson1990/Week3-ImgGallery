console.log("Hello");

const form = document.getElementById("imgSearchForm");
const thumbnailContainer = document.getElementById("thumbnail-container");
const mainImage = document.getElementById("main-container");
let currentlySelectedThumbnail = document.getElementsByClassName("thumbnail", [
  0 - 9,
]); //trying to select chosen thumbnail to give it a highlight

function selectImage(currentlySelectedThumbnail) {}

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
  console.log(data.results[0].urls.thumb);
  for (let i = 0; i < 10; i++) {
    let div = document.createElement("div");
    div.className = "thumbnail";
    //if i = currentlySelected(need to define), apply an extra class to that element
    let img = document.createElement("img");
    img.src = data.results[i].urls.thumb;
    div.appendChild(img);
    thumbnailContainer.appendChild(div);
  }
  // mainImage.style.backgroundImage = "url(${data.results[4].urls.full})";
}
