import React from 'react';
import Image from 'next/legacy/image';

import lockupLight from '$/imgs/LockupLight.svg';

class Cover extends React.Component {
	render() {
		return (
			<section className="w-full h-screen bg-p-black flex flex-col justify-evenly items-center">
				<div className={`select-none
					w-[90%]
					sm:w-[50%]
					md:w-[672px]
					lg:w-[672px]
					4xl:w-[1345px]
				`}>
					<Image src={lockupLight}
						alt="Big shot logo"
						layout="responsive"
						draggable="false"
					/>
				</div>

				<div className={`flex flex-col text-white text-center font-blazma select-none
					text-5xl
					sm:text-4xl
					md:text-5xl
					lg:text-[4rem] lg:leading-[5rem]
					4xl:text-9xl
				`}>
					<span>[NOW IS YOUR CHANCE TO BE]</span>
					<span>[A]</span>
					<span>[BIG SHOT!]</span>
				</div>
			</section>
		);
	}
}

export default Cover;
