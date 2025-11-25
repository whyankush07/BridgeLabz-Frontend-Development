$(document).ready(function() {
  
  // Click manager to highlight all direct reports
  $(".member.manager").click(function() {
    const managerName = $(this).find(".member-name").text();
    $(".member").removeClass("highlight");
    
    $(".member").each(function() {
      if ($(this).data("reports-to") === managerName) {
        $(this).addClass("highlight");
      }
    });
  });

  // Hover on employee to show contact info using .next()
  $(".member").hover(
    function() {
      $(this).find(".contact-info").slideDown(200);
    },
    function() {
      $(this).find(".contact-info").slideUp(200);
    }
  );

  // Click department header to highlight all members using .children()
  $(".dept-header").click(function() {
    const deptContainer = $(this).parent();
    const members = deptContainer.find(".team-members").children(".member");
    
    $(".member").removeClass("dept-highlight");
    members.addClass("dept-highlight");
  });

  // Select random employee and highlight siblings
  $("#randomEmployee").click(function() {
    const allMembers = $(".member:not(.manager)");
    const randomIndex = Math.floor(Math.random() * allMembers.length);
    const randomMember = allMembers.eq(randomIndex);
    
    $(".member").removeClass("highlight");
    randomMember.addClass("highlight");
    randomMember.siblings(".member").addClass("highlight");
  });

  // Collapse/Expand team using .parent() and .find()
  let isExpanded = true;
  $("#toggleAll").click(function() {
    if (isExpanded) {
      $(".team-members").slideUp(400);
      $(this).text("Expand All");
    } else {
      $(".team-members").slideDown(400);
      $(this).text("Collapse All");
    }
    isExpanded = !isExpanded;
  });
});
