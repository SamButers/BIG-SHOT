import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<main>
			
		</main>
	)
}

export async function getStaticProps() {
	return {
		props: {
			navbar: false
		}
	}
}