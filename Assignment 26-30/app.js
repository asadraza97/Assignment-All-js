// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var num = 3.45214
// let round = Math.round(num);
// let floor = Math.floor(num);
// let ceil = Math.ceil(num);

// document.write(`Number: ${num} <br> round off value: ${round} <br> floor value: ${floor} <br> ceil value: ${ceil} `  )


// Q2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var num = -2.673
// let round = Math.round(num);
// let floor = Math.floor(num);
// let ceil = Math.ceil(num);
 

// document.write(`Number: ${num} <br> round off value: ${round} <br> floor value: ${floor} <br> ceil value: ${ceil} `  )

// Q3. Write a program that displays the absolute value of a 
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// let negativeValue = -4;
// let value = Math.abs(negativeValue);
// console.log(value)
// document.write(`<br>The absolute value of ${negativeValue} is ${value}`);

// Q4. Write a program that simulates a dice using random() 
// method of JS Math class. Display the value of dice in your 
// browser.

// let dice = Math.round(Math.random()* 7)
// let dices = Math.round(Math.random()* 7)

// document.write(`Random dice value: ${dice} <br>`)
// document.write(`Random dice value: ${dices} <br>`)

// Q5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

// let randomCoin = ['head' , 'tail'];
// let emptyStrg = ''
// var randomNum;

// for ( var i = 0 ; i < randomCoin.length; i++){
//         randomNum = Math.floor(Math.random() * randomCoin.length);
//         emptyStrg = randomCoin[randomNum];
// }
// console.log(emptyStrg)
// console.log(randomNum)
// document.write(`<br>${randomNum} random coin value: ${emptyStrg}`);


// Q6. Write a program that shows a random number between 1 
// and 100 in your browser

// let randomValueShow = Math.round(Math.random() * 100);
// document.write(`Random nummber between 1 and 100: ${randomValueShow}`);

// Q7. Write a program that asks the user about his weight. Parse 
// the user input and display his weight in your browser. 
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

//  let userWeight = prompt("Enter your user weight in kg");
//     switch (userWeight) {
//         case 'kg':
//             console.log(userWeight);
//             break;
            
//             default:
//                 console.log();
//                 break; 
//     }

//  document.write(`The weight of user is ${userWeight} kilograms`)`

// Q8. Write a program that stores a random secret number from 
// 1 to 10 in a variable. Ask the user to input a number 
// between 1 and 10. If the user input equals the secret 
// number, congratulate the user


let secNum = Number(prompt("Enter a number between 1 and 10"));
let numberGuess =[1,2,3,4,5,6,7,8,9,10];

let randomNum = Math.floor(Math.random() * numberGuess.length) +1;
if (secNum === numberGuess[5]){
    alert(`Your secret number is ${secNum}`)
}else{
    alert("Try again!")
}