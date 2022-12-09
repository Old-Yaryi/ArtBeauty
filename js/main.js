$(document).ready(function(){

  // $('.example__slider').slick({
  //   arrows: false,
  //   dots: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000
  // });


  $('#aics').anyImageComparisonSlider({
    initialPosition: 0.5,
    autoAnimation: false,
    cursor: 'ew-resize',
    dividingLine: 'solid 3px rgba(255, 255, 255, 1)'
  });
});