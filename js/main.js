const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
	const itemToggle = this.getAttribute('aria-expanded');
	const parent = this.parentElement;
	items.forEach(item => {
		item.setAttribute('aria-expanded', 'false');
		item.parentElement.classList.remove('active');
	});

	if (itemToggle == 'false') {
		this.setAttribute('aria-expanded', 'true');
		parent.classList.add('active');
	} else if (itemToggle == 'true') {
		parent.classList.remove('active');
	}
}

items.forEach(item => item.addEventListener('click', toggleAccordion));

const swiper = new Swiper('.swiper', {
	// Optional parameters,
	slidesPerView: "auto",
	centeredSlides: true,
	loop: true,
	spaceBetween: 50,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});