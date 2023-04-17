import React, { createRef } from 'react';
import Image from 'next/legacy/image';

import { FaLessThan, FaGreaterThan } from 'react-icons/fa';

import anime from 'animejs/lib/anime';

class Contact extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section id="contact-us" className={`w-full
				mb-4
				lg:mb-8
			`}>
				<div className={`flex flex-col items-center`}>
					<h1 className={`font-blazma text-primary-500 bg-p-black px-2 select-none
						text-[2rem] leading-[2rem] mb-2
						sm:text-[2rem] sm:leading-[2rem]
						lg:text-[4rem] lg:leading-[4rem] lg:mb-7
						4xl:text-[8rem] 4xl:leading-[8rem]
					`}>[ CONTACT US ]</h1>

<p className={`font-glametrix text-p-black whitespace-pre-wrap text-justify
						w-[90%] text-xl
						lg:w-[90%] lg:text-3xl
						xl:w-[1120px]
						4xl:w-[2240px] 4xl:text-6xl
					`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras viverra pretium efficitur. Etiam id sollicitudin nibh. Donec diam lacus, placerat sit amet sollicitudin non, finibus in justo. Donec non sem ante. Duis vitae lobortis augue, et feugiat ipsum. Quisque a consequat tortor. Aliquam non sem sem. Proin semper varius dignissim.</p>
				</div>
			</section>
		);
	}
}

export default Contact;
