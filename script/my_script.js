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

// hand Illustrations

const rockHand = document.querySelector('img.rock-stop');

const rockHandSecond = document.querySelector('img.rock-end');

const paperHand = document.querySelector('img.paper');

const scissorsHand = document.querySelector('img.scissors');


const rockPc = document.querySelector('img.rock.my_img-flipped');

const rockPcSecond = document.querySelector('img.rock-end.my_img-flipped');

const paperPc = document.querySelector('img.paper.my_img-flipped');

const scissorsPc = document.querySelector('img.scissors.my_img-flipped');

rockButton.addEventListener('click', function () {
    console.log('user play is rock');
    // Add user play value 
    userPlay = 1;
    rockHand.classList.remove('d-none');
    rockHandSecond.classList.remove('d-none');
    paperHand.classList.add('d-none');
    scissorsHand.classList.add('d-none');

    // Add computer response 
    let computerPlay = parseInt(Math.floor(Math.random() * 3 + 1));

    if (computerPlay === 1) {
        console.log('computer plays rock')
        console.log("it's a Draw!")

        // Draw Message 
        winMessage.classList.remove('visible')
        looseMessage.classList.remove('visible')
        drawMessage.classList.add('visible')

        // Move Illustration 
        rockPc.classList.add('d-none');
        rockPcSecond.classList.remove('d-none');
        paperPc.classList.add('d-none');
        scissorsPc.classList.add('d-none');

    } else if (computerPlay === 2) {
        console.log('computer plays paper')
        console.log("Player Lose!")

        // Loose Message 
        winMessage.classList.remove('visible')
        looseMessage.classList.add('visible')
        drawMessage.classList.remove('visible')

        // Move Illustration
        rockPc.classList.add('d-none');
        rockPcSecond.classList.add('d-none');
        paperPc.classList.remove('d-none');
        scissorsPc.classList.add('d-none');


    } else {
        console.log('computer plays scissors')
        console.log("Player Wins!")

        // Win Message 
        winMessage.classList.add('visible')
        looseMessage.classList.remove('visible')
        drawMessage.classList.remove('visible')

        // Move Illustration
        rockPc.classList.add('d-none');
        rockPcSecond.classList.add('d-none');
        paperPc.classList.add('d-none');
        scissorsPc.classList.remove('d-none');
    }

})

paperButton.addEventListener('click', function () {
    console.log('user play is paper');

    // Add user play value 
    userPlay = 2;
    rockHand.classList.add('d-none');
    rockHandSecond.classList.add('d-none');
    paperHand.classList.remove('d-none');
    scissorsHand.classList.add('d-none');


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

        // Move Illustration 
        rockPc.classList.add('d-none');
        rockPcSecond.classList.remove('d-none');
        paperPc.classList.add('d-none');
        scissorsPc.classList.add('d-none');
    } else if (computerPlay === 2) {
        console.log('computer plays paper')
        console.log("It's a Draw!")

        // Draw Message 
        winMessage.classList.remove('visible')
        looseMessage.classList.remove('visible')
        drawMessage.classList.add('visible')

        // Move Illustration
        rockPc.classList.add('d-none');
        rockPcSecond.classList.add('d-none');
        paperPc.classList.remove('d-none');
        scissorsPc.classList.add('d-none');
    } else {
        console.log('computer plays scissors')
        console.log("Player Lose!")

        // Loose Message 
        winMessage.classList.remove('visible')
        looseMessage.classList.add('visible')
        drawMessage.classList.remove('visible')

        // Move Illustration
        rockPc.classList.add('d-none');
        rockPcSecond.classList.add('d-none');
        paperPc.classList.add('d-none');
        scissorsPc.classList.remove('d-none');
    }
})

scissorsButton.addEventListener('click', function () {
    // console.log('user play is scissors');

    // Add user play value 
    userPlay = 3;

    rockHand.classList.add('d-none');
    rockHandSecond.classList.add('d-none');
    paperHand.classList.add('d-none');
    scissorsHand.classList.remove('d-none');

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

        // Move Illustration 
        rockPc.classList.add('d-none');
        rockPcSecond.classList.remove('d-none');
        paperPc.classList.add('d-none');
        scissorsPc.classList.add('d-none');
    } else if (computerPlay === 2) {
        console.log('computer plays paper')
        console.log("Player Wins!")

        // Win Message 
        winMessage.classList.add('visible')
        looseMessage.classList.remove('visible')
        drawMessage.classList.remove('visible')

        // Move Illustration
        rockPc.classList.add('d-none');
        rockPcSecond.classList.add('d-none');
        paperPc.classList.remove('d-none');
        scissorsPc.classList.add('d-none');
    } else {
        console.log('computer plays scissors')
        console.log("It's a Draw!")

        // Draw Message 
        winMessage.classList.remove('visible')
        looseMessage.classList.remove('visible')
        drawMessage.classList.add('visible')

        // Move Illustration
        rockPc.classList.add('d-none');
        rockPcSecond.classList.add('d-none');
        paperPc.classList.add('d-none');
        scissorsPc.classList.remove('d-none');
    }

})