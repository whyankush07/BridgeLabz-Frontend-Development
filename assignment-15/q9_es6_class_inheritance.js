// ES6 Class Version
class Person {
  constructor(name) {
    this.name = name;
  }

  showName() {
    console.log(`Name: ${this.name}`);
  }
}

class Student extends Person {
  constructor(name, branch) {
    super(name);
    this.branch = branch;
  }

  showBranch() {
    console.log(`Branch: ${this.branch}`);
  }

  showDetails() {
    console.log(`Name: ${this.name}, Branch: ${this.branch}`);
  }
}

console.log("ES6 Class Version:");
const student1 = new Student("Harry", "Computer Science");
student1.showName();
student1.showBranch();
student1.showDetails();

// Prototype Version (from Q5)
function PersonProto(name) {
  this.name = name;
}

PersonProto.prototype.showName = function() {
  console.log(`Name: ${this.name}`);
};

function StudentProto(name, branch) {
  PersonProto.call(this, name);
  this.branch = branch;
}

StudentProto.prototype = Object.create(PersonProto.prototype);
StudentProto.prototype.constructor = StudentProto;

StudentProto.prototype.showBranch = function() {
  console.log(`Branch: ${this.branch}`);
};

StudentProto.prototype.showDetails = function() {
  console.log(`Name: ${this.name}, Branch: ${this.branch}`);
};

console.log("\nPrototype Version:");
const student2 = new StudentProto("Ron", "Electronics");
student2.showName();
student2.showBranch();
student2.showDetails();

console.log("\nBoth versions behave the same:");
console.log("student1 instanceof Student:", student1 instanceof Student);
console.log("student1 instanceof Person:", student1 instanceof Person);
console.log("student2 instanceof StudentProto:", student2 instanceof StudentProto);
console.log("student2 instanceof PersonProto:", student2 instanceof PersonProto);

console.log("\nES6 classes are syntactic sugar over prototypes.");
console.log("Both create the same prototype chain structure.");
