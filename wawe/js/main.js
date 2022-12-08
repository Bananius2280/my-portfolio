$(function(){

  $(".menu__list a").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1000);
  });

  $('.slider__content').slick({
    dots: true,
    arrows: false,

  });

  $('.menu__btn').on('click', function () {
    $('.header__top-inner').toggleClass('header__top-inner--active');

  });


  var mixer = mixitup('.gallery__content');
})