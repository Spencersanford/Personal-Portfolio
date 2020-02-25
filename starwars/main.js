import { films } from '../data/films.js'
import { people } from '../data/people.js'

const greetingDiv = document.querySelector(".greeting")

const castList = document.createElement ("ul")

const listItem1 = document.createElement ("li")

listItem1.textContent = people[0].name

castList.appendChild(listItem1)

let counter = 1



people.forEach(person => {
    let listItem = document.createElement ("li")
    listItem.textContent = person.name
    castList.appendChild(listItem)
    let imageItem = document.createElement("img")
    imageItem.src = `https://starwars-visualguide.com/assets/img/characters/${counter}.jpg`
    greetingDiv.appendChild(imageItem)
    counter++
} )

greetingDiv.appendChild(castList)
