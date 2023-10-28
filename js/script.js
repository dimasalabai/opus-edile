// Прив'язуємо хедер до верху при скролі
function stickHeader() {
	window.addEventListener("scroll", () => {
		const header = document.querySelector("header");
		header.classList.toggle("sticky", window.scrollY > 0);
	});
}
stickHeader();

// При кліку на бургер-меню відкриваємо меню
document.addEventListener("click", documentClick);

function documentClick(e) {
	const tragetItem = e.target;
	if (tragetItem.closest(".icon-menu")) {
		document.documentElement.classList.toggle("menu-open");
	}
}

const sliderBlock = document.querySelector(".slider-project");

// Ініціалізація слайдера
function mainSlider() {
	const mainSlider = new Swiper(".slider-project", {
		// Стрілки
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		//Пересовування на ПК
		simulateTouch: false,
		// Управління клавіатурою
		keyboard: {
			enable: true,
			onlyInViewport: true,
		},
		// Кількість слайдів для показу
		slidesPerView: "auto",
		// Відступи між слайдами
		spaceBetween: 10,
		// Безкінечний слайдер
		loop: true,
		loopedSlides: 3,
		// Автопрокрутка
		autoplay: {
			delay: 4000,
		},
		// Швидкість прокрутки слайдера
		speed: 600,

		/*// Зміна прозорості
		effect: "fade",
		fadeEffect: {
			// паралельна зміна прозорості
		},*/
	});

	sliderBlock.addEventListener("mouseenter", function (e) {
		mainSlider.autoplay.stop();
	});
	sliderBlock.addEventListener("mouseleave", function (e) {
		mainSlider.autoplay.start();
	});
}

mainSlider();
