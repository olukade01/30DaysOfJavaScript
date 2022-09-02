// function fullName() {
//   let firstName = "Olukade";
//   let lastName = "Muzzammil";
//   let space = " ";
//   let fullName = firstName + space + lastName;
//   console.log(fullName);
// }
// fullName();

function fullName(firstName, lastName) {
  const fullName = `${firstName} ${lastName}`;
  return fullName;
}
console.log(fullName("Olukade", "Muzzammil"));

function addNumbers(numOne, numTwo) {
  let sum = numOne + numTwo;
  return sum;
}
console.log(addNumbers(12, 5));

function areaOfRectangle(length, width) {
  let area = length * width;
  return area;
}
console.log(areaOfRectangle(5, 5));

function perimeterOfRectangle(length, width) {
  let perimeter = 2 * (length + width);
  return perimeter;
}
console.log(perimeterOfRectangle(5, 5));

function volumeOfRectPrism(length, width, height) {
  let volume = length * width * height;
  return volume;
}
console.log(volumeOfRectPrism(5, 5, 2));

function areaOfCircle(r) {
  let area = Math.PI * r * r;
  return area.toFixed();
}
console.log(areaOfCircle(10));

function circumOfCircle(r) {
  let circum = 2 * Math.PI * r;
  return circum.toFixed(2);
}
console.log(circumOfCircle(10));

function density(mass, volume) {
  let density = mass / volume;
  return density;
}
console.log(density(10, 2));

function speed(distance, time) {
  let speed = distance / time;
  return speed;
}
console.log(speed(10, 2));

function weight(mass, gravity) {
  let weight = mass * gravity;
  return weight;
}
console.log(weight(5, 10));

function convertCelciusToFahrenheit(oC) {
  let oF = (oC * 9) / 5 + 32;
  return oF;
}
console.log(convertCelciusToFahrenheit(5));

// function bmi(weight, height) {
//   let bmi = weight / (height * height);
//   if (bmi < 18.5) {
//     return `${bmi}: underweight`;
//   } else if (bmi >= 18.5 && bmi <= 24.9) {
//     return `${bmi}: normal weight`;
//   } else if (bmi >= 25 && bmi <= 29.9) {
//     return `${bmi}: overweight`;
//   } else if (bmi >= 30) {
//     return `${bmi}: obese`;
//   }
// }
// console.log(bmi(80, 1.55));

const bmI = (weight, height) => {
  let bmi = weight / (height * height);
  return bmi < 18.5
    ? `${bmi}: underweight`
    : bmi < 24.9
    ? `${bmi}: normal weight`
    : bmi < 29.9
    ? `${bmi}: overweight`
    : `${bmi}: obese`;
};
console.log(bmI(67, 1.75));

function checkSeason(month) {
  switch (month.toLowerCase()) {
    case "january":
    case "february":
    case "march":
      return "winter";
    case "april":
    case "may":
    case "june":
      return "spring";
    case "july":
    case "august":
    case "september":
      return "summer";
    case "october":
    case "november":
    case "december":
      return "autumn";
    default:
      return "Not a month";
  }
}
console.log(checkSeason("november"));

const findMax = (...args) => {
  maxNum = -Infinity;
  for (let i = 0; i < args.length; i++) {
    if (args[i] > maxNum) {
      maxNum = args[i];
    }
  }
  return maxNum;
};
console.log(findMax(0, 10, 5));
console.log(findMax(0, -10, -2));

const max = (...args) => {
  args.sort((a, b) => a - b);
  return args[args.length - 1];
};
console.log(max(0, 10, 5));
console.log(max(0, -10, -2));

// exercise 2

function printArray(numbers) {
  let value = "";
  for (let i = 0; i < numbers.length; i++) {
    value += numbers[i];
  }
  return value;
}
console.log(printArray([1, 2, 3, "muzzammil", true].join(" ")));

function showDateTime() {
  const now = new Date();
  return `${now.getDate() < 10 ? `0${now.getDate()}` : now.getDate()}/${
    now.getMonth() + 1 < 10 ? `0${now.getMonth() + 1}` : now.getMonth() + 1
  }/${now.getFullYear()} ${
    now.getHours() < 10 ? `0${now.getHours()}` : now.getHours()
  }:${now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes()}`;
}
console.log(showDateTime());

// function swapValues(x, y) {
//   return `x => ${y}, y => ${x}`;
// }
// console.log(swapValues(10, 20));

