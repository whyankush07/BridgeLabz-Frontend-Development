// Generate 8 random scores between 30 and 100
const scores = [];
for (let i = 0; i < 8; i++) {
  scores.push(Math.floor(Math.random() * 71) + 30);
}

const highest = Math.max(...scores);
const lowest = Math.min(...scores);

const total = scores.reduce(function (sum, score) {
  return sum + score;
}, 0);
const average = total / scores.length;

const passed = scores.filter(function (score) {
  return score >= 50;
}).length;

console.log("Student Scores: " + scores.join(", "));
console.log("Highest Score: " + highest);
console.log("Lowest Score: " + lowest);
console.log("Average Score: " + average.toFixed(2));
console.log("Students Passed (>=50): " + passed + " out of " + scores.length);
