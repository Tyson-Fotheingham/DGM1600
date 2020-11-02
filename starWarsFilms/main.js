import { films } from '../data/films.js'
import {people} from '../data/people.js'

const main = document.querySelector ('main')


for (let i = 0; i< 7; i++) {
    let figure = document.createElement('figure')
    let figImg = document.createElement('img')
    figImg.src = `https://starwars-visualguide.com/assets/img/films/${i + 1}.jpg`
    let figCation = document.createElement('figCaption')
    figCation.textContent = films[i].title
    
    figure.appendChild(figImg)
    figure.appendChild(figCation)

    main.appendChild(figure)
    
}