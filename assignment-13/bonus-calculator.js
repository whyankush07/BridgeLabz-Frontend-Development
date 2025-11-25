"use strict";

const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" },
];

console.log("Employee Bonus Calculator:\n");

for (let i = 0; i < employees.length; i++) {
  try {
    const emp = employees[i];

    // Validate required properties
    if (!emp.name || !emp.salary || !emp.years) {
      throw new Error(`Missing data for employee at index ${i}`);
    }

    const salary = Number(emp.salary);
    const years = Number(emp.years);

    if (isNaN(salary) || isNaN(years)) {
      throw new Error(`Invalid number format for ${emp.name}`);
    }

    // Calculate bonus
    const bonusRate = years > 3 ? 0.1 : 0.05;
    const bonus = salary * bonusRate;
    const totalPay = salary + bonus;

    console.log(`Employee: ${emp.name}`);
    console.log(`  Salary: Rs.${salary.toLocaleString()}`);
    console.log(`  Years: ${years}`);
    console.log(`  Bonus Rate: ${bonusRate * 100}%`);
    console.log(`  Bonus Amount: Rs.${bonus.toLocaleString()}`);
    console.log(`  Total Pay: Rs.${totalPay.toLocaleString()}\n`);
  } catch (error) {
    console.error(`Error processing employee: ${error.message}\n`);
  }
}
