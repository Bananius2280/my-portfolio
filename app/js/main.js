$(function () {

  $('.header-top__right-lists__btn').on('click', function () {
    $('.header-top__right-lists').toggleClass('header-top__right-lists--active')
  });

  $(function () {
    $.fn.scrollToTop = function () {
      $(this).hide().removeAttr("href");

      if ($(window).scrollTop() != "0") {
        $(this).fadeIn("slow")
      }

      var scrollDiv = $(this);
      $(window).scroll(function () {
        if ($(window).scrollTop() == "0") {
          $(scrollDiv).fadeOut("slow")
        } else {
          $(scrollDiv).fadeIn("slow")
        }
      });
      $(this).click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow")
      })
    }
  });
  // Вызов
  $(function () {
    $("#toTop").scrollToTop();
  }); 


  $("form").submit(function () { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function () {
      alert("Thank you!");
      setTimeout(function () {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });

  
  $(".header-top__right-lists a").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1000);
  });
});