import { people } from "../data/people.js";

const gallery = document.querySelector(".gallery");

const maleButton = document.querySelector("#maleButton");
const otherButton = document.querySelector("#otherButton");
const femaleButton = document.querySelector("#femaleButton");

const maleActive = document.querySelector ('.male')
const femActive = document.querySelector ('.female')
const otherActive = document.querySelector ('.other')

const maleCharacters = people.filter(person => person.gender === "male");

const femaleCharacters = people.filter(person => person.gender === "female");

const otherCharacters = people.filter(person => {
  if (
    person.gender === "hermaphrodite" ||
    person.gender === "n/a" ||
    person.gender === "none"
  ) {
    return person;
  }
});

console.log(otherCharacters.length);

maleButton.addEventListener("click", event => {
  console.log("Clicked on male button");
  otherActive.classList.remove('active')
  femActive.classList.remove('active')
  otherActive.classList.add('inactive')
  femActive.classList.add('inactive')
  maleActive.classList.remove ('inactive')
  maleActive.classList.add('active')
  populateDOM(maleCharacters);
});
femaleButton.addEventListener("click", event => {
  console.log("Female Button");
  //Removing button highlight
  maleActive.classList.remove('active')
  otherActive.classList.remove('active')
  otherActive.classList.remove('active')
  maleActive.classList.add('inactive')
  otherActive.classList.add('inactive')
  femActive.classList.remove('inactive')
  femActive.classList.add('active')
//populate
  populateDOM(femaleCharacters);
});
otherButton.addEventListener("click", event => {
  console.log("Clicked on male button");

  //remvoing
  maleActive.classList.remove('active')
  otherActive.classList.remove('active')
  femActive.classList.remove('active')

  maleActive.classList.add('inactive')
  femActive.classList.add('inactive')
  otherActive.classList.remove('inactive')
  otherActive.classList.add('active')


  populateDOM(otherCharacters);
});

const castList = document.createElement("ul");

const listItem1 = document.createElement("li");

//"url": "https://swapi.co/api/people/10/"
function getCharNumber(url) {
  let end = url.lastIndexOf("/");
  let start = end - 2;
  if (url.charAt(start) === "/") {
    start++;
  }
  return url.slice(start, end);
}

//getCharNumber("https://swapi.co/api/people/10/");

function removeChildren(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function populateDOM(characters) {
  removeChildren(gallery);
  characters.forEach(person => {
    // need to extract charachter from URL
    let charNum = getCharNumber(person.url);
    let anchorWrap = document.createElement("a");
    anchorWrap.href = "#";

    let imageItem = document.createElement("img");
    imageItem.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`;
    gallery.appendChild(imageItem);

    imageItem.addEventListener("error", event => {
      imageItem.hidden = true;
      //imageItem.src = '../Images/Uvu.png'
    });

    // add some way to handle user cliks on the image
    imageItem.addEventListener("click", () => {
      console.log("IT Worked!");
    });

    anchorWrap.appendChild(imageItem);
    gallery.appendChild(anchorWrap);
  });
}

gallery.appendChild(castList);
