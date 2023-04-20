import Head from 'next/head';

import Cover from '@/components/Cover';
import StickyNavbar from '@/components/StickyNavbar';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';

import Page from '@/utils/Page';

class Home extends Page {
	render() {
		return (
			<main className={`w-full`}>
				<Head>
					<title>[ BIG SHOT ]</title>
				</Head>

				<Cover />
				<div className="w-full relative bg-white">
					<StickyNavbar />
					<About messages={this.props.messages} />
					<Portfolio messages={this.props.messages} />
					<Contact messages={this.props.messages} />
				</div>
			</main>
		)
	}
}

export default Home;

export async function getStaticProps({ locale }) {
	return {
		props: {
			noNavbar: true,
			messages: {
				common: (await import(`../../locales/${locale}/common.json`)).default,
				homepage: (await import(`../../locales/${locale}/homepage.json`)).default
			}
		}
	}
}