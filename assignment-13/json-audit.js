"use strict";

const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  "{invalid}",
  '{"user":"Mina","age":"22"}',
];

const validEntries = [];
const errors = [];

console.log("=== JSON Audit ===\n");

for (let i = 0; i < rawData.length; i++) {
  try {
    const parsed = JSON.parse(rawData[i]);

    // Check for required keys
    if (!parsed.user || !parsed.age) {
      throw new Error("Missing required keys: user or age");
    }

    // Convert age to number
    parsed.age = Number(parsed.age);

    if (isNaN(parsed.age)) {
      throw new Error("Age must be a valid number");
    }

    validEntries.push(parsed);
    console.log(`Line ${i + 1}: Valid - ${parsed.user}, age ${parsed.age}`);
  } catch (error) {
    const errorMsg = error.message;
    errors.push({ line: i + 1, data: rawData[i], error: errorMsg });
    console.log(`Line ${i + 1}: Error - ${errorMsg}`);
  }
}

console.log("\n--- Valid Entries ---");
console.log(validEntries);

console.log("\n--- Errors ---");
console.log(errors);

// Bonus: Filter users under 18
console.log("\n--- Bonus: Users 18 and above ---");
const adults = validEntries.filter((user) => user.age >= 18);
console.log(adults);
console.log(`Total adults: ${adults.length} out of ${validEntries.length}`);
