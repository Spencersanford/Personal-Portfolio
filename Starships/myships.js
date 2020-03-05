import { starships } from "../data/starships.js";

const nav = document.querySelector ('.nav')

const navList = document.querySelector('.navlist')


function populateNav(starships) {
    starships.forEach(starship => {
      let anchorWrap = document.createElement("a");
      anchorWrap.href = "#";
      anchorWrap.addEventListener("click", () => {
        console.log("IT Worked!");
      });
  

      let listItem = document.createElement('li')
      listItem.textContent = starship.name
  
      anchorWrap.appendChild(listItem);
      navList.appendChild(anchorWrap)
      nav.appendChild(navList);
    });
  }

  populateNav(starships)