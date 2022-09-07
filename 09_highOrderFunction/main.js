// const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
// const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const products = [
//   { product: "banana", price: 3 },
//   { product: "mango", price: 6 },
//   { product: "potato", price: " " },
//   { product: "avocado", price: 8 },
//   { product: "coffee", price: 10 },
//   { product: "tea", price: "" },
// ];

// countries.forEach((country) => console.log(country));
// names.forEach((name) => console.log(name));
// numbers.forEach((number) => console.log(number));
// let upperCase = countries.map((country) => country.toUpperCase());
// console.log(upperCase);
// const countryLength = countries.map((country) => country.length);
// console.log(countryLength);

// const squaredNum = numbers.map((num) => num * num);
// console.log(squaredNum);

// let nameUpperCase = names.map((name) => name.toUpperCase());
// console.log(nameUpperCase);

// let land = countries.filter((country) => country.includes("land"));
// console.log(land);
// let six = countries.filter((country) => country.length === 6);
// console.log(six);
// let aboveSix = countries.filter((country) => country.length >= 6);
// console.log(aboveSix);
// let startsWith = countries.filter((country) => country.startsWith("E"));
// console.log(startsWith);
// let priceValue = products.filter(
//   (product) => typeof product.price === "number"
// );
// console.log(priceValue);
// Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
// const mixed = ["Finland", 4, "Sweden", 6, "Denmark", 2, "true", 6, 0];
// const getStringLists = (arr) => {
//   const stringItems = arr.filter((each) => typeof each === "string");
//   if (stringItems) return stringItems;
// };
// console.log(getStringLists(mixed));

// console.log(numbers.reduce((acc, curr) => acc + curr, 0));
// console.log(names.some((name) => name.length > 7));

// console.log(countries.every((country) => country.includes("land")));
// console.log(countries.find((country) => country.length === 6));
// console.log(countries.findIndex((country) => country.length === 6));

// const position = (count) => {
//   const index = countries.findIndex((country) => country === count);
//   if (index) return index;
// };
// console.log(position("Norway"));

// const positio = (count) => {
//   const index = countries.findIndex((country) => country === count);
//   if (index) return index;
// };
// console.log(positio("Russia"));

// ex 2

// function multiply(a, b) {
//   return a * b;
// }

// const sum = (a, b) => a + b;

// function mult(a) {
//   return function (b) {
//     return a * b;
//   };
// }
// const sm = (a) => (b) => a + b;
// console.log(multiply(3, 4));
// console.log(mult(3)(4));
// console.log(sum(3, 4));
// console.log(sm(3)(4));
// const sum = (a, b) => a + b;
// const compute = (a, b, cb) => {
//   return cb(a, b);
// };
// console.log(compute(3, 4, sum));
// let count = 0;
// setInterval(() => {
//   count += 1;
//   console.clear();
//   console.log(new Date().toLocaleString());
// }, 1000);

// let count = 10;
// setInterval(() => {
//   if (!count) return;
//   console.log(`Lecture starts in ${count} seconds`);
//   count--;
// }, 1000);
// setTimeout(() => {
//   console.log("Lecture time!");
// }, 10_000);

// forEach, map, filter, reduce, find, every, some, and sort
// [1, 2, 4, 8, 10].forEach((num) => console.log(num ** 2));
// console.log([1, 3, 5, 7, 9].map((num) => num + 1));
// console.log([1, 3, 2, 4, 5, 10].filter((num) => num % 2 === 0));
// console.log([1, 2, 3, 4, 5].reduce((acc, curr) => acc + curr, 0))
// console.log(
// [1, 2, 3, 4, 9, 11, 15, 30].find((num) => num % 5 === 0 && num % 3 === 0)
// );
// console.log([2, 3, 4].every((num) => num % 2 === 0));
// console.log([2, 4, 6, 8].every(num => num % 2 === 0))
// console.log([2, 3, 4].some((num) => num % 2));
// console.log([2, 4, 6, 8].some((num) => num % 2));
// console.log([1, 2, 5, 3, 7, 4, 6, 10].sort((a, b) => a - b))
// console.log([1, 2, 5, 3, 7, 4, 6, 10].sort((a, b) => b - a))
// console.log('Jalasem,Taofeek,Edmum,Endurance,Goodness,Ibrahim'.split(',').sort((a, b) => b.length - a.length))
// const nums = [1, 2, 3, 1, 4, 5, 5, 7, 5, 4, 8];
// const uniqueNums = {};
// nums.forEach((num) => {
//   if (uniqueNums[num]) {
//     uniqueNums[num] += 1;
//   } else {
//     uniqueNums[num] = 1;
//   }
// });
// console.log(uniqueNums);
// console.log(Object.entries(uniqueNums));

