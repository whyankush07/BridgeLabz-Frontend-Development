$(document).ready(function() {
  loadTasks("all");

  $("#filterSelect").on("change", function() {
    const filter = $(this).val();
    loadTasks(filter);
  });
});

function loadTasks(filter) {
  let url = "http://localhost:3003/tasks";

  // Build query parameters based on filter
  if (filter === "low" || filter === "medium" || filter === "high") {
    url += `?priority=${filter}`;
  } else if (filter === "completed") {
    url += "?completed=true";
  }

  $.ajax({
    url: url,
    method: "GET",
    beforeSend: function() {
      $("#taskList").html('<div class="loading">Loading tasks...</div>');
    },
    success: function(tasks) {
      renderTasks(tasks);
    },
    error: function() {
      $("#taskList").html('<div class="loading">Error loading tasks. Make sure JSON Server is running on port 3003.</div>');
    }
  });
}

function renderTasks(tasks) {
  const taskList = $("#taskList");
  taskList.empty();

  if (tasks.length === 0) {
    taskList.html('<div class="loading">No tasks found</div>');
    return;
  }

  tasks.forEach(function(task) {
    const completedClass = task.completed ? "completed" : "";
    const checkedAttr = task.completed ? "checked" : "";

    const taskHtml = `
      <div class="task-item" id="task-${task.id}">
        <input type="checkbox" class="task-checkbox" data-id="${task.id}" ${checkedAttr}>
        <span class="task-title ${completedClass}">${task.title}</span>
        <span class="priority-badge priority-${task.priority}">${task.priority}</span>
      </div>
    `;

    taskList.append(taskHtml);
  });

  // Attach checkbox event handlers
  $(".task-checkbox").on("change", function() {
    const taskId = $(this).data("id");
    const isCompleted = $(this).is(":checked");
    toggleTaskComplete(taskId, isCompleted);
  });
}

function toggleTaskComplete(taskId, isCompleted) {
  $.ajax({
    url: `http://localhost:3003/tasks/${taskId}`,
    method: "PATCH",
    contentType: "application/json",
    data: JSON.stringify({ completed: isCompleted }),
    success: function() {
      const titleSpan = $(`#task-${taskId} .task-title`);
      
      if (isCompleted) {
        titleSpan.addClass("completed");
      } else {
        titleSpan.removeClass("completed");
      }
    },
    error: function() {
      // Revert checkbox state on error
      const checkbox = $(`#task-${taskId} .task-checkbox`);
      checkbox.prop("checked", !isCompleted);
      alert("Failed to update task status");
    }
  });
}
