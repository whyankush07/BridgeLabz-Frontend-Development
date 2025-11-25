// Problem with arrow function
const userArrow = {
  name: "Harry",
  showName: () => {
    console.log(this.name);
  },
};

console.log("Using arrow function:");
userArrow.showName(); // undefined

console.log("\nExplanation:");
console.log(
  "Arrow functions do not have their own 'this' context. \nThey inherit 'this' from the parent scope (global scope here). \nIn global scope, this.name is undefined."
);

// Fixed with normal function
const userFixed = {
  name: "Harry",
  showName: function () {
    console.log(this.name);
  },
};

console.log("\nUsing normal function:");
userFixed.showName(); // John

console.log("\nExplanation:");
console.log(
  "Normal functions have their own 'this' context. \nInside an object method, 'this' refers to the object itself."
);
