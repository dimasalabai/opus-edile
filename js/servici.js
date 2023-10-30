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
	// Кількість слайдів для показу
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		425: {
			slidesPerView: 1.4,
		},
		768: {
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 2.2,
		},
	},
	/*// Зміна прозорості
		effect: "fade",
		fadeEffect: {
			// паралельна зміна прозорості
		},*/
});
