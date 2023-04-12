import '@/styles/globals.css';

import FixedNavbar from '@/components/FixedNavbar';

export default function App({ Component, pageProps }) {
	return (
		<>
			<FixedNavbar {...pageProps} />
			<Component
				className="pt-navbar-height"
				{...pageProps}
			/>
		</>
	)
}
