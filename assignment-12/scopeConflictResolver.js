// Global variable
let bonus = 5000;

function calculateSalary(isPermanent) {
    const salary = 40000;
    let totalSalary = salary;
    
    if (isPermanent) {
        totalSalary = salary + bonus;
    }
    
    console.log("Total Salary: " + totalSalary);
}

// Testing with permanent employee
console.log("Permanent Employee:");
calculateSalary(true);

// Testing with temporary employee
console.log("\nTemporary Employee:");
calculateSalary(false);

// Changing global bonus
bonus = 7000;
console.log("\nAfter bonus change to 7000 (permanent employee):");
calculateSalary(true);
