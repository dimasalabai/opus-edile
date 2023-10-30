new Swiper(".slider-serv-cover", {
	// Стрілки
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	//Пересовування на ПК
	simulateTouch: true,
	// Управління клавіатурою
	keyboard: {
		enable: true,
		onlyInViewport: true,
	},
	// Кількість слайдів для показу
	slidesPerView: 2.5,
	// Відступи між слайдами
	spaceBetween: 0,
	// Безкінечний слайдер
	loop: false,
	loopedSlides: 3,
	// Автопрокрутка
	// autoplay: {
	// 	delay: 300,
	// },
	// Швидкість прокрутки слайдера
	speed: 600,

	/*// Зміна прозорості
		effect: "fade",
		fadeEffect: {
			// паралельна зміна прозорості
		},*/
});
