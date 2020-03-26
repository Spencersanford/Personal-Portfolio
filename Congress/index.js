import { senators} from '../data/senators.js'

const SeanatorDiv = document.createElement('div')
const main = document.querySelector('main')

function populateSeanatorDiv () {
    senators.forEach (seanator => {
        console.log(`${seanator.first_name} ${seanator.last_name}`)
    })
        
   
};

populateSeanatorDiv()