// Array of expenses for 5 categories
const expenses = [5000, 3000, 12000, 2500, 1500]; // food, travel, rent, bills, leisure

// Calculate total expenses
let totalExpenses = 0;
for (let i = 0; i < expenses.length; i++) {
    totalExpenses += expenses[i];
}

// Calculate average expense
const averageExpense = totalExpenses / expenses.length;

// Add 10% tax to the total
const taxRate = 0.10;
totalExpenses += totalExpenses * taxRate; 

// Round values to 2 decimal places
const finalTotal = totalExpenses.toFixed(2);
const finalAverage = averageExpense.toFixed(2);

// Display results
console.log("=== Monthly Expense Tracker ===");
console.log(`Total Expenses (before tax): ${(totalExpenses / 1.1).toFixed(2)}`);
console.log(`Average Expense: ${finalAverage}`);
console.log(`Total Expenses (after 10% tax): ${finalTotal}`);
