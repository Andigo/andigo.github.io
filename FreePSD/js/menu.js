window.onload = function(){ 
    var isPressed;
	var arr1 = document.querySelector(".header-menu-item1");
	var arr2 = document.querySelector(".header-menu-item2");
	var arr3 = document.querySelector(".header-menu-item3");
    document.querySelector(".header-menu").onclick = function(){ 
        if(isPressed){
            arr1.style.transform = "rotate(0deg)";
            arr3.style.transform = "rotate(0deg)";
            $(".header nav").slideUp(300);
            isPressed = false;
        }else{
            arr1.style.transform = "rotate(-35deg)";
            arr3.style.transform = "rotate(35deg)";
            //$(".header nav").css("display", "block");
            $(".header nav").slideDown(400);
            isPressed = true;
        }
            
            	    
    }
};

