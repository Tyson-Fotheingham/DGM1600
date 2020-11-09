import { people } from '../data/people.js'
import {removeChildren, getLastNumber } from '../utils/index.js'

const mainContent = document.querySelector('#main')

populatDOM(people)

const mainHeader = document.createElement('header')
mainHeader.className = 'mainHeader'
document.body.insertBefore(mainHeader, mainContent)

const maleButton = document.createElement('button')
maleButton.textContent = 'Male Characters'
mainHeader.appendChild(maleButton)

const femaleButton = document.createElement('button')
femaleButton.textContent = 'Female Characters'
mainHeader.appendChild(femaleButton)


const otherButton = document.createElement('button')
otherButton.textContent = 'Other Characters'
mainHeader.appendChild(otherButton)

const maleCharacters = people.filter(person => person.gender === 'male')

const femaleCharacters = people.filter(person => person.gender === 'female')

const otherCharacters = people.filter(person => {
    if (person.gender === 'n/a' || person.gender === 'none') {
      return person
}
})


maleButton.addEventListener('click', (event) => {
    populatDOM(maleCharacters)
})

femaleButton.addEventListener('click', () =>
    populatDOM(femaleCharacters))

otherButton.addEventListener('click', () => populatDOM(otherCharacters))

function populatDOM(characters) {
    removeChildren(mainContent)
    characters.forEach(element => {
        const charFigure = document.createElement('figure')
        const charImg = document.createElement('img')
        let charNum = getLastNumber(element.url)
        charImg.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`
        charImg.addEventListener('error', () => charImg.hidden = ture)
        const charCaption = document.createElement('figcaption')
        charCaption.textContent = element.name

        charFigure.appendChild(charImg)
        charFigure.appendChild(charCaption)

        mainContent.appendChild(charFigure)
    })

}





