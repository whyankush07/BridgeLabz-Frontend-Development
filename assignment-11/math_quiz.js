// Generate two random numbers between 1-20
const num1 = Math.floor(Math.random() * 20) + 1;
const num2 = Math.floor(Math.random() * 20) + 1;

// Array of operators
const operators = ['+', '-', '*', '/'];

// Select a random operator
const randomOperator = operators[Math.floor(Math.random() * operators.length)];

// Calculate the correct answer using switch statement
let correctAnswer;

switch (randomOperator) {
    case '+':
        correctAnswer = num1 + num2;
        break;
    case '-':
        correctAnswer = num1 - num2;
        break;
    case '*':
        correctAnswer = num1 * num2;
        break;
    case '/':
        correctAnswer = (num1 / num2).toFixed(2);
        break;
    default:
        correctAnswer = 0;
}

// Display the quiz question and answer
console.log("=== Random Math Quiz ===");
console.log(`Question: ${num1} ${randomOperator} ${num2} = ?`);
console.log(`Correct Answer: ${correctAnswer}`);
