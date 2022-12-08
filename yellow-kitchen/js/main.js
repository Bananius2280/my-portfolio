$(function () {

  $('.select-style').styler()

  $('.specialities-content__items').slick({
    prevArrow: '<button type = "button" class= "slick-prev"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" fill="#9093A6" /></svg> </button>',
    nextArrow: '<button type = "button" class= "slick-next"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 9L12.17 9L6.58 14.59L8 16L16 8L8 0L6.59 1.41L12.17 7L0 7L0 9Z" fill="#9093A6"><svg></button>',
    slidesToShow: 8,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
    ]
  });

  $('.restaurants-content__items').slick({
    prevArrow: '<button type = "button" class= "slick-prev"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" fill="#9093A6" /></svg> </button>',
    nextArrow: '<button type = "button" class= "slick-next"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 9L12.17 9L6.58 14.59L8 16L16 8L8 0L6.59 1.41L12.17 7L0 7L0 9Z" fill="#9093A6"><svg></button>',
slidesToShow: 4,
slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });

  $('.header-top__right-btn').on('click', function () {
    $('.header-top__right-btn__img').toggleClass('header-top__right-btn__img-open')

    $('.header-top__right-btn__img-close').toggleClass('header-top__right-btn__img--active')

    $('.header-top__right-btn__img--active').toggleClass('header-top__right-btn__img-close')

    $('.header-top__right-btn__img-close').removeClass('header-top__right-btn__img--active')
    
  });

  $('.header-top__right-btn').on('click', function () {
    $('.header-top__burger').toggleClass('header-top__burger--active')
  });


});