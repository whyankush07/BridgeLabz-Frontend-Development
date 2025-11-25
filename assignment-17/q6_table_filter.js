const searchInput = document.getElementById("searchInput");
const tableBody = document.getElementById("tableBody");
const noResults = document.getElementById("noResults");

function filterTable() {
  const searchTerm = searchInput.value.toLowerCase().trim();
  const rows = tableBody.querySelectorAll("tr");
  let visibleCount = 0;

  rows.forEach((row) => {
    const cells = row.querySelectorAll("td");
    const rowText = Array.from(cells)
      .map((cell) => cell.textContent.toLowerCase())
      .join(" ");

    if (searchTerm === "" || rowText.includes(searchTerm)) {
      row.classList.remove("hidden");
      visibleCount++;
    } else {
      row.classList.add("hidden");
    }
  });

  if (visibleCount === 0 && searchTerm !== "") {
    noResults.classList.add("show");
  } else {
    noResults.classList.remove("show");
  }
}

searchInput.addEventListener("input", filterTable);
