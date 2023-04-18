import { useEffect, useState } from 'react';

import { ToastContainer } from 'react-toastify';

import FixedNavbar from '@/components/FixedNavbar';
import Footer from '@/components/Footer';

import { isAtPhoneBreakpoint, isScreenPortrait, isMobile } from '@/utils/device';
import { debounce } from '@/utils/general';

import DeviceContext from '@/contexts/deviceContext';

import '@/styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
	const [ deviceInfo, setDeviceInfo ] = useState({
		isPortrait: false,
		isAtPhoneBreakpoint: false,
		isMobile: false
	});
	
	function updateDeviceInfo() {
		setDeviceInfo({
			isPortrait: isScreenPortrait(),
			isAtPhoneBreakpoint: isAtPhoneBreakpoint(),
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
			<Footer {...pageProps} />
			<ToastContainer className="mt-navbar-height 4xl:mt-navbar-height-4xl" />
		</DeviceContext.Provider>
	)
}
