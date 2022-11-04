const calc = (a, b, cb) => cb(a, b);
function add(c, d) {
  return c + d;
}
const subtract = (e, f) => e - f;
console.log(calc(25, 50, add));
console.log(calc(50, 25, subtract));

const meal = (isHungry, cb) => {
  if (isHungry) return cb('semo');
  else return 'why you con dey stress me before';
};
const cook = (food) => {
  console.log('Alaye be patient for us');
  setTimeout(() => {
    console.log(`come take the ${food} you come this life come chop`);
  }, 3000);
};
console.log(meal(true, cook));

const withdrawal = (amount) =>
  new Promise((resolve, reject) => {
    const balance = 50000;
    setTimeout(() => {
      if (amount > balance) reject('insufficient fund');
      else {
        resolve({ cash: amount, Balance: balance - amount });
      }
    }, 5000);
  });
withdrawal(40000)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => console.error(err));

const countriesAPI = 'https://restcountries.com/v2/all';
const catsAPI = 'https://api.thecatapi.com/v1/breeds';

// Read the countries API using fetch and print the name of country, capital, languages, population and area.

const countriesData = async () => {
  try {
    const countries = await fetch(countriesAPI);
    const toJson = await countries.json();
    console.log(
      toJson.map(({ name, capital, languages, population, area }) => ({
        name,
        capital,
        languages,
        population,
        area,
      }))
    );
  } catch (err) {
    console.error(err);
  }
};
countriesData();

// Print out all the cat names in to catNames variable.

const catNames = async () => {
  try {
    const cats = await fetch(catsAPI);
    const toJson = await cats.json();
    console.log(toJson.map(({ name }) => name));
  } catch (err) {
    console.error(err);
  }
};
catNames();

// Read the cats api and find the average weight of cat in metric unit.

const cats = async () => {
  try {
    const cats = await fetch(catsAPI);
    const toJson = await cats.json();
    console.log(toJson);
    console.log(
      toJson.map(({ weight }) => {
        const w = weight.metric;
        return (+w[w.length - 1] + +w[0]) / 2;
      })
    );
  } catch (err) {
    console.error(err);
  }
};
cats();

// Read the countries api and find out the 10 largest countries

const largestCountries = async () => {
  try {
    const countries = await fetch(countriesAPI);
    const toJson = await countries.json();
    console.log(
      toJson.sort((a, b) => b.population - a.population).slice(0, 10)
    );
  } catch (err) {
    console.error(err);
  }
};
largestCountries();

// Read the countries api and count total number of languages in the world used as officials.

const languages = async () => {
  try {
    const countries = await fetch(countriesAPI);
    const toJson = await countries.json();
    const total = new Set(
      toJson.map(({ languages }) => languages.map(({ name }) => name)).flat()
    ).size;
    console.log(total);
  } catch (err) {
    console.error(err);
  }
};
languages();
