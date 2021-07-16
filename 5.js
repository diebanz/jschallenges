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

checkWinner(555, 1200);

// Test 2
scoreDolphin = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphin, scoreKoalas);
checkWinner(scoreDolphin, scoreKoalas);
