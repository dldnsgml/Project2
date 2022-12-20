$(function(){
	$("#gnb > ul > li").hover(
		function(){
			$(this).addClass("active");
			$(".menu_bg").addClass("active");
			$(".quick").addClass("active");
		},
		function(){
			$(this).removeClass("active");
			$(".menu_bg").removeClass("active");
			$(".quick").removeClass("active");
		}
	);
	$("#gnb > ul > li > a").focusin(function(){
		if($("#header").hasClass("scrolled") == false) $("#header").addClass("scrolled");
		$(this).parent().addClass("active");
		$(".menu_bg").addClass("active");
		
	});
	$("#gnb li li:last-child a").focusout(function(){
		if($("#header").hasClass("scrolled") == true) $("#header").removeClass("scrolled");
		$(this).parent().parent().parent().removeClass("active");
		$(".menu_bg").removeClass("active");
		
	});

	var winT;
	var firstTop=true;

	$("#header").hover(
		function(){
			if($(this).hasClass("scrolled") == false) $(this).addClass("scrolled");
		},
		function(){
			if($(this).hasClass("scrolled") == true && firstTop == true) $(this).removeClass("scrolled");
		}
	);
	$(window).scroll(function(){
		winT=$(window).scrollTop();

		if(winT > 100){
			if($("#header").hasClass("scrolled") == false) $("#header").addClass("scrolled");
			firstTop=false;
		}
		else{
			if($("#header").hasClass("scrolled") == true) $("#header").removeClass("scrolled");
			firstTop=true;
		}
	});

	$("#header .tab").click(function(e){
		e.preventDefault();
		$(this).toggleClass("active");
		$("#total_menu").toggleClass("active");
		$(".dim").fadeToggle(300);
		$("body").toggleClass("fixed");
	});

	var mainSwiper=new Swiper(".mainSwiper", {
		speed: 1200,
		effect: "fade",
		fadeEffect: {
			crossFade: true
		},
		loop: true,
		autoplay: {
			delay: 5000
		},
		pagination: {
			el: ".mainSwiper .swiper-pagination"
		},
		on: {
			init: function(){
				accountText(this);
			},
			slideChange: function(){
				accountText(this);
			},
			touchEnd: function(){
				$("#pause_play").removeAttr("class");
				$("#pause_play").addClass("play");
				$("#pause_play").text("play");
			}
		}
	});

	function accountText(obj){
		$(".main_slider .account .current").text(obj.activeIndex+1);
		$(".main_slider .account .total").text(obj.slides.length);
	}

	$(".main_slider .prev").click(function(e){
		e.preventDefault();
		mainSwiper.slidePrev();
		$("#pause_play").removeAttr("class");
		$("#pause_play").addClass("play");
		$("#pause_play").text("play");
	});
	$(".main_slider .next").click(function(e){
		e.preventDefault();
		mainSwiper.slideNext();
		$("#pause_play").removeAttr("class");
		$("#pause_play").addClass("play");
		$("#pause_play").text("play");
	});
	$("#pause_play").click(function(e){
		e.preventDefault();
		if($(this).hasClass("play")){
			$(this).removeAttr("class");
			$(this).addClass("pause");
			$(this).text("pause");
			mainSwiper.autoplay.start();
		}
		else{
			$(this).removeAttr("class");
			$(this).addClass("play");
			$(this).text("play");
			mainSwiper.autoplay.stop();
		}
	});
	
	// section1 캐릭터 슬라이더
	var section1_playstatus="play";
	var section1_slider=new Swiper(".section1_slider .swiper-container", {
		slidesPerView: 1,
		spaceBetween: 10,
		centeredSlides: true,
		initialSlide: 2,
		loopedSlides:4,
        loop: true,
		autoplay: {
			delay: 3000
		},
		pagination: {
			el: ".section1_slider .swiper-pagination",
			type: "progressbar"
		},
		navigation: {
			nextEl: ".section1_slider .swiper-button-next",
			prevEl: ".section1_slider .swiper-button-prev"
		},
		breakpoints: {
			640: {
				slidesPerView: 3,
				centeredSlides: false,
				loopedSlides:4,
				initialSlide: 2
			},
			920: {
				slidesPerView: 4,
				centeredSlides: false,
				loopedSlides:4,
				initialSlide:0
			},
			1200: {
				slidesPerView: 5,
				centeredSlides: false,
				loopedSlides:6,
				initialSlide:1
			}
		},
		on: {
			touchEnd: function(){
				setTimeout(() => {
					if(section1_playstatus == "play"){
						section1_slider.autoplay.start();
					}
				}, 10);
			},
		}
		
	});
	$(".section1_slider .swiper-button-prev").click(function(e){
		e.preventDefault();
		setTimeout(() => {
			if(section1_playstatus == "play"){
				section1_slider.autoplay.start();
			}
		}, 10);
	});
	$(".section1_slider .swiper-button-next").click(function(e){
		e.preventDefault();
		setTimeout(() => {
			if(section1_playstatus == "play"){
				section1_slider.autoplay.start();
			}
		}, 10);
	});
	$(".section1_slider #pause_play2").click(function(e){
		e.preventDefault();
		if($(this).hasClass("play")){
			$(this).removeAttr("class");
			$(this).addClass("pause");
			$(this).text("pause");
			section1_slider.autoplay.start();
			section1_playstatus="play";
		}
		else{
			$(this).removeAttr("class");
			$(this).addClass("play");
			$(this).text("play");
			section1_slider.autoplay.stop();
			section1_playstatus="pause";
		}
	});
	$(".section1_slider a .c_bg").mouseenter(function(){
			$(this).addClass("active");
	});
	$(".section1_slider a .c_bg").mouseleave(function(){
			$(this).removeClass("active");
	});
	$(".section1_slider a .c_bg img").mouseenter(function(){
			$(this).addClass("active");
	});
	$(".section1_slider a .c_bg img").mouseleave(function(){
			$(this).removeClass("active");
	});


	// section3 숍슬라이더
	var section3_playstatus="play";
	var section3_slider=new Swiper(".section3_slider .swiper-container", {
		slidesPerView: 1.5,
		spaceBetween: 20, /* */
		centeredSlides: true,
		loop: true,
		navigation: {
			nextEl: ".section3_slider .swiper-button-next",
			prevEl: ".section3_slider .swiper-button-prev"
		},
		on: {
			slideChange: function(){
				$(".shop a .shop_img img").removeClass("active");

				setTimeout(() => {
					$(".swiper-slide-active .shop a .shop_img img").addClass("active");
				}, 10);
			},
			touchEnd: function(){
				setTimeout(() => {
					$(".shop a .shop_img img").addClass("active");
				}, 10);
				setTimeout(() => {
					$(".shop a .shop_img img").removeClass("active");
				}, 700);
			},
		}
	});
	$(".section3_slider .swiper-button-prev").click(function(e){
		e.preventDefault();
		setTimeout(() => {
			if(section3_playstatus == "play"){
				section3_slider.autoplay.start();
			}
		}, 10);
	});
	$(".section3_slider .swiper-button-next").click(function(e){
		e.preventDefault();
		setTimeout(() => {
			if(section3_playstatus == "play"){
				section3_slider.autoplay.start();
			}
		}, 10);
	});
	$(".section3_slider #pause_play3").click(function(e){
		e.preventDefault();
		if($(this).hasClass("play")){
			$(this).removeAttr("class");
			$(this).addClass("pause");
			$(this).text("pause");
			section3_slider.autoplay.start();
			section3_playstatus="play";
		}
		else{
			$(this).removeAttr("class");
			$(this).addClass("play");
			$(this).text("play");
			section3_slider.autoplay.stop();
			section3_playstatus="pause";
		}
	});

	// section5 슬라이더
	var swiper = new Swiper(".swiper", {
			slidesPerView: 4,
			direction: getDirection(),
			loop: true,
			navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev"
			},
			on: {
			resize: function () {
				swiper.changeDirection(getDirection());
			}
			}
		});

	function getDirection() {
		var windowWidth = window.innerWidth;
		var direction = window.innerWidth <= 760 ? "vertical" : "horizontal";

		return direction;
	}

	$(".up_style").click(function(e){
		e.preventDefault();
		$(".up_style .title a").toggleClass("active");
		$(this).find(".content").slideToggle(300);
	});
});