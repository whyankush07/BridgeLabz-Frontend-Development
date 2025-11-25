// Input marks of 5 subjects
const marks = [78, 85, 92, 65, 88]; 

// Calculate total marks
let totalMarks = 0;
for (let i = 0; i < marks.length; i++) {
    totalMarks += marks[i];
}

// Calculate average and percentage
const averageMarks = totalMarks / marks.length;
const percentage = (totalMarks / (marks.length * 100)) * 100;

// Check if any subject has marks below 35
let hasFailedSubject = false;
for (let i = 0; i < marks.length; i++) {
    if (marks[i] < 35) {
        hasFailedSubject = true;
        break;
    }
}

// Determine promotion status
let result;

if (hasFailedSubject) {
    result = "Detained";
} else if (percentage >= 85) {
    result = "Promoted with Distinction";
} else if (percentage >= 50 && percentage < 85) {
    result = "Promoted";
} else {
    result = "Detained";
}

// Display results
console.log("=== Academic Performance Report ===");
console.log(`Marks: ${marks.join(", ")}`);
console.log(`Average Marks: ${averageMarks.toFixed(2)}`);
console.log(`Percentage: ${percentage.toFixed(2)}%`);
console.log(`Result: ${result}`);
