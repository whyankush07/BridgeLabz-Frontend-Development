function Person(name) {
  this.name = name;
}

Person.prototype.showName = function() {
  console.log(`Name: ${this.name}`);
};

function Student(name, branch) {
  Person.call(this, name);
  this.branch = branch;
}

// Set up inheritance
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.showBranch = function() {
  console.log(`Branch: ${this.branch}`);
};

Student.prototype.showDetails = function() {
  console.log(`Name: ${this.name}, Branch: ${this.branch}`);
};

const student1 = new Student("Raghav", "Computer Science");
const student2 = new Student("Yash", "Electronics");

console.log("Student 1:");
student1.showName();
student1.showBranch();
student1.showDetails();

console.log("\nStudent 2:");
student2.showName();
student2.showBranch();
student2.showDetails();

console.log("\nPrototype chain demonstration:");
console.log("student1 instanceof Student:", student1 instanceof Student);
console.log("student1 instanceof Person:", student1 instanceof Person);
