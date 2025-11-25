const form = document.getElementById("validationForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const successMessage = document.getElementById("successMessage");

function validateName() {
  const value = nameInput.value.trim();
  const error = document.getElementById("nameError");

  if (value === "") {
    nameInput.classList.add("invalid");
    nameInput.classList.remove("valid");
    error.classList.add("show");
    return false;
  }

  nameInput.classList.remove("invalid");
  nameInput.classList.add("valid");
  error.classList.remove("show");
  return true;
}

function validateEmail() {
  const value = emailInput.value.trim();
  const error = document.getElementById("emailError");

  if (!value.includes("@") || value === "") {
    emailInput.classList.add("invalid");
    emailInput.classList.remove("valid");
    error.classList.add("show");
    return false;
  }

  emailInput.classList.remove("invalid");
  emailInput.classList.add("valid");
  error.classList.remove("show");
  return true;
}

function validatePassword() {
  const value = passwordInput.value;
  const error = document.getElementById("passwordError");

  if (value.length < 6) {
    passwordInput.classList.add("invalid");
    passwordInput.classList.remove("valid");
    error.classList.add("show");
    return false;
  }

  passwordInput.classList.remove("invalid");
  passwordInput.classList.add("valid");
  error.classList.remove("show");
  return true;
}

nameInput.addEventListener("input", () => {
  if (nameInput.value.trim() !== "") {
    validateName();
  } else {
    nameInput.classList.remove("valid", "invalid");
    document.getElementById("nameError").classList.remove("show");
  }
});

emailInput.addEventListener("input", () => {
  if (emailInput.value.trim() !== "") {
    validateEmail();
  } else {
    emailInput.classList.remove("valid", "invalid");
    document.getElementById("emailError").classList.remove("show");
  }
});

passwordInput.addEventListener("input", () => {
  if (passwordInput.value !== "") {
    validatePassword();
  } else {
    passwordInput.classList.remove("valid", "invalid");
    document.getElementById("passwordError").classList.remove("show");
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();

  if (isNameValid && isEmailValid && isPasswordValid) {
    successMessage.classList.add("show");

    console.log("Form submitted successfully");
    console.log({
      name: nameInput.value,
      email: emailInput.value,
      password: "***hidden***",
    });

    setTimeout(() => {
      form.reset();
      nameInput.classList.remove("valid");
      emailInput.classList.remove("valid");
      passwordInput.classList.remove("valid");
      successMessage.classList.remove("show");
    }, 3000);
  } else {
    successMessage.classList.remove("show");
    console.log("Form validation failed");
  }
});
