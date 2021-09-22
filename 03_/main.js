let firstName = "olukade",
  lastName = "muzzammil",
  country = "Nigeria",
  city = "Ilorin",
  age = 14,
  isMarried = false,
  year = 2021;
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof isMarried);
console.log(typeof year);
console.log(typeof age);
console.log(typeof "10" === 10);
console.log("9.8" === 10);
let isTall = true,
  string = "are you there",
  numer = 221; // truthy
let isShort = false,
  str = "",
  num = 0; // falsy

4 > 3; // true
4 >= 3; // true
4 < 3; // false
4 <= 3; // false
4 == 4; // true
4 === 4; // true
4 != 4; // false
4 !== 4; // false
4 != "4"; // false
4 == "4"; // true
4 === "4"; // false
console.log(
  4 > 3,
  4 >= 3,
  4 < 3,
  4 <= 3,
  4 == 4,
  4 === 4,
  4 != 4,
  4 !== 4,
  4 != "4",
  4 == "4",
  4 === "4"
);
console.log("python".length);
console.log("jargon".length);
console.log("python" === "jargon");
4 > 3 && 10 < 12; // true
4 > 3 && 10 > 12; // false
4 > 3 || 10 < 12; // true
4 > 3 || 10 > 12; // true
!(4 > 3); // false
!(4 < 3); // true
!false; // true
!(4 > 3 && 10 < 12); // false
!(4 > 3 && 10 > 12); // true
!(4 === "4"); // true
console.log(
  4 > 3 && 10 < 12,
  4 > 3 && 10 > 12,
  4 > 3 || 10 < 12,
  4 > 3 || 10 > 12,
  !(4 > 3),
  !(4 < 3),
  !false,
  !(4 > 3 && 10 < 12),
  !(4 > 3 && 10 > 12),
  !(4 === "4")
);
console.log(!"python".includes("on") === "dragon".includes("on"));
let now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getTime());

// let ba = prompt("base");
// let h = prompt("height");
// let area = 0.5 * ba * h;
// console.log(area);

// let a = parseInt(prompt("enter side a"));
// let b = parseInt(prompt("enter side b"));
// let c = parseInt(prompt("enter side c"));
// let perimeter = a + b + c;
// console.log(perimeter);

// let le = parseInt(prompt("length"));
// let wi = parseInt(prompt("width"));
// let areaa = le * wi;
// let peri = 2 * (le + wi);
// console.log(areaa);
// console.log(peri);

// let radius = prompt("radius");
// let circleArea = 3.14 * radius * radius;
// console.log(circleArea);
// let circumference = 2 * 3.14 * radius;
// console.log(circumference);

let x1 = 0,
  x2 = 1,
  y1 = -2,
  y2 = 0;
m = y2 - y1 / x2 - x1;
console.log(m);
let xx1 = 2,
  xx2 = 6,
  yy1 = 2,
  yy2 = 10;
mm = (yy2 - yy1) / (xx2 - xx1);
console.log(mm);
console.log(m === mm);

let yEnd = 0;
let xFirst = 3;
let xSecond = -3;
let yFirst = xFirst ** 2 + 6 * xFirst + 9;
let ySecond = xSecond ** 2 + 6 * xSecond + 9;
if (yFirst === 0) {
  console.log(`At X equals ${xFirst}, Y equals ${yEnd}`);
} else if (ySecond === 0) {
  console.log(`At X equals ${xSecond}, Y equals ${yEnd}`);
} else {
  console.log("not equal");
}

let myName = "olukade";
myName.length > 7
  ? console.log(`my name is long`)
  : console.log(`my name is short`);

let myFirstName = "muzzammil";
let myLastName = "olukade";
if (myFirstName.length > myLastName.length) {
  console.log(
    `My first name, ${myFirstName} is longer than my family name, ${myLastName}`
  );
} else {
  console.log(
    `My family name, ${myLastName} is longer than my first name, ${myFirstName}`
  );
}

let myAge = 250;
let yourAge = 25;
let difference = myAge - yourAge;
console.log(`I am ${difference} years older than you`);

// let userYear = prompt("year you were born");
// let currentYear = 2020;
// let stipulatedAge = 18;
// let userAge = currentYear - userYear;
// userYear < 2002
//   ? console.log(`you are ${userAge}. you are old enough to drive`)
//   : console.log(
//       `you are ${userAge}. you will be allowed to drive after ${
//         stipulatedAge - userAge
//       } years`
//     );

// let yearNumber = prompt("Enter number of years you live");
// let secondsNumber = yearNumber * 31536000;
// console.log(`You lived ${secondsNumber} seconds`);

const yeaar = now.getFullYear();
const month = now.getMonth() + 1;
const date = now.getDate();
const hours = now.getHours();
const minutes = now.getMinutes();
console.log(`${yeaar}-${month}-${date} ${hours}:${minutes}`);
console.log(`${date}-${month}-${yeaar} ${hours}:${minutes}`);
console.log(`${date}/${month}/${yeaar} ${hours}:${minutes}`);

console.log(
  `${yeaar}-${month < 10 ? `0${month}` : month}-${
    date < 10 ? `0${date}` : date
  } ${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }`
);
