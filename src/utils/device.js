function isPhoneBreakpoint() {
	return window.matchMedia('(max-width: 767px) or ((min-width: 768px) and (max-width: 991px) and (min-aspect-ratio: 1/1))').matches;
}

export { isPhoneBreakpoint };
