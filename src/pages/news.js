import Page from '@/utils/Page';
import Image from 'next/legacy/image';

import banner from '$/imgs/news/banner.webp';

class News extends Page {
	render() {
		return (
			<main className={`w-full min-h-screen overflow-x-hidden ${this.externalClassNames}`}>
				<section className={`flex flex-col gap-y-4 mx-auto
					w-[270px] mt-[24px]
					sm:w-[540px]
					md:mt-[62px]
					lg:mt-[62px]
					xl:w-[1080px]
				`}>
					<div>
						<div className={`w-full relative aspect-[2.3326]`}>
							<Image src={banner}
								alt="News banner"
								layout="fill"
								objectFit="cover"
								objectPosition="center"
								unoptimized={true}
								draggable={false}
							/>
						</div>

						<h1 className={`font-blazma text-primary-300
							text-[1.75rem] leading-[1.75rem]
							sm:text-[3rem] sm:leading-[3rem]
							xl:text-[4rem] xl:leading-[4rem]
						`}>Graphical assets</h1>
						<hr className={`border-t border-t-p-black opacity-50`} />
						<div className={`
							ml-0
							sm:ml-1
							4xl:ml-2
						`}>
							<time className={`font-glametrix text-p-black
								text-[1rem] leading-[1rem]
								sm:text-[1.25rem] sm:leading-[1.25rem]
								xl:text-[1.5rem] xl:leading-[1.5rem]
							`} datetime="2023-04-18T10:30:00.000Z">
								{
									new Date('2023-04-18T10:30:00.000Z').toLocaleDateString('en-US', {
										year: 'numeric',
										month: 'long',
										day: 'numeric'
									})
								}
							</time>
							<p className={`font-glametrix text-p-black
								text-[1.25rem] leading-[1.25rem]
								sm:text-[1.5rem] sm:leading-[1.5rem]
								xl:text-[1.75rem] xl:leading-[1.75rem]
							`}>By Samuel Buters</p>
						</div>
						<hr className={`border-t border-t-p-black opacity-50`} />

						<div className={`flex flex-col gap-y-6 font-glametrix text-p-black whitespace-pre-line text-justify
							text-[1.25rem] leading-[1.5rem] my-2
							sm:text-[1.5rem] sm:leading-[1.75rem] sm:my-4
							xl:text-[1.75rem] xl:leading-[2rem]
						`}>
							<p>{`Hello, everyone! Samuel here, or Sam for short.\n I have decided to use this part of the demo to give credits to the author of some of the graphical resources used, since, well, I had to give credits somewhere and I would probably just put some Lorem Ipsum here anyway, so might as well give it some real use, right?`}</p>

							<p>{`Anyway, the resources I refer to are the ones used in the portfolio section of the homepage and the very banner used for this “post”. The images used are from a collection called Pixel Ladies by the artist enbermudasart, on itch.io.`}</p>

							<p>{`Well, since this “post” is still kinda short, I suppose I will also mention that the design of this website was inspired by a certain character from the game DELTARUNE. If you are familiar with the game, you probably instantly recognized it, maybe even from the website name alone. However, if you are not familiar with it, why not give it a try? It is a pretty fun game and its first two chapters are available right now for free, although some people (I might be part of it, to be honest) would tell you to play UNDERTALE first, which is fair enough, but not really necessary, even according to the author themselves. So, maybe don’t worry too much about that.`}</p>
						
							<p>{`Regardless, it seems like my post size quota has been reached so I suppose this is a farewell. For now. Maybe?\n Well, anyway, see ya!`}</p>
						</div>
						<hr className={`border-t border-t-p-black opacity-50`} />
					</div>
				</section>
			</main>
		)
	}
}

export default News;