// const arr1 = [
//   [1, 2, 3, 4, 5],
//   [2, 4, 5, 6, 7],
//   [1, 2, 4, 5, 6],
// ];
// const result = [];
// arr1.flat().forEach((num) => {
//   const resultIndex = result.findIndex((n) => n.value === num);
//   if (resultIndex === -1) {
//     result.push({ value: num, count: 1 });
//   } else {
//     result[resultIndex].count += 1;
//   }
// });
// console.log(result); // [{ value: 1, count: 2 }]

const euCountries = [
  "Estonia",
  "Finland",
  "Sweden",
  "Denmark",
  "Norway",
  "IceLand",
];
// console.log(
//   euCountries.reduce((acc, cur, index) => {
//     if (index === euCountries.length - 1) {
//       return acc + `and ${cur} are north European countries.`;
//     } else {
//       return (acc += `${cur}, `);
//     }
//   }, "")
// );

const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];
console.log(
  products
    .filter((product) => typeof product.price === "number")
    .map((product) => product.price)
    .reduce((acc, cur) => acc + cur, 0)
);
// console.log(
//   products.reduce((acc, cur) => {
//     if (typeof cur.price === 'number') {
//       return acc + cur.price
//     }
//     return acc
//   }, 0)
// )

// const cats = ["land", "ia", "island", "stan"];
// const categories = [[], [], [], []];

// console.log(
//   countries.forEach((country) => {
//     cats.forEach((cat, catIndex) => {
//       if (country.name.toLowerCase().endsWith(cat)) {
//         categories[catIndex].push(country.name);
//       }
//     });
//   })
// );
// for (let i = 0; i < countries.length; i++) {
//   for (let j = 0; j < cats.length; j++) {
//     const country = countries[i]
//     const pattern = cats[j]

//     if (country.name.toLowerCase().endsWith(pattern)) {
//       categories[j].push(country.name)
//     }
//   }
// }
// console.log(categories)
// const countries = require('./countries_data')
// function countryLetters () {
//   const letters = 'a b c d e f g h i j k l m n o p q r s t u v w x y z'.split(' ');
//   const categories = letters.map((letter) => {
//     return { letter: letter, count: 0 }
//   })
//   // console.log(categories)

//   countries.forEach(country => {
//     const letterIndex = categories.findIndex(category => country.name.toLowerCase().startsWith(category.letter))

//     if (letterIndex === -1) return

//     categories[letterIndex].count += 1
//   })

//   return categories.sort((a, b) => b.count - a.count)
// }

// console.log(countryLetters())
// console.log(countryLetters()[0])

// console.log(
//   [1, 7, 2, 4, 10, 3, 5].sort((a, b) => b - a)
// )

// for for-of for-in forEach
// for (let i = 2; i <= 10; i++) {
// console.log(i);
// }
// const names = ["Mikail", "Hassan", "Laja", "James"];
//                 0          1        2       3
// 4
// const statements = [];
// for (let i = 0; i < names.length; i++) {
// statements.push(`${names[i]} is a student`);
// }
// console.log(statements);
// names.forEach(function (name, nameIndex) {
// statements.push(`${nameIndex + 1}. ${name} dey here`);
// });
// console.log(statements);
// const countries = require('./countries_data')
// console.log(countries.sort((a, b) => b.population - a.population).slice(0, 10).map(country => ({ name: country.name, population: country.population })))

// const countries = require('./countries_data')
// // console.log(countries)

// const getFirst10 = (sortFunction) => {
//   if (!sortFunction) return countries.slice(0, 10)
//   return sortFunction(countries).slice(0, 10)
// }
// const getLast10 = (sortFunction) => {
//   if (!sortFunction) return countries.slice(countries.length - 10)

//   return sortFunction(countries).slice(countries.length - 10)
// }

