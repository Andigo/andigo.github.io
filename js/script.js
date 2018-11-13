window.onload = function(){
	$(".header-menu").animate({
		right: 0
	}, 1000);

  (function() {
 
<<<<<<< HEAD
  "use strict"; 
 
  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });
  }
=======
  "use strict";
 
   $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
    $(this).toggleClass('open');
  });
>>>>>>> 4baeb905200ec077d2bb4c3a7c8058b0d4ebda10
 
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



