import React, { createRef } from 'react';
import { withRouter } from 'next/router';
import Image from 'next/legacy/image';

import * as PIXI from "pixi.js";
import anime from 'animejs/lib/anime';

import { debounce, scrollToElement, scrollToTop } from '@/utils/general';
import withContexts from '@/utils/withContexts';

import deviceContext from '@/contexts/deviceContext';

import SOUL from '$/imgs/transition/SOUL.webp';

class Transition extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isInTransition: false
		};

		this.mainElement = createRef();
		this.SOUL = createRef();

		this.app = null;
		this.objects = {
			backGrid: null,
			frontGrid: null
		};
		this.scale = 1;

		this.animations = {
			SOUL: null,
			fadeIn: null,
			fadeOut: null
		};

		this.areChildrenReady = false;
		this.fadeInCompleted = false;

		this.updateScale = this.updateScale.bind(this);
		this.updateGridsSize = this.updateGridsSize.bind(this);
		this.initGrid = this.initGrid.bind(this);
		this.initApp = this.initApp.bind(this);
		this.createAnimations = this.createAnimations.bind(this);
		this.playAnimations = this.playAnimations.bind(this);
		this.pauseAnimations = this.pauseAnimations.bind(this);
		this.startTransition = this.startTransition.bind(this);
		this.finishTransition = this.finishTransition.bind(this);

		this.debouncedUpdateGridsSize = debounce(this.updateGridsSize, 50);
	}

	updateScale() {
		const device = this.props.contexts.device;

		if(device.matchesBreakpoint['4xl']) {
			this.scale = 6;
			this.app.stage.scale = { x: 6, y: 6 };
		}

		else if(device.matchesBreakpoint['lg']) {
			this.scale = 3;
			this.app.stage.scale = { x: 3, y: 3 };
		}
			
		else {
			this.scale = 1;
			this.app.stage.scale = { x: 1, y: 1 };
		}
	}

	updateGridsSize() {
		this.app.resize();

		this.objects.backGrid.width = this.app.view.width;
		this.objects.backGrid.height = this.app.view.height;
		this.objects.frontGrid.width = this.app.view.width;
		this.objects.frontGrid.height = this.app.view.height;
	}

	initGrid() {
		PIXI.BaseTexture.defaultOptions.scaleMode = PIXI.SCALE_MODES.NEAREST;

		const cellTexture = PIXI.Texture.from('/assets/imgs/transition/squareTexture.webp');

		const backGrid = new PIXI.TilingSprite(cellTexture, this.app.view.width, this.app.view.height);
		const frontGrid = new PIXI.TilingSprite(cellTexture, this.app.view.width, this.app.view.height);

		backGrid.tint = 0x240024;
		frontGrid.tint = 0x420042;

		this.app.stage.addChild(backGrid);
		this.app.stage.addChild(frontGrid);

		this.objects.backGrid = backGrid;
		this.objects.frontGrid = frontGrid;

		this.app.ticker.add((delta) => {
			const backX = backGrid.tilePosition.x + (0.625/this.scale) * delta;
			const backY = backGrid.tilePosition.y + (0.625/this.scale) * delta;

			const frontX = frontGrid.tilePosition.x - (1.25/this.scale) * delta;
			const frontY = frontGrid.tilePosition.y - (1.25/this.scale) * delta;

			backGrid.tilePosition = {
				x: backX >= 150 ? backX - 150 : backX,
				y: backY >= 150 ? backY - 150 : backY
			};

			frontGrid.tilePosition = {
				x: frontX <= - 150 ? frontX + 150 : frontX,
				y: frontY <= - 150 ? frontY + 150 : frontY
			};
		});
	}

	initApp() {
		this.app = new PIXI.Application({resizeTo: this.mainElement.current});
		this.app.stop();

		this.mainElement.current.appendChild(this.app.view);

		this.updateScale();
		this.initGrid();
	}

	playAnimations() {
		this.app.start();
		this.animations.SOUL.play();
	}

	pauseAnimations() {
		this.app.stop();
		this.animations.SOUL.pause();
	}

	createAnimations() {
		const fadeTime = 500;

		this.animations.SOUL = anime({
			targets: this.SOUL.current,
			keyframes: [
				{ translateY: -15, duration: 2000},
				{ translateY: 0, duration: 3000}
			],
			easing: 'easeInOutSine',
			autoplay: false,
			loop: true
		});

		this.animations.fadeIn = anime({
			targets: this.mainElement.current,
			opacity: [
				{
					value: 0,
					duration: 0
				},

				{
					value: 1,
					duration: fadeTime
				}
			],
			easing: 'linear',
			autoplay: false,
			begin: this.playAnimations,
			complete: () => {
				if(this.areChildrenReady)
					this.props.updateChildren(this.animations.fadeOut.play);
				else
					this.fadeInCompleted = true;
			}
		});

		this.animations.fadeOut = anime({
			targets: this.mainElement.current,
			opacity: [
				{
					value: 1,
					duration: 0
				},

				{
					value: 0,
					duration: fadeTime
				}
			],
			easing: 'linear',
			autoplay: false,
			begin: () => {
				const pathRegexResult = this.props.router.asPath.match(/(?<pathname>.*?)(#(?<hash>.*))?$/);
				const hash = pathRegexResult.groups.hash;

				if(!hash)
					scrollToTop();
				
				else {
					const element = document.getElementById(hash);

					if(element)
						scrollToElement(element, 'auto');
					else
						scrollToTop();
				}
					
			},
			complete: () => {
				this.pauseAnimations();
				this.setState({
					isInTransition: false
				});
			}
		});
	}
	
	startTransition() {
		this.areChildrenReady = false;
		this.fadeInCompleted = false;
		this.setState({
			isInTransition: true
		});

		this.animations.fadeIn.play();
	}

	finishTransition() {
		if(this.fadeInCompleted)
			this.props.updateChildren(this.animations.fadeOut.play);
		else
			this.areChildrenReady = true;
	}

	componentDidMount() {
		this.initApp();
		this.createAnimations();

		window.addEventListener('resize', this.debouncedUpdateGridsSize);

		this.props.router.events.on('routeChangeStart', this.startTransition);
		this.props.router.events.on('routeChangeComplete', this.finishTransition);
		this.props.router.events.on('routeChangeError', this.finishTransition);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.debouncedUpdateGridsSize);

		this.props.router.events.off('routeChangeStart');
		this.props.router.events.off('routeChangeComplete');
		this.props.router.events.off('routeChangeError');
	}

	componentDidUpdate(prevProps) {
		if(prevProps.contexts.device != this.props.contexts.device)
			this.updateScale();
	}

	render() {
		return (
			<div className={`w-full h-screen bg-black fixed z-[9999] top-0 left-0 overflow-hidden opacity-0 ${this.state.isInTransition ? 'visible' : 'invisible'}`} ref={this.mainElement}>
				<div className={`w-full h-full flex flex-col absolute left-0 top-0 justify-center items-center`}>
					<div className={`aspect-square relative mb-2 select-none
						w-[192px]
						md:w-[256px]
						lg:w-[256px]
						4xl:w-[512px]
					`}>
						<div className={`w-full absolute left-0 top-0 backface-hidden`} ref={this.SOUL}>
							<Image src={SOUL}
								alt="SOUL"
								layout="responsive"
								unoptimized={true}
								priority={true}
								draggable="false"
							/>
						</div>
					</div>

					<span className={`font-8bitoperator text-white select-none
						text-[3rem] leading-[3rem]
						md:text-[4rem] lg:leading-[4rem]
						4xl:text-[8rem] 4xl:leading-[8rem]
					`}>* LOADING . . .</span>
				</div>
			</div>
		)
	}
}

export default withContexts(withRouter(Transition), { device: deviceContext });

export async function getStaticProps({ locale }) {
	return {
		props: {
			noNavbar: true,
			noFooter: true
		}
	}
}
