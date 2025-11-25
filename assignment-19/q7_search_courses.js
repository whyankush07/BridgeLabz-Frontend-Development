$(document).ready(function() {
  
  // Real-time search filtering using .keyup()
  $("#searchInput").keyup(function() {
    const searchTerm = $(this).val().toLowerCase();
    let matchCount = 0;

    $(".course").each(function() {
      const title = $(this).data("title").toLowerCase();
      const description = $(this).data("description").toLowerCase();
      const titleElement = $(this).find(".course-title");
      const descElement = $(this).find(".course-description");
      
      // Reset to original text
      titleElement.text($(this).data("title"));
      descElement.text($(this).data("description"));

      if (searchTerm === "") {
        $(this).removeClass("hidden");
        matchCount++;
      } else if (title.includes(searchTerm) || description.includes(searchTerm)) {
        $(this).removeClass("hidden");
        matchCount++;

        // Highlight matched text using .css()
        const titleText = $(this).data("title");
        const descText = $(this).data("description");
        
        const highlightedTitle = highlightText(titleText, searchTerm);
        const highlightedDesc = highlightText(descText, searchTerm);
        
        titleElement.html(highlightedTitle);
        descElement.html(highlightedDesc);
      } else {
        $(this).addClass("hidden");
      }
    });

    // Show count of matched courses
    if (searchTerm === "") {
      $("#matchCount").text("");
    } else {
      $("#matchCount").text(`${matchCount} course(s) found`);
    }
  });

  // Helper function to highlight text
  function highlightText(text, search) {
    const regex = new RegExp(`(${search})`, "gi");
    return text.replace(regex, '<span class="highlight">$1</span>');
  }

  // Clear search to reset list
  $("#clearSearch").click(function() {
    $("#searchInput").val("");
    $(".course").removeClass("hidden");
    
    $(".course").each(function() {
      $(this).find(".course-title").text($(this).data("title"));
      $(this).find(".course-description").text($(this).data("description"));
    });
    
    $("#matchCount").text("");
  });
});
