$(function () {

  $('.language').on('click', function () {
    $('.language').removeClass('language-active');
    $(this).addClass('language-active');
  });

  const swiper = new Swiper('.images-slider', {
    // Optional parameters
    // direction: 'vertical',
    // loop: true,
    slidesPerView: 3,
    effect: 'coverflow',
    coverflowEffect: {
      rotate: -30,
      slideShadows: false,
      stretch: -30,

    },
    breakpoints: {
      '0': {
        slidesPerView: 1,
      },
      '500': {
        slidesPerView: 3,
      },
    },

    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
      snapOnRelease: true,
      dragSize: 40,
    },
  });

  // Инициализация слайдера изображений
  const sliderImages = new Swiper('.slider__images .swiper-container', { // ищем слайдер превью по селектору
    // задаем параметры
    direction: 'vertical', // вертикальная прокрутка
    slidesPerView: 2, // показывать по 1 изображению
    spaceBetween: 75, // расстояние между слайдами
    mousewheel: true, // можно прокручивать изображения колёсиком мыши
    grabCursor: true, // менять иконку курсора

    breakpoints: {
      '0': {
        spaceBetween: 20,
        mousewheel: false,
        // loop: false,
        loop: true,
        // centeredSlides: true,
      },
      '600': {
        spaceBetween: 80,
        mousewheel: true,
        loop: true,
        // direction: 'vertical',
        // slidesPerView: 2,
      },

      '750': {
        loop: true,
        spaceBetween: 80,

      },
    },
  });
});

$(function () {

  $("body").css("display", "none");

  $("body").show(1500);

  $("a.transition").click(function (event) {
    event.preventDefault();
    linkLocation = this.href;
    $("body").show(1500, redirectPage);
  });

  function redirectPage() {
    window.location = linkLocation;
  }

});

