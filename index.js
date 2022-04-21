let firstCard = 10
let secondCard = 2
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById('message-el')

function startGame(){
    if(sum <= 20){
        message ='Do you want to draw a new card?'
    }
    
    else if(sum === 21){
    message = "Wohoo! you've got BlackJack"
    hasBlackJack = true
    }
    
    else{
        message = "You're out of the game"
        isAlive = false
    }
    
    console.log(message)
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