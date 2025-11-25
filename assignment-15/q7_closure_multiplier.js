function makeMultiplier(multiplier) {
  return function(number) {
    return number * multiplier;
  };
}

const triple = makeMultiplier(3);
const double = makeMultiplier(2);
const quintuple = makeMultiplier(5);

console.log("Using makeMultiplier:");
console.log("triple(5):", triple(5));
console.log("triple(10):", triple(10));

console.log("\ndouble(5):", double(5));
console.log("double(10):", double(10));

console.log("\nquintuple(4):", quintuple(4));


