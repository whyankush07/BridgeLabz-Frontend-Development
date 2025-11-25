$(document).ready(function() {
  
  // Click on product to highlight background
  $(".product").click(function(e) {
    if (!$(e.target).hasClass("favorite")) {
      $(".product").removeClass("highlight");
      $(this).addClass("highlight");
      
      // Check if product is out of stock using data attribute
      if ($(this).data("stock") === "out") {
        alert("This product is currently out of stock!");
      }
    }
  });

  // Hover to show additional product details
  $(".product").hover(
    function() {
      $(this).find(".details").slideDown(200);
    },
    function() {
      $(this).find(".details").slideUp(200);
    }
  );

  // Click favorite icon to toggle selected class
  $(".favorite").click(function(e) {
    e.stopPropagation();
    $(this).toggleClass("selected");
  });

  // Products with discount attribute
  // Using attribute selector [data-discount="true"]
});
