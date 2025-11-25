const validators = {
  name: /^[A-Za-z\s]+$/,
  email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  seats: /^([1-9]|10)$/,
};

const form = document.getElementById("bookingForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const seatsInput = document.getElementById("seats");

const validateField = (fieldName, value) => {
  const input = document.getElementById(fieldName);
  const error = document.getElementById(`${fieldName}Error`);
  const isValid = validators[fieldName].test(value.toString());

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

nameInput.addEventListener("input", (e) =>
  validateField("name", e.target.value)
);
emailInput.addEventListener("input", (e) =>
  validateField("email", e.target.value)
);
seatsInput.addEventListener("input", (e) =>
  validateField("seats", e.target.value)
);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const seats = seatsInput.value.trim();

  const isNameValid = validateField("name", name);
  const isEmailValid = validateField("email", email);
  const isSeatsValid = validateField("seats", seats);

  if (isNameValid && isEmailValid && isSeatsValid) {
    const bookingInfo = {
      name: name,
      email: email,
      seats: parseInt(seats),
      bookingId: "BK" + Date.now(),
      timestamp: new Date().toLocaleString(),
    };

    document.getElementById("ticketName").textContent = bookingInfo.name;
    document.getElementById("ticketEmail").textContent = bookingInfo.email;
    document.getElementById("ticketSeats").textContent = bookingInfo.seats;
    document.getElementById("bookingId").textContent = bookingInfo.bookingId;
    document.getElementById("ticket").style.display = "block";

    console.log("Booking Confirmed:", bookingInfo);

    form.reset();
    nameInput.classList.remove("valid");
    emailInput.classList.remove("valid");
    seatsInput.classList.remove("valid");
  } else {
    console.log("Validation failed. Please check all fields.");
  }
});
