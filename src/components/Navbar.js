import Image from 'next/legacy/image';
import Link from 'next/link';
import { withRouter } from 'next/router';
import React from 'react';

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
		console.log(this.props)
		this.props.router.events.on("routeChangeComplete", this.closeMenu);
	}

	componentWillUnmount() {
		this.props.router.events.off("routeChangeComplete");
	}

	render() {
		return this.props.navbar && (
			<div className={`w-full h-navbar-height bg-p-black flex flex-row px-4 absolute left-0 top-0 z-[900] items-center justify-between`}>
				<Link href="/" className={`w-[104px] select-none`}>
					<Image src={logoLight}
						alt="Big shot logo"
						layout="responsive"
					/>
				</Link>

				<div>
					<nav className={`flex font-glametrix font-light text-white
						flex-col absolute right-0 top-full text-4xl bg-p-black text-right px-2 -mt-px transition-[max-height] ease-in-out duration-1000 ${this.state.isMenuHidden ? 'max-h-0' : 'max-h-[200px]'}
						lg:flex-row lg:static lg:gap-x-3 lg:mt-2 lg:bg-transparent lg:px-0 lg:max-h-none
					`}>
						<Link className="duration-300 hover:text-secondary-500" href="/">[ Home ]</Link>
						<Link className="duration-300 hover:text-secondary-500" href="/#about">[ About ]</Link>
						<Link className="duration-300 hover:text-secondary-500" href="/#our-games">[ Our Games ]</Link>
						<Link className="duration-300 hover:text-secondary-500" href="/#news">[ News ]</Link>
						<Link className="duration-300 hover:text-secondary-500" href="/#contact-us">[ Contact Us ]</Link>
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
