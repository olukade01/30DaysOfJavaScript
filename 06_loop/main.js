// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }
// let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }
// let ii = 0;
// do {
//   console.log(ii);
//   ii++;
// } while (ii <= 10);

// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }
// let j = 10;
// while (j >= 0) {
//   console.log(j);
//   j--;
// }
// let iv = 10;
// do {
//   console.log(iv);
//   iv--;
// } while (iv >= 0);

// for (let i = 1; i <= 7; i++) {
//   console.log("#".repeat(i));
// }

// for (let i = 0; i <= 10; i++) {
//   console.log(`${i} x ${i} = ${i * i}`);
// }

// for (let i = 0; i <= 10; i++) {
//   if (i === 0) {
//     console.log("i\ti^2\ti^3");
//   }
//   console.log(`${i}\t${i * i}\t${i * i * i}`);
// }

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 == 1) {
//     console.log(i);
//   }
// }

// function isPrime(n) {
//   if (!n) return false;
//   let prime = true;
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       prime = false;
//       break;
//     }
//   }
//   return prime;
// }

// for (let i = 0; i <= 100; i++) {
//   if (isPrime(i)) {
//     console.log(i);
//   }
// }

// let sum = 0;
// for (let i = 0; i <= 100; i++) {
//   sum += i;
// }
// console.log(`The sum of all numbers from 0 to 100 is ${sum}`);

// let even = 0;
// let odd = 0;
// let arr = [];
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 == 0) {
//     even += i;
//   }
//   if (i % 2 != 0) {
//     odd += i;
//   }
// }
// console.log(
//   `The sum of all evens from 0 to 100 is ${even}. And the sum of all odds from 0 to 100 is ${odd}`
// );
// arr.push(even, odd);
// console.log(arr);

// let arr = [];
// for (let i = 0; i < 5; i++) {
//   let random = Math.ceil(Math.random() * 10);
//   arr.push(random);
// }
// console.log(arr);

// let uniqueArray = [];
// for (let i = 0; uniqueArray.length < 5; i++) {
//   let random = Math.floor(Math.random() * 11);
//   if (uniqueArray.indexOf(random) === -1) uniqueArray.push(random);
// }
// console.log(uniqueArray);

// let char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
// let chars = "";
// for (let i = 0; i < 6; i++) {
//   let randomNo = Math.floor(Math.random() * char.length);
//   chars += char[randomNo];
// }
// console.log(chars);

// // exercise 2

// function generateChars(n) {
//   let chars = "";
//   for (let i = 0; i < n; i++) {
//     const randomNo = Math.floor(Math.random() * char.length);
//     chars += char[randomNo];
//   }
//   return chars;
// }
// console.log(generateChars(15));

// let hexChar = "0a1b2c3d4e5f6789";
// let symbol = "#";
// for (let i = 0; i < 6; i++) {
//   let randomNo = Math.floor(Math.random() * hexChar.length);
//   symbol += hexChar[randomNo];
// }
// console.log(symbol);

// let r = "rgb(";
// for (let i = 0; i < 3; i++) {
//   let rand = Math.floor(Math.random() * 256);
//   r = i === 2 ? r + `${rand})` : r + `${rand},`;
// }
// console.log(r);

// let ar = "rgb(";
// let closeB = ")";
// let comma = ",";
// for (let i = 0; i < 3; i++) {
//   let roundOff = Math.floor(Math.random() * 256);
//   ar = ar + comma + roundOff;
// }
// let replace = ar.replace(",", "");
// replace = replace + closeB;
// console.log(replace);

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

let arra = [];
for (let i = 0; i < countries.length; i++) {
  arra.push(countries[i].toUpperCase());
}
console.log(arra);

let newArrayy = [];
for (const country of countries) {
  newArrayy.push(country.length);
}
console.log(newArrayy);

let newArray = [];
for (const country of countries) {
  newArray.push([country, country.slice(0, 3).toUpperCase(), country.length]);
}
console.log(newArray);

let emptyArray = [];
for (const country of countries) {
  if (country.includes("land")) {
    emptyArray.push(country);
  }
}
if (emptyArray.length > 0) {
  console.log(emptyArray);
} else {
  console.log("All these countries are without land");
}

let emptyArr = [];
for (const country of countries) {
  if (country.endsWith("ia")) {
    emptyArr.push(country);
  }
}
if (emptyArr.length > 0) {
  console.log(emptyArr);
} else {
  console.log("These countries ends without ia");
}

let word = "";
for (let i = 0; i < countries.length; i++) {
  if (word.length < countries[i].length) {
    word = countries[i];
  }
}
console.log(word);

let emptyA = [];
for (const country of countries) {
  if (country.length === 5) {
    emptyA.push(country);
  }
}
console.log(emptyA);

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

let techs = "";
for (let i = 0; i < webTechs.length; i++) {
  if (techs.length < webTechs[i].length) {
    techs = webTechs[i];
  }
}
console.log(techs);

newArray = [];
for (const tech of webTechs) {
  newArray.push([tech, tech.length]);
}
console.log(newArray);

let empt = [];
const mernStack = ["MongoDB", "Express", "React", "Node"];
for (const mern of mernStack) {
  empt.push(mern[0]);
}
console.log(empt.join(""));

const newTechs = [
  "HTML",
  "CSS",
  "JS",
  "React",
  "Redux",
  "Node",
  "Express",
  "MongoDB",
];
for (i = 0; i < newTechs.length; i++) {
  console.log(newTechs[i]);
}

let arr = [];
let fruits = ["banana", "orange", "mango", "lemon"];
for (i = fruits.length - 1; i >= 0; i--) {
  arr.push(fruits[i]);
}
console.log(arr);

const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];
console.log(fullStack.join(",").toUpperCase().replaceAll(",", " "));
for (const stack of fullStack) {
  for (const one of stack) {
    console.log(one.toUpperCase());
  }
}

// 3

// const countries = [
//   "Albania",
//   "Bolivia",
//   "Canada",
//   "Denmark",
//   "Ethiopia",
//   "Finland",
//   "Germany",
//   "Hungary",
//   "Ireland",
//   "Japan",
//   "Kenya",
// ];
sortedCountries = countries.sort();
console.log(sortedCountries);
console.log(webTechs.sort());
console.log(mernStack.sort());

let four = [];
for (const country of countries) {
  if (country.length === 4) {
    four.push(country);
  }
}
if (four.length > 0) {
  console.log(four);
} else {
  console.log("no country contain four characters");
}

a = [];
for (const country of countries) {
  if (country.length >= 2) {
    a.push(country);
  } else {
    console.log("natin");
  }
}
console.log(a);

let b = [];
for (let i = 0; i < countries.length; i++) {
  b.push(countries[i].toUpperCase());
}
console.log(b.reverse());
