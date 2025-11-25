class FitnessAnalytics {
  constructor(workoutData) {
    if (!workoutData || workoutData.length === 0) {
      throw new Error("Dataset cannot be empty");
    }

    this.workoutData = workoutData;
  }

  getActiveUsers() {
    const activeThreshold = 7000;
    return this.workoutData.filter((user) => user.steps > activeThreshold);
  }

  getAverageCalories() {
    const totalCalories = this.workoutData.reduce((sum, user) => {
      return sum + user.calories;
    }, 0);

    return totalCalories / this.workoutData.length;
  }

  getUserSummary() {
    return this.workoutData.map((user) => {
      const status = user.steps > 7000 ? "Active" : "Needs Improvement";
      return `${user.user}: ${user.steps} steps, ${user.calories} calories burned - ${status}`;
    });
  }

  displayAnalytics() {
    console.log("=== Active Users (Steps > 7000) ===");
    const activeUsers = this.getActiveUsers();
    activeUsers.forEach((user) => {
      console.log(`${user.user}: ${user.steps} steps`);
    });

    console.log("\n=== Average Calories ===");
    const avgCalories = this.getAverageCalories();
    console.log(`${avgCalories.toFixed(2)} calories`);

    console.log("\n=== User Summary ===");
    const summary = this.getUserSummary();
    summary.forEach((message) => console.log(message));
  }
}

const workoutData = [
  { user: "A", steps: 8000, calories: 300 },
  { user: "B", steps: 12000, calories: 500 },
  { user: "C", steps: 4000, calories: 200 },
];

console.log("=== Fitness Analytics Report ===\n");

try {
  const analytics = new FitnessAnalytics(workoutData);
  analytics.displayAnalytics();
} catch (error) {
  console.log(`Error: ${error.message}`);
}

console.log("\n=== Testing Empty Dataset ===");

try {
  const emptyAnalytics = new FitnessAnalytics([]);
  emptyAnalytics.displayAnalytics();
} catch (error) {
  console.log(`Error: ${error.message}`);
}
