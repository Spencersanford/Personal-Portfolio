import { senators } from '../data/senators.js'
import {  removeChildren} from "/utils.js"; 

const senatorDiv = document.querySelector('.senators')
const seniorityButton = document.querySelector('#seniorityButton')
const nameButton = document.querySelector('#nameButton')

seniorityButton.addEventListener('click', () => {
    birthdaySort()
})

nameButton.addEventListener('click', () => {
    populateSenatorDiv(getSimplifiedSenators(senators))
})

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
            loyaltyPct: senator.votes_with_party_pct,
            date_of_birth: senator.date_of_birth,
            state: senator.state,
            nextElection: senator.next_election
        }
    })
}

function populateSenatorDiv(simpleSenators) {
    removeChildren(senatorDiv)
    simpleSenators.forEach(senator => {
        let senCard = document.createElement('div')
        senCard.classList.add('card');
        let cardImg = document.createElement('img')
        cardImg.classList.add('cardImage');
        let cardName = document.createElement('h2')
            cardName.classList.add('cardName');
        let stateFrom = document.createElement('p')
            stateFrom.classList.add('cardInfo');
        let election = document.createElement ('p')
            election.classList.add('cardInfo')
    
            let partyIcon = document.createElement('i')
            if (senator.party === 'R') partyIcon.className = 'fas fa-republican'
            if (senator.party === 'D') partyIcon.className = 'fas fa-democrat'
            if (senator.party === 'ID') partyIcon.className = 'fas fa-star'
            
        cardImg.src = senator.imgURL
        cardName.textContent = senator.name
        stateFrom.textContent = "From:" +" " + senator.state
        election.textContent = "In office until:" + " "+  senator.nextElection

        senCard.appendChild(cardImg)
        senCard.appendChild(cardName)
        senCard.appendChild(stateFrom)
        senCard.appendChild(election)
        senatorDiv.appendChild(senCard)
        senCard.appendChild(partyIcon)
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


// sort by value
function senioritySort() {
    populateSenatorDiv(getSimplifiedSenators(senators).sort((a, b) => {
        return parseInt(a.seniority) - parseInt(b.seniority)
    })
    )
}

function birthdaySort() {
    populateSenatorDiv(getSimplifiedSenators(senators).sort((a, b) => {
        return parseInt(a.date_of_birth) - parseInt(b.date_of_birth)
    })
    )
}


// by default on page load, we show all senators unsorted
populateSenatorDiv(getSimplifiedSenators(senators))
  

  