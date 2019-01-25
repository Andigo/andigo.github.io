
$(document).ready(function(){
  
   $('.gallery-items').slick({
	    infinite: true,
	    speed: 300,
	    slidesToShow: 4,
	    autoplay: true,
	    autoplaySpeed: 3000,
	    slidesToScroll: 2,
		  responsive: [
		    {
		      breakpoint: 960,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2,
		        arrows: false
		      }
		    },
		    {
		      breakpoint: 620,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        arrows: false
		      }
		    }
		    // You can unslick at a given breakpoint now by adding:
		    // settings: "unslick"
		    // instead of a settings object
		  ]
  });


  $(".c-hamburger").on("click", function(){
        $(".header-menu").toggleClass("mobile_nav");
      });
  
});