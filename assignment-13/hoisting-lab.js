"use strict";

console.log("=== ORIGINAL CODE (with issues) ===\n");

// This will show hoisting behavior
console.log(score); // undefined (var is hoisted but not initialized)
announce(); // Works! Function declarations are fully hoisted

var score = 50;
function announce() { 
    console.log("Game started"); 
}

let status = "ready";
startGame(); // ReferenceError - can't access 'status' before initialization

function startGame() {
    console.log(status); // TDZ issue with let
}

console.log("\n=== EXPLANATION ===");
console.log(
    "1. 'score' is hoisted as undefined (var hoisting) \n2. 'announce()' works because function declarations are fully hoisted \n3. 'status' throws error - let/const are in Temporal Dead Zone(TDZ) \n4. 'startGame()' is hoisted but 'status' isn't initialized yet"
);


console.log("\n=== FIXED VERSION ===\n");

// Declare before use
let score2 = 50;
let status2 = "ready";

function announce2() { 
    console.log("Game started"); 
}

function startGame2() {
    console.log(status2);
}

console.log(score2);
announce2();
startGame2();

console.log("\n=== ARROW FUNCTION VERSION ===\n");

const announce3 = () => { 
    console.log("Game started"); 
};

const startGame3 = () => {
    console.log(status2);
};

// Arrow functions are NOT hoisted - must declare before calling
announce3();
startGame3();

console.log("\nArrow functions behave like variables - not hoisted!");
