
$(document).ready(function(){
  $('.slider-wr').slick({
  	  dots: true,
	    infinite: true,
	    speed: 300,
	    slidesToShow: 1,
	    autoplay: true,
	    autoplaySpeed: 3000,
      nextArrow: '<i class="fa fa-arrow-right"></i>',
      prevArrow: '<i class="fa fa-arrow-left"></i>'
  });

  $(".c-hamburger").on("click", function(){
        $(".header-menu").toggleClass("mobile_nav");
      });
  
});