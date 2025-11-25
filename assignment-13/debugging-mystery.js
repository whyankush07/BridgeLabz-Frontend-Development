"use strict";

// BROKEN VERSION (commented out):
// function showMessage() {
//     greeting = "Welcome"; // This throws ReferenceError in strict mode
//     console.log(greeting);
// }

// FIXED VERSION:
function showMessage() {
    const greeting = "Welcome"; // Properly declared with const
    console.log(greeting);
}

showMessage();

console.log("\nExplanation:");
console.log(
    "In strict mode, assigning to undeclared variables is not allowed.\nWithout 'use strict', greeting would become a global variable.\nWith 'use strict', it throws a ReferenceError.\nFix: Declare the variable using let, const, or var."
);

