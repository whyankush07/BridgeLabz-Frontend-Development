function applyOperation(numbers, operation) {
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    result.push(operation(numbers[i]));
  }
  return result;
}

const numbers = [1, 2, 3, 4];

// Double each number
const doubled = applyOperation(numbers, function(num) {
  return num * 2;
});

console.log("Original array:", numbers);
console.log("Doubled:", doubled);

// Square each number
const squared = applyOperation(numbers, function(num) {
  return num * num;
});

console.log("Squared:", squared);

// Using arrow function
const tripled = applyOperation(numbers, num => num * 3);
console.log("Tripled:", tripled);
