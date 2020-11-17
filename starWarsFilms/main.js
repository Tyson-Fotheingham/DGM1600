import { films } from '../data/films.js'
import {getLastNumber} from '../utils/index.js'

const main = document.querySelector ('main')


for (let i = 0; i< 7; i++) {
    let figure = document.createElement('figure')
    let figImg = document.createElement('img')
    figImg.src = `https://starwars-visualguide.com/assets/img/films/${i + 1}.jpg`
    let figCation = document.createElement('figCaption')

    const foundFlim = films.find(film => getLastNumber(film.url) == (i + 1))

    figCation.textContent = foundFlim.title
    
    figure.appendChild(figImg)
    figure.appendChild(figCation)

    main.appendChild(figure)
    
}