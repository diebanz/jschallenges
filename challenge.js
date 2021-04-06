//CHALLENGE 1
/*
const markMass = 78;
const markHeight = 1.69;
const johnMass = 95;
const johnHeight = 1.88;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;
const markHeigerBmi = markBMI > johnBMI;

console.log(markBMI);
console.log(johnBMI);
console.log(markHeigerBmi);


const markMass2 = 95;
const markHeight2 = 1.88;
const johnMass2 = 85;
const johnHeight2 = 1.76;

const markBMI2 = markMass2 / markHeight2 ** 2;
const johnBMI2 = johnMass2 / johnHeight2 ** 2;
const markHeigerBmi2 = markBMI2 > johnBMI2;

console.log(markBMI2);
console.log(johnBMI2);
console.log(markHeigerBmi2);

Other solutions
console.log(markBMI2, johnBMI2, markHeigerBmi2);
const markMass = 78;
const markHeight = 1.69;
const johnMass = 95;
const johnHeight = 1.88;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;
const markHeigerBmi = markBMI > johnBMI;

console.log(markBMI2, johnBMI2, markHeigerBmi2);

then comment out the old variables and put new dates
// 

// CHALLENGE 2

const markMass = 78;
const markHeight = 1.69;
const johnMass = 95;
const johnHeight = 1.88;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;
console.log(markBMI, johnBMI);

if (markBMI > johnBMI) {
	console.log(`Mark's BMI (${markBMI}) is higher than John's!`);
} else {
	console.log(`John's BMI (${johnBMI}) is higher than Mark's!`);
}


// CHALLENGE 3

const dolphFirst = 97;
const dolphSecond = 112;
const dolphThird = 101;

const koalasFirst = 109;
const koalasSecond = 95;
const koalasThird = 106;

const dolphinsAv = (dolphFirst + dolphSecond + dolphThird) / 3;
console.log(dolphinsAv);
const koalasAv = (koalasFirst + koalasSecond + koalasThird) / 3;
console.log(koalasAv);
 1
if (dolphinsAv > koalasAv) {
	console.log("Dolphins won!");
} else if (dolphinsAv === koalasAv) {
	console.log("Remis!!");
} else {
	console.log("Koalas won");
}

2
if (dolphinsAv > koalasAv && dolphinsAv >= 100) {
	console.log("Dophins win!");
} else if (koalasAv > dolphinsAv && koalasAv >= 100) {
	console.log("Koalas win");
} else {
	console.log("we dont have winner");
}


if (dolphinsAv > koalasAv && dolphinsAv >= 100) {
	console.log("Dophins win!");
} else if (koalasAv > dolphinsAv && koalasAv >= 100) {
	console.log("Koalas win");
} else if (dolphinsAv === koalasAv && dolphinsAv >= 100 && koalasAv >= 100) {
	console.log("Both team won!");
}



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
*/

// CHALLENGE 5

const calcAverage = (a, b, c) => (a + b + c) / 3;

// TEST 1
let scoreDolphin = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgD, avgK) {
	if (avgD >= 2 * avgK) {
		console.log(`Dolp wins (${avgD} vs. ${avgK})`);
	} else if (avgK >= 2 * avgD) {
		console.log(`Koala wins (${avgK} vs. ${avgD})`);
	} else {
		console.log("No one won");
	}
};

console.log(checkWinner(scoreKoalas, scoreDolphin));

// checkWinner(555, 1200);

// Test 2
scoreDolphin = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphin, scoreKoalas);
checkWinner(scoreDolphin, scoreKoalas);
