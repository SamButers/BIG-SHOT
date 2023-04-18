import React from 'react';
import Image from 'next/legacy/image';

import { FaTwitter, FaFacebook } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';

import NewsletterForm from '@/components/NewsletterForm';

import logoLight from '$/imgs/LogoLight.svg';

class Footer extends React.Component {
	render() {
		return (
			<div className="w-full">
				<div className={`aspect-[4.31]
					w-[250px]
					sm:w-[220px]
					md:w-[375px]
					lg:w-[375px]
					4xl:w-[750px]
				`}></div>
				<div className={`w-full flex flex-col relative bg-p-black items-center justify-between
					min-h-footer-height
					sm:min-h-footer-height-sm
					md:min-h-footer-height-md
					lg:min-h-footer-height-md
					4xl:min-h-footer-height-4xl
				`}>
					<div className={`absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 select-none
						w-[250px]
						sm:w-[220px]
						md:w-[375px]
						lg:w-[375px]
						4xl:w-[750px]
					`}>
						<Image src={logoLight}
							alt="Big shot logo"
							layout="responsive"
							draggable="false"
						/>
					</div>
					
					<div className={`flex flex-col items-center`}>
						<div className={`aspect-[4.31]
							w-[250px]
							sm:w-[220px]
							md:w-[375px]
							lg:w-[375px]
							4xl:w-[750px]
						`}></div>

						<h1 className={`font-blazma text-white select-none
							text-[3rem] leading-[3rem]
							md:text-[4rem] md:leading-[4rem]
							lg:text-[4rem] lg:leading-[4rem]
							4xl:text-[8rem] 4xl:leading-[8rem]
						`}>[BIG SHOT]</h1>
					</div>

					<div className={`max-w-[96%]
						w-[605px]
						4xl:w-[1210px]
					`}>
						<p className={`font-light select-none font-glametrix text-white text-center
							text-[1.25rem] leading-[1.25rem]
							md:text-[2rem] md:leading-[2rem]
							lg:text-[2rem] lg:leading-[2rem]
							4xl:text-[4rem] 4xl:leading-[4rem]
						`}>SUBSCRIBE TO RECEIVE OUR [[Unlimited Premium Trial]] NEWS AND ALSO DOUBLE THE [[Hyperlink Blocked]]</p>
						<NewsletterForm />
					</div>

					<div className={`flex flex-row text-white gap-x-8
						text-[1.75rem]
						md:text-[2.625rem]
						lg:text-[2.625rem]
						4xl:text-[4rem]
					`}>
						<a href="https://sambuters.netlify.app" target="_blank" rel="noopener">
							<FaTwitter className={`duration-300 hover:scale-110 hover:cursor-pointer`} />
						</a>
						<a href="https://www.linkedin.com/in/sambuters/" target="_blank" rel="noopener">
							<RiInstagramFill className={`duration-300 hover:scale-110 hover:cursor-pointer`} />
						</a>
						<a href="https://github.com/SamButers/BIG-SHOT" target="_blank" rel="noopener">
							<FaFacebook className={`duration-300 hover:scale-110 hover:cursor-pointer`} />
						</a>
					</div>

					<p className={`font-glametrix font-light text-white mb-1
						text-[1rem] leading-[1rem]
						md:text-[1.25rem] md:leading-[1.25rem]
						lg:text-[1.25rem] lg:leading-[1.25rem]
						4xl:text-[2.5rem] 4xl:leading-[2.5rem]
					`}>@ 2023 BIG SHOT</p>
				</div>
			</div>
		);
	}
}

export default Footer;
