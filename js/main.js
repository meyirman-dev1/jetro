$(function () {

	$('.slider__inner').slick({
		arrows: true,
		nextArrow: '<button class="slick-arrow slick-next"><img src="img/slide-next.png" alt=""></button>',
		prevArrow: '<button class="slick-arrow slick-prev"><img src="img/slide-prev.png" alt=""></button>',
	});

	$('.header__menu-btn').on('click', function () {
		$('.header__drop-down').slideToggle();
	});
});