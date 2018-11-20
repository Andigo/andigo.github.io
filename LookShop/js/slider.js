		
		var rounds = document.querySelectorAll(".switch-container li");
		var banner = document.querySelector(".banner");
		//i = 0;
		var slider = new Slider(banner, rounds);
		document.querySelector(".banner-btnNext").onclick = function(){
			slider.next();							
		}		
		document.querySelector(".banner-btnPrev").onclick = function(){
			slider.prev();
		}

		setInterval(function(){
			slider.next();
		}, 4000);
		
		for(i = 0; i < rounds.length; i++){
				rounds[i].onclick = rndMove(i);
				}			

		
		function rndMove(i){
			return function(e){
			for(j = 0; j < rounds.length; j++){
					if(rounds[j].classList.contains("switch-painted")){			
						rounds[j].classList.remove("switch-painted");
					}
				}
				banner.style.background = "url(img/bkg-"+i+".png) no-repeat center / cover";
				rounds[i].classList.add("switch-painted");
				}
		}

		function Slider(){
			this.next = function(){
			for(var i = 0; i < rounds.length; i++){
				if(rounds[i].classList.contains("switch-painted")){
					rounds[i].classList.remove("switch-painted");			
					i++;
					if(i >= rounds.length){
						i = 0;
					}
					console.log(i);
					banner.style.background = "url(img/bkg-"+i+".png) no-repeat center / cover";
					rounds[i].classList.add("switch-painted");
						
				}						
			}
		}
			this.prev = function(){
			for(var i = 0; i < rounds.length; i++){
				if(rounds[i].classList.contains("switch-painted")){
					rounds[i].classList.remove("switch-painted");				
					i--;
					if(i < 0){
						i = rounds.length-1;
						
					}
					banner.style.background = "url(img/bkg-"+i+".png) no-repeat center / cover";
					rounds[i].classList.add("switch-painted");
						
				}						
			}
		}
		
		}

		$(".switch-container li").on("click", function(){
			console.log(this);
		})

		
			