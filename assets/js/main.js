$(document).ready(function () {
  function setImgHeight() {
    var windowHeight = $(window).height();
    var url = window.location.href;
    var textWrapperHeight = $(".text-wrapper").height();

    // Looks for specific text in url to apply half height hero image on non-homepage
    if (
      url.match(/about/g) ||
      url.match(/guides/g) ||
      url.match(/\/cambridge-walking-tours/g) ||
      url.match(/testimonials/g) ||
      url.match(/contact/g) ||
      url.match(/faqs/g) ||
      url.match(/terms/g) ||
      url.match(/thankyou/g) ||
      url.match(/things-to-do/g)
    ) {
      $(".js-wrapper").css("height", windowHeight / 1.7);
    } else {
      $(".js-wrapper").css("height", windowHeight);
      //Recalulates margins on window resize
      $(".text-wrapper").css(
        "margin-top",
        windowHeight / 2 - textWrapperHeight / 2
      );
      $(".text-wrapper").css(
        "margin-bottom",
        windowHeight / 2 - textWrapperHeight / 2
      );
    }
  }

  // Navbar opacity layer
  $(".navbar-default .navbar-toggle").click(function () {
    $("#homepage_hero").toggleClass("opacity");
    $("#about_hero").toggleClass("opacity");
    $("#faq_hero").toggleClass("opacity");
  });

  // Good-to-go-mobile opacity
  $(".navbar-default .navbar-toggle").click(function () {
    $(".good-to-go-mobile").toggleClass("good-to-go-hide");
  });

  //window resizing

  $(window).on("resize", function () {
    setImgHeight();
  });

  setImgHeight();
});
