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
//1;
if (dolphinsAv > koalasAv) {
	console.log("Dolphins won!");
} else if (dolphinsAv === koalasAv) {
	console.log("Remis!!");
} else {
	console.log("Koalas won");
}

//2;
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
