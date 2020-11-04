import { starships } from '../data/starships.js'

const nav = document.querySelector('.nav')
const navList = document.querySelector('.navList')
const shipView = document.querySelector('.main')

function populateNav(starships) {
    starships.forEach(starship => {
        let anchorWrap = document.createElement('a')
        anchorWrap = '#'
        anchorWrap.addEventListener('click', event => {
            let shipName = event.target.textContent
            cont foundShip = starships.find(ship => ship.name === shipName)
            populateShipView(foundShip)

        })
        
        let listItem = document.createElement('li')
        listItem.textContent = starship.name

        ancherWrap.appendChild(listItem)
        navList.appendChild(anchorWrap)
        nav.appendChild(navList)
    });
}

function populateShipView(shipData) {

}

populateNav(starships)