
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

const loremText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ullamcorper ante quis felis sollicitudin, nec sodales eros vulputate. Curabitur aliquam nulla augue, euismod convallis tellus vestibulum eget. Etiam aliquam tellus id aliquet auctor. In ut turpis a odio commodo rutrum. Maecenas imperdiet arcu ex, sed pellentesque nulla laoreet eget. Fusce leo nisl, convallis a volutpat in, laoreet eu lacus. Integer aliquet justo vitae quam pretium vestibulum. Fusce dapibus, ipsum ac volutpat placerat, dolor leo laoreet felis, vitae ornare elit nunc a eros. Mauris cursus eleifend turpis id posuere. Quisque faucibus, eros quis cursus faucibus, dui est tincidunt purus, nec euismod erat dolor sed mi. Curabitur mollis egestas fringilla. Ut pretium nisi augue. Vivamus viverra convallis quam, nec consequat magna egestas sit amet. Ut magna nisi, consectetur sit amet condimentum vitae, convallis eu ligula. Ut bibendum commodo risus ac tristique.

Nullam vestibulum nisi at velit interdum tincidunt. Nunc vel laoreet lacus. Praesent pretium tempor venenatis. Fusce in sem leo. Nulla facilisi. Quisque tincidunt magna et odio varius, non pulvinar justo ultricies. Nunc ipsum erat, viverra a ligula eget, iaculis volutpat eros. Mauris faucibus eu sapien at fermentum. Ut vitae ipsum tristique, lobortis dolor nec, commodo sem. Morbi ac sem quis urna venenatis faucibus eu id sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis eu metus quis enim tempor accumsan rhoncus in ex. Proin sagittis efficitur felis, sit amet condimentum velit vulputate vel. Aenean malesuada sagittis accumsan.

Vivamus molestie dolor et velit ullamcorper, at pharetra diam convallis. Pellentesque non auctor odio, non lobortis purus. Duis vitae auctor dolor. Aliquam erat volutpat. Vivamus scelerisque lacus sed luctus semper. Cras eget dolor vel lorem semper hendrerit non quis tortor. Integer molestie mauris a nisl posuere porttitor. Proin pellentesque fermentum scelerisque. Aliquam dapibus nec erat at placerat. Aliquam erat volutpat.`


function isLetter(char) {
	return char.toUpperCase() !== char.toLowerCase();
}

let wordCount = 0;

for (let i = 0; i < loremText.length; i++) {
	if (isLetter(loremText[i])) {
		do {
			i++;
		}
		while (i < loremText.length && isLetter(loremText[i]))
		wordCount++;
	}
}

console.log(wordCount);

const target = "et";
let indexOfTarget = 0;
let countOfTarget = 0;

do {
	indexOfTarget = loremText.indexOf(target, indexOfTarget);
	if (indexOfTarget !== -1) {
		countOfTarget++;
		indexOfTarget++;
	}
} while (indexOfTarget !== -1)

console.log(countOfTarget);
