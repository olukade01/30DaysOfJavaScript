// let userAge = prompt('Enter your age');
// let underAge = 18 - userAge;
//   userAge > 18
//   ? console.log(`You are old enough to drive`)
//   : console.log(`You are left with ${underAge} years to drive`);

//   let yourAge = prompt('Enter your age');
//   let myAge = 25;
//   let ageDifference = yourAge - 25;
//   if (myAge > yourAge) {
//     console.log('I am older than you')
//   }
//   else {
//     console.log(`You are ${ageDifference} years older than me`)
//   }

let a = 4;
let b = 3;
if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} is less than ${b}`);
}
a > b
  ? console.log(`${a} is greater than ${b}`)
  : console.log(`${a} is less than ${b}`);

// let number = +prompt('Enter a number');
// if (number % 2 == 0) {
//   console.log(`${number} is an even number`)
// }
// else {
//   console.log(`${number} is an odd number`)
// }

// let score = parseInt(prompt('Enter your score'));
// if (score == 0 || score <= 44) {
//   console.log('F');
// }
// else if (score == 45 || score <= 49) {
//   console.log('D');
// }
// else if (score == 50 || score <= 59) {
//   console.log('C');
// }
// else if (score == 60 || score
//   <= 69) {
//   console.log('B');
// }
// else if (score == 70 || score <= 100) {
//   console.log('A');
// }
// else {
//   console.log('no grade');
// };

// let month = prompt('Enter month').toLowerCase();
// if (month == 'september' || month == 'october' || month == 'november'){
//   console.log("Autumn");
// }
// else if (month == 'december' || month == 'january' || month == 'february'){
//   console.log("Winter");
// }
// else if (month == 'march' || month == 'april' || month == 'may'){
//   console.log("Spring");
// }
// else if (month == 'june' || month == 'july' || month == 'august'){
//   console.log("Summer");
// }
// else {
//   console.log('not a month');
// }

let day = prompt("What is the day today?").toLowerCase();
switch (day) {
  case "saturday":
  case "sunday":
    console.log(`${day} is a weekend`);
    break;
  case "monday":
  case "tuesday":
  case "wednessday":
  case "thursday":
  case "friday":
    console.log(`${day} is a working day`);
    break;
  default:
    console.log("not a day");
}

let months = prompt("Enter a month").toLowerCase();
switch (months) {
  case "september":
  case "april":
  case "june":
  case "november":
    console.log(`${months} has 30 days`);
    break;
  case "january":
  case "march":
  case "may":
  case "july":
  case "august":
  case "october":
  case "december":
    console.log(`${months} has 31 days`);
    break;
  case "february":
    console.log("february has 28 days");
    break;
  default:
    console.log("not a month");
}

let leapYear = prompt("Enter a month").toLowerCase();
switch (leapYear) {
  case "september":
  case "april":
  case "june":
  case "november":
    console.log(`${leapYear} has 30 days`);
    break;
  case "january":
  case "march":
  case "may":
  case "july":
  case "august":
  case "october":
  case "december":
    console.log(`${leapYear} has 31 days`);
    break;
  case "february":
    console.log("february has 29 days");
    break;
  default:
    console.log("not a month");
}
