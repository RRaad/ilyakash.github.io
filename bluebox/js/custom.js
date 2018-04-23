$(document).ready(function() {
	$('.js-slider').slick({
		dots: false,
		infinite: true,
		cssEase: 'linear',
		arrows: true,
		autoplay: true,
		autoplaySpeed: 4000,
		mobileFirst: true,
		// cssEase: true,
	});


	new WOW().init();

	$(".burger-nav").on("click", function(){
		$(".container .menu .ul").toggleClass("open");
	});

});


