

import {planets} from '../data/planets.js'
import {removeChildren, getLastNumber } from '../utils/index.js'

const mainContent = document.querySelector('#main')

const tropicalButton = document.querySelector('.tropical')
const hotButton = document.querySelector('.hot')
const temperateButton = document.querySelector('.temperate')
const frozenButton = document.querySelector('.frozen')
const aridButton = document.querySelector('.arid')


/*planetxButton.addEventListener('click', () => {
    let pokeName = prompt('Name your dream planet!!!')
    let myPlanet = new Planetx(name, climate)
    return(myPlanet)

})

const myPlanet = document.createElement('img')
myPlanet.src = `../images/myPlanet.jpg`*/




const tropicalPlanets = planets.filter(planets => planets.climate === 'tropical')
const hotPlanets = planets.filter(planets => planets.climate === 'hot')
const temperatePlanets = planets.filter(planets => planets.climate === 'temperate')
const frozenPlanets = planets.filter(planets => planets.climate === 'frozen')
const aridPlanets = planets.filter(planets => planets.climate === 'arid')

tropicalButton.addEventListener('click', (event) => {
    populatDOM(tropicalPlanets)
})
hotButton.addEventListener('click', (event) => {
    populatDOM(hotPlanets)
})
temperateButton.addEventListener('click', (event) => {
    populatDOM(temperatePlanets)
})
frozenButton.addEventListener('click', (event) => {
    populatDOM(frozenPlanets)
})
aridButton.addEventListener('click', (event) => {
    populatDOM(aridPlanets)
})

function populatDOM(planets) {
    removeChildren(mainContent)
    planets.forEach(element => {
        const planFigure = document.createElement('figure')
        const figImg = document.createElement('img')
        let planNum = getLastNumber(element.url)
        figImg.src = `https://starwars-visualguide.com/assets/img/planets/${planNum}.jpg`
        figImg.addEventListener('error', () => figImg.hidden = true)
        const figCaption = document.createElement('figCaption')
        figCaption.textContent = element.name

        planFigure.appendChild(figImg)
        planFigure.appendChild(figCaption)

        mainContent.appendChild(planFigure)
    })

}

/*function Planetx(name, climate) {
    this.name = name
    this.climate = climate
}*/
