// BURGER
const menu = document.querySelector('.nav')
const menuBtn = document.querySelector('.nav-burger')
const body = document.body;
if (menu && menuBtn) {
	menuBtn.addEventListener('click', () => {
		menu.classList.toggle('open')
		menuBtn.classList.toggle('nav-open')
		body.classList.toggle('lock')
	})
	menu.querySelectorAll('.nav-list a').forEach(link => {
		link.addEventListener('click', () => {
			menu.classList.remove('open')
			menuBtn.classList.remove('nav-open')
			body.classList.remove('lock')
		})
	})
}
// STUDIES-SWIPER
const swiperStudies = new Swiper(".studies-info", {
	slidesPerView: "auto",
	spaceBetween: 20,
});
// ACCORDEON
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
// SWIPER
const swiperTestimination = new Swiper('.testimination-swiper', {
	// Optional parameters
	slidesPerView: 2,
	spaceBetween: 50,
	centeredSlides: true,
	loop: true,
	grabCursor: true,
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		639: {
			slidesPerView: 1,
		},
		759: {
			slidesPerView: 1.15,
			spaceBetween: 15
		},
		991: {
			slidesPerView: 1.5,
		},
		1099: {
			slidesPerView: 1.7,
			spaceBetween: 30
		},
		1159: {
			slidesPerView: 1.9,
			spaceBetween: 40
		},
		1239: {
			slidesPerView: 2,
			spaceBetween: 50
		}
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});