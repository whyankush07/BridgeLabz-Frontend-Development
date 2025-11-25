"use strict";

const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null,
];

const validTransactions = [];
const invalidTransactions = [];

console.log("Transaction Validator:\n");

for (let i = 0; i < transactions.length; i++) {
  try {
    const txn = transactions[i];

    // Check for null entry
    if (txn === null || txn === undefined) {
      throw new Error("Transaction is null or undefined");
    }

    // Check for missing id
    if (!txn.id) {
      throw new Error("Missing transaction ID");
    }

    // Check for missing amount
    if (txn.amount === undefined || txn.amount === null) {
      throw new Error(`Missing amount for transaction ID ${txn.id}`);
    }

    // Check for negative amount
    if (txn.amount < 0) {
      throw new Error(
        `Negative amount (${txn.amount}) for transaction ID ${txn.id}`
      );
    }

    validTransactions.push(txn);
    console.log(`Transaction ID ${txn.id}: Rs.${txn.amount} - Valid\n`);
  } catch (error) {
    invalidTransactions.push({ index: i, error: error.message });
    console.log(`Transaction at index ${i}: ${error.message}`);
  }
}

console.log("\n--- Final Report ---");
console.log(`Successful Transactions: ${validTransactions.length}`);
console.log(`Failed Transactions: ${invalidTransactions.length}`);
console.log("\nValid:", validTransactions);
console.log("Invalid:", invalidTransactions);
