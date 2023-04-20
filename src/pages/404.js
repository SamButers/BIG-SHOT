import React from 'react';

class Page404 extends React.Component {
	render() {
		return (
			<main className="w-full h-screen bg-black relative overflow-hidden font-8bitoperator text-white" ref={this.mainElement}>
				<span className={`absolute left-1/2 -translate-x-1/2 opacity-10 select-none
					top-1/2 -translate-y-1/2 text-[16rem] leading-[16rem]
					sm:top-0 sm:translate-y-0 sm:leading-[9rem] sm:mt-4
					md:top-1/2 md:-translate-y-1/2 md:leading-[16rem] md:mt-0
					lg:top-1/2 lg:-translate-y-1/2 lg:leading-[16rem] lg:mt-0
					4xl:text-[32rem] 4xl:leading-[32rem]
				`}>404</span>

				<div className={`absolute bottom-0 left-1/2 -translate-x-1/2 bg-black border-white select-none
					w-[90%] aspect-[2.5] border-[6px] mb-4 px-4 py-2
					sm:aspect-[4.23]
					md:aspect-[4.23] md:border-8 md:mb-8
					lg:w-[90%] lg:aspect-[5.23] lg:border-8 lg:mb-8
					xl:w-[85%] xl:aspect-[6.23]
					4xl:border-[16px] 4xl:px-8 4xl:py-4
				`}>
					<p className={`
						text-[2rem] leading-[2rem]
						4xl:text-[4rem] 4xl:leading-[4rem]
					`}>* But nobody came.</p>
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
