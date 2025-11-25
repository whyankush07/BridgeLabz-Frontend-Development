// Odd-Even Number Analyzer

const numbers = [];
const results = [];

// Create array of numbers 1-30
for (let i = 1; i <= 30; i++) {
    numbers.push(i);
}

// Analyze each number
for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    let result = "";
    
    if (num % 3 === 0 && num % 5 === 0) {
        result = "FizzBuzz";
    } else if (num % 2 === 0) {
        result = "Even";
    } else {
        result = "Odd";
    }
    
    results.push(result);
    console.log(num + " -> " + result);
}

console.log("\nResults Array:");
console.log(results);
