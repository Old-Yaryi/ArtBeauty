$(document).ready(function(){

  $('.example__slider').slick({
    arrows: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendArrows:'.example__slider-controls'
  });


  $('#aics').anyImageComparisonSlider({
    initialPosition: 0.5,
    autoAnimation: false,
    cursor: 'ew-resize',
    dividingLine: 'solid 2px rgba(255, 255, 255, 1)'
  });
  $('#aics-2').anyImageComparisonSlider({
    initialPosition: 0.5,
    autoAnimation: false,
    cursor: 'ew-resize',
    dividingLine: 'solid 2px rgba(255, 255, 255, 1)'
  });
  $('#aics-3').anyImageComparisonSlider({
    initialPosition: 0.5,
    autoAnimation: false,
    cursor: 'ew-resize',
    dividingLine: 'solid 2px rgba(255, 255, 255, 1)'
  });
  $('#aics-4').anyImageComparisonSlider({
    initialPosition: 0.5,
    autoAnimation: false,
    cursor: 'ew-resize',
    dividingLine: 'solid 2px rgba(255, 255, 255, 1)'
  });


  $('.exclusive__slider-inner').slick({
    arrows: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    appendArrows:'.exclusive__slider-controls'
  });
});