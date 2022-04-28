let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardsEl = document.getElementById('cards-el')
console.log(messageEl)
console.log(cards)

let player = {
    name:'Israel',
    chips: 145
}

console.log(typeof(cards))

let playerEl = document.getElementById('player-el')
playerEl.textContent = player.name + ": $" + player.chips
function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 14)

    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}
function renderGame() {

    cardsEl.textContent = 'Cards: '
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = 'Do you want to draw a new card?'
    } else if (sum === 21) {
        message = "Wohoo! you've got BlackJack"
        hasBlackJack = true
    } else {
        message = "You're out of the game   "
        isAlive = false
    } messageEl.textContent = message
}

function newCard() {
    
    if (isAlive == true && hasBlackJack==false) {
        let card = getRandomCard();
        sum += card
        cards.push(card)
        renderGame()

    }
}


// let age = 22

// if(age<21){
//     console.log('You cannot enter the club!')
// }
// else {
//     console.log('Welcome!')
// }

// let age = 100

// if(age<100){
//     console.log('you are not eligible')
// }
// else if (age =100){
//     console.log('Here is your bithday card from the king')
// }
// else{
//     console.log('Not elegible, you have already gotten one+ ')
// }
