function serverA() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.2) {
        resolve("Server A deployed");
      } else {
        reject("Server A failed");
      }
    }, 2000);
  });
}

function serverB() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.2) {
        resolve("Server B deployed");
      } else {
        reject("Server B failed");
      }
    }, 3000);
  });
}

console.log("Starting deployment to servers...");

// Promise.all - waits for all to complete
Promise.all([serverA(), serverB()])
  .then((results) => {
    console.log("Deployment completed for all servers");
    console.log(results);
  })
  .catch((error) => {
    console.log(`Deployment failed: ${error}`);
  });

// Promise.race - returns first to complete
Promise.race([serverA(), serverB()])
  .then((result) => {
    console.log("Fastest response:", result);
  })
  .catch((error) => {
    console.log(`First responder failed: ${error}`);
  });
