// Generate a random secret number between 1-50
const secretNumber = Math.floor(Math.random() * 50) + 1;

// User's guess 
const userGuess = 25;

// Check the guess and provide feedback
let feedback;

if (userGuess === secretNumber) {
    feedback = "Correct guess!";
} else if (userGuess >= secretNumber - 3 && userGuess <= secretNumber + 3) {
    // Check if within +-3 of secret number
    feedback = "Very close!";
} else if (userGuess > secretNumber) {
    feedback = "Too high";
} else {
    feedback = "Too low";
}

// Display results
console.log("=== Smart Guessing Game ===");
console.log(`Your Guess: ${userGuess}`);
console.log(`Feedback: ${feedback}`);
console.log(`Secret Number was: ${secretNumber}`);
