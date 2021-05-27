export default function () {

	const indexHeroSlider = new Swiper('#indexHeroSlider', {
			navigation: {
				nextEl: '#indexHeroSliderNextBtn',
				prevEl: '#indexHeroSliderPrevBtn',
			},
			pagination: {
				el: '#indexHeroSliderPagination',
				type: 'fraction',
			},
			slidesPerView: 1,
			spaceBetween: 10,

		})

	const productLineNL = document.querySelectorAll('.product-line');
	const productLineList = Array.prototype.slice.call(productLineNL);

	productLineList.forEach(line => {
		const btnPrev = line.querySelector('.section-header__btn.prev');
		const btnNext = line.querySelector('.section-header__btn.next');
		const slider = line.querySelector('.swiper-container');

		const lineSlider = new Swiper(slider, {
			navigation: {
				nextEl: btnNext,
				prevEl: btnPrev,
			},
			watchOverflow: true,
			breakpoints: {
				320: {
					slidesPerView: 1.5,
					spaceBetween: 10,
				},
				768: {
					slidesPerView: 2.5,
					spaceBetween: 30,
				},
				1200: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},

		})
	})








	const reviewsSlider = new Swiper('#reviewsSlider', {
			navigation: {
				nextEl: '#reviewsSliderNextBtn',
				prevEl: '#reviewsSliderPrevBtn',
			},
			pagination: {
				el: '#reviewsSliderPagination',
				type: 'bullets',
				clickable: true,
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 10,
				},
				768: {
					slidesPerView: 1,
					spaceBetween: 10,
				},
				1200: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
			},

		})




	const chanceSlider = new Swiper('#chanceSlider', {
			pagination: {
				el: '#chanceSliderPagination',
				type: 'bullets',
				clickable: true,
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					loop: true,
				},
				768: {
					slidesPerView: 1.5,
					spaceBetween: 30,
					centeredSlides: true,
					loop: true,
					width: 768,
				},
				1200: {
					slidesPerView: 2,
					spaceBetween: 30,
					centeredSlides: true,
					loop: true,
					width: 1170,
				},
			},

		})

}