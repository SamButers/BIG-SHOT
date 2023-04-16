import { useEffect, useState } from 'react';

import FixedNavbar from '@/components/FixedNavbar';

import { isPhoneBreakpoint, isScreenPortrait, isMobile } from '@/utils/device';
import { debounce } from '@/utils/general';

import DeviceContext from '@/contexts/deviceContext';

import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
	
	const [ deviceInfo, setDeviceInfo ] = useState({
		isPortrait: false,
		isAtPhoneBreakpoint: false,
		isMobile: false
	});
	
	function updateDeviceInfo() {
		setDeviceInfo({
			isPortrait: isScreenPortrait(),
			isAtPhoneBreakpoint: isPhoneBreakpoint(),
			isMobile: isMobile()
		});
	}

	const debouncedUpdateDeviceInfo = debounce(updateDeviceInfo, 50);

	useEffect(() => {
		window.addEventListener('resize', debouncedUpdateDeviceInfo);
		window.addEventListener('orientationchange', debouncedUpdateDeviceInfo);

		return () => {
			window.removeEventListener('resize', debouncedUpdateDeviceInfo);
			window.removeEventListener('orientationchange', debouncedUpdateDeviceInfo);
		}
	}, []);

	return (
		<DeviceContext.Provider value={deviceInfo}>
			<FixedNavbar {...pageProps} />
			<Component
				className="pt-navbar-height 4xl:navbar-height-4xl"
				{...pageProps}
			/>
		</DeviceContext.Provider>
	)
}
