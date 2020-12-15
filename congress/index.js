import { senators } from '../data/senators.js'
import { removeChildren } from '../utils/index.js'

const senatorGrid = document.querySelector('.senatorGrid')
const seniorityButton = document.querySelector('#seniorityButton')
const birthdayButton = document.querySelector('#birthdayButton')


birthdayButton.addEventListener('click', () => {
    birthdaySort()
})

seniorityButton.addEventListener('click', () => {
    senioritySort()
})


function populateSenatorDiv(simpleSenetors) {
    removeChildren(senatorGrid)
    simpleSenetors.forEach(senator => {
        let senDiv = document.createElement('div')
        let senFigure = document.createElement('figure')
        let figImg = document.createElement('img')
        let figCaption = document.createElement('figcaption')
        let partyIcon = document.createElement('i')
        if (senator.party === 'R') partyIcon.classname = 'fas fa-republican'
        if (senator.party === 'D') partyIcon.classname = 'fas fa-democrat'
        if (senator.party === 'ID') partyIcon.classname = 'fas fa-star'
        figImg.src = senator.imgURL
        figCaption.textContent = senator.name

        figCaption.appendChild(partyIcon)
        senFigure.appendChild(figImg)
        senFigure.appendChild(figCaption)
        senDiv.appendChild(senFigure)
        //senDiv.appendChild(progrssBars(senator))
        senatorGrid.appendChild(senDiv)
    })
}

function getSimlifiedSenators(senatorArray) {
    return senatorArray.map(senator => {
        let middleName = senator.middleName ? ` ${senator.middleName} ` : ` `
        return {
            id: senator.id,
            name: `${senator.first_name}${middleName}${senator.last_name}`,
            imgURL: `https://www.govtrack.us/static/legislator-photos/${senator.govtrack_id}-200px.jpeg`,
            seniority: parseInt(senator.seniority, 10),
            missedVotesPct: senator.missed_votes_pct,
            loyaltyPct: senator.votes_with_party_pct,
            party: senator.party,
            date_of_birth: parseInt(senator.date_of_birth, 10)
        }
    })
}



const republicans = getSimlifiedSenators(senators).filter(senator => senator.party === 'R')
const democrats = getSimlifiedSenators(senators).filter(senator => senator.party === 'D')

const mostSeniority = getSimlifiedSenators(senators).reduce((acc, senator) => acc.seniority > senator.seniority ? acc : senator)

const missedVotes = getSimlifiedSenators(senators).reduce((acc, senator) => acc.missedVotesPct > senator.missedVotesPct ? acc : senator)

function birthdaySort() {
    populateSenatorDiv(getSimlifiedSenators(senators).sort((a, b) => {
        return a.date_of_birth - b.date_of_birth
    }))
}

function senioritySort() {
    populateSenatorDiv(getSimlifiedSenators(senators).sort((a, b) => {
        return a.seniority - b.seniority
    }))
}

console.log(mostSeniority, missedVotes, republicans, democrats)

populateSenatorDiv(getSimlifiedSenators(senators))