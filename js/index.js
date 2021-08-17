$(".myslider").owlCarousel({
  loop: true,
  margin: 0,
  items: 3,
  dots: false,
  center: true,
  margin: 20,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
});

var owl = $(".owl-carousel");
owl.owlCarousel();
$(".nextBtn").click(function () {
  owl.trigger("next.owl.carousel");
});

$(".prevBtn").click(function () {
  owl.trigger("prev.owl.carousel");
});
