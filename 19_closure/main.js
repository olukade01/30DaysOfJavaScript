const myName = () => {
  let name = '';
  const namee = () => (name = 'muzzammil');
  return namee();
};
console.log(myName());

const calc = () => {
  let count = 1;
  const add = () => {
    count++;
    return count;
  };
  const sub = () => {
    count--;
    return count;
  };
  const zero = () => (count = 0);
  return { add: add(), sub: sub(), zero: zero() };
};
console.log(calc().add);
console.log(calc().sub);
console.log(calc().zero);

// Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

const personAccount = function () {
  let firstName = 'olukade';
  let lastName = 'muzzammil';
  let incomes = [
    { income: 600, des: 'allowance' },
    { income: 500, des: 'tech' },
    { income: 400, des: 'salary' },
  ];
  let expenses = [
    { expense: 500, des: 'grocery' },
    { expense: 300, des: 'labour' },
    { expense: 100, des: 'internet' },
  ];

  function totalIncome() {
    return incomes.reduce((acc, cur) => acc + cur.income, 0);
  }
  function totalExpense() {
    return expenses.reduce((acc, cur) => acc + cur.expense, 0);
  }
  function accountInfo() {
    return `My name is ${firstName} ${lastName}, my total income is ${totalIncome()} and my total expenses is ${totalExpense()} and my account balance is ${accountBalance()}`;
  }
  function addIncome(income, des) {
    incomes.push({ income, des });
    return incomes;
  }
  function addExpense(data) {
    expenses.push(data);
    return expenses;
  }
  function accountBalance() {
    return totalIncome() - totalExpense();
  }
  return {
    totalIncome: totalIncome(),
    totalExpense: totalExpense(),
    accountBalance: accountBalance(),
    accountInfo: accountInfo(),
    addIncome: addIncome(1000, 'profit'),
    addExpense: addExpense({ expense: 600, des: 'loss' }),
  };
};
console.log(personAccount().addIncome);
console.log(personAccount().addExpense);
console.log(personAccount().totalIncome);
console.log(personAccount().totalExpense);
console.log(personAccount().accountBalance);
console.log(personAccount().accountInfo);
