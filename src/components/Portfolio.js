import React, { createRef } from 'react';
import Image from 'next/legacy/image';

import { FaLessThan, FaGreaterThan } from 'react-icons/fa';

import anime from 'animejs/lib/anime';

class Portfolio extends React.Component {
	constructor(props) {
		super(props);

		this.gridRef = createRef();

		this.animateGrid = this.animateGrid.bind(this);
	}

	animateGrid(from) {
		anime({
			targets: this.gridRef.current.children,
			scale: [
				{
					value: 0,
					easing: 'easeOutSine',
					duration: 500
				},

				{
					value: 0,
					easing: 'easeOutSine',
					duration: 500
				},

				{
					value: 1,
					easing: 'easeInOutQuad',
					duration: 1200
				}
			],
			delay: anime.stagger(200, {grid: [5, 2], from})
		});
	}

	render() {
		return (
			<section className={`w-full
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

					<div className="flex flex-row gap-x-2">
						<button className="h-auto px-2 bg-[#101010A0] text-2xl text-white duration-200 hover:will-change-transform hover:scale-95" onClick={() => this.animateGrid('first')}>
							<FaLessThan />
						</button>

						<div className={`grid grid-rows-2 grid-cols-5 gap-x-2 gap-y-2`} ref={this.gridRef}>
							<div className="w-[200px] aspect-square bg-p-black"></div>
							<div className="w-[200px] aspect-square bg-p-black"></div>
							<div className="w-[200px] aspect-square bg-p-black"></div>
							<div className="w-[200px] aspect-square bg-p-black"></div>
							<div className="w-[200px] aspect-square bg-p-black"></div>
							<div className="w-[200px] aspect-square bg-p-black"></div>
							<div className="w-[200px] aspect-square bg-p-black"></div>
							<div className="w-[200px] aspect-square bg-p-black"></div>
							<div className="w-[200px] aspect-square bg-p-black"></div>
							<div className="w-[200px] aspect-square bg-p-black"></div>
						</div>

						<button className="h-auto px-2 bg-[#101010A0] text-2xl text-white duration-200 hover:will-change-transform hover:scale-95" onClick={() => this.animateGrid('last')}>
							<FaGreaterThan />
						</button>
					</div>
				</div>
			</section>
		);
	}
}

export default Portfolio;
