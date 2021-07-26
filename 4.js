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

// CHALLENGE 6


const calcTip = function (bill) {
	return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[1] + tips[2]];
console.log(bills, tips, totals);
