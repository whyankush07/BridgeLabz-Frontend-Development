document.addEventListener("DOMContentLoaded", function() {
  const daySelect = document.getElementById("daySelect");
  
  daySelect.addEventListener("change", function() {
    const selectedDay = this.value;
    
    if (selectedDay) {
      fetchTimetable(selectedDay);
    } else {
      document.getElementById("timetableContainer").innerHTML = 
        '<div class="no-classes">Select a day to view timetable</div>';
    }
  });
});

function fetchTimetable(day) {
  const container = document.getElementById("timetableContainer");
  container.innerHTML = '<div class="loading">Loading timetable...</div>';

  fetch(`http://localhost:3005/timetable?day=${day}`)
    .then(function(response) {
      if (!response.ok) {
        throw new Error("Failed to fetch timetable");
      }
      return response.json();
    })
    .then(function(classes) {
      renderTimetable(classes);
    })
    .catch(function(error) {
      container.innerHTML = '<div class="no-classes">Error loading timetable. Make sure JSON Server is running on port 3005.</div>';
    });
}

function renderTimetable(classes) {
  const container = document.getElementById("timetableContainer");

  if (classes.length === 0) {
    container.innerHTML = '<div class="no-classes">No classes today.</div>';
    return;
  }

  let tableHtml = `
    <table>
      <thead>
        <tr>
          <th>Time</th>
          <th>Subject</th>
          <th>Faculty</th>
        </tr>
      </thead>
      <tbody>
  `;

  classes.forEach(function(cls) {
    tableHtml += `
      <tr>
        <td class="time-slot">${cls.time}</td>
        <td>${cls.subject}</td>
        <td class="faculty-name">${cls.faculty}</td>
      </tr>
    `;
  });

  tableHtml += '</tbody></table>';
  container.innerHTML = tableHtml;
}
