function loadProfile() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.3) {
        resolve("Profile Loaded");
      } else {
        reject("Profile Load Failed");
      }
    }, 2000);
  });
}

function loadPosts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.3) {
        resolve("Posts Loaded");
      } else {
        reject("Posts Load Failed");
      }
    }, 1500);
  });
}

function loadMessages() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.3) {
        resolve("Messages Loaded");
      } else {
        reject("Messages Load Failed");
      }
    }, 1000);
  });
}

console.log("Loading dashboard modules...");

const startTime = Date.now();

Promise.allSettled([loadProfile(), loadPosts(), loadMessages()])
  .then((results) => {
    const endTime = Date.now();
    const totalTime = (endTime - startTime) / 1000;
    
    console.log("\n=== Dashboard Load Results ===");
    
    results.forEach((result, index) => {
      const modules = ["Profile", "Posts", "Messages"];
      if (result.status === "fulfilled") {
        console.log(`${modules[index]}: ${result.value}`);
      } else {
        console.log(`${modules[index]}: ${result.reason}`);
      }
    });
    
    console.log(`\nTotal time taken: ${totalTime.toFixed(2)} seconds`);
    
    const succeeded = results.filter(r => r.status === "fulfilled").length;
    const failed = results.filter(r => r.status === "rejected").length;
    
    console.log(`Modules succeeded: ${succeeded}`);
    console.log(`Modules failed: ${failed}`);
  });
