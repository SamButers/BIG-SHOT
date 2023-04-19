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
import withTranslations from '@/utils/withTranslations';

import deviceContext from '@/contexts/deviceContext';

import logo from '$/imgs/LogoDefault.svg';

class About extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			localeStrings: {
				who: {
					title: '',
					content: ''
				},

				what: {
					title: '',
					funding: {
						title: '',
						content: ''
					},
		
					marketing: {
						title: '',
						content: ''
					},
		
					qa: {
						title: '',
						content: ''
					},
		
					feedback: {
						title: '',
						content: ''
					}
				}
			},
			areCardsOpen: false
		};

		this.updateCardsState = this.updateCardsState.bind(this);
		this.updateIsPhoneBreakpoint = this.updateIsPhoneBreakpoint.bind(this);
		this.isCardOpen = this.isCardOpen.bind(this);
		this.getLocaleStrings = this.getLocaleStrings.bind(this);

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

	getLocaleStrings() {
		const t = this.props.t;

		this.setState({
			localeStrings: {
				who: {
					title: t('about.who.title'),
					content: t('about.who.content')
				},

				what: {
					title: t('about.what.title'),
					funding: {
						title: t('about.what.funding.title'),
						content: t('about.what.funding.content')
					},
		
					marketing: {
						title: t('about.what.marketing.title'),
						content: t('about.what.marketing.content')
					},
		
					qa: {
						title: t('about.what.qa.title'),
						content: t('about.what.qa.content')
					},
		
					feedback: {
						title: t('about.what.feedback.title'),
						content: t('about.what.feedback.content')
					}
				}
			}
		});
	}

	componentDidMount() {
		this.getLocaleStrings();
	}

	componentDidUpdate(prevProps) {
		if(prevProps.messages != this.props.messages)
			this.getLocaleStrings();
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
					`}>[ { this.state.localeStrings.who.title } ]</h1>

					<p className={`font-glametrix text-p-black whitespace-pre-wrap text-justify
						w-[90%] text-xl
						lg:w-[90%] lg:text-3xl
						xl:w-[1120px]
						4xl:w-[2240px] 4xl:text-6xl
					`}>{ this.state.localeStrings.who.content }</p>
				</div>

				<div className={`flex flex-col items-center`}>
					<h1 className={`font-blazma text-primary-500 bg-p-black px-2 mb-7 select-none
						text-[2rem] leading-[2rem] mb-2
						lg:text-[4rem] lg:leading-[4rem] lg:mb-7
						4xl:text-[8rem] 4xl:leading-[8rem]
					`}>[ { this.state.localeStrings.what.title } ]</h1>

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
							`}>{ this.state.localeStrings.what.funding.title }</h2>
							<p className={`font-glametrix text-p-black leading-[1.25rem] text-justify whitespace-pre-wrap
								text-xl leading-[1.25rem] px-4
								lg:text-lg lg:leading-[1rem] lg:px-2
								xl:text-xl xl:leading-[1.25rem] xl:px-4
								4xl:text-4xl 4xl:leading-[2.25rem]
							`}>{ this.state.localeStrings.what.funding.content }</p>
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
							`}>{ this.state.localeStrings.what.marketing.title }</h2>
							<p className={`font-glametrix text-p-black leading-[1.25rem] text-justify whitespace-pre-wrap
								text-xl leading-[1.25rem] px-4
								lg:text-lg lg:leading-[1rem] lg:px-2
								xl:text-xl xl:leading-[1.25rem] xl:px-4
								4xl:text-4xl 4xl:leading-[2.25rem]
							`}>{ this.state.localeStrings.what.marketing.content }</p>
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
							`}>{ this.state.localeStrings.what.qa.title }</h2>
							<p className={`font-glametrix text-p-black leading-[1.25rem] text-justify whitespace-pre-wrap
								text-xl leading-[1.25rem] px-4
								lg:text-lg lg:leading-[1rem] lg:px-2
								xl:text-xl xl:leading-[1.25rem] xl:px-4
								4xl:text-4xl 4xl:leading-[2.25rem]
							`}>{ this.state.localeStrings.what.qa.content }</p>
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
							`}>{ this.state.localeStrings.what.feedback.title }</h2>
							<p className={`font-glametrix text-p-black leading-[1.25rem] text-justify whitespace-pre-wrap
								text-xl leading-[1.25rem] px-4
								lg:text-lg lg:leading-[1rem] lg:px-2
								xl:text-xl xl:leading-[1.25rem] xl:px-4
								4xl:text-4xl 4xl:leading-[2.25rem]
							`}>{ this.state.localeStrings.what.feedback.content }</p>
						</Card>
					</InView>
				</div>
			</section>
		);
	}
}

export default withContexts(withTranslations(About, 'homepage'), {device: deviceContext});
