
//////*************Jquerry**************/////
$(document).ready(function(){

  // --**********SliderExamle**
  $('.example__slider').slick({
    arrows: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendArrows:'.example__slider-controls'
  });

  // --***********Examle_Before/After**
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

  // --***********SliderExclusive**
  $('.exclusive__slider-inner').slick({
    arrows: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    appendArrows:'.exclusive__slider-controls'
  });

// --************PriceList**
  $(function(){
    let service = $('.price-service');
    service.on("click",function(){
      service.removeClass('price-active')
      $(this).toggleClass('price-active')
    });
  });
});


//// ***************PopUpExclusive************////
const popup = document.querySelector('.exclusive__popup');
const close = document.querySelector('.exclusive__popup-close_x');
close.addEventListener('click', function(){
  popup.classList.toggle('close')
});
