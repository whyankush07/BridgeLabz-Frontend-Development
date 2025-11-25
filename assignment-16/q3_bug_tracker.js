/* Original callback-based function
function fetchBugs(callback) {
setTimeout(() => callback(["UI glitch", "API timeout", "Login failure"]), 1000);
}
*/

function getBugs() {
  return new Promise((resolve, reject) => {
    const shouldFail = Math.random() < 0.3;

    setTimeout(() => {
      if (shouldFail) {
        reject("API failed to fetch bugs");
      } else {
        const bugs = [
          { id: 1, bug: "UI glitch" },
          { id: 2, bug: "API timeout" },
          { id: 3, bug: "Login failure" },
        ];
        resolve(bugs);
      }
    }, 1000);
  });
}

console.log("Fetching bugs from tracker...");

getBugs()
  .then((bugs) => {
    console.log("Bugs retrieved successfully:");
    console.table(bugs);
  })
  .catch((error) => {
    console.log(`Error: ${error}`);
  });
