// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

// console.log('hello')

// let myList = [];

// let mySum = 0;

// while (mySum < 50) {
//     let yourNumber = prompt('tell me a number');
//     myList.push(yourNumber);
//     // console.log(yourNumber);
//     mySum = mySum + parseInt(yourNumber);
//     // console.log(mySum);
// }
// console.log(myList);

const button = document.querySelector('button');

const input = document.querySelector('input');

let myList = [];

let mySum = 0;

button.addEventListener('click', function () {
    let yourNumber = parseInt(input.value);
    // alert(yourNumber);
    mySum = mySum + yourNumber;
    if (mySum > 50) {
        // Non deve essere piu cliccabile /
        button.disabled = true;
    }

    myList.push(yourNumber);
    console.log(myList);
})
