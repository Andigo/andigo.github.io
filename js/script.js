window.onload = function(){
	$(".header-menu").animate({
		right: 0
	}, 1000);

  (function() {
 
  "use strict"; 
 
  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });
  }
 
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

