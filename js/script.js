window.onload = function(){
	$(".header-menu").animate({
		right: 0
	}, 1000);

  setTimeout(function(){
    $('.skills-redline').addClass('lined');
    $('.skills-blueline').addClass('lined');
  }, 2000);

"use strict"
//Анимация мобильного меню
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
      });
}

window.onresize = function() {
    if ($(window).width() > '620'){
       $('.header-menu li').slideDown(300).addClass('open');
    }else{
       $('.header-menu li').slideUp(300).removeClass('open');
    }
};

// Page Scroll
jQuery(document).ready(function ($) {
	$('.header-menu li a').click(function() {
    $('.header-menu li a').removeClass('active').filter($(this)).addClass('active');
			var selector = $(this).attr('href');
			var target = $(selector);
				$('html,body').animate({
					scrollTop: target.offset().top - 30
				}, 1000);
		});	
			
});



