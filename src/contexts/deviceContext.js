import { createContext } from 'react';

export default createContext({
	isPortrait: false,
	isAtPhoneBreakpoint: false,
	isMobile: false,
	matchesBreakpoint: {
		default: false,
		sm: false,
		md: false,
		lg: false,
		xl: false,
		'2xl': false,
		'3xl': false,
		'4xl': false
	}
});
