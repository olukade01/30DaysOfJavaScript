const arr = Array();
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
];
console.log(countries.length);
console.log(countries[0]);
console.log(countries[Math.floor(countries.length / 2)]);
console.log(countries[countries.length - 1]);
const mixedDataTypes = ["groundnut", 3, 0, true, null, false];
console.log(mixedDataTypes.length);
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
console.log(itCompanies);
console.log(itCompanies.length);
console.log(itCompanies[0]);
console.log(itCompanies[Math.floor(itCompanies.length / 2)]);
console.log(itCompanies[itCompanies.length - 1]);
console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[itCompanies.length - 1]);
console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());

const join = itCompanies
  .slice(0, itCompanies.length - 1)
  .join(", ")
  .concat(` and ${itCompanies[itCompanies.length - 1]} are big IT companies`);
console.log(join);

let index = itCompanies.indexOf("Google");
if (index != -1) {
  console.log("Google");
} else {
  console.log("Company is not found");
}

let match = itCompanies.toString().match(/\w*oo\w*/g);
console.log(match);

console.log(itCompanies.sort());
console.log(itCompanies.reverse());
console.log(itCompanies.slice(0, 3));
console.log(itCompanies.slice(itCompanies.length - 3, itCompanies.length));
const middleCoy =
  itCompanies.length % 2 !== 0
    ? itCompanies.slice(
        Math.floor(itCompanies.length / 2),
        Math.floor(itCompanies.length / 2) + 1
      )
    : itCompanies.slice(itCompanies.length / 2 - 1, itCompanies.length / 2 + 1);
console.log(middleCoy);
itCompanies.shift();
console.log(itCompanies);
const removeMiddleCoy =
  itCompanies.length % 2 !== 0
    ? itCompanies.splice(Math.floor(itCompanies.length / 2), 1)
    : itCompanies.splice(itCompanies.length / 2 - 1, 2);
console.log(itCompanies);
itCompanies.pop();
console.log(itCompanies);
console.log(itCompanies.splice());

// const iCompanies =
//   "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon".split(", ");
// const result = iCompanies.reduce(function (acc, current) {
//   if (current.includes("oo")) {
//     return acc.concat(current);
//   } else {
//     return acc;
//   }
// }, []);
// const doubleO = iCompanies.reduce(function (a, c) {
//   if (c.replace(/[^o]/g, "").length === 2) {
//     return a.concat(c);
//   } else {
//     return a;
//   }
// }, []);
// const nums = [1, 2, 3, 5].reduce(function (acc, current) {
//   return acc + current * 2;
// }, 0);
// const filtered = iCompanies.filter(function (name) {
//   return name.includes("oo");
// });

// // excercise 2
document.writeln(
  " <script type='text/javascript' src='./countries.js'></script>"
);
document.writeln(
  " <script type='text/javascript' src='./web_techs.js'> </script>"
);

let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let word = text.replace(/[^a-zA-Z ]/g, "");
let words = word.split(" ");
console.log(words);
console.log(words.length);

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
shoppingCart.unshift("Meat");
console.log(shoppingCart);
shoppingCart.push("Sugar");
console.log(shoppingCart);
const honey = shoppingCart.indexOf("Honey");
shoppingCart.splice(honey, 1);
console.log(shoppingCart);
const tea = shoppingCart.indexOf("Tea");
shoppingCart[tea] = "Green Tea";
console.log(shoppingCart);

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

// //excercise 3
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
// [19, 19, 20, 22, 24, 24, 24, 25, 25, 26]
let min = ages[0];
let max = ages[ages.length - 1];
console.log(`min = ${min} \nmax = ${max}`);

let age = ages.length;
const median =
  age % 2 !== 0 ? ages[age - 1 / 2] : (ages[age / 2] + ages[age / 2 - 1]) / 2;
console.log({ median });

// let medianPosition = (ages.length + 1) / 2;
// let median = ages[medianPosition - 1];
// if (medianPosition % Math.floor(medianPosition) != 0) {
//   median =
//     (ages[Math.floor(medianPosition - 1)] +
//       ages[Math.ceil(medianPosition) - 1]) /
//     2;
// }

let average =
  (ages[0] +
    ages[1] +
    ages[2] +
    ages[3] +
    ages[4] +
    ages[5] +
    ages[6] +
    ages[7] +
    ages[8] +
    ages[9]) /
  age;
console.log(average);
// average = ages.reduce((acc, current) => acc + current) / age;
// console.log(average);
let range = max - min;
console.log(range);

let minAverage = Math.abs(min - average).toFixed(1);
let maxAverage = Math.abs(max - average).toFixed(1);
if (minAverage === maxAverage) {
  console.log(`${minAverage} and ${maxAverage} are equal`);
} else if (maxAverage > minAverage) {
  console.log(`${maxAverage} is greater than ${minAverage}`);
} else {
  console.log(`${minAverage} is greater than ${maxAverage}`);
}
