function isAtPhoneBreakpoint() {
	return window.matchMedia('(max-width: 767px) or ((min-width: 768px) and (max-width: 991px) and (min-aspect-ratio: 1/1))').matches;
}

function isAt4KBreakpoint() {
	return window.matchMedia('(min-width: 3840px)').matches;
}

function matchesBreakpoint(breakpoint) {
	switch(breakpoint) {
		case '4xl':
			return window.matchMedia('(min-width: 3840px)').matches;
		case '3xl':
			return window.matchMedia('(min-width: 1920px)').matches;
		case '2xl':
			return window.matchMedia('(min-width: 1536px)').matches;
		case 'xl':
			return window.matchMedia('(min-width: 1280px)').matches;
		case 'lg':
			return window.matchMedia('(min-width: 992px)').matches;
		case 'md':
			return window.matchMedia('(min-width: 768px) and (max-aspect-ratio: 1/1)').matches;
		case 'sm':
			return window.matchMedia('(min-width: 640px)').matches;
		default:
			return true;
	}
}

function isScreenPortrait() {
	const [ screenWidth, screenHeight ] = [ window.screen.availWidth, window.screen.availHeight ];

	return screenWidth < screenHeight;
}

function isMobile() {
	return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}

export { isAtPhoneBreakpoint, matchesBreakpoint, isAt4KBreakpoint, isScreenPortrait, isMobile };
