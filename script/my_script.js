// I add a variable from 1 to 3 when 
// 1 is rock,
// 2 is paper and 
// 3 is scissors

let computerPlay = Math.floor(Math.random() * 3 + 1);
console.log(computerPlay)

let rockButton = document.getElementById('my-rock-button');

let paperButton = document.getElementById('my-paper-button');

let scissorsButton = document.getElementById('my-scissors-button');

rockButton.addEventListener('click', function () {
    console.log('rock');
})

paperButton.addEventListener('click', function () {
    console.log('paper');
})

scissorsButton.addEventListener('click', function () {
    console.log('scissors');
})