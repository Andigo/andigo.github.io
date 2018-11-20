function windowSize(){
    if ($(window).width() > '640'){
       		$(".gallery-picture").on("mouseover", function(){
			$(this).css("width", "240px").css("margin-left", "-10px")
			.css("margin-right", "30px").css("height", "390px");
			$(this).children(".top-gallery-pictures-shopit").css("opacity", "1");
		})

			$(".gallery-picture").on("mouseout", function(){
			$(this).css("width", "220px").css("margin-left", "0px")
			.css("margin-right", "40px").css("height", "377px");
			$(this).children(".top-gallery-pictures-shopit").css("opacity", "0");
		})
    }     
}
function getValue(){	
		$(".prodcontent-params-filterbar input").on("input", mltWork);
		$(".prodcontent-params-filterbar input").on("change", mltWork);
		function mltWork(){
			var max = document.querySelector(".max").value;
			var min = document.querySelector(".min").value;
			var eff = $(".prodcontent-params-filterbar").width()/100;
			console.log(min);
			$(".prodcontent-params-price span").eq(0).html(min*4);
			$(".prodcontent-params-price span").eq(1).html(max*4);
			$(".prodcontent-params-rangeline").offset({left: $(".prodcontent-params-filterbar").offset().left+min*eff}).width((max-min)*eff);
		}
}

$(window).load(windowSize, getValue); // при загрузке
$(window).resize(windowSize); // при изменении размеров
// или "два-в-одном", вместо двух последних строк:
$(window).on('load resize',windowSize);

