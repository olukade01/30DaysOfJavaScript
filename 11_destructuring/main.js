const constants = [2.72, 3.14, 9.81, 37, 100];
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway'];
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60,
};
const users = [
  {
    name: 'Brook',
    scores: 75,
    skills: ['HTM', 'CSS', 'JS'],
    age: 16,
  },
  {
    name: 'Alex',
    scores: 80,
    skills: ['HTM', 'CSS', 'JS'],
    age: 18,
  },
  {
    name: 'David',
    scores: 75,
    skills: ['HTM', 'CSS'],
    age: 22,
  },
  {
    name: 'John',
    scores: 85,
    skills: ['HTML'],
    age: 25,
  },
  {
    name: 'Sara',
    scores: 95,
    skills: ['HTM', 'CSS', 'JS'],
    age: 26,
  },
  {
    name: 'Martha',
    scores: 80,
    skills: ['HTM', 'CSS', 'JS'],
    age: 18,
  },
  {
    name: 'Thomas',
    scores: 90,
    skills: ['HTM', 'CSS', 'JS'],
    age: 20,
  },
];

// Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
console.log({ e, pi, gravity, humanBodyTemp, waterBoilingTemp });

// Destructure and assign the elements of countries array to fin, est, sw, den, nor
const [fin, est, sw, den, nor] = countries;
console.log({ fin, est, sw, den, nor });

// Destructure the rectangle object by its properties or keys.
const { width, height, perimeter, area } = rectangle;
const { width: w, height: h, perimeter: p, area: a } = rectangle;
console.log(width, height, perimeter, area);
console.log({ w, h, p, a });

// Iterate through the users array and get all the keys of the object using destructuring
console.log(
  users.map(({ name, scores, skills, age }) => [name, scores, skills, age])
);
console.log(
  users.map((user) => [user.name, user.scores, user.skills, user.age])
);

// Find the persons who have less than two skills
console.log(users.filter(({ skills }) => skills.length < 2));
console.log(users.find((user) => user.skills.length < 2));

// // Destructure the countries object print name, capital, population and languages of all countries
// require('./countries_data').forEach(
//   ({ name, capital, population, languages }) => {
//     console.log(name);
//     console.log(capital);
//     console.log(population);
//     console.log(languages);
//   }
// );

// // A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]];
const [name, skills, [, , jsScore, reactScore]] = student;
// const [jsScore, reactScore] = scores
console.log(name, skills, jsScore, reactScore);

// Write a function called convertArrayToObject which can convert the array to a structure object.
const students = [
  ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
  ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]],
  [
    'Laja',
    ['HTML', 'Sleeping', 'Playing Game', 'Watching film', 'Oshomolization'],
    [90, 91, 97, 100],
  ],
];

const convertArrayToObject = (data) =>
  data.map(([name, skills, scores]) => ({ name, skills, scores }));
console.log(convertArrayToObject(students));

// Copy the student object to newStudent without mutating the original object. In the new object add the following ?
// Add Bootstrap with level 8 to the front end skill sets
// Add Express with level 9 to the back end skill sets
// Add SQL with level 8 to the data base skill sets
// Add SQL without level to the data science skill sets

const studentt = {
  name: 'David',
  age: 25,
  skills: {
    frontEnd: [
      { skill: 'HTML', level: 10 },
      { skill: 'CSS', level: 8 },
      { skill: 'JS', level: 8 },
      { skill: 'React', level: 9 },
    ],
    backEnd: [
      { skill: 'Node', level: 7 },
      { skill: 'GraphQL', level: 8 },
    ],
    dataBase: [{ skill: 'MongoDB', level: 7.5 }],
    dataScience: ['Python', 'R', 'D3.js'],
  },
};
console.log(studentt);
const newStudent = JSON.parse(JSON.stringify(studentt));
newStudent.skills.frontEnd.push({ skills: 'Bootstrap', level: 8 });
newStudent.skills.backEnd.push({ skills: 'Express', level: 9 });
newStudent.skills.dataBase.push({ skills: 'SQL', level: 8 });
newStudent.skills.dataScience.push('SQL');

// let newStudent = { ...studentt };
// newStudent = {
//   ...newStudent,
//   skills: {
//     ...newStudent.skills,
//     frontEnd: [
//       ...newStudent.skills.frontEnd,
//       {
//         skills: 'Bootstrap',
//         level: 8,
//       },
//     ],
//   },
// };
console.log(newStudent);
