function boilWater() {
  return new Promise((resolve, reject) => {
    const delay = 1000 + Math.random() * 1000;
    setTimeout(() => {
      if (Math.random() > 0.1) {
        console.log("Step 1: Water boiled");
        resolve();
      } else {
        reject("Failed to boil water");
      }
    }, delay);
  });
}

function brewCoffee() {
  return new Promise((resolve, reject) => {
    const delay = 1000 + Math.random() * 1000;
    setTimeout(() => {
      if (Math.random() > 0.1) {
        console.log("Step 2: Coffee brewed");
        resolve();
      } else {
        reject("Failed to brew coffee");
      }
    }, delay);
  });
}

function pourIntoCup() {
  return new Promise((resolve, reject) => {
    const delay = 1000 + Math.random() * 1000;
    setTimeout(() => {
      if (Math.random() > 0.1) {
        console.log("Step 3: Coffee poured into cup");
        resolve();
      } else {
        reject("Failed to pour coffee");
      }
    }, delay);
  });
}

console.log("Starting coffee preparation...");

boilWater()
  .then(() => brewCoffee())
  .then(() => pourIntoCup())
  .then(() => {
    console.log("Coffee ready for the team!");
  })
  .catch((error) => {
    console.log(`Error: ${error}`);
  });
