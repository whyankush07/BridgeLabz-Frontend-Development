"use strict";

const apiData = [
  "25",
  "true",
  "false",
  "NaN",
  " ",
  "100px",
  "3.14",
  null,
  undefined,
];

const validNumbers = [];
const invalidData = [];

console.log(" Dynamic Data Parser\n");

for (let i = 0; i < apiData.length; i++) {
  const original = apiData[i];
  const asNumber = Number(original);
  const asBoolean = Boolean(original);
  const asString = String(original);

  console.log(`Original: ${original} (type: ${typeof original})`);
  console.log(`  Number: ${asNumber}`);
  console.log(`  Boolean: ${asBoolean}`);
  console.log(`  String: "${asString}"\n`);

  // Check if conversion to number is valid
  if (
    !isNaN(asNumber) &&
    original !== " " &&
    original !== null &&
    original !== undefined
  ) {
    validNumbers.push(asNumber);
  } else {
    invalidData.push(original);
  }
}

console.log("--- Summary ---");
console.log(`Valid numeric values (${validNumbers.length}):`, validNumbers);
console.log(`Invalid/Skipped data (${invalidData.length}):`, invalidData);