function reverseArray(arr) {
  return arr.reverse();
}
console.log(reverseArray(["A", "B", "C", "D"]));

let countries = ["Angola", "Bahrain", "Colombia", "Denmark"];
function capitalizeArray(arr) {
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    array.push(countries[i].toUpperCase());
  }
  return array;
}
console.log(capitalizeArray(countries));

function removeItem(index) {
  for (let i = 0; i < index.length; i++) {
    index.splice(0, 1);
    return countries;
  }
}
console.log(removeItem(countries));

function sumOfNumbers(number) {
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    sum = sum + number[i];
  }
  return [sum];
}
const numbers = [1, 2, 3, 4, 5];
console.log(sumOfNumbers(numbers));

// function addItem(item) {
//   let arr = [1, 2, 3, 4, 5, 6, 7, 8];
//   let newArr = item.concat(arr);
//   return newArr;
// }
// console.log(addItem(newArr));

function sumOfOdds(number) {
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    if (number[i] % 2 !== 0) {
      sum = sum + number[i];
    }
  }
  return [sum];
}
console.log(sumOfOdds(numbers));

function sumOfEven(number) {
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    if (number[i] % 2 === 0) {
      sum = sum + number[i];
    }
  }
  return [sum];
}
console.log(sumOfEven(numbers));

function evensAndOdds(number) {
  let array = [];
  let arr = [];
  for (let i = 0; i <= number; i++) {
    if ([i] % 2 === 0) {
      array.push([i]);
    }
  }
  for (let i = 0; i <= number; i++) {
    if ([i] % 2 !== 0) {
      arr.push([i]);
    }
  }
  return `The number of odds are ${arr.length}\nThe number of evens are ${array.length} `;
}
console.log(evensAndOdds(100));

const sumAllNums = (...args) => {
  let sum = 0;
  for (const element of args) {
    sum += element;
  }
  return sum;
};

console.log(sumAllNums(1, 2, 3, 4));
console.log(sumAllNums(10, 20, 13, 40, 10));

function randomUserIp() {
  let userIp = "";
  for (let i = 0; i < 4; i++) {
    let randomNo = Math.ceil(Math.random() * 255);
    userIp += "." + randomNo;
  }
  return userIp.replace(".", "");
}
console.log(randomUserIp());

function randomMacAddress() {
  let macAddress = "0a1b2c3d4e5f6789";
  let macAddress2 = "0a1b2c3d4e5f6789";
  let user = "";
  for (let i = 0; i < 6; i++) {
    let randomNo = Math.floor(Math.random() * macAddress.length);
    let randomNo2 = Math.floor(Math.random() * macAddress2.length);
    user += ":" + macAddress[randomNo] + macAddress2[randomNo2];
  }
  return user.replace(":", "");
}
console.log(randomMacAddress());

function randomHexaNumberGenerator() {
  let hexChar = "0a1b2c3d4e5f6789";
  let symbol = "#";
  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * hexChar.length);
    symbol += hexChar[random];
  }
  return symbol;
}
console.log(randomHexaNumberGenerator());

function userIdGenerator() {
  let char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  let chars = "";
  for (let i = 0; i < 7; i++) {
    let randomNo = Math.floor(Math.random() * char.length);
    chars += char[randomNo];
  }
  return chars;
}
console.log(userIdGenerator());

// function userIdGeneratedByUser(input1, input2) {
//   let char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
//   let arr = [];
//   for (let i = 0; i < input2; i++) {
//     let chars = "";
//     for (let i = 0; i < input1; i++) {
//       let randomNo = Math.floor(Math.random() * char.length);
//       chars += char[randomNo];
//     }
//     arr.push(chars);
//   }
//   return arr.join("\n");
// }
// console.log(
//   userIdGeneratedByUser(
//     +prompt("number of characters"),
//     +prompt("number of ids which are supposed to be generated")
//   )
// );

function rgbColorGenerator() {
  const randomBetween = (min, max) =>
    min + Math.floor(Math.random() * (max - min + 1));
  const r = randomBetween(0, 255);
  const g = randomBetween(0, 255);
  const bb = randomBetween(0, 255);
  const rgb = `rgb(${r},${g},${bb})`;
  return rgb;
}
console.log(rgbColorGenerator());

function arrayOfHexaColors() {
  let array = [];
  let hexChar = "0a1b2c3d4e5f6789";
  for (let i = 0; i < 4; i++) {
    let symbol = "#";
    for (let i = 0; i < 6; i++) {
      let random = Math.floor(Math.random() * hexChar.length);
      symbol += hexChar[random];
    }
    array.push(symbol);
  }
  return array;
}
console.log(arrayOfHexaColors());

