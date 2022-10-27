function checkCashRegister(price, cash, cid) {
  const INSUFFICIENT_FUNDS = { status: 'INSUFFICIENT_FUNDS', change: [] };
  const CLOSED = { status: 'CLOSED', change: cid };
  const OPEN = { status: 'OPEN', change: [] };
  let totalCid = cidTotal();
  let dueBlance = parseFloat((cash - price).toFixed(2));

  if (totalCid < dueBlance) {
    return INSUFFICIENT_FUNDS;
  }

  if (totalCid === dueBlance) {
    return CLOSED;
  }

  let cashTypes = [
    ['ONE HUNDRED', 100],
    ['TWENTY', 20],
    ['TEN', 10],
    ['FIVE', 5],
    ['ONE', 1],
    ['QUARTER', 0.25],
    ['DIME', 0.1],
    ['NICKEL', 0.05],
    ['PENNY', 0.01],
  ];

  //console.log(caseTypes.length);

  for (let i = 0; i < cashTypes.length; i++) {
    let cashType = cashTypes[i][0];
    let cashValue = cashTypes[i][1];
    let totalCash = cid.find((item) => item[0] === cashType)[1];

    if (dueBlance > cashValue && dueBlance > totalCash) {
      dueBlance -= totalCash;
      OPEN.change.push([cashType, totalCash]);
    } else if (dueBlance > cashValue && totalCash > dueBlance) {
      let pay = Math.floor(dueBlance / cashValue) * cashValue;
      dueBlance -= pay;
      dueBlance = parseFloat(dueBlance.toFixed(2));
      OPEN.change.push([cashType, pay]);
    }
  }

  if (dueBlance > 0) {
    return INSUFFICIENT_FUNDS;
  }

  return OPEN;

  function cidTotal() {
    return parseFloat(cid.reduce((a, b) => a + b[1], 0).toFixed(2));
  }
}

let result = checkCashRegister(19.5, 20, [
  ['PENNY', 0.01],
  ['NICKEL', 0],
  ['DIME', 0],
  ['QUARTER', 0],
  ['ONE', 1],
  ['FIVE', 0],
  ['TEN', 0],
  ['TWENTY', 0],
  ['ONE HUNDRED', 0],
]);
