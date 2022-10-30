const anon = 'John Doe';
console.log(anon); // John Doe
console.log(anon.split(' ')); // ['John', 'Doe']
const [firstName, lastName, sss] = anon.split(' ');
console.log(firstName); // John
console.log(lastName); // Doe

class Persons {
  constructor(name = 'John Doe') {
    const [firstName, lastName] = name.split(' '); // destructuring

    this.firstName = firstName;
    this.lastName = lastName;
    this.score = 0;
    this.skills = [];
  }
  getFullname() {
    return this.name;
  }
  set setScore(value) {
    return (this.score += value); // this.score = this.score + value
  }
  set setSkill(skill) {
    return this.skills.push(skill);
  }
  get getSkills() {
    return this.skills.join(', ');
  }
}

const p1 = new Persons('Muzammil');
p1.score = 2;
p1.setScore = 3;
p1.setSkill = 'JS';
p1.setSkill = 'HTML';
console.table(p1);
console.table(p1.skills);
console.log(p1.getSkills);

const p2 = new Persons();
console.log(p2);

class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.score = 0;
    this.skills = [];
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName;
    return fullName;
  }
  get getScore() {
    return this.score;
  }
  get getSkills() {
    return this.skills;
  }
  set setScore(score) {
    this.score += score;
  }
  set setSkill(skill) {
    this.skills.push(skill);
  }
  getPersonInfo() {
    let fullName = this.getFullName();
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(', ') +
        ` and ${this.skills[this.skills.length - 1]}`;

    let formattedSkills = skills ? `He knows ${skills}` : '';

    let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`;
    return info;
  }
  static favoriteSkill() {
    const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node'];
    const index = Math.floor(Math.random() * skills.length);
    return skills[index];
  }
  static showDateTime() {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let hours = now.getHours() + 1;
    let minutes = now.getMinutes();
    if (hours < 10) {
      hours = '0' + hours;
    }
    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    let dateMonthYear = date + '.' + month + '.' + year;
    let time = hours + ':' + minutes;
    let fullTime = dateMonthYear + ' ' + time;
    return fullTime;
  }
}

console.log(Person.favoriteSkill());
console.log(Person.showDateTime());

const person1 = new Person('Malu', 'Buhari', 78, 'Naija', 'Daura');
console.log(person1);

// class Animal {
//   constructor(name, sound) {
//     this.name = name;
//     this.noOfLegs = 2;
//     this.sound = sound;
//   }
//   makeSound() {
//     console.log(this.sound, this.sound, this.sound);
//   }
// }

// const cat = new Animal('🐈', 'meow');
// console.log(cat);
// cat.makeSound();

// class Bird extends Animal {
//   constructor(name, sound, canFly) {
//     super(name, sound);
//     this.canFly = canFly;
//   }
//   fly() {
//     console.log("The", this.name, "is flying");
//   }
// }

// const eagle = new Bird("🦅", "quah");
// console.log(eagle);
// eagle.makeSound();
// eagle.fly();

// Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }
  move() {
    return `${this.name} is moving`;
  }
  makeSound() {
    return `${this.name} is making sound!!!`;
  }
}
// Create a Dog and Cat child class from the Animal Class.
class Dog extends Animal {
  constructor() {
    super('Bingo', 2, 'White', 4);
  }
  makeSound() {
    return `${this.name} is barking`;
  }
}
class Cat extends Animal {
  constructor(name, age, color) {
    super(name, age, color, 4);
  }
  move() {
    return `${this.name} is about to catch a mouse`;
  }
}
const myCat = new Cat('Huraira', 1, 'Brown');
const myDog = new Dog();
console.log(myCat);
console.log(myDog);
console.log(myCat.move());
console.log(myCat.makeSound());
console.log(myDog.move());
console.log(myDog.makeSound());

const ages = [
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26,
];
class Statistics {
  constructor(values = ages) {
    this.values = values;
  }
  sum() {
    return this.values.reduce((acc, cur) => acc + cur);
  }
  mean() {
    let values = this.values;
    return Math.round(
      values.reduce((acc, cur) => acc + cur, 0) / values.length
    );
  }
  median() {
    let values = this.values;
    values = values.sort((a, b) => a - b);
    const oddLength = values.length % 2;
    if (oddLength) return values[(values.length - 1) / 2];

    return [values[values.length / 2 - 1], values[values.length / 2]];
  }
  mode() {
    let values = this.values;
    const occurrence = {};
    values.forEach((value) => {
      if (occurrence[value]) {
        occurrence[value] += 1;
      } else {
        occurrence[value] = 1;
      }
    });
    return Object.entries(occurrence)
      .sort((a, b) => b[1] - a[1])
      .map((mode) => ({ mode: +mode[0], count: mode[1] }))[0];
  }
  range() {
    let values = this.values;
    return this.max(values) - this.min(values);
  }
  variance() {
    let values = this.values;
    // Step 1: Find the mean.
    const mean = this.mean(values);
    // Step 2: For each data point, find the square of the difference between the mean and each value.
    const differences = values.map((value) => value - mean);
    const squaredDifferences = differences.map((difference) => difference ** 2);
    // Step 3: find the mean of the squared differences.
    return squaredDifferences.reduce((acc, cur) => acc + cur) / values.length;
  }
  standardDeviation() {
    let values = this.values;
    return Math.sqrt(this.variance(values));
  }
  min() {
    let values = this.values;
    values = values.sort((a, b) => a - b);
    return values[0];
  }
  max() {
    let values = this.values;
    values = values.sort((a, b) => a - b);
    return values[values.length - 1];
  }
  count() {
    return this.values.length;
  }
  percentile() {}
  frequencyDistribution() {}
}
const statistics = new Statistics();
console.log('Sum: ', statistics.sum());
console.log('Mean: ', statistics.mean());
console.log('Median: ', statistics.median());
console.log('Mode: ', statistics.mode());
console.log('Range: ', statistics.range());
console.log('Variance: ', statistics.variance());
console.log('StandardDeviation: ', statistics.standardDeviation());
console.log('Min: ', statistics.min());
console.log('Max: ', statistics.max());
console.log('Count: ', statistics.count());
// console.log('Percentile: ', statistics.percentile());
// console.log('Frequency Distribution: ', statistics.frequencyDistribution());

class PersonAccount {
  constructor(
    firstName = 'olukade',
    lastName = 'muzzammil',
    incomes = [
      { income: 600, des: 'allowance' },
      { income: 500, des: 'tech' },
      { income: 400, des: 'salary' },
    ],
    expenses = [
      { expense: 500, des: 'grocery' },
      { expense: 300, des: 'labour' },
      { expense: 100, des: 'internet' },
    ]
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.incomes = incomes;
    this.expenses = expenses;
  }
  totalIncome() {
    return this.incomes.reduce((acc, cur) => acc + cur.income, 0);
  }
  totalExpense() {
    return this.expenses.reduce((acc, cur) => acc + cur.expense, 0);
  }
  accountInfo() {
    return `My name is ${this.firstName} ${
      this.lastName
    }, my total income is ${this.totalIncome()} and my total expenses is ${this.totalExpense()} and my account balance is ${this.accountBalance()}`;
  }
  addIncome(income, des) {
    return this.incomes.push({ income, des });
  }
  set addExpense(data) {
    return this.expenses.push(data);
  }
  accountBalance() {
    return this.totalIncome() - this.totalExpense();
  }
}
const personAccount = new PersonAccount();
console.log(personAccount);
console.log(personAccount.firstName);
console.log(personAccount.incomes);
console.log(personAccount.expenses);
personAccount.addIncome(500, 'profit');
personAccount.addExpense = { expense: 400, des: 'loss' };
console.log(personAccount.totalIncome());
console.log(personAccount.totalExpense());
console.log(personAccount.accountBalance());
console.log(personAccount.accountInfo());
