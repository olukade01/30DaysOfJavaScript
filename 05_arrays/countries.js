const countriess = [
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
if (countriess.includes("Ethiopia")) {
  console.log("ETHIOPIA");
} else {
  console.log(countriess.push("Ethiopia"));
}
console.log(countriess.slice(0, 10));

// let middleCoy = countriess[(countriess.length - 1) / 2];
// console.log(middleCoy);

let country = countriess.length;
const countryy =
  country % 2 !== 0
    ? countriess[(country - 1) / 2]
    : `${countriess[country / 2 - 1]} ${countriess[country / 2]}`;
console.log({ countryy });

let length = countriess.length;
if (countriess.length % 2 == 0) {
  let firstHalf = countriess.slice(0, length / 2);
  let secondHalf = countriess.slice(length / 2, length);
  console.log(firstHalf);
  console.log(secondHalf);
} else {
  let firstHalf = countriess.slice(0, length / 2);
  let secondHalf = countriess.slice(length / 2, length);
  firstHalf.push("Nigeria");
  console.log(firstHalf);
  console.log(secondHalf);
}
