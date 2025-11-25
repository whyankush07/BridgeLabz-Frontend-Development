"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;

console.log("=== Smart Calculator ===\n");

function calculate(operation, a, b) {
  let result;

  switch (operation) {
    case "add":
      result = a + b;
      break;

    case "subtract":
      result = a - b;
      break;

    case "divide":
      if (b === 0) {
        throw new Error("Cannot divide by zero");
      }
      result = a / b;
      break;

    case "power":
      result = Math.pow(a, b);
      break;

    case "root":
      if (a < 0) {
        throw new Error("Cannot calculate square root of negative number");
      }
      result = Math.sqrt(a);
      break;

    default:
      throw new Error(`Invalid operation: ${operation}`);
  }

  return result;
}

// Test all operations
for (let i = 0; i < operations.length; i++) {
  try {
    const op = operations[i];
    const result = calculate(op, num1, num2);
    console.log(`${op.toUpperCase()}: ${num1} ${op} ${num2} = ${result}`);
  } catch (error) {
    console.log(`${operations[i].toUpperCase()}: Error - ${error.message}`);
  }
}

