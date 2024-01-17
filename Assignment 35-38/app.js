// Q1. Write a function that displays current date & time in your 
// browser

// function abc(){
//     const date = new Date()   
//     document.write(date)
// }
// abc();

// Q2. Write a function that takes first & last name and then it 
// greets the user using his full name.

// const first = prompt('Enter your first name')
// const last = prompt('Enter your last name')
// function fullName(first, last)   {    
//     alert('welcome to our land ${fName} ${lName}')
// }
// fullName(first, last)

// Q3. Write a function that adds two numbers (input by user) 
// and returns the sum of two numbers.

// let a = parseFloat(prompt('Enter your first number'))
// let b = parseFloat(prompt('Enter your second number'))

// function calculate() {
//     const result = a + b 
//     return result
// }
// var totalsum = calculate()
// console.log(totalsum)

// Q4. Calculator:
// Write a function that takes three arguments num1, num2 
// & operator & compute the desired operation. Return and 
// show the desired result in your browser.


// function calculate(num1, num2, operator) {
//     let result;
  
//     switch (operator) {
//       case '+':
//         result = num1 + num2;
//         break;
//       case '-':
//         result = num1 - num2;
//         break;
//       case '*':
//         result = num1 * num2;
//         break;
//       case '/':
//         result = num1 / num2;
//         break;
//       default:
//         result = 'Invalid operator';
//     }
  
//     document.write(`Result: ${result}`);
//     return result;
//   }
  
//   let number1 = 10;
//   let number2 = 5;
//   let operation = '*';
  
//   calculate(number1, number2, operation);

//   Q5. Write a function that squares its argument.

// function squares(number){
//     return number * number
// }
// let abc = squares(8)
// console.log(abc)

// Q6 Write a function that take start and end number as inputs 
// & display counting in your browser


// let startNum = 1;
// let endNum = 10;

// function countNumbers(start, end) {
//     if (start <= end) {
//       for (let i = start; i <= end; i++) {
//         document.write(`${i} <br>`);
//       }
//     } else {
//       for (let i = start; i >= end; i--) {
//         document.write(`${i} <br>`);
//       }
//     }
//   }
  
  
//   countNumbers(startNum, endNum);

// Q8. Write a nested function that computes hypotenuse of a 
// right angle triangle. 
// Hypotenuse2 = Base2 + Perpendicular2

// function calculateHypotenuse(base, perpendicular) {
//     function square(number) {
//       return number * number;
//     }
  
//     let hypotenuseSquared = square(base) + square(perpendicular);
//     let hypotenuse = Math.sqrt(hypotenuseSquared);
//     return hypotenuse;
//   }
  
//   let baseLength = 3;
//   let perpendicularLength = 4;
  
//   let result = calculateHypotenuse(baseLength, perpendicularLength);
//   console.log(`The hypotenuse is: ${result}`);

// Q9. Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

    // let heightSum = 10;
    // function areaRecgl(widthVal,heightVal){
    //     let totalSum = widthVal * heightVal
    //     return totalSum 
    // }
    // console.log(areaRecgl(20, heightSum));

    // Q10 Write a JavaScript function that checks whether a passed 
    // string is palindrome or not?
    // A palindrome is word, phrase, or sequence that reads the same backward as 
    // forward, e.g., madam.

    // function reverseString(str) {
    //     return str.split("").reverse().join("");
    // }
    
    // function palindromeCheck() {
    //     let msg = document.getElementById('msg').value;
    //     let ans = document.getElementById("answer");
    
    //     if(msg == ""){
    //         alert("please Enter Your String")
    //     }else{
    //         msg = msg.toLowerCase();
    //         if(msg == reverseString(msg)){
    //             ans.innerHTML = 'yes '+ msg + ' is a palindrome!'
    //         }else{
    //             ans.innerHTML = 'No ' + msg + ` isn't a palindrome!`
    //         }
    //     }
    // }

//     11. Write a JavaScript function that accepts a string as a 
// parameter and converts the first letter of each word of the 
// string in upper case. 
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'


//   function capitilize(str){
//     let word = str.split (' ')

//     for (let i = 0; i <word.length; i++) {
//         word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1);
//     }
//     return word.join(' ');
//   }

//   let example  = 'the quick brown fox'
//   let capitalizedString = capitilize(example)
//   console.log(capitalizedString)

// Q12 Write a JavaScript function that accepts a string as a 
// parameter and find the longest word within the string. 
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'


function findLongestWord(str) {
    // Split the string into an array of words
    let words = str.split(' ');
  
    // Initialize variables to track the longest word and its length
    let longestWord = '';
    let maxLength = 0;
  
    // Iterate through each word to find the longest one
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > maxLength) {
        maxLength = words[i].length;
        longestWord = words[i];
      }
    }
  
    return longestWord;
  }
  
  // Example usage:
  let exampleString = 'Web Development Tutorial';
  let longest = findLongestWord(exampleString);
  console.log(longest); // Output: 'Development'










