// Declare current salary and annual increment rate
const currentSalary = 50000; // Initial salary
const incrementRate = 10; // Annual increment in %age

// Array to store salary projection
const salaryProjection = [];

// Calculate salary for each of 5 years
let salary = currentSalary;

for (let year = 1; year <= 5; year++) {
    // Calculate new salary for the year
    if (year > 1) {
        salary = salary + (salary * incrementRate / 100);
    }
    
    // Add to projection array
    salaryProjection.push({
        Year: year,
        Salary: `₹${Math.round(salary)}`
    });
}

// Display results
console.log("=== Employee Salary Projection ===");
console.log(`Current Salary: Rs.${currentSalary}`);
console.log(`Annual Increment Rate: ${incrementRate}%`);
console.log("\n5-Year Projection:");
console.table(salaryProjection);
