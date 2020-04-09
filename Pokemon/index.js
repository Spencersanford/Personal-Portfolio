/* const allPokemon = []
function getPokeData(url) {
  fetch(url).then(function (response) {
    response.json().then(function (pokeData) {
      console.log(pokeData.results)
      const pokeMap = pokeData.results.map(pokemon => {
        return fetch(pokemon.url).then(resData => {
          resData.json().then(pokeJson => {
            allPokemon.push(pokeJson)
          })
          
        })
      })
    })
  })
} */

// Reusable async function to fetch data from the provided url
async function getAPIData(url) {
  try {
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}

// now, use the async getAPIData function
getAPIData('https://pokeapi.co/api/v2/pokemon/?&limit=25').then((data) => {
  for (const pokemon of data.results) {
    getAPIData(pokemon.url).then((pokeData) => {
      populatePokeCard(pokeData)
    })
  }
})

let pokemonGrid = document.querySelector('.pokemonGrid')

//getPokeData('https://pokeapi.co/api/v2/pokemon?&limit=25')

function populatePokeCard(singlePokemon) {
    let pokeScene = document.createElement('div')
    pokeScene.className = 'scene'
    let pokeCard = document.createElement('div')
    pokeCard.className = 'card'
    pokeCard.addEventListener('click', () =>
      pokeCard.classList.toggle('is-flipped'),
    )


    pokeCard.appendChild(pokeFront)
    pokeCard.appendChild(pokeBack)
    pokeScene.appendChild(pokeCard)
    pokemonGrid.appendChild(pokeScene)
}

function populateCardFront(pokemon) {
  let CardFront = document.createElement('div')
    CardFront.className = 'card__face card__face--front'
    CardFront.textContent = singlePokemon.name
}

