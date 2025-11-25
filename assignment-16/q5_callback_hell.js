// Using nested callbacks (callback hell)
console.log("=== Callback Hell Version ===");

function design(callback) {
  setTimeout(() => {
    console.log("Step 1: Design completed");
    callback();
  }, 1000);
}

function build(callback) {
  setTimeout(() => {
    console.log("Step 2: Build completed");
    callback();
  }, 1000);
}

function test(callback) {
  setTimeout(() => {
    console.log("Step 3: Testing completed");
    callback();
  }, 1000);
}

function deploy(callback) {
  setTimeout(() => {
    console.log("Step 4: Deployment completed");
    callback();
  }, 1000);
}

function celebrate(callback) {
  setTimeout(() => {
    console.log("Step 5: Celebration!");
    callback();
  }, 1000);
}

design(() => {
  build(() => {
    test(() => {
      deploy(() => {
        celebrate(() => {
          console.log("Pipeline finished!");
        });
      });
    });
  });
});

// Using async/await (clean version)
setTimeout(() => {
  console.log("\n=== Async/Await Version ===");

  function designAsync() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Step 1: Design completed");
        resolve();
      }, 1000);
    });
  }

  function buildAsync() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Step 2: Build completed");
        resolve();
      }, 1000);
    });
  }

  function testAsync() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Step 3: Testing completed");
        resolve();
      }, 1000);
    });
  }

  function deployAsync() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Step 4: Deployment completed");
        resolve();
      }, 1000);
    });
  }

  function celebrateAsync() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Step 5: Celebration!");
        resolve();
      }, 1000);
    });
  }

  async function runPipeline() {
    await designAsync();
    await buildAsync();
    await testAsync();
    await deployAsync();
    await celebrateAsync();
    console.log("Pipeline finished!");
  }

  runPipeline();

  /*
  Why async/await improves readability:
  1. Code flows top-to-bottom instead of nested callbacks
  2. No deep indentation (pyramid of doom)
  3. Easier to read and understand sequential operations
  4. Error handling is simpler with try/catch
  5. Looks similar to synchronous code
  */
}, 6000);
