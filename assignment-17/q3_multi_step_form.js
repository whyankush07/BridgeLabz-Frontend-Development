const form = document.getElementById("multiStepForm");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");
const summary = document.getElementById("summary");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

let currentStep = 1;
const totalSteps = 3;

function showStep(step) {
  document.querySelectorAll(".form-step").forEach((formStep) => {
    formStep.classList.remove("active");
  });

  const activeFormStep = document.querySelector(
    `.form-step[data-step="${step}"]`
  );
  if (activeFormStep) {
    activeFormStep.classList.add("active");
  }

  document.querySelectorAll(".step").forEach((stepEl, index) => {
    stepEl.classList.remove("active", "completed");
    if (index + 1 < step) {
      stepEl.classList.add("completed");
    } else if (index + 1 === step) {
      stepEl.classList.add("active");
    }
  });

  backBtn.style.visibility = step === 1 ? "hidden" : "visible";
  nextBtn.textContent = step === totalSteps ? "Submit" : "Next";
}

function validateName() {
  const value = nameInput.value.trim();
  const error = document.getElementById("nameError");

  if (value === "") {
    nameInput.classList.add("invalid");
    error.classList.add("show");
    return false;
  }

  nameInput.classList.remove("invalid");
  error.classList.remove("show");
  return true;
}

function validateEmail() {
  const value = emailInput.value.trim();
  const error = document.getElementById("emailError");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(value)) {
    emailInput.classList.add("invalid");
    error.classList.add("show");
    return false;
  }

  emailInput.classList.remove("invalid");
  error.classList.remove("show");
  return true;
}

function validatePassword() {
  const value = passwordInput.value;
  const error = document.getElementById("passwordError");

  if (value.length < 6) {
    passwordInput.classList.add("invalid");
    error.classList.add("show");
    return false;
  }

  passwordInput.classList.remove("invalid");
  error.classList.remove("show");
  return true;
}

function validateCurrentStep() {
  switch (currentStep) {
    case 1:
      return validateName();
    case 2:
      return validateEmail();
    case 3:
      return validatePassword();
    default:
      return true;
  }
}

function showSummary() {
  form.style.display = "none";
  summary.classList.add("show");

  document.getElementById("summaryName").textContent = nameInput.value;
  document.getElementById("summaryEmail").textContent = emailInput.value;
  document.getElementById("summaryPassword").textContent = "•".repeat(
    passwordInput.value.length
  );
}

nextBtn.addEventListener("click", () => {
  if (!validateCurrentStep()) {
    return;
  }

  if (currentStep < totalSteps) {
    currentStep++;
    showStep(currentStep);
  } else {
    showSummary();
  }
});

backBtn.addEventListener("click", () => {
  if (currentStep > 1) {
    currentStep--;
    showStep(currentStep);
  }
});

nameInput.addEventListener("input", () => {
  if (nameInput.value.trim() !== "") {
    validateName();
  }
});

emailInput.addEventListener("input", () => {
  if (emailInput.value.trim() !== "") {
    validateEmail();
  }
});

passwordInput.addEventListener("input", () => {
  if (passwordInput.value !== "") {
    validatePassword();
  }
});

showStep(currentStep);
