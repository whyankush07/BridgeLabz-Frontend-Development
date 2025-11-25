function takeOrder() {
  return new Promise((resolve, reject) => {
    const delay = 1000 + Math.random() * 1000;
    setTimeout(() => {
      if (Math.random() > 0.15) {
        resolve("Order taken");
      } else {
        reject("Failed to take order");
      }
    }, delay);
  });
}

function prepare() {
  return new Promise((resolve, reject) => {
    const delay = 1000 + Math.random() * 1000;
    setTimeout(() => {
      if (Math.random() > 0.15) {
        resolve("Food prepared");
      } else {
        reject("Failed to prepare food");
      }
    }, delay);
  });
}

function pack() {
  return new Promise((resolve, reject) => {
    const delay = 1000 + Math.random() * 1000;
    setTimeout(() => {
      if (Math.random() > 0.15) {
        resolve("Package ready");
      } else {
        reject("Failed to pack order");
      }
    }, delay);
  });
}

function dispatch() {
  return new Promise((resolve, reject) => {
    const delay = 1000 + Math.random() * 1000;
    setTimeout(() => {
      if (Math.random() > 0.15) {
        resolve("Out for delivery");
      } else {
        reject("Failed to dispatch");
      }
    }, delay);
  });
}

function deliver() {
  return new Promise((resolve, reject) => {
    const delay = 1000 + Math.random() * 1000;
    setTimeout(() => {
      if (Math.random() > 0.15) {
        resolve("Delivered");
      } else {
        reject("Failed to deliver");
      }
    }, delay);
  });
}

/*
Async/Await and Event Loop Flow:

1. async function returns a Promise automatically
2. await pauses execution until Promise resolves
3. Control returns to event loop while waiting
4. Event loop can process other tasks during await
5. When Promise resolves, execution resumes
6. try/catch handles rejected Promises
7. Each step waits for previous to complete (sequential)
*/

async function runPipeline() {
  console.log("Start Pipeline\n");
  
  try {
    // Step 1: await pauses until takeOrder Promise resolves
    await takeOrder();
    console.log("Step 1: Order taken");
    
    // Step 2: execution resumes after previous await
    await prepare();
    console.log("Step 2: Food prepared");
    
    // Step 3: sequential async operations
    await pack();
    console.log("Step 3: Package ready");
    
    // Step 4: each await ensures proper order
    await dispatch();
    console.log("Step 4: Out for delivery");
    
    // Step 5: final step in pipeline
    await deliver();
    console.log("\nDelivery completed!");
    
  } catch (error) {
    // Catches rejection from any Promise in the chain
    console.log("\nPipeline failed!");
    console.log(`Error: ${error}`);
  }
}

/*
Event Loop Control Flow:

1. runPipeline() is called and starts executing
2. First await encountered - function pauses
3. Promise (setTimeout) is registered in task queue
4. Control returns to event loop
5. Event loop processes other tasks if available
6. When setTimeout completes, callback executes
7. Promise resolves, runPipeline resumes from await
8. Process repeats for each await statement
9. try/catch captures any rejection in the chain
10. Function completes when all steps finish or error occurs
*/

runPipeline();
