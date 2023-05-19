// I add a variable from 1 to 3 when 
// 1 is rock,
// 2 is paper and 
// 3 is scissors



let rockButton = document.getElementById('my-rock-button');

let paperButton = document.getElementById('my-paper-button');

let scissorsButton = document.getElementById('my-scissors-button');

rockButton.addEventListener('click', function () {
    console.log('user play is rock');

    // Add computer response 
    let computerPlay = parseInt(Math.floor(Math.random() * 3 + 1));

    if (computerPlay === 1) {
        console.log('computer plays rock')
    } else if (computerPlay === 2) {
        console.log('computer plays paper')
    } else {
        console.log('computer plays scissors')
    }

})

paperButton.addEventListener('click', function () {
    console.log('user play is paper');

    // Add computer response 
    let computerPlay = parseInt(Math.floor(Math.random() * 3 + 1));
    console.log(computerPlay)
})

scissorsButton.addEventListener('click', function () {
    console.log('user play is scissors');

    // Add computer response 
    let computerPlay = parseInt(Math.floor(Math.random() * 3 + 1));
    console.log(computerPlay)

})