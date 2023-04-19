import React, { createRef } from 'react';
import Image from 'next/legacy/image';

import { FaLessThan, FaGreaterThan } from 'react-icons/fa';

import anime from 'animejs/lib/anime';

import withContexts from '@/utils/withContexts';

import deviceContext from '@/contexts/deviceContext';

import exampleImage1 from '$/imgs/001.webp';
import exampleImage2 from '$/imgs/002.webp';
import exampleImage3 from '$/imgs/003.webp';

const landscapeQuantity = 10;
const portraitPhoneQuantity = 4;

class GameGrid extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			localeStrings: {
				games: ['', '', '']
			},
			currentGameIndex: 0,
			gameQuantity: 0
		};

		this.games = [
			{
				img: exampleImage1,
				name: 0
			},

			{
				img: exampleImage3,
				name: 1
			},

			{
				img: exampleImage1,
				name: 0
			},

			{
				img: exampleImage3,
				name: 1
			},

			{
				img: exampleImage1,
				name: 0
			},

			{
				img: exampleImage3,
				name: 1
			},

			{
				img: exampleImage1,
				name: 0
			},

			{
				img: exampleImage3,
				name: 1
			},

			{
				img: exampleImage1,
				name: 0
			},

			{
				img: exampleImage2,
				name: 2
			},

			{
				img: exampleImage1,
				name: 0
			},

			{
				img: exampleImage2,
				name: 2
			}
		];

		this.loading = {
			counter: 0,
			target: 0
		}

		this.inAnimation = false;
		
		this.gridRef = createRef();

		this.incrementLoading = this.incrementLoading.bind(this);
		this.animateGridOut = this.animateGridOut.bind(this);
		this.animateGridIn = this.animateGridIn.bind(this);
		this.updateGameQuantity = this.updateGameQuantity.bind(this);
		this.renderGridItems = this.renderGridItems.bind(this);
		this.getLocaleStrings = this.getLocaleStrings.bind(this);
	}

	incrementLoading() {
		this.loading.counter += 1;

		if(this.loading.counter >= this.loading.target) {
			this.loading.counter = 0;
			this.animateGridIn();
		}
	}

	animateGridOut(previous) {
		if(this.inAnimation)
			return;
		
		this.animateGridIn.reversed = previous;
		this.inAnimation = true;

		anime({
			targets: [...this.gridRef.current.children].filter(child => !child.hasAttribute('empty')),
			scale: 0,
			easing: 'easeOutSine',
			duration: 500,
			delay: anime.stagger(200),
			complete:  () => {
				const index = previous ? this.state.currentGameIndex - this.state.gameQuantity : this.state.currentGameIndex + this.state.gameQuantity;

				this.loading.target = Math.min(this.state.gameQuantity, this.games.length - index);
				this.loading.counter = 0;
				this.setState({
					currentGameIndex: index
				})
			}
		});
	}

	animateGridIn() {
		anime({
			targets: [...this.gridRef.current.children].filter(child => !child.hasAttribute('empty')),
			scale: 1,
			easing: 'easeInOutQuad',
			duration: 1000,
			delay: anime.stagger(200),
			complete: () => {
				this.inAnimation = false;
			}
		});
	}

	updateGameQuantity() {
		const isPortrait = this.props.contexts.device.isPortrait;
		const isAtPhoneBreakpoint = this.props.contexts.device.isAtPhoneBreakpoint;
		const quantity = isPortrait && isAtPhoneBreakpoint ? portraitPhoneQuantity : landscapeQuantity;

		if(quantity != this.state.gameQuantity) {
			this.setState({
				gameQuantity: quantity,
				currentGameIndex: 0
			});
	
			this.loading.counter = -Math.min(quantity, this.games.length);
			this.loading.target = Math.min(quantity, this.games.length);
			this.inAnimation = false;
		}
	}

	renderGridItems() {
		const quantity = Math.min(this.games.length - this.state.currentGameIndex, this.state.gameQuantity);
		const items = [];

		let c = 0;
		for(; c < quantity; c += 1) {
			items.push(
				<div className={`aspect-square flex justify-center items-center relative group hover:cursor-pointer backface-hidden
					w-[100px]
					md:w-[120px]
					lg:w-[150px]
					xl:w-[200px]
					4xl:w-[400px]
				`} key={c}>
					<span className={`w-full font-blazma text-primary-500 text-center relative z-10 bg-p-black opacity-0 duration-500 select-none group-hover:opacity-100 group-hover:will-change-transform
						text-lg
						md:text-xl
						lg:text-2xl
						4xl:text-4xl
					`}>{ this.state.localeStrings.games[this.games[this.state.currentGameIndex + c].name] }</span>

					<Image src={this.games[this.state.currentGameIndex + c].img}
						alt="Game image"
						layout="fill"
						objectFit="cover"
						objectPosition="center"
						quality={100}
						onLoadingComplete={this.incrementLoading}
						key={this.state.currentGameIndex + c}
						className="duration-500 group-hover:scale-105"
						draggable="false"
					/>
				</div>
			);
		}

		for(; c < this.state.gameQuantity; c += 1) {
			items.push(
				<div className={`aspect-square relative backface-hidden
					w-[100px]
					lg:w-[150px]
					xl:w-[200px]
				`} key={c} empty="true">
				</div>
			);
		}

		return items;
	}

	getLocaleStrings() {
		this.setState({
			localeStrings: {
				games: [...this.props.messages.homepage.portfolio.games]
			}
		});
	}

	componentDidMount() {
		this.getLocaleStrings();
		this.updateGameQuantity();
	}

	componentDidUpdate(prevProps) {
		if((prevProps.contexts.device.isPortrait != this.props.contexts.device.isPortrait) || (prevProps.contexts.device.isAtPhoneBreakpoint != this.props.contexts.device.isAtPhoneBreakpoint))
			this.updateGameQuantity();

		if(prevProps.messages != this.props.messages)
			this.getLocaleStrings();
	}

	render() {
		return (
			<div className="flex flex-row gap-x-2">
				<button className={`h-auto bg-[#101010A0] text-white duration-200 disabled:bg-[#A0A0A0A0] hover:will-change-transform enabled:hover:scale-95
					text-lg px-1
					md:px-2
					lg:text-2xl lg:px-2
					4xl:text-4xl
				`}
					disabled={this.state.currentGameIndex - this.state.gameQuantity < 0}
					onClick={() => this.animateGridOut(true)}
				>
					<FaLessThan />
				</button>

				<div className={`grid grid-flow-col
					grid-rows-2 grid-cols-2 gap-x-1 gap-y-1
					md:grid-rows-2 md:grid-cols-5 md:gap-x-2 md:gap-y-2
					lg:grid-rows-2 lg:grid-cols-5 lg:gap-x-2 lg:gap-y-2
					4xl:gap-x-4 4xl:gap-y-4
				`} ref={this.gridRef}>
					{ this.renderGridItems() }
				</div>

				<button className={`h-auto bg-[#101010A0] text-white duration-200 disabled:bg-[#A0A0A0A0] hover:will-change-transform enabled:hover:scale-95
					text-lg px-1
					md:px-2
					lg:text-2xl lg:px-2
					4xl:text-4xl
				`}
					disabled={this.games.length - this.state.currentGameIndex - this.state.gameQuantity <= 0}
					onClick={() => this.animateGridOut(false)}
				>
					<FaGreaterThan />
				</button>
			</div>
		);
	}
}

export default withContexts(GameGrid, {device: deviceContext});
