import { isAt4KBreakpoint } from "./device";

function debounce(fn, time) {
	let timer = null;

	return function() {
		clearTimeout(timer);
		timer = setTimeout(fn, time);
	}
}

function scrollToElement(element, behavior='smooth', useOffset=true) {
	const navbarHeight = 72;
	const navbarHeight4xl = 144;

	const offset = useOffset ? (isAt4KBreakpoint() ? -navbarHeight4xl : -navbarHeight) : 0;
	
	window.scrollTo({
		top: element.getBoundingClientRect().top + window.scrollY + offset,
		behavior
	});
}

function scrollToTop(element, behavior='auto') {
	window.scrollTo({
		top: 0,
		behavior
	});
}

export { debounce, scrollToElement, scrollToTop };
