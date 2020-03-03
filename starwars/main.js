import { films } from "../data/films.js";
import { people } from "../data/people.js";
import { starships } from "../data/starships.js";

const greetingDiv = document.querySelector(".greeting");

const maleButton = document.querySelector("#maleButton");
const otherButton = document.querySelector("#otherButton");
const femaleButton = document.querySelector("#femaleButton");

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
    populateDOM(maleCharacters);
  });
  femaleButton.addEventListener("click", event => {
      console.log("Female Button");
      populateDOM(femaleCharacters);
    });
    otherButton.addEventListener("click", event => {
      console.log("Clicked on male button");
      populateDOM(otherCharacters);
    });

const castList = document.createElement("ul");

const listItem1 = document.createElement("li");

//"url": "https://swapi.co/api/people/10/"
function getCharNumber(url) {
  let end = url.lastIndexOf("/");
  let start = end - 2;
  if(url.charAt(start) === '/') {
      start++
  }
  return url.slice(start,end)
}

//getCharNumber("https://swapi.co/api/people/10/");

function populateDOM(characters) {
  characters.forEach(person => {
    // need to extract charachter from URL
    let charNum = getCharNumber(person.url)
    let anchorWrap = document.createElement("a");
    anchorWrap.href = "#";

    let imageItem = document.createElement("img");
    imageItem.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`;
    greetingDiv.appendChild(imageItem);

    imageItem.addEventListener("error", event => {
      imageItem.hidden = true;
      //imageItem.src = '../Images/Uvu.png'
    });

    // add some way to handle user cliks on the image
    imageItem.addEventListener("click", () => {
      console.log("IT Worked!");
    });

    anchorWrap.appendChild(imageItem);
    greetingDiv.appendChild(anchorWrap);
  });
}

greetingDiv.appendChild(castList);
