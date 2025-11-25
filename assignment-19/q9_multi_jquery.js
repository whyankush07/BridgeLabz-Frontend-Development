// Using jQuery.noConflict() to manage multiple jQuery versions
var $j1 = jQuery.noConflict(true);
var $j2 = jQuery;

$j1(document).ready(function() {
  let currentSlide = 0;
  const slides = $j1(".carousel-item");
  const totalSlides = slides.length;

  // Version 1: Carousel slider rotation
  function rotateCarousel() {
    slides.removeClass("active");
    currentSlide = (currentSlide + 1) % totalSlides;
    slides.eq(currentSlide).addClass("active");
  }

  setInterval(rotateCarousel, 3000);

  // Version 1: Highlight active widget
  $j1(".widget-item").click(function() {
    $j1(".widget").removeClass("active");
    
    const text = $j1(this).text().toLowerCase();
    
    if (text.includes("carousel")) {
      $j1("#carouselWidget").addClass("active");
    } else if (text.includes("notification")) {
      $j1("#notificationWidget").addClass("active");
    } else if (text.includes("analytics")) {
      $j1("#tooltipWidget").addClass("active");
    }
  });
});

$j2(document).ready(function() {
  
  // Version 2: Modal popups for notifications
  $j2(".notification-btn").click(function() {
    const message = $j2(this).data("message");
    $j2("#modalMessage").text(message);
    $j2(".modal-overlay").fadeIn(300);
    $j2(".modal").fadeIn(300);
  });

  $j2(".close-modal, .modal-overlay").click(function() {
    $j2(".modal").fadeOut(300);
    $j2(".modal-overlay").fadeOut(300);
  });

  // Version 2: Tooltips on hover
  $j2(".widget-item").hover(
    function(e) {
      const tooltipText = $j2(this).data("tooltip");
      $j2("#tooltip").text(tooltipText).css({
        top: e.pageY + 10,
        left: e.pageX + 10
      }).fadeIn(200);
    },
    function() {
      $j2("#tooltip").fadeOut(200);
    }
  );

  $j2(".widget-item").mousemove(function(e) {
    $j2("#tooltip").css({
      top: e.pageY + 10,
      left: e.pageX + 10
    });
  });
});
