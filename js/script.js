window.onload = function(){
	$(".header-menu").animate({
		right: 0
	}, 1000);

  "use strict"; 
$('.header-mobbtn').on('click', function(){
  if($('.header-menu li').hasClass('open')){
    $('.header-menu li').slideUp(300).removeClass('open');
  }else {
    $('.header-menu li').slideDown(300).addClass('open');
  }
});

$('.portfolio .portfolio-items a').on('mouseover', function(){
	$(this).find('figcaption').hide(300);
	$(this).find('span').show(300);
})
$('.portfolio .portfolio-items a').on('mouseout', function(){
	$(this).find('figcaption').show(300);
	$(this).find('span').hide(300);
})

$('.footer-copyright span').html(new Date().getFullYear());


}




