const API_URL = "http://localhost:3006/users";
let emailCheckTimeout;
let isEmailAvailable = false;

document.addEventListener("DOMContentLoaded", function() {
  const emailInput = document.getElementById("email");
  const form = document.getElementById("registrationForm");

  // Check email availability as user types
  emailInput.addEventListener("input", function() {
    const email = this.value.trim();
    
    clearTimeout(emailCheckTimeout);
    
    if (email && isValidEmail(email)) {
      showEmailStatus("Checking availability...", "checking");
      
      emailCheckTimeout = setTimeout(function() {
        checkEmailExists(email);
      }, 500);
    } else {
      hideEmailStatus();
      isEmailAvailable = false;
    }
  });

  // Form submission
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (!name || !email || !password) {
      showError("Please fill in all fields");
      return;
    }

    if (!isValidEmail(email)) {
      showError("Please enter a valid email address");
      return;
    }

    // Check email one more time before submission
    checkAndRegister(name, email, password);
  });
});

function checkEmailExists(email) {
  axios.get(`${API_URL}?email=${email}`)
    .then(function(response) {
      if (response.data.length > 0) {
        showEmailStatus("Email already registered", "taken");
        isEmailAvailable = false;
      } else {
        showEmailStatus("Email available", "available");
        isEmailAvailable = true;
      }
    })
    .catch(function(error) {
      showError("Error checking email. Make sure JSON Server is running on port 3006.");
    });
}

function checkAndRegister(name, email, password) {
  const submitBtn = document.getElementById("submitBtn");
  submitBtn.disabled = true;
  submitBtn.textContent = "Checking...";

  // First check if email exists
  axios.get(`${API_URL}?email=${email}`)
    .then(function(response) {
      if (response.data.length > 0) {
        showError("Email already registered");
        showEmailStatus("Email already registered", "taken");
        submitBtn.disabled = false;
        submitBtn.textContent = "Register";
      } else {
        // Email is available, proceed with registration
        return registerUser(name, email, password);
      }
    })
    .catch(function(error) {
      showError("Error checking email availability");
      submitBtn.disabled = false;
      submitBtn.textContent = "Register";
    });
}

function registerUser(name, email, password) {
  const submitBtn = document.getElementById("submitBtn");
  submitBtn.textContent = "Registering...";

  axios.post(API_URL, {
    name: name,
    email: email,
    password: password
  })
  .then(function(response) {
    hideError();
    showSuccess();
    document.getElementById("registrationForm").reset();
    hideEmailStatus();
    submitBtn.disabled = false;
    submitBtn.textContent = "Register";
  })
  .catch(function(error) {
    showError("Registration failed. Please try again.");
    submitBtn.disabled = false;
    submitBtn.textContent = "Register";
  });
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function showEmailStatus(message, type) {
  const status = document.getElementById("emailStatus");
  status.textContent = message;
  status.className = "email-status " + type;
}

function hideEmailStatus() {
  document.getElementById("emailStatus").textContent = "";
}

function showError(message) {
  document.getElementById("successMessage").style.display = "none";
  const errorDiv = document.getElementById("errorMessage");
  errorDiv.textContent = message;
  errorDiv.style.display = "block";
}

function hideError() {
  document.getElementById("errorMessage").style.display = "none";
}

function showSuccess() {
  document.getElementById("errorMessage").style.display = "none";
  const successDiv = document.getElementById("successMessage");
  successDiv.style.display = "block";
  
  setTimeout(function() {
    successDiv.style.display = "none";
  }, 5000);
}
