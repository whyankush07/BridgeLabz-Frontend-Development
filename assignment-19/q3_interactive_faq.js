$(document).ready(function() {
  
  // Click question to toggle answer visibility
  $(".question").click(function() {
    $(this).next(".answer").slideToggle(300);
  });

  // Hover to change question color (handled by CSS)

  // Double-click question to collapse all answers
  $(".question").dblclick(function() {
    $(".answer").slideUp(300);
  });

  // Focus on input to highlight parent question
  $(".answer input").focus(function() {
    $(this).closest(".faq-item").find(".question").addClass("focused");
  });

  // Blur from input to reset background color
  $(".answer input").blur(function() {
    $(this).closest(".faq-item").find(".question").removeClass("focused");
  });
});
