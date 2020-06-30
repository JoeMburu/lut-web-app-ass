
var slideMenuContainer = document.querySelector('.slide__menu-container');
var body = document.querySelector('body');
var menuIndicator = document.querySelector('.menu__indicator');
var products = document.querySelector('.products');

var root = document.documentElement;


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

getScreenSize = function() {
	return window.innerWidth;	
}







var i = 0;
moveForward = function() {
	let screenSize = getScreenSize();

	if (screenSize < 768) {
		i++;
		console.log("<768: ", i);
		root.style.setProperty('--index', i);
		if (i >= 3 ) {
			i = -1;
		}
		
	} else if (screenSize >= 768 && screenSize < 992) {
		i++;
		console.log(">=768: ", i);
		root.style.setProperty('--index', i);

		if (i >= 2) {
			i = -1;
		}
	} else if (screenSize >= 992 && screenSize < 1200) {
		i++;
		console.log(">=992: ", i);
		root.style.setProperty('--index', i);

		if (i >= 1) {
			i = -1;
		}
		
	} 
	
	
	
	
	
	
	
}