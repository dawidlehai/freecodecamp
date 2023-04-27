/*
[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]
*/

function checkCashRegister(price, cash, cid) {
  const currencyUnits = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100],
  ];

  const cidChange = [];
  let change = cash - price;
  let cidSum = 0;
  let i = cid.length - 1;

  while (change !== 0 && i >= 0) {
    const [unitName, unitValue] = currencyUnits[i];
    const multiplier = Math.trunc(change / unitValue);
    const currCash = cid[i][1];
    const currCashMultiplier = currCash / unitValue;

    if (multiplier > 0 && currCashMultiplier > 0) {
      const cashToSubtract =
        (currCashMultiplier > multiplier ? multiplier : currCashMultiplier) *
        unitValue;
      change -= cashToSubtract;
      change = Number(change.toFixed(2));

      cidChange.push([unitName, cashToSubtract]);
    }

    cidSum += currCash;
    i--;
  }

  if (change > 0) return { status: "INSUFFICIENT_FUNDS", change: [] };
  if (cash - price === cidSum) return { status: "CLOSED", change: cid };

  return { status: "OPEN", change: cidChange };
}

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);
