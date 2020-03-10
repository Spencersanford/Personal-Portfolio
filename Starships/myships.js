import { starships } from "../data/starships.js";
import { getLastNumber, removeChildren } from "/utils.js"; 


const nav = document.querySelector ('.nav')

const navList = document.querySelector('.navlist')

const shipView = document.querySelector('.main')

const dialog = document.querySelector ('.modal')
const closeButton = document.querySelector('.modal-close')
const modalBackground = document.querySelector('.modal-background')

closeButton.addEventListener ('click', () => {
  dialog.classList.toggle ('is-Active')
})

modalBackground.addEventListener ('click', () => {
  dialog.classList.toggle ('is-Active')
})


function populateNav(starships) {
    starships.forEach(starship => {
      let anchorWrap = document.createElement("a");
      anchorWrap.href = "#";
     
      anchorWrap.addEventListener("click", () => {
        let shipName = event.target.textContent
        const foundShip = starships.find(ship => ship.name === shipName);
        populateShipView (foundShip)
      });
  

      let listItem = document.createElement('li')
      listItem.textContent = starship.name
  
      anchorWrap.appendChild(listItem);
      navList.appendChild(anchorWrap)
      nav.appendChild(navList);
    });
  }


  function populateShipView (shipdata) {
    removeChildren(shipView)
  let shipNum = getLastNumber(shipdata.url)
  let shipImage = document.createElement("img");
  shipImage.src = `https://starwars-visualguide.com/assets/img/starships/${shipNum}.jpg`;
  
  shipImage.addEventListener("error", event => {
    //imageItem.hidden = true;
    //imageItem.src = '../Images/Uvu.png'
    shipImage.hidden = true
    dialog.classList.toggle('is-active')
  });
  shipView.appendChild(shipImage);
  }

  populateNav(starships)
  