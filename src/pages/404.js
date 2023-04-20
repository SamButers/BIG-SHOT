import React from 'react';

class Page404 extends React.Component {
	render() {
		return (
			<main className="w-full h-screen bg-black relative overflow-hidden font-8bitoperator text-white" ref={this.mainElement}>
				<span className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[16rem] leading-[16rem] opacity-10 select-none`}>404</span>

				<div className={`w-[85%] aspect-[6.23] absolute bottom-0 left-1/2 -translate-x-1/2 border-8 border-white mb-8 px-4 py-2 select-none`}>
					<p className={`text-[2rem] leading-[2rem]`}>* But nobody came.</p>
				</div>
			</main>
		)
	}
}

export default Page404;

export async function getStaticProps({ locale }) {
	return {
		props: {
			noNavbar: true,
			noFooter: true,
			messages: {
				common: (await import(`../../locales/${locale}/common.json`)).default
			}
		}
	}
}
