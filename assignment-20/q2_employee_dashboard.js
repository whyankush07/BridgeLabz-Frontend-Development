document.addEventListener("DOMContentLoaded", function() {
  loadEmployees();
});

function loadEmployees() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:3002/employees", true);

  xhr.onload = function() {
    if (xhr.status === 200) {
      const employees = JSON.parse(xhr.responseText);
      renderEmployees(employees);
    } else {
      showError("Failed to load employees");
    }
  };

  xhr.onerror = function() {
    showError("Network error. Make sure JSON Server is running on port 3002.");
  };

  xhr.send();
}

function renderEmployees(employees) {
  const tableBody = document.getElementById("employeeTable");
  tableBody.innerHTML = "";

  employees.forEach(function(emp) {
    const row = document.createElement("tr");
    row.id = `employee-${emp.id}`;
    
    const statusClass = emp.status === "active" ? "active" : "inactive";
    const buttonText = emp.status === "active" ? "Deactivate" : "Activate";
    
    row.innerHTML = `
      <td>${emp.id}</td>
      <td>${emp.name}</td>
      <td>${emp.department}</td>
      <td><span class="status-badge ${statusClass}">${emp.status}</span></td>
      <td><button class="toggle-btn ${statusClass}" onclick="toggleStatus(${emp.id}, '${emp.status}')">${buttonText}</button></td>
    `;
    
    tableBody.appendChild(row);
  });
}

function toggleStatus(id, currentStatus) {
  const newStatus = currentStatus === "active" ? "inactive" : "active";
  const row = document.getElementById(`employee-${id}`);
  const button = row.querySelector(".toggle-btn");
  const badge = row.querySelector(".status-badge");

  // Optimistic UI update
  const oldBadgeClass = badge.className;
  const oldButtonClass = button.className;
  const oldButtonText = button.textContent;
  const oldBadgeText = badge.textContent;

  badge.className = `status-badge ${newStatus}`;
  badge.textContent = newStatus;
  button.className = `toggle-btn ${newStatus}`;
  button.textContent = newStatus === "active" ? "Deactivate" : "Activate";
  button.onclick = function() { toggleStatus(id, newStatus); };

  // Send PATCH request
  const xhr = new XMLHttpRequest();
  xhr.open("PATCH", `http://localhost:3002/employees/${id}`, true);
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onload = function() {
    if (xhr.status !== 200) {
      // Revert UI on failure
      revertUI();
      showError("Failed to update employee status");
    }
  };

  xhr.onerror = function() {
    revertUI();
    showError("Network error. Could not update status.");
  };

  function revertUI() {
    badge.className = oldBadgeClass;
    badge.textContent = oldBadgeText;
    button.className = oldButtonClass;
    button.textContent = oldButtonText;
    button.onclick = function() { toggleStatus(id, currentStatus); };
  }

  xhr.send(JSON.stringify({ status: newStatus }));
}

function showError(message) {
  const errorDiv = document.getElementById("errorMessage");
  errorDiv.textContent = message;
  errorDiv.style.display = "block";
  
  setTimeout(function() {
    errorDiv.style.display = "none";
  }, 5000);
}
