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
console.log(countries[3]);
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
console.log(itCompanies[3]);
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

console.log(itCompanies.join(", ").concat(" are big IT companies"));
let index = itCompanies.indexOf("Google");
if (index != -1) {
  console.log("Google");
} else {
  console.log("Company is not found");
}

console.log(itCompanies.sort());
console.log(itCompanies.reverse());
console.log(itCompanies.slice(0, 3));
console.log(itCompanies.slice(itCompanies.length - 4, itCompanies.length - 1));
console.log(itCompanies.slice(3, 4));
itCompanies.shift();
console.log(itCompanies);
console.log(itCompanies.splice(2, 3));
itCompanies.pop();
console.log(itCompanies);
console.log(itCompanies.splice());

// const itCompanies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon".split(
//   ", "
// );
// const result = itCompanies.reduce(function (acc, current) {
//   if (current.includes("oo")) {
//     return acc.concat(current);
//   } else {
//     return acc;
//   }
// }, []);
// const doubleO = itCompanies.reduce(function (a, c) {
//   if (c.replace(/[^o]/g, "").length === 2) {
//     return a.concat(c);
//   } else {
//     return a;
//   }
// }, []);
// const nums = [1, 2, 3, 5].reduce(function (acc, current) {
//   return acc + current * 2;
// }, 0);
// const filtered = itCompanies.filter(function (name) {
//   return name.includes("oo");
// });

// excercise 2
document.writeln(
  " <script type='text/javascript' src='./countries.js'></script>"
);
document.writeln(
  " <script type='text/javascript' src='./web_techs.js'> </script>"
);

let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let word = text.replace(/[^a-zA-Z ]/gi, "");
let words = word.split(" ");
console.log(words);
console.log(words.length);

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
shoppingCart.unshift("meat");
console.log(shoppingCart);
shoppingCart.push("sugar");
console.log(shoppingCart);
shoppingCart.splice(4, 1);
console.log(shoppingCart);
shoppingCart[3] = "Green Tea";
console.log(shoppingCart);

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

//excercise 3
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
// [19, 19, 20, 22, 24, 24, 24, 25, 25, 26]
min = ages[0];
max = ages[ages.length - 1];
console.log(`min = ${min} \nmax = ${max}`);

let medianPosition = (ages.length + 1) / 2;
let median = ages[medianPosition - 1];
if (medianPosition % Math.floor(medianPosition) != 0) {
  median =
    (ages[Math.floor(medianPosition - 1)] +
      ages[Math.ceil(medianPosition) - 1]) /
    2;
}
console.log({ median });

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
  10;
console.log(average);
average = ages.reduce((acc, current) => acc + current) / ages.length;
console.log(average);
range = max - min;
console.log(range);

let minAverage = Math.abs(min - average);
let maxAverage = Math.abs(max - average);
if (minAverage == maxAverage) {
  console.log(`${minAverage} and ${maxAverage} are equal`);
} else if (maxAverage > minAverage) {
  console.log(`${maxAverage} is greater than ${minAverage}`);
} else {
  console.log(`${minAverage} is greater than ${maxAverage}`);
}
