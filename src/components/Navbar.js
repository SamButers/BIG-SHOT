import Image from 'next/legacy/image';
import Link from 'next/link';
import { withRouter } from 'next/router';
import React from 'react';

import ScrollLink from './ScrollLink';

import { GiHamburgerMenu } from 'react-icons/gi';

import logoLight from '$/imgs/LogoLight.svg';

class Navbar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isMenuHidden: true
		};

		this.closeMenu = this.closeMenu.bind(this);
	}

	closeMenu() {
		this.setState({
			isMenuHidden: true
		});
	}

	componentDidMount() {
		this.props.router.events.on("routeChangeComplete", this.closeMenu);
	}

	componentWillUnmount() {
		this.props.router.events.off("routeChangeComplete");
	}

	render() {
		return (
			<div className={`w-full bg-p-black flex flex-row px-4 left-0 top-0 z-[900] items-center justify-between ${this.props.position}
				h-navbar-height
				4xl:h-navbar-height-4xl 4xl:px-8
			`}>
				<Link href="/" className={`select-none
					w-[104px]
					4xl:w-[208px]
				`}>
					<Image src={logoLight}
						alt="Big shot logo"
						layout="responsive"
						draggable="false"
					/>
				</Link>

				<div>
					<nav className={`flex font-glametrix font-light text-white overflow-hidden select-none
						flex-col absolute right-0 top-full text-4xl bg-p-black text-right px-2 -mt-px transition-[max-height] ease-in-out duration-1000 ${this.state.isMenuHidden ? 'max-h-0' : 'max-h-[200px]'}
						lg:flex-row lg:static lg:gap-x-3 lg:mt-2 lg:bg-transparent lg:px-0 lg:max-h-none
						4xl:text-7xl 4xl:mt-4 4xl:gap-x-6
					`}>
						<ScrollLink className="duration-300 hover:text-secondary-500" href="/">[ Home ]</ScrollLink>
						<ScrollLink className="duration-300 hover:text-secondary-500" href="/#about">[ About ]</ScrollLink>
						<ScrollLink className="duration-300 hover:text-secondary-500" href="/#our-games">[ Our Games ]</ScrollLink>
						<ScrollLink className="duration-300 hover:text-secondary-500" href="/#contact-us">[ Contact Us ]</ScrollLink>
						<ScrollLink className="duration-300 hover:text-secondary-500" href="/news">[ News ]</ScrollLink>
					</nav>

					<GiHamburgerMenu className={`text-secondary-500 text-4xl duration-300 ${this.state.isMenuHidden ? 'text-white' : 'text-secondary-500'}
						lg:hidden
					`} onClick={() => this.setState({isMenuHidden: !this.state.isMenuHidden})} />
				</div>
			</div>
		);
	}
}

export default withRouter(Navbar);
