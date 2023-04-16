function isPhoneBreakpoint() {
	return window.matchMedia('(max-width: 767px) or ((min-width: 768px) and (max-width: 991px) and (min-aspect-ratio: 1/1))').matches;
}

function isScreenPortrait() {
	const [ screenWidth, screenHeight ] = [ window.screen.availWidth, window.screen.availHeight ];

	return screenWidth < screenHeight;
}

function isMobile() {
	return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}

export { isPhoneBreakpoint, isScreenPortrait, isMobile };
