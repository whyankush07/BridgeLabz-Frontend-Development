const themeButtons = document.querySelectorAll(".theme-btn");
const body = document.body;
const currentThemeDisplay = document.getElementById("currentTheme");

function setTheme(themeName) {
  body.setAttribute("class", themeName);
  body.setAttribute("data-theme", themeName);

  currentThemeDisplay.textContent =
    themeName.charAt(0).toUpperCase() + themeName.slice(1);

  themeButtons.forEach((btn) => {
    btn.classList.remove("active");
    if (btn.getAttribute("data-theme") === themeName) {
      btn.classList.add("active");
    }
  });

  console.log(`Theme changed to: ${themeName}`);
}

themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const theme = button.getAttribute("data-theme");
    setTheme(theme);
  });
});

const initialTheme = body.getAttribute("data-theme") || "light";
setTheme(initialTheme);
