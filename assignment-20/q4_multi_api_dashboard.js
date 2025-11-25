document.addEventListener("DOMContentLoaded", function() {
  loadDashboard();
});

function loadDashboard() {
  const baseUrl = "http://localhost:3004";

  // Fetch all three endpoints simultaneously using Promise.all
  const usersPromise = fetch(`${baseUrl}/users`).then(res => {
    if (!res.ok) throw new Error("Users API failed");
    return res.json();
  });

  const ordersPromise = fetch(`${baseUrl}/orders`).then(res => {
    if (!res.ok) throw new Error("Orders API failed");
    return res.json();
  });

  const productsPromise = fetch(`${baseUrl}/products`).then(res => {
    if (!res.ok) throw new Error("Products API failed");
    return res.json();
  });

  // Use Promise.allSettled to handle partial failures
  Promise.allSettled([usersPromise, ordersPromise, productsPromise])
    .then(function(results) {
      let hasError = false;

      // Process users result
      if (results[0].status === "fulfilled") {
        document.getElementById("usersCount").textContent = results[0].value.length;
      } else {
        document.getElementById("usersCount").textContent = "Error";
        document.getElementById("usersCard").classList.add("error");
        hasError = true;
      }

      // Process orders result
      if (results[1].status === "fulfilled") {
        document.getElementById("ordersCount").textContent = results[1].value.length;
      } else {
        document.getElementById("ordersCount").textContent = "Error";
        document.getElementById("ordersCard").classList.add("error");
        hasError = true;
      }

      // Process products result
      if (results[2].status === "fulfilled") {
        document.getElementById("productsCount").textContent = results[2].value.length;
      } else {
        document.getElementById("productsCount").textContent = "Error";
        document.getElementById("productsCard").classList.add("error");
        hasError = true;
      }

      // Show warning if any API failed
      if (hasError) {
        document.getElementById("warning").style.display = "block";
      }
    })
    .catch(function(error) {
      document.getElementById("warning").style.display = "block";
      document.getElementById("warning").textContent = "Failed to connect to server. Make sure JSON Server is running on port 3004.";
    });
}
