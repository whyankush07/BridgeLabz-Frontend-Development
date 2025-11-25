// Run this file to see differences between strict and non-strict mode

/* function demo(a, a) {
  total = 10;
  delete total;
}
demo(5, 10); */


console.log("=== WITHOUT STRICT MODE ===\n");
console.log("In non-strict mode, these would work:");
console.log("• Duplicate parameter names: function demo(a, a)");
console.log("• Implicit globals: total = 10 (without declaration)");
console.log("• Delete on variables: delete total");

console.log("\n=== WITH STRICT MODE ===\n");

("use strict");

// This would throw errors in strict mode:
// 1. Duplicate parameter names not allowed
// 2. Implicit globals not allowed
// 3. Delete on variables not allowed

console.log("Errors in strict mode:");
console.log("1. SyntaxError: Duplicate parameter name 'a'");
console.log("2. ReferenceError: 'total' is not defined");
console.log("3. SyntaxError: Delete of an unqualified identifier");

console.log("\n=== CORRECT ES6 VERSION ===\n");

function demoStrict(a, b) {
  // Unique parameter names
  const total = 10; // Properly declared
  console.log(`a: ${a}, b: ${b}, total: ${total}`);
  // delete not used on variables
}

demoStrict(5, 10);
console.log("\nNo errors in strict mode with correct practices!");