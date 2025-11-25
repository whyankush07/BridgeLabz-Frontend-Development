function Person(name) {
  this.name = name;
}

Person.prototype.introduce = function() {
  console.log(`I am ${this.name}`);
};

function Faculty(name, department) {
  Person.call(this, name);
  this.department = department;
}

Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.showDepartment = function() {
  console.log(`Department: ${this.department}`);
};

function Professor(name, department, subject) {
  Faculty.call(this, name, department);
  this.subject = subject;
}

Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.showSubject = function() {
  console.log(`Subject: ${this.subject}`);
};

const prof = new Professor("Dr. Sharma", "Computer Science", "Data Structures");

console.log("Professor accessing all methods in the chain:");
prof.introduce();
prof.showDepartment();
prof.showSubject();

console.log("\nPrototype chain:");
console.log("prof instanceof Professor:", prof instanceof Professor);
console.log("prof instanceof Faculty:", prof instanceof Faculty);
console.log("prof instanceof Person:", prof instanceof Person);

console.log("\nChain structure:");
console.log("Professor -> Faculty -> Person -> Object");
