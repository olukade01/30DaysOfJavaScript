localStorage.setItem('firstName', 'Olukade');
localStorage.setItem('lastName', 'Muzzammil');
localStorage.setItem('age', 24);
localStorage.setItem('city', 'Ilorin');
localStorage.setItem('Country', 'Nigeria');

const student = {
  firstName: 'Olukade',
  lastName: 'Muzzammil',
  age: 24,
  skills: ['HTML', 'CSS', 'Javascript', 'Typescript'],
  country: 'Nigeria',
};
const toJSON = JSON.stringify(student);
localStorage.setItem('student', toJSON);
