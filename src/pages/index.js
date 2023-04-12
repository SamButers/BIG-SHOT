import Image from 'next/image'

import Cover from '@/components/Cover';

import Page from '@/utils/Page';

class Home extends Page {
	render() {
		return (
			<main className={`w-full overflow-x-hidden}`}>
				<Cover />
			</main>
		)
	}
}

export default Home;

export async function getStaticProps() {
	return {
		props: {
			navbar: false
		}
	}
}