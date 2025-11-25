$(document).ready(function() {
  
  function showMessage(text, type) {
    const message = $("<div>").addClass("message").addClass(type).text(text);
    $("#messageContainer").html(message);
    
    setTimeout(function() {
      message.fadeOut(400, function() {
        $(this).remove();
      });
    }, 3000);
  }

  // Subscribe/Unsubscribe toggle using .on()
  $(".subscription-list").on("click", ".subscription-item", function(e) {
    if (!$(e.target).hasClass("remove-btn")) {
      $(this).toggleClass("active inactive");
      
      const topicName = $(this).find(".topic-name").text();
      const isActive = $(this).hasClass("active");
      
      if (isActive) {
        showMessage(`Subscribed to ${topicName}`, "success");
      } else {
        showMessage(`Unsubscribed from ${topicName}`, "info");
      }
    }
  });

  // Dynamically add new subscription topic
  $("#addTopic").click(function() {
    const topicName = $("#newTopicInput").val().trim();
    
    if (topicName) {
      const newItem = $(`
        <div class="subscription-item" data-topic="${topicName.toLowerCase().replace(/\s+/g, '-')}">
          <div>
            <div class="topic-name">${topicName}</div>
            <div class="status">Click to subscribe/unsubscribe</div>
          </div>
          <button class="remove-btn">Remove</button>
        </div>
      `);
      
      $(".subscription-list").append(newItem);
      $("#newTopicInput").val("");
      showMessage(`Topic "${topicName}" added successfully`, "success");
    }
  });

  // Remove specific subscription and detach event using .off()
  $(".subscription-list").on("click", ".remove-btn", function(e) {
    e.stopPropagation();
    const item = $(this).closest(".subscription-item");
    const topicName = item.find(".topic-name").text();
    
    item.fadeOut(300, function() {
      $(this).off().remove();
      showMessage(`Removed ${topicName}`, "info");
    });
  });
});
