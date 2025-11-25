class Employee {
  constructor(id, name, department, salary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = salary;
  }

  getAnnualSalary() {
    return this.salary * 12;
  }

  applyBonus(percent) {
    if (percent > 0 && percent <= 100) {
      const bonusAmount = (this.salary * percent) / 100;
      this.salary += bonusAmount;
      console.log(
        `${percent}% bonus applied to ${
          this.name
        }. New salary: Rs.${this.salary.toFixed(2)}`
      );
      return bonusAmount;
    } else {
      console.log("Invalid bonus percentage");
      return 0;
    }
  }

  displayInfo() {
    return `ID: ${this.id}\nName: ${this.name}\nDepartment: ${
      this.department
    }\nMonthly Salary: Rs.${this.salary.toFixed(
      2
    )}\nAnnual Salary: Rs.${this.getAnnualSalary().toFixed(2)}\n`;
  }
}

const employees = [
  new Employee(101, "Rajesh Kumar", "Engineering", 75000),
  new Employee(102, "Priya Sharma", "Marketing", 55000),
  new Employee(103, "Amit Patel", "Sales", 48000),
  new Employee(104, "Neha Singh", "HR", 52000),
  new Employee(105, "Vikram Desai", "Finance", 68000),
];

console.log("Employee Management System\n");

console.log("All Employees:");
employees.forEach((emp) => {
  console.log(emp.displayInfo());
});

// Apply bonuses
console.log("\nApplying Bonuses:");
employees[0].applyBonus(10);
employees[2].applyBonus(15);
employees[4].applyBonus(8);

// Calculate total annual payout using reduce()
console.log("\nCalculating Total Company Payout:");

const totalAnnualPayout = employees.reduce((total, employee) => {
  const annualSalary = employee.getAnnualSalary();
  console.log(`${employee.name}: Rs.${annualSalary.toFixed(2)}`);
  return total + annualSalary;
}, 0);

console.log(`\nTotal Annual Payout: Rs.${totalAnnualPayout.toFixed(2)}`);

const avgSalary = totalAnnualPayout / employees.length;
const highestPaid = employees.reduce((max, emp) =>
  emp.getAnnualSalary() > max.getAnnualSalary() ? emp : max
);
const lowestPaid = employees.reduce((min, emp) =>
  emp.getAnnualSalary() < min.getAnnualSalary() ? emp : min
);

console.log("\nStatistics:");
console.log(`Average Annual Salary: Rs.${avgSalary.toFixed(2)}`);
console.log(
  `Highest Paid: ${highestPaid.name} (Rs.${highestPaid
    .getAnnualSalary()
    .toFixed(2)})`
);
console.log(
  `Lowest Paid: ${lowestPaid.name} (Rs.${lowestPaid
    .getAnnualSalary()
    .toFixed(2)})`
);
