Array.prototype.myMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

const numbers = [1, 2, 3, 4, 5];

console.log("Original array:", numbers);

const doubled = numbers.myMap((num) => num * 2);
console.log("Doubled using myMap:", doubled);

const squared = numbers.myMap((num) => num * num);
console.log("Squared using myMap:", squared);

const withIndex = numbers.myMap((num, index) => `Index ${index}: ${num}`);
console.log("With index:", withIndex);

// Compare with built-in map
const builtInDoubled = numbers.map((num) => num * 2);
console.log("\nComparison with built-in map:");
console.log("myMap result:", doubled);
console.log("Built-in map result:", builtInDoubled);
console.log(
  "Results are equal:",
  JSON.stringify(doubled) === JSON.stringify(builtInDoubled)
);
