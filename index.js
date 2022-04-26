let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardsEl = document.getElementById('cards-el')
console.log(messageEl)


function startGame(){
    renderGame()
} 

function getRandomCard(){
    return 5
}
function renderGame() {

    cardsEl.textContent = 'Cards: '
    for(let i=0; i<cards.length; i++){
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
    console.log('Drawing a new card from the deck!')

    let card = getRandomCard();
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()


    
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
