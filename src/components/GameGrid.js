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
const portraitQuantity = 4;

class GameGrid extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currentGameIndex: 0,
			gameQuantity: 0
		};

		this.games = [
			{
				img: exampleImage1,
				name: 'Game'
			},

			{
				img: exampleImage3,
				name: 'Another game'
			},

			{
				img: exampleImage1,
				name: 'Game'
			},

			{
				img: exampleImage3,
				name: 'Another game'
			},

			{
				img: exampleImage1,
				name: 'Game'
			},

			{
				img: exampleImage3,
				name: 'Another game'
			},

			{
				img: exampleImage1,
				name: 'Game'
			},

			{
				img: exampleImage3,
				name: 'Another game'
			},

			{
				img: exampleImage1,
				name: 'Game'
			},

			{
				img: exampleImage2,
				name: 'Yet another game'
			},

			{
				img: exampleImage1,
				name: 'Game'
			},

			{
				img: exampleImage2,
				name: 'Yet another game'
			}
		];

		this.loading = {
			counter: 0,
			target: 0
		}
		
		this.gridRef = createRef();

		this.incrementLoading = this.incrementLoading.bind(this);
		this.animateGridOut = this.animateGridOut.bind(this);
		this.animateGridIn = this.animateGridIn.bind(this);
		this.updateGameQuantity = this.updateGameQuantity.bind(this);
		this.renderGridItems = this.renderGridItems.bind(this);
	}

	incrementLoading() {
		this.loading.counter += 1;

		console.log(`Counter: ${this.loading.counter} Target: ${this.loading.target}`);

		if(this.loading.counter >= this.loading.target) {
			this.loading.counter = 0;
			this.animateGridIn();
		}
	}

	animateGridOut(previous) {
		this.animateGridIn.reversed = previous;

		anime({
			targets: this.gridRef.current.children,
			scale: 0,
			easing: 'easeOutSine',
			duration: 500,
			delay: anime.stagger(200, {direction: previous ? 'reverse' : 'normal'}),
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
			targets: this.gridRef.current.children,
			scale: 1,
			easing: 'easeInOutQuad',
			duration: 1000,
			delay: anime.stagger(200, {direction: this.animateGridIn.reversed ? 'reverse' : 'normal'})
		});
	}

	updateGameQuantity() {
		const isPortrait = this.props.contexts.device.isPortrait;
		const quantity = isPortrait ? portraitQuantity : landscapeQuantity;

		if(quantity != this.state.gameQuantity) {
			this.setState({
				gameQuantity: quantity,
				currentGameIndex: 0
			});
	
			this.loading.counter = -Math.min(quantity, this.games.length);
			this.loading.target = Math.min(quantity, this.games.length);
		}
	}

	renderGridItems() {
		const quantity = Math.min(this.games.length - this.state.currentGameIndex, this.state.gameQuantity);
		const items = [];

		let c = 0;
		for(; c < quantity; c += 1) {
			items.push(
				<div className={`w-[200px] aspect-square bg-p-black relative`} key={c}>
					<Image src={this.games[this.state.currentGameIndex + c].img}
						alt="Game image"
						layout="fill"
						objectFit="cover"
						objectPosition="center"
						onLoadingComplete={this.incrementLoading}
						key={this.state.currentGameIndex + c}
					/>
				</div>
			);
		}

		for(; c < this.state.gameQuantity; c += 1) {
			items.push(
				<div className={`w-[200px] aspect-square bg-p-black relative`} key={c}>
				</div>
			);
		}

		return items;
	}

	componentDidMount() {
		this.updateGameQuantity();
	}

	componentDidUpdate(prevProps) {
		if(prevProps.contexts.device.isPortrait != this.props.contexts.device.isPortrait)
			this.updateGameQuantity();
	}

	render() {
		return (
			<div className="flex flex-row gap-x-2">
				<button className="h-auto px-2 bg-[#101010A0] text-2xl text-white duration-200 hover:will-change-transform hover:scale-95"
					disabled={this.state.currentGameIndex - this.state.gameQuantity < 0}
					onClick={() => this.animateGridOut(true)}
				>
					<FaLessThan />
				</button>

				<div className={`grid grid-rows-2 grid-cols-5 gap-x-2 gap-y-2`} ref={this.gridRef}>
					{ this.renderGridItems() }
				</div>

				<button className="h-auto px-2 bg-[#101010A0] text-2xl text-white duration-200 hover:will-change-transform hover:scale-95"
					disabled={this.games.length - this.state.currentGameIndex - this.state.gameQuantity < 0}
					onClick={() => this.animateGridOut(false)}
				>
					<FaGreaterThan />
				</button>
			</div>
		);
	}
}

export default withContexts(GameGrid, {device: deviceContext});
