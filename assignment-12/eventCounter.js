let count = 0;

function increment() {
    count++;
    console.log("Count after increment: " + count);
    
    // Nested function to show scope
    function logAction() {
        console.log("Action: Incremented to " + count);
    }
    logAction();
}

function decrement() {
    count--;
    console.log("Count after decrement: " + count);
    
    // Nested function to show scope
    function logAction() {
        console.log("Action: Decremented to " + count);
    }
    logAction();
}

// Simulating click events
console.log("Initial count: " + count);
console.log("\nSimulating clicks...\n");

increment();
console.log("");
increment();
console.log("");
increment();
console.log("");
decrement();
console.log("");
decrement();
console.log("");
increment();

console.log("\nFinal count: " + count);
