import { senators } from '../data/senators.js'

const senatorDiv = document.querySelector('.senators')

function getSimplifiedSenators(senatorArray) {
    return senatorArray.map(senator => {
        let middleName = senator.middle_name ? ` ${senator.middle_name} ` : ` `
        return {
            id: senator.id,
            name: `${senator.first_name}${middleName}${senator.last_name}`,
            imgURL: `https://www.govtrack.us/static/legislator-photos/${senator.govtrack_id}-200px.jpeg`,
            seniority: parseInt(senator.seniority, 10),
            missedVotesPct: senator.missed_votes_pct,
            party: senator.party,
            loyaltyPct: senator.votes_with_party_pct
        }
    })
}

function populateSenatorDiv(simpleSenators) {
    console.log(simpleSenators)
    simpleSenators.forEach(senator => {
        let senCard = document.createElement('div')
        senCard.classList.add('card');
        let cardImg = document.createElement('img')
        cardImg.classList.add('cardImage');
        let cardName = document.createElement('h2')
            cardName.classList.add('cardName');
        let cardParty = document.createElement ('p')
            cardParty.classList.add('cardParty');
            let partyIcon = document.createElement('i')
            if (senator.party === 'R') partyIcon.className = 'fas fa-republican'
            if (senator.party === 'D') partyIcon.className = 'fas fa-democrat'
            if (senator.party === 'ID') partyIcon.className = 'fas fa-star'
            
        cardImg.src = senator.imgURL
        cardName.textContent = senator.name
        cardParty.textContent = senator.party


        cardParty.appendChild(partyIcon)
        senCard.appendChild(cardImg)
        senCard.appendChild(cardName)
        senCard.appendChild(cardParty)
        senatorDiv.appendChild(senCard)
    })
}

const filterSenators = (prop, value) => {
    return senators.filter(senator => {
        return senator[prop] === value
    })
}

const republicans = filterSenators('party', 'R')
const democrats = filterSenators('party', 'D')

const mostSeniority = getSimplifiedSenators(senators).reduce((acc, senator) => acc.seniority > senator.seniority ? acc : senator)

const missedVotes = getSimplifiedSenators(senators).reduce((acc, senator) => acc.missedVotesPct > senator.missedVotesPct ? acc : senator)

let loyalArray = []

const mostLoyal = getSimplifiedSenators(republicans).reduce((acc, senator) => {
    if (senator.loyaltyPct === 100) {
        loyalArray.push(senator)
    }
    return acc.loyaltyPct > senator.loyaltyPct ? acc : senator
})

console.log(loyalArray)

populateSenatorDiv(getSimplifiedSenators(senators))