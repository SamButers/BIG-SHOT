import React from 'react';
import Image from 'next/legacy/image';

import { FaTwitter, FaFacebook } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';

import logoLight from '$/imgs/LogoLight.svg';

class Footer extends React.Component {
	render() {
		return (
			<div className="w-full">
				<div className={`w-[375px] aspect-[4.31]`}></div>
				<div className={`w-full flex flex-col relative bg-p-black items-center justify-between
					min-h-footer-height
				`}>
					<div className={`w-[375px] absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 select-none`}>
						<Image src={logoLight}
							alt="Big shot logo"
							layout="responsive"
							draggable="false"
						/>
					</div>
					
					<div className={`flex flex-col items-center`}>
						<div className={`w-[375px] aspect-[4.31]`}></div>

						<h1 className={`font-blazma text-white text-[4rem] leading-[4rem] select-none`}>[BIG SHOT]</h1>
					</div>

					<div className={`w-[605px] max-w-full font-glametrix text-white text-center`}>
						<p className={`font-light text-[2rem] leading-[2rem] select-none`}>SUBSCRIBE TO RECEIVE OUR [[UNLIMITED PREMIUM TRIAL]] NEWS AND ALSO DOUBLE THE [[Hyperlink Blocked]]</p>
						<div className={`w-full flex flex-row`}>
							<input name="E-mail" type="email" className="grow text-center text-[1.5rem] text-primary-300 outline-none" />
							<button className={`bg-secondary-500 text-p-black text-[2rem] leading-[2rem] px-3 shrink-0 duration-200 hover:bg-secondary-300`}>Subscribe</button>
						</div>
					</div>

					<div className={`flex flex-row text-white text-[2.625rem] gap-x-8`}>
						<FaTwitter />
						<RiInstagramFill />
						<FaFacebook />
					</div>

					<p className={`font-glametrix font-light text-white text-[1.25rem] leading-[1.25rem] mb-1`}>@ 2023 BIG SHOT</p>
				</div>
			</div>
		);
	}
}

export default Footer;
