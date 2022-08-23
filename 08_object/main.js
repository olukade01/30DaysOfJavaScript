const dog = {};
console.log(dog);
(dog.dogName = "bingo"),
  (dog.legs = 4),
  (dog.color = "brown"),
  (dog.age = 2),
  (dog.bark = function () {
    return `woof woof`;
  });
console.log(dog.dogName);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark());

dog.breed = "serbian";
dog.getDogInfo = function () {
  return `${this.dogName} is ${this.age} years and have ${this.legs} legs`;
};

// ex2
// const users = {
//   Alex: {
//     email: "alex@alex.com",
//     skills: ["HTML", "CSS", "JavaScript"],
//     age: 20,
//     isLoggedIn: false,
//     points: 30,
//   },
//   Asab: {
//     email: "asab@asab.com",
//     skills: [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "Redux",
//       "MongoDB",
//       "Express",
//       "React",
//       "Node",
//     ],
//     age: 25,
//     isLoggedIn: false,
//     points: 50,
//   },
//   Brook: {
//     email: "daniel@daniel.com",
//     skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
//     age: 30,
//     isLoggedIn: true,
//     points: 50,
//   },
//   Daniel: {
//     email: "daniel@alex.com",
//     skills: ["HTML", "CSS", "JavaScript", "Python"],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
//   John: {
//     email: "john@john.com",
//     skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
//     age: 20,
//     isLoggedIn: true,
//     points: 50,
//   },
//   Thomas: {
//     email: "thomas@thomas.com",
//     skills: ["HTML", "CSS", "JavaScript", "React"],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
//   Paul: {
//     email: "paul@paul.com",
//     skills: [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "MongoDB",
//       "Express",
//       "React",
//       "Node",
//     ],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
// };
// Object.entries(users).sort(
//   (a, b) => b[1].skills.length - a[1].skills.length
// )[0][1].skills;

// let highest = { name: "", skills: [] };
// for (let userKey in users) {
//   const user = users[userKey];
//   if (user.skills && user.skills.length > highest.skills.length) {
//     highest = { name: userKey, skills: user.skills };
//   }
// }
// console.log(highest);
// let usersArray = Object.entries(users);
// for (let i = 0; i < usersArray.length; i++) {
//   const skills = usersArray[i][1]["skills"];
//   const name = usersArray[i][0];
//   if (highest.skills < skills.length) {
//     highest = { name: name, skills };
//   }
// }
// console.log(highest);

// let count = 0;
// let points = 0;

/////////

// let loggedIn = [];
// for (let userKey in users) {
//   if (users[userKey].isLoggedIn === true) {

/////
// loggedIn.push(users[userKey]);
//     count++;
//   }
//   if (users[userKey].points >= 50) {
//     points++;
//   }
// }
// console.log(count);
// console.log(points);

// let mern = ["MongoDB", "Express", "React", "Node"];
// console.log(
//   Object.entries(users).filter((user) =>
//     mern.every((skill) => user[1].skills.includes(skill))
//   )
// );

// Object.assign(users)["muzzammil"] = {
//   email: "paul@paul.com",
//   skills: ["HTML", "CSS", "JavaScript", "MongoDB", "Express", "React", "Node"],
//   age: 20,
//   isLoggedIn: false,
//   points: 40,
// };
// console.log(users);

// console.log(Object.keys(users));

// console.log(Object.values(users));

// countries object to print a country name, capital, populations and languages.
// countries = {
//   name: nigeria,
// };

// ex3
const personAccount = {
  firstName: "Olukade",
  lastName: "Muzzammil",
  incomes: [
    { income: 600, des: "allowance" },
    { income: 500, des: "tech" },
    { income: 400, des: "salary" },
  ],
  expenses: [
    { expenses: 500, des: "grocery" },
    { expenses: 300, des: "labour" },
    { expenses: 100, des: "internet" },
  ],
  totalIncome: function () {
    return this.incomes.reduce((acc, curr) => acc + curr.income, 0);
  },
  totalExpenses: function () {
    return this.expenses.reduce((acc, curr) => acc + curr.expenses, 0);
  },
  addIncome: function (newIncome, newDes) {
    return personAccount.incomes.push({ income: newIncome, des: newDes });
  },
  addExpenses: function (newExp, newDes) {
    return this.expenses.push({ expenses: newExp, des: newDes });
  },
  accountBalance: function () {
    return this.totalIncome() - this.totalExpenses();
  },
  accountInfo: function () {
    return `My name is ${this.firstName} ${
      this.lastName
    }, my total income is ${this.totalIncome()} and my total expenses is ${this.totalExpenses()} and my account balance is ${this.accountBalance()}`;
  },
};

// console.log(personAccount.firstName);
// console.log(personAccount.incomes);
// console.log(personAccount.totalIncome());
// console.log(personAccount.totalExpenses());
// personAccount.addIncome(700, "none");
// personAccount.addExpenses(800, "none");
// console.log(personAccount.expenses);
// console.log(personAccount.accountBalance());
// console.log(personAccount.accountInfo());

const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];
const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];
const generateId = () => Math.random().toString(36).substring(5);
const signup = (username, email, password) => {
  const userExists = users.find(
    (user) => user.username === username || user.email === email
  );
  if (userExists) {
    return "user already exists";
  }
  users.push({
    _id: generateId(),
    username,
    email,
    password,
    isLoggedIn: false,
    createdAt: new Date().toUTCString(),
  });
  return users;
};
console.log(signup("Martha", "marth@martha.com", "123222"));

const signIn = (username, email, password) => {
  const userIndex = users.findIndex(
    (user) => user.username === username || user.email === email
  );
  if (userIndex === -1) {
    return "user does not exist";
  }
  const user = users[userIndex];
  if (user.password !== password) {
    return "incorrect password";
  }
  user.isLoggedIn = true;
  return "welcome back";
};
console.log(signIn("Martha", "marth@martha.com", "123222"));

const rateProduct = (userId, productId, ratings) => {
  const productIndex = products.findIndex(
    (product) => product._id === productId
  );
  if (productIndex === -1) {
    return `product not available`;
  }
  products[productIndex].ratings.push({ userId, rate: ratings });
  return products;
};
console.log(rateProduct(generateId(), "eedfcf", 5));

const averageRating = (productId) => {
  const product = products.find((prod) => prod._id === productId);
  if (!product) {
    return `product not available`;
  }
  return (
    product.ratings.reduce((acc, cur) => acc + cur.rate, 0) /
    product.ratings.length
  );
};
console.log(averageRating("eedfcf"));

const likeProduct = (userId, productId) => {
  const product = products.findIndex((prod) => prod._id === productId);
  if (product === -1) return `product not found`;
  const userIndex = products[product].likes.indexOf(userId);
  if (userIndex === -1) {
    products[product].likes.push(userId);
  } else {
    products[product].likes.splice(userIndex, 1);
  }
  return products;
};
console.log(likeProduct(generateId(), "hedfcg"));
