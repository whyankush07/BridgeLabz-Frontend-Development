const textArea = document.getElementById("textArea");
const charCounter = document.getElementById("charCounter");
const resetBtn = document.getElementById("resetBtn");

const MAX_CHARS = 100;

function updateCounter() {
  const currentLength = textArea.value.length;
  const remaining = MAX_CHARS - currentLength;

  charCounter.textContent = `${remaining} characters remaining`;

  charCounter.classList.remove("normal", "warning", "danger");

  if (remaining <= 0) {
    charCounter.classList.add("danger");
  } else if (remaining <= 20) {
    charCounter.classList.add("warning");
  } else {
    charCounter.classList.add("normal");
  }
}

textArea.addEventListener("input", updateCounter);

textArea.addEventListener("keydown", (e) => {
  const currentLength = textArea.value.length;

  if (currentLength >= MAX_CHARS) {
    const allowedKeys = [
      "Backspace",
      "Delete",
      "ArrowLeft",
      "ArrowRight",
      "ArrowUp",
      "ArrowDown",
      "Tab",
    ];

    if (!allowedKeys.includes(e.key) && !e.ctrlKey && !e.metaKey) {
      e.preventDefault();
    }
  }
});

resetBtn.addEventListener("click", () => {
  textArea.value = "";
  updateCounter();
  textArea.focus();
});

updateCounter();
