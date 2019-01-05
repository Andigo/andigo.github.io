
$(document).ready(function(){
  $('.skills-img').slick({
	    infinite: true,
	    speed: 300,
	    slidesToShow: 1,
	    autoplay: true,
	    autoplaySpeed: 3000
  });

  $(".c-hamburger").on("click", function(){
        $(".header-menu").toggleClass("mobile_nav");
      });
  
});