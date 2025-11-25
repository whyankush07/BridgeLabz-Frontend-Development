$(document).ready(function() {
  let currentBanner = 0;
  let rotationInterval;
  const banners = $(".banner");
  const totalBanners = banners.length;

  // Hide current visible banner
  $("#hideBanner").click(function() {
    $(".banner:visible").addClass("hidden");
  });

  // Show all hidden banners
  $("#showBanner").click(function() {
    $(".banner").removeClass("hidden");
  });

  // Slide toggle banners
  $("#slideToggle").click(function() {
    $(".banner:visible").slideUp(400);
    setTimeout(function() {
      $(".banner.hidden").first().removeClass("hidden").slideDown(400);
    }, 400);
  });

  // Fade toggle banners
  $("#fadeToggle").click(function() {
    $(".banner:visible").fadeOut(400, function() {
      $(this).addClass("hidden");
      $(".banner.hidden").first().removeClass("hidden").fadeIn(400);
    });
  });

  // Auto rotate through banners every 5 seconds
  function rotateBanners() {
    banners.eq(currentBanner).fadeOut(800, function() {
      $(this).addClass("hidden");
      
      currentBanner = (currentBanner + 1) % totalBanners;
      
      banners.eq(currentBanner).removeClass("hidden").fadeIn(800);
    });
  }

  $("#startRotation").click(function() {
    if (rotationInterval) {
      clearInterval(rotationInterval);
    }
    rotationInterval = setInterval(rotateBanners, 5000);
  });

  $("#stopRotation").click(function() {
    if (rotationInterval) {
      clearInterval(rotationInterval);
      rotationInterval = null;
    }
  });
});
