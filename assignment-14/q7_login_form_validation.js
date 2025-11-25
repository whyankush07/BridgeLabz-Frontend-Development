const validators = {
  username: /^.{5,}$/,
  password:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/,
};

const form = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const messageDiv = document.getElementById("message");

const validateField = (fieldName, value) => {
  const input = document.getElementById(fieldName);
  const error = document.getElementById(`${fieldName}Error`);

  if (value === "") {
    input.classList.remove("valid", "invalid");
    error.classList.remove("show");
    return { valid: false, message: "" };
  }

  const isValid = validators[fieldName].test(value);

  if (isValid) {
    input.classList.remove("invalid");
    input.classList.add("valid");
    error.classList.remove("show");
    return { valid: true, message: "" };
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
    error.classList.add("show");

    if (fieldName === "password") {
      const errors = [];
      if (value.length < 8) errors.push("at least 8 characters");
      if (!/[A-Z]/.test(value)) errors.push("1 uppercase letter");
      if (!/[a-z]/.test(value)) errors.push("1 lowercase letter");
      if (!/\d/.test(value)) errors.push("1 number");
      if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value))
        errors.push("1 special character");

      return {
        valid: false,
        message: `Password must contain: ${errors.join(", ")}`,
      };
    }

    return {
      valid: false,
      message: error.textContent,
    };
  }
};

usernameInput.addEventListener("input", (e) => {
  validateField("username", e.target.value);
});

passwordInput.addEventListener("input", (e) => {
  validateField("password", e.target.value);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  const usernameValidation = validateField("username", username);
  const passwordValidation = validateField("password", password);

  messageDiv.style.display = "none";
  messageDiv.className = "message";

  if (usernameValidation.valid && passwordValidation.valid) {
    messageDiv.textContent = "Login successful! Credentials are valid.";
    messageDiv.classList.add("success");
    messageDiv.style.display = "block";

    console.log("Login successful");
    console.log({ username, passwordLength: password.length });

    setTimeout(() => {
      form.reset();
      usernameInput.classList.remove("valid");
      passwordInput.classList.remove("valid");
      messageDiv.style.display = "none";
    }, 2000);
  } else {
    const errors = [];
    if (!usernameValidation.valid && usernameValidation.message) {
      errors.push(usernameValidation.message);
    }
    if (!passwordValidation.valid && passwordValidation.message) {
      errors.push(passwordValidation.message);
    }

    messageDiv.textContent = errors.join(" | ");
    messageDiv.classList.add("error");
    messageDiv.style.display = "block";

    console.log("Login failed:", errors);
  }
});
