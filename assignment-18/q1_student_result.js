class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }

  calculateAverage() {
    const total = this.marks.reduce((sum, mark) => sum + mark, 0);
    return total / this.marks.length;
  }

  getGrade() {
    const avg = this.calculateAverage();
    
    if (avg >= 90) return 'A';
    if (avg >= 75) return 'B';
    if (avg >= 50) return 'C';
    return 'F';
  }

  displayResult() {
    const avg = this.calculateAverage();
    const grade = this.getGrade();
    
    console.log(`Student: ${this.name}`);
    console.log(`Marks: [${this.marks.join(', ')}]`);
    console.log(`Average: ${avg.toFixed(2)}`);
    console.log(`Grade: ${grade}\n`);
  }
}

const student1 = new Student("Rahul Kumar", [85, 92, 78, 88, 90]);
const student2 = new Student("Priya Sharma", [65, 70, 68, 72, 75]);
const student3 = new Student("Amit Patel", [45, 38, 50, 42, 48]);

student1.displayResult();
student2.displayResult();
student3.displayResult();
