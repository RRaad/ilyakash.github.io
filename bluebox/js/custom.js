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



	$(".burger-nav").on("click", function(){
		$(".menu .ul").toggleClass("open");
	});

});


