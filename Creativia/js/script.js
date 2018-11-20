jQuery(function($) {
    "use strict";
    //Подключение слайдера slick
    $('.header-slider').slick({
    	infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
        nextArrow: '<button class="header-slider-next"></button>',
        prevArrow: '<button class="header-slider-prev"></button>'
  	});

    //Выпадающие окна в секции About    
    $('.about-quests-quest').on('click', function(){  
        $('.about-quests-answer').slideUp(300);
        if($(this).hasClass("active")){
            $(this).next().slideUp(300);
            $(this).removeClass("active");            
        }else{
            $(this).next().slideDown(300);
            $('.about-quests-quest').removeClass("active"); 
            $(this).addClass("active");
        }
    })

    $('.about-items-item').on('click', function(){
        $(".hexagon").removeClass("active");
        $(this).children(".hexagon").addClass("active"); 
        
    })
    $('.clients-say-dots i').on('click', function(){
        $(".clients-say-dots i").removeClass("active");
        $(this).addClass("active"); 
        
    })

    $('.teamwork-pics figure').on('click', function(){
        $('.teamwork-pics figure').removeClass('active');
        $(this).addClass("active");
    })
})