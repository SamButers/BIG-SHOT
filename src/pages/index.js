import Image from 'next/image'

import Cover from '@/components/Cover';
import StickyNavbar from '@/components/StickyNavbar';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';

import Page from '@/utils/Page';

class Home extends Page {
	render() {
		return (
			<main className={`w-full overflow-x-hidden}`}>
				<Cover />
				<div className="w-full relative bg-white">
					<StickyNavbar />
					<About />
					<Portfolio />
				</div>
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