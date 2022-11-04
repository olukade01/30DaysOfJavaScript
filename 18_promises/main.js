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

const total = new Set(
  countries
    .forEach((country) => country.languages.map((language) => language.name))
    .flat()
).size;
