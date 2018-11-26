window.onload = function(){
	$(".header-menu").animate({
		right: 0
	}, 1000);

"use strict"
$('.header-mobbtn').on('click', function(){
  if($('.header-menu li').hasClass('open')){
    $('.header-menu li').slideUp(300).removeClass('open');
  }else {
    $('.header-menu li').slideDown(300).addClass('open');
  }
});

$('.footer-copyright span').html(new Date().getFullYear());

$(document).on("scroll", function(){
        if($("html, body").scrollTop() > 250){
          $(".up").fadeIn(400);
        }else{
          $(".up").fadeOut(400);
        }
      })
      $(".up").on("click", function(){
        $("html, body").animate({
          scrollTop: 0
        }, 400)
      })
}




