console.log("Screen width:", window.innerWidth);
if (window.matchMedia("(min-width: 576px)").matches) {
  console.log("asd");
  var carouselWidth = $(".carousel-inner")[0].scrollWidth;
  var cardWidth = $("#card").width();
  console.log($(".carousel-inner"));

  var scrollPosition = 0;

  $(".carousel-control-next").on("click", function () {
    if (scrollPosition < carouselWidth - cardWidth * 4) {
      scrollPosition += cardWidth;
      $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
    }
  });

  $(".carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
      scrollPosition -= cardWidth;
      $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
    }
  });
}
