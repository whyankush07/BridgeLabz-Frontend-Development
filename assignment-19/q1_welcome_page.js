$(document).ready(function () {
  const quotes = [
    "Believe you can and you're halfway there.",
    "The only way to do great work is to love what you do.",
    "Success is not final, failure is not fatal.",
    "Dream big and dare to fail.",
    "The future belongs to those who believe in their dreams.",
  ];

  let quoteIndex = 0;

  // Display greeting based on time of day
  function showTimeBasedGreeting() {
    const hour = new Date().getHours();
    let greeting;

    if (hour < 12) {
      greeting = "Good Morning!";
    } else if (hour < 18) {
      greeting = "Good Afternoon!";
    } else {
      greeting = "Good Evening!";
    }

    $("#greeting").text(greeting);
  }

  showTimeBasedGreeting();

  // Change greeting to motivational quote
  $("#changeGreeting").click(function () {
    $("#greeting").text(quotes[quoteIndex]);
    quoteIndex = (quoteIndex + 1) % quotes.length;
  });

  // Toggle visibility of welcome message
  $("#toggleMessage").click(function () {
    $("#welcomeMessage").toggle();
  });

  // Show alert when greeting is clicked
  $("#greeting").click(function () {
    alert("Thanks for clicking the greeting!");
  });
});
