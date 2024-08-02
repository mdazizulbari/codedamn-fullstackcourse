const score = document.querySelector(`.score`)
const startScreen = document.querySelector(`.startScreen`)
const gameAera = document.querySelector(`.gameAera`)

let keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowRight: false,
    ArrowLeft: false,
}
let player = {}

startScreen.addEventListener(`click`, start)
document.addEventListener(`keydown`, pressOn)
document.addEventListener(`keyup`, pressOff)

function pressOn(e){
    e.preventDefault()
    keys[e.key] = true
    console.log(keys)
}
function pressOff(e){
    e.preventDefault()
    keys[e.key] = false
    console.log(keys)
}
function start(){
    startScreen.classList.add(`hide`)
    gameAera.classList.remove(`hide`)
    player.start = true
    window.requestAnimationFrame(playGame)
    let car = document.createElement(`div`)
    car.innerHTML = `<p class='car'>Car</p>`

    gameAera.appendChild(car)
    player.x = car.offsetLeft
    player.y = car.offsetTop
    console.log(player)
}
function playGame(){
    console.log(`inplay`)
    let car = document.querySelector(`.car`)
    if(player.start){
        if(keys.ArrowUp){player.y += player.speed}
        if(keys.ArrowDown){player.y -= player.speed}
        if(keys.ArrowLeft){player.x -= player.speed}
        if(keys.ArrowRight){player.x += player.speed}
        window.requestAnimationFrame(playGame)
    }
}