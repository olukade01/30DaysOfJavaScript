const names = ['Asabeneh', 'Brook', 'David', 'John'];
const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo'],
];
const user = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250,
};
const users = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250,
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25,
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22,
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28,
  },
];

//Display the countries array as a table
console.table(countries);

//Display the countries object as a table
console.table(user);

//Use console.group() to group logs
console.group('Names');
console.log(names);
console.groupEnd();

console.group('Countries');
console.log(countries);
console.groupEnd();

console.group('Users');
console.log(user);
console.log(users);
console.groupEnd();

//10 > 2 * 10 use console.assert()
console.assert(10 > 2 * 10, '10 is not greater than 20');

//Write a warning message using console.warn()
console.warn('This is a warning');

// Write an error message using console.error()
console.error('This is an error message');

//Check the speed difference among the following loops: while, for, for of, forEach

console.time('while loop');
let i = 0;
while (i < countries.length) {
  console.log(countries[i][0], countries[i][1]);
  i++;
}
console.timeEnd('while loop');

console.time('Regular for loop');
for (let i = 0; i < countries.length; i++) {
  console.log(countries[i][0], countries[i][1]);
}
console.timeEnd('Regular for loop');

console.time('for of loop');
for (const [name, city] of countries) {
  console.log(name, city);
}
console.timeEnd('for of loop');

console.time('forEach loop');
countries.forEach(([name, city]) => {
  console.log(name, city);
});
console.timeEnd('forEach loop');
