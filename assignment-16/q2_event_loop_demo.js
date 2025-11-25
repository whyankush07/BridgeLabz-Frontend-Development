console.log("Start");

// Macrotask: setTimeout callback goes to macrotask queue
setTimeout(() => {
  console.log("Timeout callback");
}, 0);

// Microtask: Promise.then callback goes to microtask queue
Promise.resolve().then(() => {
  console.log("Promise callback");
});

// Synchronous: executes immediately
console.log("Script end (Synchronous log)");

console.log("End");

/*
Expected Output:
Start
Script end
End
Promise callback
Timeout callback

Explanation:
=> Synchronous code executes first (Start, Script end, End)
=> Microtasks (Promise callbacks) execute after synchronous code
=> Macrotasks (setTimeout callbacks) execute after all microtasks
=> Event loop prioritizes microtask queue over macrotask queue, Even with setTimeout delay of 0ms, it still goes to macrotask queue
*/
