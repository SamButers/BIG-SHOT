import Image from 'next/image'

import Cover from '@/components/Cover';
import StickyNavbar from '@/components/StickyNavbar';

import Page from '@/utils/Page';

class Home extends Page {
	render() {
		return (
			<main className={`w-full overflow-x-hidden}`}>
				<Cover />
				<div className="w-full relative">
					<StickyNavbar />
					<div className="bg-red-500 h-[350vh]"></div>
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