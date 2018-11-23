window.onload = function(){
	
  (function() {
 
  "use strict";
 
  var toggles = document.querySelectorAll(".c-hamburger");
 
  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };
 
  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
      (this.classList.contains("is-active") === true) ? $(".header-menu li a").animate({fontSize: "32px"}, 300) : $(".header-menu li a").animate({fontSize: "0px"}, 300);
    });
  }
 
})();

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

      $(".post").on("click", function(){
        $(".overlay").fadeIn(400);
        $(".post").fadeOut(400);
        $("html, body").animate({
          scrollTop: 0
        }, 400)
      })

      $(".overlay-cancel").on("click", function(){
        $(".overlay").fadeOut(400);
        $(".post").fadeIn(400);
      })
      $("input[name=phone]").on("click", function(){
        $(this).val("+7");
      })
      
	$("#form_btn").on("click", function(){

	})
//Валидация имени в сообщении
	function isName(name){
		return /^[a-zA-Zа-яА-ЯёЁ'][a-zA-Z-а-яА-ЯёЁ' ]+[a-zA-Zа-яА-ЯёЁ']?$/.test(name);
	}
//Валидация телефона в сообщении
	function isPhone(phone){
		return /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(phone);
	}
// Валидция электронной почты
	function isEmail(email){
		return /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(?:aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/.test(email);
	}
// Обработка правильного набора
	function cancErr(el){
		$(el).removeClass("overlay-error");
	}
// Обработка ошибки в наборе
	function addErr(el){
		$(el).addClass("overlay-error");
	}
    
    var rtName = false;
    var rtPhone = false;
	$('#mailForm input').on("focusout",function(){
		switch($(this).attr("name")){
			case "name":
			 	if(isName($(this).val())){
			 		cancErr(this);
			 		rtName = true;
			 	}else{
			 		addErr(this);
			 		rtName = false;
			 	}
			break;
			case "phone":
			 	if(isPhone($(this).val())){
			 		cancErr(this);
			 		rtPhone = true;
			 	}else{
			 		addErr(this);
			 		rtPhone = false;
			 	}
			break;
			case "email":
			 	if(isEmail($(this).val())){
			 		cancErr(this);
			 	}else{
			 		addErr(this);
			 	}
			break;
		}
		console.log(rtName);
		console.log(rtPhone);
		if(rtName==true && rtPhone==true){
			$("#form_btn").removeAttr("disabled");
		}else{
			$("#form_btn").attr("disabled", "disabled");
		}
	});

	$("#mailForm textarea").on("keyup", function(){
		console.log(typeof($(this).val().length));
		if($(this).val().length>10){
			cancErr(this);
		}else{
			addErr(this);
		}
	})	
}

$(document).ready(function(){
  $('.catalogue-part-line').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true
      }
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 560,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });
});
