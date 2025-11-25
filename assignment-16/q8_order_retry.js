function submitOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("Order submitted successfully");
      } else {
        reject("Order submission failed");
      }
    }, 500);
  });
}

async function processOrder() {
  const maxAttempts = 3;
  
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      console.log(`Attempt ${attempt}...`);
      const result = await submitOrder();
      console.log(`Attempt ${attempt}: Success`);
      console.log(result);
      return result;
    } catch (error) {
      console.log(`Attempt ${attempt}: Failed`);
      
      if (attempt === maxAttempts) {
        throw new Error("Order could not be processed");
      }
    }
  }
}

console.log("Starting order processing...\n");

processOrder()
  .then((result) => {
    console.log("\nOrder processing completed!");
  })
  .catch((error) => {
    console.log(`\nFinal error: ${error.message}`);
  });
