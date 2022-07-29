// Link Caching
const url = "https://www.discoveryvip.com/shared/test1.json";
const localUrl = "people.json";

// Elements Caching
const btn = document.querySelector(".btn");
const output = document.querySelector(".output");
const inputVal = document.querySelector(".val");

// Sync Caching
let attemptCount = false;

inputVal.style.display = "none";
btn.textContent = "Load JSON data";

// Event Settings
btn.addEventListener("click", (e) => {
  getData(url);
});

// Event Handler
function getData(urlPath) {
  fetch(urlPath)
    .then((res) => res.json())
    .then((data) => visualizeData(data))
    .catch((err) => {
      if (!attemptCount) {
        getData(localUrl);
      }

      attemptCount = true;
      console.log(err);
    });
}

function visualizeData(data) {
  output.innerHTML = "<h1>JSON Data</h1>";

  data.forEach((el, idx) => {
    console.log(index % 2);
    // Ternary Operator
    const bg = index % 2 == 0 ? "#eee" : "fff";

    // Create Div Element
    const div = document.createElement("div");
    div.style.backgroundColor = bg;
    div.innerHTML += `<div>${el.name.first} ${el.name.last}</div>`;
    div.innerHTML += `<div>${el.location.city} ${el.location.country}</div>`;
    div.innerHTML += `<div>${el.age}</div>`;

    // Append div to its parent
    output.appendChild(div);
  });
}
