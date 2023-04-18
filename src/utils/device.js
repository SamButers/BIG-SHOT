function isAtPhoneBreakpoint() {
	return window.matchMedia('(max-width: 767px) or ((min-width: 768px) and (max-width: 991px) and (min-aspect-ratio: 1/1))').matches;
}

function isAt4KBreakpoint() {
	return window.matchMedia('(min-width: 3840px)').matches;
}

function isScreenPortrait() {
	const [ screenWidth, screenHeight ] = [ window.screen.availWidth, window.screen.availHeight ];

	return screenWidth < screenHeight;
}

function isMobile() {
	return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}

export { isAtPhoneBreakpoint, isAt4KBreakpoint, isScreenPortrait, isMobile };
