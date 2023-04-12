import '@/styles/globals.css';

import Navbar from '@/components/Navbar';

export default function App({ Component, pageProps }) {
	return (
		<>
			<Navbar {...pageProps} />
			<Component
				className="pt-navbar-height"
				{...pageProps}
			/>
		</>
	)
}
