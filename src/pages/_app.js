import { useEffect, useState } from 'react';
import { NextIntlProvider } from 'next-intl';

import { ToastContainer } from 'react-toastify';

import FixedNavbar from '@/components/FixedNavbar';
import Footer from '@/components/Footer';
import TransitionWrapper from '@/components/TransitionWrapper';

import { isAtPhoneBreakpoint, matchesBreakpoint, isScreenPortrait, isMobile } from '@/utils/device';
import { debounce } from '@/utils/general';

import DeviceContext from '@/contexts/deviceContext';
import MessagesContext from '@/contexts/messagesContext';

import '@/styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
	const [ deviceInfo, setDeviceInfo ] = useState({
		isPortrait: false,
		isMobile: false,
		isAtPhoneBreakpoint: false,
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
	
	function updateDeviceInfo() {
		setDeviceInfo({
			isPortrait: isScreenPortrait(),
			isAtPhoneBreakpoint: isAtPhoneBreakpoint(),
			isMobile: isMobile(),
			matchesBreakpoint: {
				default: matchesBreakpoint(''),
				sm: matchesBreakpoint('sm'),
				md: matchesBreakpoint('md'),
				lg: matchesBreakpoint('lg'),
				xl: matchesBreakpoint('xl'),
				'2xl': matchesBreakpoint('2xl'),
				'3xl': matchesBreakpoint('3xl'),
				'4xl': matchesBreakpoint('4xl')
			}
		});
	}

	useEffect(() => {
		const debouncedUpdateDeviceInfo = debounce(updateDeviceInfo, 50);

		updateDeviceInfo();

		window.addEventListener('resize', debouncedUpdateDeviceInfo);
		window.addEventListener('orientationchange', debouncedUpdateDeviceInfo);

		return () => {
			window.removeEventListener('resize', debouncedUpdateDeviceInfo);
			window.removeEventListener('orientationchange', debouncedUpdateDeviceInfo);
		}
	}, []);

	return (
		<DeviceContext.Provider value={deviceInfo}>
			<MessagesContext.Provider value={pageProps.messages}>
				<NextIntlProvider messages={pageProps.messages}>
					<TransitionWrapper>
						<FixedNavbar {...pageProps} />
						<Component
							className="pt-navbar-height 4xl:pt-navbar-height-4xl"
							{...pageProps}
						/>
						<Footer {...pageProps} />
						<ToastContainer className="mt-navbar-height 4xl:mt-navbar-height-4xl" />
					</TransitionWrapper>
				</NextIntlProvider>
			</MessagesContext.Provider>
		</DeviceContext.Provider>
	)
}
