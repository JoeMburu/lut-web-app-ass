
var slideMenuContainer = document.querySelector('.slide__menu-container');
var body = document.querySelector('body');
var menuIndicator = document.querySelector('.menu__indicator');

var menuSlideFlag = false;

goggleMenu = function (event) {
    if (!menuSlideFlag) {
			slideMenuContainer.classList.add('slide__menu-open-close');
			body.style.setProperty("overflow", "hidden");

			assignClassToMenuIndicator();
			assignClassesToBars();

    } else {
			slideMenuContainer.classList.remove('slide__menu-open-close');
			body.style.setProperty("overflow", "auto");

			removeClassFromMenuIndicator();
			removeClassesFromBars();
		}
		menuSlideFlag = !menuSlideFlag;  		
		
		
}

assignClassToMenuIndicator = function() {
	menuIndicator.classList.add('menu__indicator-toggle');
}

assignClassesToBars = function() {
	let barElements = menuIndicator.getElementsByClassName('bar');

	for (let index = 0; index < barElements.length; index++) {
		const element = barElements[index];
		if (index === 0) {
			element.classList.add('position__absolute-bars');
			element.classList.add('bar__first-child');
		} else if (index === 1) {
			element.classList.add('position__absolute-bars');
			element.classList.add('bar__second-child');
		} else if(index === 2) {
			element.classList.add('position__absolute-bars');
			element.classList.add('bar__third-child');
		}
		
	}

}

removeClassFromMenuIndicator = function() {
	menuIndicator.classList.remove('menu__indicator-toggle');
}

removeClassesFromBars = function() {
	let barElements = menuIndicator.getElementsByClassName('bar');

	for (let index = 0; index < barElements.length; index++) {
		const element = barElements[index];
		if (index === 0) {
			element.classList.remove('position__absolute-bars');
			element.classList.remove('bar__first-child');
		} else if (index === 1) {
			element.classList.remove('position__absolute-bars');
			element.classList.remove('bar__second-child');
		} else if(index === 2) {
			element.classList.remove('position__absolute-bars');
			element.classList.remove('bar__third-child');
		}
		
	}

}