"use strict";

const rows = 5; // for testing

console.log("=== Pyramid Pattern (using let) ===\n");

for (let i = 1; i <= rows; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += "* ";
    }
    console.log(pattern);
}

console.log("\n=== Pyramid Pattern (using var) ===\n");

// Using var instead of let
for (var i = 1; i <= rows; i++) {
    var pattern = "";
    for (var j = 1; j <= i; j++) {
        pattern += "* ";
    }
    console.log(pattern);
}

// Variables leak outside the loop with var
console.log(`\nAfter loop: i = ${i}, j = ${j}`);
console.log("Note: With var, i and j are accessible outside the loop");
console.log("With let, they would be block-scoped and not accessible here");
