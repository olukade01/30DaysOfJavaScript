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

let middleCoy = countriess[(countriess.length - 1) / 2];
console.log(middleCoy);

if (countriess.length % 2 == 0) {
  let firstHalf = countriess.slice(0, countriess.length / 2);
  let secondHalf = countriess.slice(countriess.length / 2, countriess.length);
  console.log(firstHalf);
  console.log(secondHalf);
} else {
  let firstHalf = countriess.slice(0, countriess.length / 2);
  let secondHalf = countriess.slice(countriess.length / 2, countriess.length);
  firstHalf.push("Nigeria");
  console.log(firstHalf);
  console.log(secondHalf);
}
