console.log("Hello");

const form = document.getElementById("imgSearchForm");
const thumbnailContainer = document.getElementById("thumbnail-container");
const mainImage = document.getElementById("main-container");
let currentlySelectedThumbnail = 4; //setting the currently selected thumbnail to be the 5th image as default

//eventlistener on previous and next button
document.getElementById("nextBtn").addEventListener("click", next);
document.getElementById("previousBtn").addEventListener("click", previous);

//setting function for next button
function next() {
  currentlySelectedThumbnail = currentlySelectedThumbnail + 1;
  if (currentlySelectedThumbnail > 9) {
    currentlySelectedThumbnail = 0; //telling selected to go back to first thumbnail when it reaches the last
  }
  updateThumbnailSelector();
}

function previous() {
  currentlySelectedThumbnail = currentlySelectedThumbnail - 1;
  if (currentlySelectedThumbnail < 0) {
    currentlySelectedThumbnail = 9; //telling selected to go back to last thumbnail when reaches first
  }
  updateThumbnailSelector();
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let query = event.target.input.value;
  search(query);
});

//Clearing the images from DOM when new search is entered so we dont end up with 100s of images
function clearThumbnails() {
  while (thumbnailContainer.hasChildNodes("div")) {
    thumbnailContainer.removeChild(thumbnailContainer.lastChild);
  }
}

async function search(queryParam) {
  clearThumbnails();
  let response = await fetch(
    `https://api.unsplash.com/search/photos?page=1&query=${queryParam}&client_id=ib4uIfBhjX9GrxzV6cztReU-W-_T6UMr5JRI5abvXjA`
  );
  console.log(response);
  let data = await response.json();
  console.log(data.results[0].urls.thumb);
  for (let i = 0; i < 10; i++) {
    let div = document.createElement("div");
    div.className = "thumbnail";
    if (i === currentlySelectedThumbnail) {
      div.classList.add("selected");
    }
    let img = document.createElement("img");
    img.src = data.results[i].urls.thumb;
    div.appendChild(img);
    thumbnailContainer.appendChild(div);
  }
}

//function to know what thumbnail is selected or not. Styled so border is on selected image and the non selected images have opacity added.
function updateThumbnailSelector() {
  const thumbnailImages =
    thumbnailContainer.getElementsByClassName("thumbnail");
  for (let i = 0; i < 10; i++) {
    if (i === currentlySelectedThumbnail) {
      thumbnailImages[i].classList.add("selected");
    } else {
      thumbnailImages[i].classList.remove("selected");
    }
  }
  console.log(thumbnailImages);
}