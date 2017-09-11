$('.why-us-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 950,
      settings: {
        slidesToShow:2,
      }
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow:1,
      }
    },
  ]
});
