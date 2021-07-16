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
