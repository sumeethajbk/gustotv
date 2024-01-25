jQuery(document).ready(function () {

  //Show Slider //

  jQuery('.tv-show-row').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    speed: 1000,
    dots: false,
    arrows: false,
    variableWidth: true,
    draggable: true,
    swipeToSlide: true,
    touchThreshold: 100,

  });

  //Host Slider //

  jQuery('.tv-host-row').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    speed: 1000,
    dots: false,
    arrows: false,
    variableWidth: true,
    draggable: true,
    swipeToSlide: true,
    touchThreshold: 100,
      responsive: [
      {
        breakpoint:720,
        settings: {
           centerMode: true,
        }
      }
    ]
   
  });


  if (jQuery(window).width() <= 719) {
    jQuery(".recipes-row").slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      draggable: true,
      swipeToSlide: true,
      infinite: true,
      speed: 1000,
      dots: false,
      arrows: false,
      variableWidth: true,
      centerPadding: '0',
      centerMode: true,
    })
  }

  /* Marquee Slider */
  jQuery('.scroll-left').slick({
    speed: 8000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: false,
    cssEase: 'linear',
    draggable: false,
    focusOnSelect: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
  });
  jQuery('.scroll-right').slick({
    speed: 8000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: false,
    cssEase: 'linear',
    draggable: false,
    focusOnSelect: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
    rtl: true
  });
  /* End of Marquee Slider */
});

/* Awards */
jQuery('.awards-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: false,
  speed: 1000,
  dots: false,
  arrows: false,
  variableWidth: true,
  draggable: true,
  swipeToSlide: true,
  touchThreshold: 100
});
