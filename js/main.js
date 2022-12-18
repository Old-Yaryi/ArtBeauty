
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
  $(function() { 
    let filter = $("[data-service]")
    filter.on("click", function() {
      let category = $(this).data('service')
      $("[data-photo]").each(function(){
        let sphoto = $(this).data('photo')
        if (sphoto == category) {
          $(this).addClass('price-photo_active')
        } else {
          $(this).removeClass('price-photo_active')
        }
      });
    });
  });
  // --************TourCategories**
  $(function() {
    let choice = $('.tour__categories-inner')
    choice.on("click", function() {
      choice.removeClass('categories__active')
      $(this).toggleClass('categories__active')
    });
  });
  $(function(){
    let option = $("[data-categories]")
    option.on("click", function(){
      let tourCategories = $(this).data('categories') 
      $("[data-contur]").each(function(){
        let tourSlider = $(this).data('contur')
        if (tourCategories == tourSlider) {
          $(this).addClass('tour-slider__active')
        } else {
          $(this).removeClass('tour-slider__active')
        }
      })
    });
  })
  // --************TourSliders**
  $('.tour-slider__item-cabinet').slick({
  // infinite: true,
    arrows: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    // centerPadding: '100px',
    appendArrows:'.tour-slider__controls-cabinet'
  });
  $('.tour-slider__item-reception').slick({
    // infinite: true,
      arrows: true,
      dots: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      // centerPadding: '100px',
      appendArrows:'.tour-slider__controls-recepton'
    });
    $('.tour-slider__item-hall').slick({
      // infinite: true,
        arrows: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        // centerPadding: '100px',
        appendArrows:'.tour-slider__controls-hall'
      });

  
});


//// ***************PopUpExclusive************////
const popup = document.querySelector('.exclusive__popup');
const close = document.querySelector('.exclusive__popup-close_x');
close.addEventListener('click', function(){
  popup.classList.toggle('close')
});
// *************CounterAction***************
const endDate = new Date('jan 01 2023 00:00:00'); //дата окончания акции
function counterAction() {
  const currentDate = new Date();
  const remainDate = endDate - currentDate;
  const days = document.querySelector('#days');
  const hours = document.querySelector('#hours');
  const minutes = document.querySelector('#min');
  const sec = document.querySelector('#sec');
  const daysAfter = Math.floor(remainDate / 1000 / 60 / 60 / 24);
  const hoursAfter = Math.floor(remainDate / 1000 / 60 / 60 ) % 24;
  const minAfter = Math.floor(remainDate / 1000 / 60 ) % 60;
  const secAfter = Math.floor(remainDate / 1000 ) % 60;

  days.innerText = daysAfter;
  hours.innerText = hoursAfter < 10 ? '0' + hoursAfter : hoursAfter ;
  minutes.innerText = minAfter < 10 ? '0' + minAfter : minAfter ;
  sec.innerText = secAfter < 10 ? '0' + secAfter : secAfter ;
};
setInterval(counterAction, 1000);

