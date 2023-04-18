import React from 'react';
import Image from 'next/legacy/image';

import { FaTwitter, FaFacebook } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';

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
				`}></div>
				<div className={`w-full flex flex-col relative bg-p-black items-center justify-between
					min-h-footer-height
					sm:min-h-footer-height-sm
					md:min-h-footer-height-md
					lg:min-h-footer-height-md
				`}>
					<div className={`absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 select-none
						w-[250px]
						sm:w-[220px]
						md:w-[375px]
						lg:w-[375px]
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
						`}></div>

						<h1 className={`font-blazma text-white select-none
							text-[3rem] leading-[3rem]
							md:text-[4rem] md:leading-[4rem]
							lg:text-[4rem] lg:leading-[4rem]
						`}>[BIG SHOT]</h1>
					</div>

					<div className={`w-[605px] max-w-[96%] font-glametrix text-white text-center`}>
						<p className={`font-light select-none
							text-[1.25rem] leading-[1.25rem]
							md:text-[2rem] md:leading-[2rem]
							lg:text-[2rem] lg:leading-[2rem]
						`}>SUBSCRIBE TO RECEIVE OUR [[UNLIMITED PREMIUM TRIAL]] NEWS AND ALSO DOUBLE THE [[Hyperlink Blocked]]</p>
						<div className={`w-full flex flex-row`}>
							<input name="E-mail" type="email" className={`grow text-center text-primary-300 outline-none
								text-[1rem]
								md:text-[1.5rem]
								lg:text-[1.5rem]
							`} />
							<button className={`bg-secondary-500 text-p-black px-3 shrink-0 duration-200 hover:bg-secondary-300
								text-[1.25rem] leading-[1.25rem]
								md:text-[2rem] md:leading-[2rem]
								lg:text-[2rem] lg:leading-[2rem]
							`}>Subscribe</button>
						</div>
					</div>

					<div className={`flex flex-row text-white gap-x-8
						text-[1.75rem]
						md:text-[2.625rem]
						lg:text-[2.625rem]
					`}>
						<FaTwitter className={`duration-300 hover:scale-110 hover:cursor-pointer`} />
						<RiInstagramFill className={`duration-300 hover:scale-110 hover:cursor-pointer`} />
						<FaFacebook className={`duration-300 hover:scale-110 hover:cursor-pointer`} />
					</div>

					<p className={`font-glametrix font-light text-white mb-1
						text-[1rem] leading-[1rem]
						md:text-[1.25rem] md:leading-[1.25rem]
						lg:text-[1.25rem] lg:leading-[1.25rem]
					`}>@ 2023 BIG SHOT</p>
				</div>
			</div>
		);
	}
}

export default Footer;
