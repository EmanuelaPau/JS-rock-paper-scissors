// I add a variable from 1 to 3 when 
// 1 is rock,
// 2 is paper and 
// 3 is scissors



let rockButton = document.getElementById('my-rock-button');

let paperButton = document.getElementById('my-paper-button');

let scissorsButton = document.getElementById('my-scissors-button');

let userPlay;

const winMessage = document.querySelector('div.my_win');

const looseMessage = document.querySelector('div.my_loose');

const drawMessage = document.querySelector('div.my_draw');

rockButton.addEventListener('click', function () {
    console.log('user play is rock');
    // Add user play value 
    userPlay = 1;

    // Add computer response 
    let computerPlay = parseInt(Math.floor(Math.random() * 3 + 1));

    if (computerPlay === 1) {
        console.log('computer plays rock')
        console.log("it's a Draw!")

        // Draw Message 
        winMessage.classList.remove('visible')
        looseMessage.classList.remove('visible')
        drawMessage.classList.add('visible')

    } else if (computerPlay === 2) {
        console.log('computer plays paper')
        console.log("Player Lose!")

        // Loose Message 
        winMessage.classList.remove('visible')
        looseMessage.classList.add('visible')
        drawMessage.classList.remove('visible')
    } else {
        console.log('computer plays scissors')
        console.log("Player Wins!")

        // Win Message 
        winMessage.classList.add('visible')
        looseMessage.classList.remove('visible')
        drawMessage.classList.remove('visible')
    }

})

paperButton.addEventListener('click', function () {
    console.log('user play is paper');

    // Add user play value 
    userPlay = 2;

    // Add computer response 
    let computerPlay = parseInt(Math.floor(Math.random() * 3 + 1));
    // console.log(computerPlay)

    if (computerPlay === 1) {
        console.log('computer plays rock')
        console.log("Player Wins!")

        // Win Message 
        winMessage.classList.add('visible')
        looseMessage.classList.remove('visible')
        drawMessage.classList.remove('visible')
    } else if (computerPlay === 2) {
        console.log('computer plays paper')
        console.log("It's a Draw!")

        // Draw Message 
        winMessage.classList.remove('visible')
        looseMessage.classList.remove('visible')
        drawMessage.classList.add('visible')
    } else {
        console.log('computer plays scissors')
        console.log("Player Lose!")

        // Loose Message 
        winMessage.classList.remove('visible')
        looseMessage.classList.add('visible')
        drawMessage.classList.remove('visible')


    }
})

scissorsButton.addEventListener('click', function () {
    // console.log('user play is scissors');

    // Add user play value 
    userPlay = 3;

    // Add computer response 
    let computerPlay = parseInt(Math.floor(Math.random() * 3 + 1));
    console.log(computerPlay)

    if (computerPlay === 1) {
        console.log('computer plays rock')
        console.log("Player Lose!")

        // Loose Message 
        winMessage.classList.remove('visible')
        looseMessage.classList.add('visible')
        drawMessage.classList.remove('visible')
    } else if (computerPlay === 2) {
        console.log('computer plays paper')
        console.log("Player Wins!")

        // Win Message 
        winMessage.classList.add('visible')
        looseMessage.classList.remove('visible')
        drawMessage.classList.remove('visible')
    } else {
        console.log('computer plays scissors')
        console.log("It's a Draw!")

        // Draw Message 
        winMessage.classList.remove('visible')
        looseMessage.classList.remove('visible')
        drawMessage.classList.add('visible')
    }

})