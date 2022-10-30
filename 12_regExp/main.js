// Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
// The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.
// points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
// sortedPoints =  [-4, -3, -1, -1, 0, 2, 4, 8]
// distance = 12
// Write a pattern which identify if a string is a valid JavaScript variable

// is_valid_variable('first_name') # True
// is_valid_variable('first-name') # False
// is_valid_variable('1first_name') # False
// is_valid_variable('firstname') # True
const str =
  'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.';
const regExp = /\d+/g;
const result = str.match(regExp);
console.log(
  result.reduce(
    (acc, curr) => acc + +`${curr !== '10000' ? curr * 12 : curr}`,
    0
  )
);

const string =
  'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction.';
const regEx = /-?\d+/g;
const sum = string.match(regEx);
console.log(sum.reduce((acc, curr) => acc + parseInt(curr), 0));

const is_valid_variable = (variable) => {
  const rules = /^[a-z$_][\w$]*$/i;
  return rules.test(variable);
};
console.log(is_valid_variable('.come'));

let paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;

const TenMostFrequentWords = (paragraph, count) => {
  const par = paragraph.match(/\w+/g);
  let arr = [];
  par.forEach((p) => {
    let ind = arr.findIndex((a) => a.word === p);
    if (ind === -1) {
      arr.push({ word: p, count: 1 });
    } else {
      arr[ind].count += 1;
    }
  });
  return arr.sort((a, b) => b.count - a.count).slice(0, count);
};
console.log(TenMostFrequentWords(paragraph, 10));

const TenMostFrequentWord = (paragraph, count) => {
  const par = paragraph.match(/\w+/g);
  const para = {};
  par.forEach((word) => {
    if (para[word]) {
      para[word] += 1;
    } else {
      para[word] = 1;
    }
  });
  return Object.entries(para)
    .map((entry) => {
      return { word: entry[0], count: entry[1] };
    })
    .sort((a, b) => b.count - a.count)
    .slice(0, count);
};
console.log(TenMostFrequentWord(paragraph, 10));

const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;
const cleaned = sentence.replace(/[^\w\s]+/g, '');

const mostFrequentWords = (cleaned) => {
  const par = cleaned.match(/\w+/g);
  let arr = [];
  par.forEach((p) => {
    let ind = arr.findIndex((a) => a.word === p);
    if (ind === -1) {
      arr.push({ word: p, count: 1 });
    } else {
      arr[ind].count += 1;
    }
  });
  return arr.sort((a, b) => b.count - a.count).slice(0, 3);
};
console.log(mostFrequentWords(cleaned));
