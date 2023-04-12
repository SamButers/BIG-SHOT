import React from 'react';
import Image from 'next/legacy/image';

import { InView } from 'react-intersection-observer';
import { FaGem } from 'react-icons/fa';
import { MdAttachMoney, MdFeedback } from 'react-icons/md';
import { IoMegaphone } from 'react-icons/io5';

import Card from '@/components/Card';

import logo from '$/imgs/LogoDefault.svg';

class About extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			areCardsOpen: false
		};

		this.updateCardsState = this.updateCardsState.bind(this);
	}

	updateCardsState(isOnView) {
		this.setState({
			areCardsOpen: isOnView
		});
	}

	render() {
		return (
			<div className="w-full mt-16">
				<div className={`flex flex-col items-center mb-8`}>
					<div className={`w-[464px] select-none mb-4`}>
						<Image src={logo}
							alt="Big shot logo"
							layout="responsive"
							draggable="false"
						/>
					</div>

					<h1 className={`font-blazma text-primary-500 text-[4rem] leading-[4rem] bg-p-black px-2 mb-7 select-none`}>[ WHO WE ARE ]</h1>

					<p className="w-[1120px] font-glametrix text-3xl text-p-black whitespace-pre-wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec justo lectus. Quisque sed sapien non mauris gravida varius et at magna. Quisque porta augue eget nunc ultricies, vitae maximus quam volutpat. In aliquam, lectus vel placerat mattis, lectus mi euismod nisl, vel tristique mauris metus sed enim. Ut eget turpis aliquam, iaculis justo sit amet, efficitur ex. Curabitur eget egestas nunc. Maecenas eleifend sapien dignissim hendrerit aliquam. Integer commodo magna at metus condimentum lacinia. Mauris placerat risus id tellus consectetur, in placerat leo malesuada. Maecenas vestibulum id arcu sit amet tristique. Praesent rutrum hendrerit efficitur. Sed bibendum massa eu rhoncus aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu dui magna. Curabitur urna urna, pulvinar in lacus in, volutpat porta lorem. Integer vitae odio vitae tortor imperdiet molestie.</p>
				</div>

				<div className={`flex flex-col items-center`}>
					<h1 className={`font-blazma text-primary-500 text-[4rem] leading-[4rem] bg-p-black px-2 mb-7 select-none`}>[ WHAT WE DO ]</h1>

					<InView as="div" className={`flex flex-row gap-x-2`} threshold={0.9} onChange={this.updateCardsState}>
						<Card Icon={MdAttachMoney} sizeClassNames={`w-[286px] h-[172px]`} isOpen={this.state.areCardsOpen} transitionDelay={0}>
							<h2 className={`font-blazma text-primary-500 text-4xl select-none`}>FUNDING</h2>
							<p className={`font-glametrix text-p-black text-xl leading-[1.25rem] text-justify whitespace-pre-wrap px-4`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel sem at velit dapibus cursus eu vitae enim. Aliquam ullamcorper mi ac ante auctor, egestas vulputate nisl imperdiet. Vestibulum eget fringilla neque.</p>
						</Card>

						<Card Icon={IoMegaphone} sizeClassNames={`w-[286px] h-[172px]`} isOpen={this.state.areCardsOpen} transitionDelay={50}>
							<h2 className={`font-blazma text-primary-500 text-4xl select-none`}>MARKETING</h2>
							<p className={`font-glametrix text-p-black text-xl leading-[1.25rem] text-justify whitespace-pre-wrap px-4`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel sem at velit dapibus cursus eu vitae enim. Aliquam ullamcorper mi ac ante auctor, egestas vulputate nisl imperdiet. Vestibulum eget fringilla neque.</p>
						</Card>

						<Card Icon={FaGem} sizeClassNames={`w-[286px] h-[172px]`} isOpen={this.state.areCardsOpen} transitionDelay={100}>
							<h2 className={`font-blazma text-primary-500 text-4xl select-none`}>QA</h2>
							<p className={`font-glametrix text-p-black text-xl leading-[1.25rem] text-justify whitespace-pre-wrap px-4`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel sem at velit dapibus cursus eu vitae enim. Aliquam ullamcorper mi ac ante auctor, egestas vulputate nisl imperdiet. Vestibulum eget fringilla neque.</p>
						</Card>

						<Card Icon={MdFeedback} sizeClassNames={`w-[286px] h-[172px]`} isOpen={this.state.areCardsOpen} transitionDelay={150}>
							<h2 className={`font-blazma text-primary-500 text-4xl select-none`}>FEEDBACK</h2>
							<p className={`font-glametrix text-p-black text-xl leading-[1.25rem] text-justify whitespace-pre-wrap px-4`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel sem at velit dapibus cursus eu vitae enim. Aliquam ullamcorper mi ac ante auctor, egestas vulputate nisl imperdiet. Vestibulum eget fringilla neque.</p>
						</Card>
					</InView>
				</div>
			</div>
		);
	}
}

export default About;
