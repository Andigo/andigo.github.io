window.onload = function(){
	$(".header-menu").animate({
		right: 0
	}, 1000);

  (function() {
 
  "use strict";
 
   $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
    $(this).toggleClass('open');
  });
 
})();

$('.footer-copyright span').html(new Date().getFullYear());

$(document).on("scroll", function(){
        console.log($("html, body").scrollTop());
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



