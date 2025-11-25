const dropdownButton = document.getElementById("dropdownButton");
const dropdownOptions = document.getElementById("dropdownOptions");
const selectedText = document.getElementById("selectedText");
const displayValue = document.getElementById("displayValue");
const options = document.querySelectorAll(".dropdown-option");

let isOpen = false;

function openDropdown() {
  dropdownOptions.classList.add("show");
  dropdownButton.classList.add("active");
  isOpen = true;
}

function closeDropdown() {
  dropdownOptions.classList.remove("show");
  dropdownButton.classList.remove("active");
  isOpen = false;
}

dropdownButton.addEventListener("click", (e) => {
  e.stopPropagation();
  if (isOpen) {
    closeDropdown();
  } else {
    openDropdown();
  }
});

options.forEach((option) => {
  option.addEventListener("click", (e) => {
    e.stopPropagation();
    const value = option.getAttribute("data-value");
    const text = option.textContent;

    selectedText.textContent = text;
    displayValue.textContent = text;

    closeDropdown();

    console.log(`Selected: ${value}`);
  });
});

// Use capturing phase to close dropdown when clicking outside
document.addEventListener(
  "click",
  (e) => {
    if (isOpen) {
      closeDropdown();
    }
  },
  true
);
