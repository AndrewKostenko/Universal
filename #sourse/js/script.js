// IBG =============================================================
jQuery('.ibg').each(function () {
	var src = jQuery(this).find('img').attr('src');
	jQuery(this).css('background', 'url(' + src + ') center / cover no-repeat');
	jQuery(this).find('img').css('display', 'none');
});
// /IBG =============================================================

// accordion =============================================================

const footerTitle = document.querySelectorAll('.footer_title-accordion');

const menuHeader = document.querySelector('.menu-header_inner');
const burger = document.querySelector('.menu_burger');

const selectionTitle = document.querySelector('.selection-recommended_title');
const selectionItems = document.querySelector('.selection-recommended_items');

const postsTitle = document.querySelector('.recommended-posts_title');
const postsItems = document.querySelector('.recommended-posts_content');



let windowWidth = window.innerWidth;

window.addEventListener('resize', function () {
	if (window.innerWidth > 600) {
		menuHeader.style.height = 'auto';
		burger.classList.remove('active')
	} else if (window.innerWidth < 600) {
		menuHeader.style.height = 0 + 'px';
	}
	if (window.innerWidth > 900) {
		selectionItems.style.height = 'auto';
		selectionTitle.classList.remove('active')
	} else if (window.innerWidth < 900) {
		selectionItems.style.height = 0 + 'px';
	}
	if (window.innerWidth > 1000) {
		postsItems.style.height = 'auto';
		postsTitle.classList.remove('active');
	} else if (window.innerWidth < 1000) {
		postsItems.style.height = 0 + 'px';

	}
})

document.documentElement.addEventListener('click', function (e) {
	const targetElement = e.target;
	for (var a = 0; a < footerTitle.length; a++) {
		footerTitle[a].classList.remove('active');
		footerTitle[a].nextElementSibling.style.height = 0;
	}
	if (targetElement.classList.contains('footer_title-accordion') && targetElement.classList.contains('active')) {
		targetElement.classList.remove('active');
		targetElement.nextElementSibling.style.height = 0;

	} else if (targetElement.classList.contains('footer_title-accordion')) {
		targetElement.classList.add('active');
		targetElement.nextElementSibling.style.height = targetElement.nextElementSibling.scrollHeight + 'px';
	}
	if (!targetElement.classList.contains('footer_title-accordion')) {
		for (var a = 0; a < footerTitle.length; a++) {
			footerTitle[a].classList.remove('active');
			footerTitle[a].nextElementSibling.style.height = 0;
		}
	}

	// headerMenu
	if (windowWidth <= 600) {
		if (targetElement.closest('.menu_burger')) {
			burger.classList.toggle('active');
			if (burger.classList.contains('active')) {
				menuHeader.style.height = menuHeader.scrollHeight + 'px';
			} else {
				menuHeader.style.height = 0;
			}
		} else if (!targetElement.closest('.menu-header_inner')) {
			menuHeader.style.height = 0 + 'px';
			burger.classList.remove('active')
		}
	}
	//selection items
	if (windowWidth <= 900) {
		if (targetElement.closest('.selection-recommended_title')) {
			selectionTitle.classList.toggle('active');
			if (selectionTitle.classList.contains('active')) {
				selectionItems.style.height = selectionItems.scrollHeight + 'px';
			} else {
				selectionItems.style.height = 0;
			}
		} else if (!targetElement.closest('.menu-header_inner')) {
			selectionItems.style.height = 0 + 'px';
			selectionTitle.classList.remove('active')
		}
	}

	//postRecommended
	if (windowWidth <= 1000) {
		if (targetElement.closest('.recommended-posts_title')) {
			postsTitle.classList.toggle('active');
			if (postsTitle.classList.contains('active')) {
				postsItems.style.height = postsItems.scrollHeight + 'px';
			} else {
				postsItems.style.height = 0;
			}
		} else if (!targetElement.closest('.recommended-posts_content')) {
			postsItems.style.height = 0 + 'px';
			postsTitle.classList.remove('active')
		}
	}

});
// /accordion =============================================================


// question_slider
let questionSlider = jQuery('.item-question_slider');

questionSlider.slick({
	arrows: false,
	dots: true,
	draggable: false,
	swipe: false,
	autoplay: true,
	autoplaySpeed: 4800,
	pauseOnFocus: true,
	pauseOnHover: true,
})

let questionSliderSlicklist = jQuery('.item-question .slick-list');
if (jQuery(window).width() < 500) {
	questionSliderSlicklist.height(questionSlider.closest('.item-question-big').find('.item-question_content').height() + 100);

} else {
	questionSliderSlicklist.height(questionSlider.closest('.item-question-big').height());
}

// /question_slider

// main_slider
jQuery('.slider-main').slick({
	appendArrows: jQuery('.top-main_arrows'),
})

let mainSliderItem = jQuery('.slider-main_item');
let main = jQuery('.main');



if (jQuery(window).width() > 500) {
	mainSliderItem.height(main.find('.container').height() + 60);

} else {
	mainSliderItem.height(main.find('.container').height() + 30);
}

// /main_slider


// text-slider
jQuery(".slider-text_items").slick()

// /text-slider