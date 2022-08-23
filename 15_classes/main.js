// const anon = "John Doe"
// console.log(anon) // John Doe
// console.log(anon.split(' ')) // ['John', 'Doe']
// const [firstName, lastName, sss] = anon.split(' ')
// console.log(firstName) // John
// console.log(lastName) // Doe

// class Person {
//   constructor(name = "John Doe") {
//     const [firstName, lastName] = name.split(" "); // destructuring

//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.score = 0;
//     this.skills = [];
//   }
//   getFullname() {
//     return this.name;
//   }
//   set setScore(value) {
//     return (this.score += value); // this.score = this.score + value
//   }
//   set setSkill(skill) {
//     return this.skills.push(skill);
//   }
//   get getSkills() {
//     return this.skills.join(", ");
//   }
// }

// const p1 = new Person("Muzammil");
// p1.score = 2;
// p1.setScore = 3;
// p1.setSkill = "JS";
// p1.setSkill = "HTML";
// console.table(p1);
// console.table(p1.skills);
// console.log(p1.getSkills);

// const p2 = new Person();
// console.log(p2);

// class Person {
//   constructor(firstName, lastName, age, country, city) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.age = age
//     this.country = country
//     this.city = city
//     this.score = 0
//     this.skills = []
//   }
//   getFullName() {
//     const fullName = this.firstName + ' ' + this.lastName
//     return fullName
//   }
//   get getScore() {
//     return this.score
//   }
//   get getSkills() {
//     return this.skills
//   }
//   set setScore(score) {
//     this.score += score
//   }
//   set setSkill(skill) {
//     this.skills.push(skill)
//   }
//   getPersonInfo() {
//     let fullName = this.getFullName()
//     let skills =
//       this.skills.length > 0 &&
//       this.skills.slice(0, this.skills.length - 1).join(', ') +
//         ` and ${this.skills[this.skills.length - 1]}`

//     let formattedSkills = skills ? `He knows ${skills}` : ''

//     let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
//     return info
//   }
//   static favoriteSkill() {
//     const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
//     const index = Math.floor(Math.random() * skills.length)
//     return skills[index]
//   }
//   static showDateTime() {
//     let now = new Date()
//     let year = now.getFullYear()
//     let month = now.getMonth() + 1
//     let date = now.getDate()
//     let hours = now.getHours() + 1
//     let minutes = now.getMinutes()
//     if (hours < 10) {
//       hours = '0' + hours
//     }
//     if (minutes < 10) {
//       minutes = '0' + minutes
//     }

//     let dateMonthYear = date + '.' + month + '.' + year
//     let time = hours + ':' + minutes
//     let fullTime = dateMonthYear + ' ' + time
//     return fullTime
//   }
// }

// console.log(Person.favoriteSkill())
// console.log(Person.showDateTime())

// const person1 = new Person('Malu', 'Buhari', 78, 'Naija', 'Daura')
// console.log(person1)

// Person.favoriteSkill()

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

// const cat = new Animal("🐈", "meow");
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
class Dog extends Animal {}
class Cat extends Animal {
  constructor(name, age, color) {
    super(name, age, color, 4);
  }
  move() {
    return `${this.name} is about to catch a mouse`;
  }
}
const myCat = new Cat("Huraira", 1, "Brown");
const myDog = new Dog("Bingo", 2, "White", 4);
console.log(myCat);
console.log(myDog);
console.log(myCat.move());
console.log(myDog.move());
