// Iteration 1: Names and Input

// driver
const hacker1 = 'Tristan'
console.log(hacker1)

// navigator
const hacker2 = 'Brian'
console.log(hacker2)



// Iteration 2: Conditionals
const lenHacker1 = hacker1.length
const lenHacker2 = hacker2.length

if (lenHacker1 > lenHacker2) {
	console.log(`The driver has the longest name, it has ${lenHacker1} characters.`)
} else if (lenHacker1 < lenHacker2) {
	console.log(`It seems that the navigator has the longest name, it has ${lenHacker2} characters.`)
} else {
	console.log(`Wow, you have equally long names, it has ${lenHacker1} characters`)
}

// Iteration 3: Loops

let capitalizedDriverName = '';

for (let i = 0; i < lenHacker1; i++) {
	capitalizedDriverName += hacker1[i].toUpperCase() + ' ';
}

console.log(capitalizedDriverName);

let reverseNavigatorName = '';

for (let i = lenHacker2 - 1; i >= 0; i--) {
	reverseNavigatorName += hacker2[i];
}
console.log(reverseNavigatorName);

if (hacker1 < hacker2) {
	console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
	console.log("Yo, the navigator goes first definitely.");
} else {
	console.log("What?! You both have the same name?");
}
