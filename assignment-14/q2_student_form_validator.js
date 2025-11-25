const validators = {
  name: /^[A-Za-z\s]+$/,
  email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  phone: /^\d{10}$/,
  password:
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/,
};

const form = document.getElementById("studentForm");
const inputs = {
  name: document.getElementById("name"),
  email: document.getElementById("email"),
  phone: document.getElementById("phone"),
  password: document.getElementById("password"),
};

const validateField = (fieldName, value) => {
  const input = inputs[fieldName];
  const error = document.getElementById(`${fieldName}Error`);
  const isValid = validators[fieldName].test(value);

  if (value === "") {
    input.classList.remove("valid", "invalid");
    error.classList.remove("show");
    return false;
  }

  if (isValid) {
    input.classList.remove("invalid");
    input.classList.add("valid");
    error.classList.remove("show");
    return true;
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
    error.classList.add("show");
    return false;
  }
};

Object.keys(inputs).forEach((fieldName) => {
  inputs[fieldName].addEventListener("input", (e) => {
    validateField(fieldName, e.target.value);
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const validations = {
    name: validateField("name", inputs.name.value),
    email: validateField("email", inputs.email.value),
    phone: validateField("phone", inputs.phone.value),
    password: validateField("password", inputs.password.value),
  };

  const allValid = Object.values(validations).every((v) => v === true);

  if (allValid) {
    document.getElementById("successMsg").style.display = "block";
    console.log("Form submitted successfully");
    console.log({
      name: inputs.name.value,
      email: inputs.email.value,
      phone: inputs.phone.value,
    });
  } else {
    document.getElementById("successMsg").style.display = "none";
    console.log("Form has validation errors");
  }
});
