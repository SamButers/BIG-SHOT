import React, { createRef } from 'react';

import withTranslations from '@/utils/withTranslations';

class Contact extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			localeStrings: {
				title: '',
				content: ''
			}
		}

		this.getLocaleStrings = this.getLocaleStrings.bind(this);
	}

	getLocaleStrings() {
		const t = this.props.t;

		this.setState({
			localeStrings: {
				title: t('contact.title'),
				content: t('contact.content')
			}
		});
	}

	componentDidMount() {
		this.getLocaleStrings();
	}

	render() {
		return (
			<section id="contact-us" className={`w-full
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

<p className={`font-glametrix text-p-black whitespace-pre-wrap text-justify
						w-[90%] text-xl
						lg:w-[90%] lg:text-3xl
						xl:w-[1120px]
						4xl:w-[2240px] 4xl:text-6xl
					`}>{ this.state.localeStrings.content }</p>
				</div>
			</section>
		);
	}
}

export default withTranslations(Contact, 'homepage');
