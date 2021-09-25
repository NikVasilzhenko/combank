$(document).ready(function(){
  if($(window).width() > 767){
    new WOW().init();
  }
  $('#js-slider').slick({
    infinite: true,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrow: false
        }
      }
    ]
  });
});