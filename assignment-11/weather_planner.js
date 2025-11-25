// weather conditions
const temperature = 28; // in Celsius
const isRaining = false;
const windSpeed = 15; // in km/h

// Determine activity based on weather conditions
let activity;

if (isRaining) {
    activity = "Stay indoors with hot coffee.";
} else if (temperature > 35) {
    activity = "Go swimming.";
} else if (temperature < 15 && windSpeed > 20) {
    activity = "Too cold and windy — stay home.";
} else {
    activity = "Perfect day for a walk.";
}

// Display weather information and advice
console.log("=== Weather Activity Planner ===");
console.log(`Temperature: ${temperature}°C`);
console.log(`Raining: ${isRaining ? "Yes" : "No"}`);
console.log(`Wind Speed: ${windSpeed} km/h`);
console.log(`Recommendation: ${activity}`);
