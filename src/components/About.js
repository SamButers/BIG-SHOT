import React from 'react';
import Image from 'next/legacy/image';

import { InView } from 'react-intersection-observer';
import { FaGem } from 'react-icons/fa';
import { MdAttachMoney, MdFeedback } from 'react-icons/md';
import { IoMegaphone } from 'react-icons/io5';

import Card from '@/components/Card';

import { isPhoneBreakpoint } from '@/utils/device';
import { debounce } from '@/utils/general';
import withContexts from '@/utils/withContexts';

import deviceContext from '@/contexts/deviceContext';

import logo from '$/imgs/LogoDefault.svg';

class About extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			areCardsOpen: false
		};

		this.updateCardsState = this.updateCardsState.bind(this);
		this.updateIsPhoneBreakpoint = this.updateIsPhoneBreakpoint.bind(this);
		this.isCardOpen = this.isCardOpen.bind(this);

		this.debouncedUpdateIsPhoneBreakpoint = debounce(this.updateIsPhoneBreakpoint, 50);
	}

	updateCardsState(isOnView) {
		this.setState({
			areCardsOpen: isOnView
		});
	}

	updateIsPhoneBreakpoint() {
		const isAtPhoneBreakpoint = isPhoneBreakpoint();
		this.setState({
			isPhoneBreakpoint: isAtPhoneBreakpoint,
			areCardsOpen: isAtPhoneBreakpoint ? true : this.state.areCardsOpen
		});
	}

	isCardOpen() {
		return this.props.contexts.device.isAtPhoneBreakpoint || this.state.areCardsOpen;
	}

	render() {
		return (
			<section id="about" className={`w-full
				pt-8 mb-4
				sm:pt-2
				lg:pt-16 lg:mb-8
			`}>
				<div className={`flex flex-col items-center
					mb-4
					lg:mb-8
				`}>
					<div className={`select-none mb-4
						w-[90%]
						sm:w-[400px]
						lg:w-[464px]
						4xl:w-[928px]
					`}>
						<Image src={logo}
							alt="Big shot logo"
							layout="responsive"
							draggable="false"
						/>
					</div>

					<h1 className={`font-blazma text-primary-500 bg-p-black px-2 select-none
						text-[2rem] leading-[2rem] mb-2
						sm:text-[2rem] sm:leading-[2rem]
						lg:text-[4rem] lg:leading-[4rem] lg:mb-7
						4xl:text-[8rem] 4xl:leading-[8rem]
					`}>[ WHO WE ARE ]</h1>

					<p className={`font-glametrix text-p-black whitespace-pre-wrap text-justify
						w-[90%] text-xl
						lg:w-[90%] lg:text-3xl
						xl:w-[1120px]
						4xl:w-[2240px] 4xl:text-6xl
					`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec justo lectus. Quisque sed sapien non mauris gravida varius et at magna. Quisque porta augue eget nunc ultricies, vitae maximus quam volutpat. In aliquam, lectus vel placerat mattis, lectus mi euismod nisl, vel tristique mauris metus sed enim. Ut eget turpis aliquam, iaculis justo sit amet, efficitur ex. Curabitur eget egestas nunc. Maecenas eleifend sapien dignissim hendrerit aliquam. Integer commodo magna at metus condimentum lacinia. Mauris placerat risus id tellus consectetur, in placerat leo malesuada. Maecenas vestibulum id arcu sit amet tristique. Praesent rutrum hendrerit efficitur. Sed bibendum massa eu rhoncus aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu dui magna. Curabitur urna urna, pulvinar in lacus in, volutpat porta lorem. Integer vitae odio vitae tortor imperdiet molestie.</p>
				</div>

				<div className={`flex flex-col items-center`}>
					<h1 className={`font-blazma text-primary-500 bg-p-black px-2 mb-7 select-none
						text-[2rem] leading-[2rem] mb-2
						lg:text-[4rem] lg:leading-[4rem] lg:mb-7
						4xl:text-[8rem] 4xl:leading-[8rem]
					`}>[ WHAT WE DO ]</h1>

					<InView as="div" className={`
						w-[98%] flex flex-col items-center gap-y-2
						sm:grid sm:grid-cols-2 sm:gap-y-2 sm:justify-items-center
						md:grid md:grid-cols-2 md:gap-y-2 md:justify-items-center
						lg:w-auto lg:flex lg:flex-row lg:gap-x-2 lg:gap-y-0
					`} threshold={0.9} onChange={this.updateCardsState} skip={this.state.isPhoneBreakpoint}>
						<Card Icon={MdAttachMoney} sizeClassNames={`
							w-[286px] h-[172px]
							lg:w-[225px] lg:w-[135px]
							xl:w-[286px] xl:h-[172px]
							4xl:w-[572px] 4xl:h-[344px]
						`} isOpen={this.isCardOpen()} transitionDelay={0}>
							<h2 className={`font-blazma text-primary-500 select-none
								text-4xl
								4xl:text-6xl
							`}>FUNDING</h2>
							<p className={`font-glametrix text-p-black leading-[1.25rem] text-justify whitespace-pre-wrap
								text-xl leading-[1.25rem] px-4
								lg:text-lg lg:leading-[1rem] lg:px-2
								xl:text-xl xl:leading-[1.25rem] xl:px-4
								4xl:text-4xl 4xl:leading-[2.25rem]
							`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel sem at velit dapibus cursus eu vitae enim. Aliquam ullamcorper mi ac ante auctor, egestas vulputate nisl imperdiet. Vestibulum eget fringilla neque.</p>
						</Card>

						<Card Icon={IoMegaphone} sizeClassNames={`
							w-[286px] h-[172px]
							lg:w-[225px] lg:w-[135px]
							xl:w-[286px] xl:h-[172px]
							4xl:w-[572px] 4xl:h-[344px]
						`} isOpen={this.isCardOpen()} transitionDelay={50}>
							<h2 className={`font-blazma text-primary-500 select-none
								text-4xl
								4xl:text-6xl
							`}>MARKETING</h2>
							<p className={`font-glametrix text-p-black leading-[1.25rem] text-justify whitespace-pre-wrap
								text-xl leading-[1.25rem] px-4
								lg:text-lg lg:leading-[1rem] lg:px-2
								xl:text-xl xl:leading-[1.25rem] xl:px-4
								4xl:text-4xl 4xl:leading-[2.25rem]
							`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel sem at velit dapibus cursus eu vitae enim. Aliquam ullamcorper mi ac ante auctor, egestas vulputate nisl imperdiet. Vestibulum eget fringilla neque.</p>
						</Card>

						<Card Icon={FaGem} sizeClassNames={`
							w-[286px] h-[172px]
							lg:w-[225px] lg:w-[135px]
							xl:w-[286px] xl:h-[172px]
							4xl:w-[572px] 4xl:h-[344px]
						`} isOpen={this.isCardOpen()} transitionDelay={100}>
							<h2 className={`font-blazma text-primary-500 select-none
								text-4xl
								4xl:text-6xl
							`}>QA</h2>
							<p className={`font-glametrix text-p-black leading-[1.25rem] text-justify whitespace-pre-wrap
								text-xl leading-[1.25rem] px-4
								lg:text-lg lg:leading-[1rem] lg:px-2
								xl:text-xl xl:leading-[1.25rem] xl:px-4
								4xl:text-4xl 4xl:leading-[2.25rem]
							`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel sem at velit dapibus cursus eu vitae enim. Aliquam ullamcorper mi ac ante auctor, egestas vulputate nisl imperdiet. Vestibulum eget fringilla neque.</p>
						</Card>

						<Card Icon={MdFeedback} sizeClassNames={`
							w-[286px] h-[172px]
							lg:w-[225px] lg:w-[135px]
							xl:w-[286px] xl:h-[172px]
							4xl:w-[572px] 4xl:h-[344px]
						`} isOpen={this.isCardOpen()} transitionDelay={150}>
							<h2 className={`font-blazma text-primary-500 select-none
								text-4xl
								4xl:text-6xl
							`}>FEEDBACK</h2>
							<p className={`font-glametrix text-p-black leading-[1.25rem] text-justify whitespace-pre-wrap
								text-xl leading-[1.25rem] px-4
								lg:text-lg lg:leading-[1rem] lg:px-2
								xl:text-xl xl:leading-[1.25rem] xl:px-4
								4xl:text-4xl 4xl:leading-[2.25rem]
							`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel sem at velit dapibus cursus eu vitae enim. Aliquam ullamcorper mi ac ante auctor, egestas vulputate nisl imperdiet. Vestibulum eget fringilla neque.</p>
						</Card>
					</InView>
				</div>
			</section>
		);
	}
}

export default withContexts(About, {device: deviceContext});
