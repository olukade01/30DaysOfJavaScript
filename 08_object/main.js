const dog = {};
console.log(dog);
dog.name = "bingo";
dog.legs = 4;
dog.color = "brown";
dog.age = 2;
dog.bark = function () {
  return `woof woof`;
};
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark());

dog.breed = "serbian";
dog.getDogInfo = function () {
  return `${this.name} is ${this.age} years and have ${this.legs} legs`;
};
console.log(dog.getDogInfo());

// ex2

const firstusers = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

const newUsers = Object.entries(firstusers);

const sortedUsers = newUsers.sort(
  (a, b) => b[1].skills.length - a[1].skills.length
);
console.log({ name: sortedUsers[0][0], skills: sortedUsers[0][1].skills });

let highestSkills = { name: "", skills: [] };
for (const user of newUsers) {
  if (user[1].skills.length > highestSkills.skills.length) {
    highestSkills = { name: user[0], skills: user[1].skills };
  }
}
console.log(highestSkills);

let highest = { name: "", skills: [] };
for (let userKey in firstusers) {
  const user = firstusers[userKey];
  if (user.skills && user.skills.length > highest.skills.length) {
    highest = { name: userKey, skills: user.skills };
  }
}
console.log(highest);

let count0 = 0;
let count1 = 0;
for (const user of newUsers) {
  if (user[1].isLoggedIn === true) count0++;
  if (user[1].points >= 50) count1++;
}
console.log(count0);
console.log(count1);

let count = 0;
let points = 0;
for (let userKey in firstusers) {
  if (firstusers[userKey].isLoggedIn === true) count++;
  if (firstusers[userKey].points >= 50) points++;
}
console.log(count);
console.log(points);

let mernStack = [];
for (const user of newUsers) {
  if (
    user[1].skills.includes("MongoDB") &&
    user[1].skills.includes("Express") &&
    user[1].skills.includes("React") &&
    user[1].skills.includes("Node")
  )
    mernStack.push(user[0]);
}
console.log(mernStack);

let mern = ["MongoDB", "Express", "React", "Node"];
console.log(
  Object.entries(firstusers).filter((user) =>
    mern.every((skill) => user[1].skills.includes(skill))
  )
);

const newName = Object.assign({}, firstusers);
newName.muzzammil = {
  email: "paul@paul.com",
  skills: ["HTML", "CSS", "JavaScript", "MongoDB", "Express", "React", "Node"],
  age: 20,
  isLoggedIn: false,
  points: 60,
};
console.log(newName);

console.log(Object.keys(firstusers));
console.log(Object.values(firstusers));

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
  // totalIncome: function () {
  //   return this.incomes.reduce((acc, curr) => acc + curr.income, 0);
  // },
  // totalExpenses: function () {
  //   return this.expenses.reduce((acc, curr) => acc + curr.expenses, 0);
  // },
  totalIncome: function () {
    let sum = 0;
    for (const income of this.incomes) {
      sum += income.income;
    }
    return sum;
  },
  totalExpenses: function () {
    let sum = 0;
    for (const expenses of this.expenses) {
      sum += expenses.expenses;
    }
    return sum;
  },
  addIncome: function (income, des) {
    return this.incomes.push({ income, des });
  },
  addExpenses: function (expenses, des) {
    return this.expenses.push({ expenses, des });
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

console.log(personAccount.firstName);
console.log(personAccount.incomes);
console.log(personAccount.totalIncome());
console.log(personAccount.totalExpenses());
personAccount.addIncome(700, "profit");
personAccount.addExpenses(600, "loss");
console.log(personAccount.expenses);
console.log(personAccount.accountBalance());
console.log(personAccount.accountInfo());

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

const generateId = () => Math.random().toString(36).substring(6);
// const signUp = (username, email, password) => {
//   let oneUser = "";
//   for (const user of users) {
//     if (user.username.toLowerCase() === username.toLowerCase())
//       oneUser = user.username;
//   }
//   if (oneUser.length > 0) return "you already have an account";
//   else {
//     users.push({
//       _id: generateId(),
//       username,
//       email,
//       password,
//       createdAt: new Date().toLocaleString(),
//       isLoggedIn: false,
//     });
//     console.log("signed up successfully");
//   }
//   return users;
// };
// console.log(signUp("brook", "olukade@gmail.com", "111111"));

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

const SignIn = (username, password) => {
  let oneUser = "incorrect details";
  for (const user of users) {
    if (user.username === username && user.password === password) {
      if (user.isLoggedIn === true) oneUser = "you are already logged in";
      else {
        oneUser = "signed in successfully";
        user.isLoggedIn = true;
      }
    }
  }
  return oneUser;
};
console.log(SignIn("Brook", "123111"));

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
console.log(rateProduct(generateId(), "aegfal", 5));

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

const likes = (prodId, userId) => {
  const neww = [];
  for (const product of products) {
    if (product._id === prodId) {
      neww.push(product);
      let index = product.likes.indexOf(userId);
      if (index === -1) product.likes.push(userId);
      else product.likes.splice(index, 1);
    }
  }
  if (neww.length === 0) return "product not found";
  return products;
};

console.log(likes("aegfal", "fg12cya"));

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
