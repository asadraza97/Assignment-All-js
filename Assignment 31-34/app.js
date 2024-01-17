// Q1. Write a program that displays current date and time in
// your browser.

// const date = new Date();
// document.write(date)


// Q2. Write a program that alerts the current month in words.
// For example December.

// var month = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'octuber', 'november', 'december'];
// var date = new Date()
// var findMonth = date.getMonth()
// console.log(findMonth)
// document.write(`<br><br>Current month:${month[findMonth]}`);


  
// Q3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

// var day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// var date = new Date();
// var findday = date.getDay();
// var letter3Find = day[findday].slice(0,3)
// console.log(`Today is ${letter3Find}`);


// Q4. Write a program that displays a message “It’s Fun day” if 
// its Saturday or Sunday today

// var days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
// var date = new Date();
// var funDay = date.getDay();
// if(days[funDay] === 'saturday' || days[funDay] === 'sunday'){
//   alert("It's Fun Day")
// }else{
//   alert(`Today is ${days[funDay]}`)
// }

// Q5. Write a program that shows the message “First fifteen 
// days of the month” if the date is less than 16th of the month 
// else shows “Last days of the month”.

// var date = new Date();
// var checkDate = date.getDate();

// if (checkDate < 16 ){
//   document.write('First Fifteen Day Of The Month')
// }else{
//   document.write('Last Day Of The Month')
// }

// Q6. Write a program that determines the minutes since 
// midnight, Jan. 1, 1970 and assigns it to a variable that 
// hasn't been declared beforehand. Use any variable you like 
// to represent the Date object

// var date = new Date()  
// var pastMiliSecond = date.getTime()
// var pastMint = pastMiliSecond / (1000 * 60 * 60)

// console.log(`Current date: ${date}`)
// console.log(`Elapsed milisecond since January 1, 1970: ${pastMiliSecond}`)
// console.log(`Elapsed mint since January 1, 1970: ${pastMint}`)

// Q7. Write a program that tests whether it's before noon and 
// alert “Its AM” else “its PM”

// var date = new Date()
// var hours = date.getHours()
// if(hours < 12){
//   alert(`It's PM ${hours}`)
// }else {
//   alert(`It's PM ${hours}`)

// }

// Q8. Write a program that creates a Date object for the last day 
// of the last month of 2020 and assigns it to variable named 
// laterDate.

// var date = new Date('Dec/31/2020')
// console.log(date)

// Q9. Create a date object of the starting date of this Ramadan 
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

// var ramadanDay = new Date('June 18, 2015')
// var date = new Date();
// var restDay = date - ramadanDay
// var calRestDay = Math.floor(restDay / (1000 * 60 * 60 * 24));
// console.log(`${calRestDay} days have passed since 1st Ramadan, 2015`);

// Q10. Write a program that displays in your browser the 
// seconds that elapsed between the reference date and the 
// beginning of 2015.

// var date = new Date('Sat Dec 05 2015');
// var second = date.getSeconds()
// var elapsed = ((date - second) / (1000* 60))
// document.write(`On refence date ${date}, ${elapsed} seconds had passed since beginning of 2015`)

// Q11. Create a Date object for the current date and time. 
// Extract the hours, reset the date object an hour ahead and 
// finally display the date object in your browser.

// var date = new Date()
// console.log(`Current Date : ${date}`);
// var hour = date.setHours(15);
// console.log(`1 hour ago ,it was ${date}`);

// Q12. Write a program that creates a date object and show the 
// date in an alert box that is reset to 100 years back?

// var date = new Date();
// console.log(`current year: ${date}`);
// var yearBack = date.setFullYear(1923);
// console.log(`100 years Back: it was ${date}`);


// var age = prompt('Enter your age')
// document.write(`Your age is ${age}`);
// document.write(`<br>`);

// var date = new Date()
// var birthDay = date.getFullYear() - age
// document.write(`Your birthday Year is ${birthDay}`)

// Q14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2 
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// DATE METHODS | JAVASCRIPT
// Page 5 of 5
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

var customer = 'ABC Customer'
var date = new Date();
var month = ['january','february','march','april','may','june','july','august','september','october','november','december'];
var currMonth = date.getMonth();
var checkMonth = month[currMonth]
var unit = 410
var chargePerUnit = 16
var latePaymentCharges = 350
var dueDate = new Date('Nov 19 2023')

function myElectricBill() { 
  if (checkMonth === month[10] && date <= date.setDate(19)){
      let total = unit * chargePerUnit;
      let grossTotal = total + latePaymentCharges;
      document.write(`<br><br><h2>K-Electric Bill</h2>
      Customer Name: <b>${customer}</b>
      <br>Month:<b> ${checkMonth}</b>
      <br>Number of units: <b>${unit}</b>
      <br>Charges per unit: <b>${chargePerUnit}</b><br>
      <br>Net Amount Payable (Within Due Date):<b> ${total}</b>
      <br>Late payment surcharge :<b> ${latePaymentCharges}</b><br>
      Gross Amount Payable (after Due Date):<b> ${grossTotal}</b>`)
  }
  }
  
  myElectricBill()