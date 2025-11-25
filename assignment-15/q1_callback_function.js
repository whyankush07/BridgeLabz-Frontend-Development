function showEndMessage() {
  console.log("Welcome to the course!");
}

function greetUser(name, callback) {
  console.log(`Hello ${name}`);
  callback();
}

// Demonstrate callback flow
console.log("Callback Flow Demonstration:");
greetUser("Alice", showEndMessage);

console.log("\nAnother example:");
greetUser("Bob", showEndMessage);
