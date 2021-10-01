// const nigerianStates = [
//   ["Abia", "Umahia"],
//   ["Edo", "Benin city"],
// ];
// const ngnStates = new Map(nigerianStates);
// ngnStates.set("Kwara", "Ilorin");
// ngnStates.set("Kogi", "Lokoja");
// console.log(ngnStates);
// console.log(ngnStates.get("Kwara"));
// console.log(ngnStates.has("Bayelsa"));
// console.log(ngnStates.has("Abia"));

// for (let state of ngnStates) {
//   console.log(state[0]);
//   console.log(state[1]);
//   console.log(state);
// }
// for (let [state, capital] of ngnStates) {
//   console.log(`${capital} is the capital of ${state}`);
// }

// array destructuring
// const myName = ["Abdulsamii", "Ajala"];
// const [firstName, lastName] = myName;
// console.log({ firstName, lastName });

// Exercises
// 1. create an empty set
const emptySet = new Set();
// 2. Create a set containing 0 to 10 using loop
const numSet = new Set();
for (let i = 0; i <= 10; i++) {
  numSet.add(i);
}
console.log(numSet);
console.log(Array.from(Array(11).keys()));
console.log(Array.from(Array(13).keys()).slice(5));
const jalasemData = {
  name: "Abdulsamii",
  age: 24,
  placeOfBirth: "Bethlehem",
};
console.log(Object.keys(jalasemData));
const ages = [22, 34, 21, 19, 25, 18];
console.log(Array.from(ages.keys()));

// 3. Remove an element from a set
numSet.delete(9);
console.log(numSet);
numSet.clear();
console.log(numSet);
const people = new Set(["Jalasem", "Aisha", "Badmus", "Endurance"]);
console.log(people);

// Create a map of countries and number of characters of a country
const countriez = "Nigeria,Cameroon,South Africa,Ghana".split(",");
const countriesMap = new Map();
countriez.forEach((country) => {
  countriesMap.set(country, country.length);
});
console.log(countriesMap);

const a = [4, 5, 8, 9];
const A = new Set(a);
const b = [3, 4, 5, 7];
const B = new Set(b);
const countries = ["Finland", "Sweden", "Norway"];
// Find a union b
const Uba = new Set([...a, ...b]);
console.log({ Uba });
// Find a intersection b
const Iab = Array.from(A).filter((num) => B.has(num));
console.log({ Iab });
// Find a with b
const aWb = [...a, ...b];
console.log({ aWb });

// How many languages are there in the countries object file.
const allCountries = require("./countries_data");
console.log(allCountries[0]);
const countrieslanguages = allCountries
  .map((country) => country.languages)
  .flat();
const languages = new Set(countrieslanguages);
console.log({ languages, count: languages.size });