// function arrayOfRgbColors() {
//   let array = [];
//   for (i = 0; i < 4; i++) {
//     const randomBetween = (min, max) =>
//       min + Math.floor(Math.random() * (max - min + 1));
//     const r = randomBetween(0, 255);
//     const g = randomBetween(0, 255);
//     const bb = randomBetween(0, 255);
//     const rgb = `rgb(${r},${g},${bb})`;
//     array.push(rgb);
//   }
//   return array;
// }
// console.log(arrayOfRgbColors());

function generateColors(color, number) {
  let array = [];
  let hexChar = "0a1b2c3d4e5f6789";
  if (color === "rgb") {
    for (i = 0; i < number; i++) {
      const randomBetween = (min, max) =>
        min + Math.floor(Math.random() * (max - min + 1));
      const r = randomBetween(0, 255);
      const g = randomBetween(0, 255);
      const bb = randomBetween(0, 255);
      const rgb = `rgb(${r},${g},${bb})`;
      array.push(rgb);
    }
  } else if (color === "hex") {
    for (let i = 0; i < number; i++) {
      let symbol = "#";
      for (let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * hexChar.length);
        symbol += hexChar[random];
      }
      array.push(symbol);
    }
  }
  return array;
}
console.log(generateColors("hex", 3));

function factorial(integer) {
  let factorial = 1;
  for (i = integer; i > 0; i--) {
    factorial *= i;
  }
  return factorial;
}
console.log(factorial(5));

const sum = (...args) => {
  let sum = 0;
  for (const element of args) {
    sum += element;
  }
  return sum;
};
console.log(sum(1, 2, 3, 4, 5, 6));

function isEmpty(name) {
  if (name.length === 0) {
    return "its empty";
  } else {
    return `not empty`;
  }
}
console.log(isEmpty("ol7u"));

const items = [2, 3, 5, 4, 7, 7, 6];
function sumOfArrayItems(items) {
  if (!items.every((value) => typeof value === "number")) {
    return Error("every item of the array must be a number");
  }
  return items.reduce((acc, c) => acc + c, 0);
}
console.log(sumOfArrayItems([1, 2, 3, "heyy"]));

function average(item) {
  if (!item.every((value) => typeof value === "number")) {
    return Error("every item of the array must be a number");
  }
  return item.reduce((acc, c) => acc + c, 0) / item.length;
}
console.log(average(items));

function modifyArray(array) {
  if (array.length < 5) {
    return "item not found";
  }
  cap = array[4].toUpperCase();
  array.splice(4, 1, cap);
  return array;
}
console.log(
  modifyArray(["Avocado", "Tomato", "Potato", "Mango", "Lemon", "Carrot"])
);

function isPrime(n) {
  if (!n) return false;
  let prime = true;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      prime = false;
      break;
    }
  }
  return prime;
}
console.log(isPrime(97));

let nil = ["Avocado", "Tomato", "Potato", "Mango", "Lemon", "Carrot"];
function uniqueArray(array) {
  let result = "unique array";
  for (i = 0; i < array.length; i++) {
    let arrayCount = 0;
    for (j = 0; j < array.length; j++) {
      if (array[i] === array[j]) arrayCount++;
    }
    if (arrayCount > 1) {
      result = "not unique";
    }
  }
  return result;
}
console.log(uniqueArray(nil));

function arrayDataTypes(array) {
  let arrayOfdata = ["number", "string", "undefined", "null", "boolean"];
  let empt = [];
  for (let i = 0; i < arrayOfdata.length; i++) {
    if (!array.every((value) => typeof value === arrayOfdata[i])) {
      empt.push(arrayOfdata[i]);
    }
  }
  if (empt.length == arrayOfdata.length) {
    return "Array is not containing the same data type";
  } else {
    return "Array is containing same data type";
  }
}
console.log(arrayDataTypes(nil));

// function isValidVariable(){
//   let
// for(i = 0; i < )
// }

// Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.

// sevenRandomNumbers()
// [(1, 4, 5, 7, 9, 8, 0)]
// Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array

function randomNumbers() {
  let arr = [];
  for (i = 0; arr.length < 7; i++) {
    let random = Math.ceil(Math.random() * 9);
    if (arr.indexOf(random) === -1) arr.push(random);
  }
  return arr;
}
console.log(randomNumbers());
