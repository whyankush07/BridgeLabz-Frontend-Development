/*
Predicted Output Order:
1. Script start
2. Script end
3. Promise callback
4. Timeout callback

Reason:
- Synchronous code executes first (console.log statements)
- Microtasks (Promise.then) are processed before macrotasks
- Macrotasks (setTimeout) run after microtask queue is empty
- Even with 0ms delay, setTimeout is still a macrotask
*/

console.log("Script start");

setTimeout(() => console.log("Timeout callback"), 0);

Promise.resolve().then(() => console.log("Promise callback"));

console.log("Script end");

/*
Execution Flow Explanation:

1. Call Stack:
   - console.log("Script start") executes immediately
   - setTimeout registers callback in macrotask queue
   - Promise.resolve().then() registers callback in microtask queue
   - console.log("Script end") executes immediately

2. Event Loop Phases:
   - All synchronous code completes first
   - Event loop checks microtask queue (higher priority)
   - Promise callback executes from microtask queue
   - Event loop then checks macrotask queue
   - setTimeout callback executes from macrotask queue

3. Why Promises run before setTimeout:
   - JavaScript event loop prioritizes microtasks over macrotasks
   - Microtask queue must be empty before processing next macrotask
   - This ensures Promises resolve before timers execute
   - Even setTimeout with 0ms delay waits for microtasks
*/
