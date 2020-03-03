import { films } from '../data/films.js'
import { people } from '../data/people.js'
import {starships } from'../data/starships.js'


const greetingDiv = document.querySelector(".greeting")

const maleButton = document.querySelector('#maleButton')
const otherButton = document.querySelector('#otherButton')
const femaleButton = document.querySelector('#femaleButton')

const maleCharacters = people.filter(person => person.gender === "male")
console.log(maleCharacters)

const femaleCharacters = people.filter(person => person.gender === "female")

const otherCharacters = people.filter (person => {
    if (person.gender === "hermaphrodite" || person.gender === "n/a") {
        return person
    }
})


const castList = document.createElement ("ul")

const listItem1 = document.createElement ("li")

let counter = 1

people.forEach(person => {

    let anchorWrap = document.createElement ("a")
    anchorWrap.href ="#"
    
    let imageItem = document.createElement("img")
    imageItem.src = `https://starwars-visualguide.com/assets/img/characters/${counter}.jpg`
    greetingDiv.appendChild(imageItem)

    imageItem.addEventListener('error', (event) => {
        imageItem.hidden = true
        //imageItem.src = '../Images/Uvu.png'
    })
    
    // add some way to handle user cliks on the image
    imageItem.addEventListener("click", () => {
        console.log("IT Worked!")
    })
    
    
    anchorWrap.appendChild(imageItem)
    greetingDiv.appendChild(anchorWrap)
    counter++
} )

greetingDiv.appendChild(castList)

maleButton.addEventListener("click", (event) => {
    

})