const x = 16.75;

const roundedValue = Math.round(x);
const squareRoot = Math.sqrt(x);
const powerOfThree = Math.pow(x, 3);
const randomNumber = Math.floor(Math.random() * 41) + 10;

console.log(`Math Dashboard for x = ${x}`);
console.log(`Rounded Value: ${roundedValue}`);
console.log(`Square Root: ${squareRoot.toFixed(2)}`);
console.log(`Power of 3: ${powerOfThree.toFixed(2)}`);
console.log(`Random Number (10-50): ${randomNumber}`);
