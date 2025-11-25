class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  work() {
    console.log(`${this.name} is working in ${this.department} department`);
  }

  getDetails() {
    console.log(`Name: ${this.name}, Department: ${this.department}`);
  }
}

class Manager extends Employee {
  constructor(name, department, teamSize) {
    super(name, department);
    this.teamSize = teamSize;
  }

  work() {
    console.log(`${this.name} is managing a team of ${this.teamSize} members in ${this.department}`);
  }

  conductMeeting() {
    console.log(`${this.name} is conducting a team meeting`);
  }
}

const emp1 = new Employee("Rajesh Singh", "Development");
const emp2 = new Employee("Sneha Gupta", "Testing");
const mgr1 = new Manager("Vikram Mehta", "Development", 8);
const mgr2 = new Manager("Anita Desai", "HR", 5);

console.log("=== Runtime Polymorphism Demo ===\n");

emp1.work();
emp2.work();
mgr1.work();
mgr2.work();

console.log("\n=== Manager Specific Method ===\n");
mgr1.conductMeeting();

console.log("\n=== Employee Details ===\n");
emp1.getDetails();
mgr1.getDetails();
