"use strict";

/* 
function outer() {
  console.log(count);
  var count = 5;
  function inner() {
    console.log(count);
    var count = 10;
  }
  inner();
}
outer(); 
*/

console.log("PREDICTION:");
console.log("outer() will log: undefined");
console.log("inner() will log: undefined");
console.log("Reason: var hoisting creates separate scopes\n");

console.log("ACTUAL OUTPUT:\n");

function outer() {
  console.log(count); // undefined - hoisted but not assigned
  var count = 5;

  function inner() {
    console.log(count); // undefined - inner's count is hoisted
    var count = 10;
  }

  inner();
}

outer();

console.log("\nEXPLANATION:");
console.log("Each function has its own 'count' variable due to var hoisting");
console.log("Memory context:");
console.log("1. outer() - count is hoisted as undefined, then assigned 5");
console.log(
  "2. inner() - has its OWN count, also hoisted as undefined, then assigned 10"
);
console.log("The inner count shadows the outer count");

console.log("\nARROW FUNCTION VERSION:\n");

function outer2() {
  console.log(count2); // undefined
  var count2 = 5;

  const inner2 = () => {
    console.log(count2); // 5 - arrow function uses outer scope!
    const count2Inner = 10; // Different variable name to avoid shadowing
    console.log(count2Inner); // 10
  };

  inner2();
}

outer2();

console.log("\nARROW FUNCTION DIFFERENCE:");
console.log(
  "Arrow functions don't create their own scope for 'this' and variables"
);
console.log(
  "If we don't declare count2Inner, the arrow accesses outer's count2"
);
console.log("Regular functions create new variable scopes with hoisting");