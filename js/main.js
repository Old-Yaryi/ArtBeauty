
//////*************Jquerry**************/////
$(document).ready(function(){
  // --**********MenuAdress**
  $(function(){
    let adress = $('.header__top-adress_before')
    adress.on('click', function(){
      let adressHide = $('.header__top-adress_link-hide')
      adressHide.toggleClass('hide')
    });
  });
  // --**********MenuPhone**
  $(function(){
    let menuPhone = $('.header__top-call_before')
    menuPhone.on('click', function(){
      let phoneHide = $('.header__top-call_tel-hide')
      phoneHide.toggleClass('hide')
    })
  })
  // --**********MenuMobile**
  $(function(){
    let menuMobile = $('.header__burger')
    menuMobile.on('click', function(){
      let menuOpen = $('.header__mobile')
      menuOpen.toggleClass('active')
      menuMobile.toggleClass('active')
    })
  })
  // --**********CallBackOrder**
  const popupOpen = $('.popup-callback')
  let orderCall = $('.header__top-call_call')
    orderCall.on('click', function(){
      popupOpen.toggleClass('close')
  });
  let popupFooter = $('.footer-item__phone-btn')
    popupFooter.on('click', function (){
      popupOpen.toggleClass('close')
  });
  let popupClose = $('.popup-callback_close')
    popupClose.on('click', function (){
      popupOpen.toggleClass('close')
  });
  // --**********CallBackRegistration**
  const regClose = $('.popup-registation')
  let regOpen = $('.join__link-action')
  regOpen.on('click', function(){
    regClose.toggleClass('close')
  })
  let regOver = $('.popup-registation_close')
  regOver.on('click', function(){
    regClose.toggleClass('close')
  })
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
    appendArrows:'.exclusive__slider-controls',
      responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }]
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
  // --************ClientsSlider**
  $('.clients-slider').slick({
      arrows: true,
      dots: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      appendArrows:'.clients-slider__controls',
      responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 3
        }
      }]
    });
    // --************FooterAdress**
  $(function(){
    let hide = $('.footer-item__contacts-before')
    hide.on('click',function(){
      let phoneHide = $('.footer-item__contacts-adress_hide')
      phoneHide.toggleClass('hide')
    })
  });  
});

//// ***********AnimationLine************////
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    } 
    
  });
}
let options = {
  rootMargin: '0px 0px -300px 0px' };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.line');

for (let elm of elements) {
  observer.observe(elm);
}
//// ***************PopUpExclusive************////
const popup = document.querySelector('.exclusive__popup');
const close = document.querySelector('.exclusive__popup-close_x');
close.addEventListener('click', function(){
  popup.classList.toggle('close')
});
// *************CounterAction***************
const endDate = new Date('march 01 2023 00:00:00'); //дата окончания акции
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