// // console.log(getFirst10())
// console.log(getFirst10(kontriz => kontriz.sort((a, b) => a.population - b.population)))
// console.log(getLast10(kontriz => kontriz.sort((a, b) => a.population - b.population)))
// console.log(
//   getFirst10(kontriz => kontriz.sort((a, b) => b.languages.length - a.languages.length))
// )

// name, by capital, by population
// const countries = require('./countries_data')
// console.log(countries.sort((a, b) => a.name - b.name).map(country => country.name))
// console.log(countries.sort((a, b) => a.population - b.population).slice(0, 10))
// const countries = require('./countries_data')

// const mostSpokenLanguages = (countries, count) => {
//   const languages = {}

//   countries.forEach(country => {
//     country.languages.forEach(language => {
//       if (languages[language]) {
//         languages[language] += 1
//       } else {
//         languages[language] = 1
//       }
//     })
//   })
//   // console.log(languages)
//   return Object.entries(languages)
//     .map(entry => {
//       return { language: entry[0], count: entry[1]}
//     })
//     .sort((a, b) => b.count - a.count)
//     .slice(0, count)
// }

// console.log(mostSpokenLanguages(countries, 10))

// const countries = require('./countries_data')
// const mostPopulatedCountries = (countries, count = 10) =>
//   countries
//     .sort((a, b) => b.population - a.population)
//     .slice(0, count)

// console.log(mostPopulatedCountries(countries, 10))

const statistics = {
  mean: (values) => values.reduce((acc, cur) => acc + cur, 0) / values.length,
  median: (values) => {
    values = values.sort((a, b) => a - b);
    const oddLength = Boolean(values.length % 2);
    if (oddLength) return values[(values.length - 1) / 2];

    return [values[values.length / 2 - 1], values[values.length / 2]];
  },
  mode: (values) => {
    const occurrence = {};
    values.forEach((value) => {
      if (occurrence[value]) {
        occurrence[value] += 1;
      } else {
        occurrence[value] = 1;
      }
    });
    return Object.entries(occurrence).sort((a, b) => b[1] - a[1])[0][0];
  },
  range: function (values) {
    return this.max(values) - this.min(values);
  },
  variance: function (values) {
    return this.standardDeviation(values) ** 2;
  },
  standardDeviation: function (values) {
    // Step 1: Find the mean.
    const mean = this.mean(values);
    // Step 2: For each data point, find the square of the difference between the mean and each value.
    const differences = values.map((value) => mean - value);
    const squaredDifferences = differences.map((difference) => difference ** 2);
    // Step 3: find the mean of the squared differences.
    const averageSquaredDifferences = this.mean(squaredDifferences);
    // Step 4: Take the square root.
    return Math.sqrt(averageSquaredDifferences);
  },
  min: (values) => {
    values = values.sort((a, b) => a - b);
    return values[0];
  },
  max: (values) => {
    values = values.sort((a, b) => a - b);
    return values[values.length - 1];
  },
  count: (values) => values.length,
  percentile: (values) => {},
  frequencyDistribution: (values) => {},
};

const ages = [
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26,
];

console.log("mean: ", statistics.mean(ages));
console.log("median: ", statistics.median(ages));
console.log("mode: ", statistics.mode(ages));
console.log("range: ", statistics.range(ages));
console.log("variance: ", statistics.variance(ages));
console.log("standardDeviation: ", statistics.standardDeviation(ages));
console.log("min: ", statistics.min(ages));
console.log("max: ", statistics.max(ages));
console.log("count: ", statistics.count(ages));
console.log("percentile: ", statistics.percentile(ages));
console.log("frequencyDistribution: ", statistics.frequencyDistribution(ages));

const countriess = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
//Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
// console.log(
//   countriess.reduce((acc, cur) => {
//     return (
//       acc +
//       `, ${
//         countriess.indexOf(cur) === countriess.length - 1
//           ? `and ${cur} are north European countries`
//           : cur
//       }`
//     );
//   }, "Estonia")
// );
const productss = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: "" },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];
console.log(
  productss
    .filter((val) => typeof val.price === "number")
    .reduce((acc, cur) => acc + cur.price, 0)
);
console.log(
  productss.reduce((acc, cur) => {
    if (cur.price === "") cur.price = 0;
    return acc + cur.price;
  }, 0)
);
