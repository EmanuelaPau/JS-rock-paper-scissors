// I add a variable from 1 to 3 when 
// 1 is rock,
// 2 is paper and 
// 3 is scissors



let rockButton = document.getElementById('my-rock-button');

let paperButton = document.getElementById('my-paper-button');

let scissorsButton = document.getElementById('my-scissors-button');

let userPlay;

rockButton.addEventListener('click', function () {
    console.log('user play is rock');
    // Add user play value 
    userPlay = 1;

    // Add computer response 
    let computerPlay = parseInt(Math.floor(Math.random() * 3 + 1));

    if (computerPlay === 1) {
        console.log('computer plays rock')
        console.log("it's a Draw!")
    } else if (computerPlay === 2) {
        console.log('computer plays paper')
        console.log("Player Lose!")
    } else {
        console.log('computer plays scissors')
        console.log("Player Wins!")
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
    } else if (computerPlay === 2) {
        console.log('computer plays paper')
        console.log("It's a Draw!")
    } else {
        console.log('computer plays scissors')
        console.log("Player Lose!")
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
    } else if (computerPlay === 2) {
        console.log('computer plays paper')
        console.log("Player Wins!")
    } else {
        console.log('computer plays scissors')
        console.log("It's a Draw!")
    }

})