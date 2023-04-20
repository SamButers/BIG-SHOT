import Image from 'next/legacy/image';
import Link from 'next/link';
import { withRouter } from 'next/router';
import React from 'react';

import { FaCaretDown } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdLanguage } from 'react-icons/md';
import { BR, US } from 'country-flag-icons/react/3x2';

import ScrollLink from './ScrollLink';

import withContexts from '@/utils/withContexts';
import withTranslations from '@/utils/withTranslations';

import deviceContext from '@/contexts/deviceContext';

import logoLight from '$/imgs/LogoLight.svg';

class Navbar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isMenuHidden: true,
			isLanguageMenuHidden: true
		};

		this.closeMenu = this.closeMenu.bind(this);
		this.toggleMenu = this.toggleMenu.bind(this);
		this.closeLanguageMenu = this.closeLanguageMenu.bind(this);
		this.toggleLanguageMenu = this.toggleLanguageMenu.bind(this);
		this.changeLocale = this.changeLocale.bind(this);
	}

	closeMenu() {
		this.setState({
			isMenuHidden: true
		});
	}

	toggleMenu() {
		this.setState({
			isMenuHidden: !this.state.isMenuHidden,
			isLanguageMenuHidden: true
		});
	}

	closeLanguageMenu() {
		this.setState({
			isLanguageMenuHidden: true
		});
	}

	toggleLanguageMenu() {
		this.setState({
			isLanguageMenuHidden: !this.state.isLanguageMenuHidden,
			isMenuHidden: true
		});
	}

	changeLocale(locale) {
		if(locale != this.props.router.locale) {
			const { pathname, query } = this.props.router;
			this.props.router.push({pathname, query}, pathname, {locale});

			this.closeLanguageMenu();
		}
	}

	componentDidMount() {
		this.props.router.events.on("routeChangeComplete", this.closeMenu);
	}

	componentWillUnmount() {
		this.props.router.events.off("routeChangeComplete");
	}

	componentDidUpdate(prevProps) {
		if(prevProps.messages != this.props.messages)
			this.getLocaleStrings();
	}

	render() {
		const t = this.props.t;

		return (
			<div className={`w-full bg-p-black flex flex-row px-4 left-0 top-0 z-[900] items-center justify-between ${this.props.position}
				h-navbar-height
				4xl:h-navbar-height-4xl 4xl:px-8
			`}>
				<Link href="/" scroll={false} className={`select-none
					w-[104px]
					4xl:w-[208px]
				`}>
					<Image src={logoLight}
						alt="Big shot logo"
						layout="responsive"
						draggable="false"
					/>
				</Link>

				<div className={`flex flex-row
					gap-x-3
					4xl:gap-x-6
				`}>
					<nav className={`flex font-glametrix font-light text-white overflow-hidden select-none
						flex-col absolute right-0 top-full text-4xl bg-p-black text-right px-2 -mt-px transition-[max-height] ease-in-out duration-1000 ${this.state.isMenuHidden ? 'max-h-0' : 'max-h-[200px]'}
						lg:flex-row lg:static lg:gap-x-3 lg:mt-2 lg:bg-transparent lg:px-0 lg:max-h-none
						4xl:text-7xl 4xl:mt-4 4xl:gap-x-6
					`}>
						<ScrollLink className="duration-300 hover:text-secondary-500" href="/" scroll={false}>[ {t('navbar.home')} ]</ScrollLink>
						<ScrollLink className="duration-300 hover:text-secondary-500" href="/#about" scroll={false}>[ { t('navbar.about') } ]</ScrollLink>
						<ScrollLink className="duration-300 hover:text-secondary-500" href="/#our-games" scroll={false}>[ { t('navbar.portfolio') } ]</ScrollLink>
						<ScrollLink className="duration-300 hover:text-secondary-500" href="/#contact-us" scroll={false}>[ { t('navbar.contact') } ]</ScrollLink>
						<ScrollLink className="duration-300 hover:text-secondary-500" href="/news" scroll={false}>[ { t('navbar.news') } ]</ScrollLink>
					</nav>

					<div className={`flex flex-col absolute right-0 top-full px-2 font-glametrix font-light bg-p-black select-none overflow-hidden transition-[max-height] ease-in-out duration-1000 ${this.state.isLanguageMenuHidden ? 'max-h-0' : 'max-h-[72px] 4xl:max-h-[144px]'}
						text-3xl
						4xl:text-6xl
					`}>
						<div className={`flex flex-row gap-x-2 group hover:cursor-pointer`} onClick={() => this.changeLocale('en-US')}>
							<US className={`
								w-[22px]
								4xl:w-[44px]
							`}
								title="American English"
							/>
							<span className={`duration-300 group-hover:text-secondary-500 ${this.props.router.locale == 'en-US' ? 'text-secondary-500' : 'text-white'}`}>English</span>
						</div>

						<div className={`flex flex-row gap-x-2 items-center group hover:cursor-pointer`} onClick={() => this.changeLocale('pt-BR')}>
							<BR className={`
								w-[22px]
								4xl:w-[44px]
							`}
								title="Português Brasileiro"
							/>
							<span className={`duration-300 group-hover:text-secondary-500 ${this.props.router.locale == 'pt-BR' ? 'text-secondary-500' : 'text-white'}`}>Português</span>
						</div>
					</div>

					<div className="relative self-end mb-[0.25rem] hover:cursor-pointer group" onClick={this.toggleLanguageMenu}>
						<MdLanguage className={`duration-300 ${this.props.contexts.device.isMobile ? '' : 'group-hover:text-secondary-500 '}${this.state.isLanguageMenuHidden ? 'text-white' : 'text-secondary-500'}
							text-4xl
							4xl:text-7xl
						`} />
						<FaCaretDown className={`absolute top-full left-full -translate-x-1/2 -translate-y-1/2 duration-300 ${this.props.contexts.device.isMobile ? '' : 'group-hover:text-secondary-500 '}${this.state.isLanguageMenuHidden ? 'text-white' : 'text-secondary-500'}
							text-xl
							4xl:text-3xl
						`} />
					</div>

					<GiHamburgerMenu className={`text-secondary-500 text-4xl duration-300 ${this.state.isMenuHidden ? 'text-white' : 'text-secondary-500'}
						lg:hidden
					`} onClick={this.toggleMenu} />
				</div>
			</div>
		);
	}
}

export default withContexts(withRouter(withTranslations(Navbar, 'common')), {device: deviceContext});
