let userName = "Nakul";
let currentHour = new Date().getHours(); // Get current hour (0-23)

// Determine greeting based on time
let greeting;

if (currentHour < 12) {
  greeting = `Good Morning ${userName}!`;
} else if (currentHour >= 12 && currentHour <= 17) {
  greeting = `Good Afternoon ${userName}!`;
} else {
  greeting = `Good Evening ${userName}!`;
}

// Display the personalized greeting
console.log(greeting);
