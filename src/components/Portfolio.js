import React, { createRef } from 'react';

import GameGrid from './GameGrid';

import withTranslations from '@/utils/withTranslations';

class Portfolio extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			localeStrings: {
				title: ''
			}
		}

		this.getLocaleStrings = this.getLocaleStrings.bind(this);
	}

	getLocaleStrings() {
		const t = this.props.t;

		this.setState({
			localeStrings: {
				title: t('portfolio.title')
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
			<section id="our-games" className={`w-full
				mb-4
				lg:mb-8
			`}>
				<div className={`flex flex-col items-center`}>
					<h1 className={`font-blazma text-primary-500 bg-p-black px-2 select-none
						text-[2rem] leading-[2rem] mb-2
						sm:text-[2rem] sm:leading-[2rem]
						lg:text-[4rem] lg:leading-[4rem] lg:mb-7
						4xl:text-[8rem] 4xl:leading-[8rem]
					`}>[ { this.state.localeStrings.title } ]</h1>

					<GameGrid messages={this.props.messages} />
				</div>
			</section>
		);
	}
}

export default withTranslations(Portfolio, 'homepage');
