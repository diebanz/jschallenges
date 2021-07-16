// CHALLENGE 4

const bill = 430;

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(tip);

const billTip = bill + tip;
console.log(billTip);

console.log(
	`The bill was ${bill}, and the tip was ${tip}, final amount to pay was ${
		bill + tip
	}`
);
