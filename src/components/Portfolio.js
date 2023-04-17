import React, { createRef } from 'react';
import Image from 'next/legacy/image';

import { FaLessThan, FaGreaterThan } from 'react-icons/fa';

import anime from 'animejs/lib/anime';

import GameGrid from './GameGrid';

import exampleImage1 from '$/imgs/001.webp';
import exampleImage2 from '$/imgs/002.webp';
import exampleImage3 from '$/imgs/003.webp';

class Portfolio extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section id="our-games" className={`w-full
				mb-4
				lg:mb-8
			`}>
				<div className={`flex flex-col items-center`}>
					<h1 className={`font-blazma text-primary-500 bg-p-black px-2 select-none
						text-[2rem] leading-[2rem] mb-2
						sm:text-[2rem] sm:leading-[2rem]
						lg:text-[4rem] lg:leading-[4rem] lg:mb-7
						4xl:text-[8rem] 4xl:leading-[8rem]
					`}>[ OUR GAMES ]</h1>

					<GameGrid />
				</div>
			</section>
		);
	}
}

export default Portfolio;
