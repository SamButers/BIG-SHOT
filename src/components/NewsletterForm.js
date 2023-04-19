import React, { createRef } from 'react';

import { toast } from 'react-toastify';

import withTranslations from '@/utils/withTranslations';

class NewsletterForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			hasSubmittedIncorrectly: false
		}

		this.input = createRef();

		this.submit = this.submit.bind(this);
	}

	submit() {
		if(this.input.current.validity.valid) {
			if(this.input.current.value.length) {
				this.input.current.value = '';
				this.setState({
					hasSubmittedIncorrectly: false
				});

				toast(this.props.t('footer.newsletter.successfulSubmit'), {
					className: "!bg-p-black",
					bodyClassName: "bg-p-black font-glametrix text-primary-500 text-2xl text-justify",
					progressClassName: "!bg-secondary-500",
					progressStyle: {background: 'none'},
					autoClose: 8000
				});
			}
		}

		else
			this.setState({
				hasSubmittedIncorrectly: true
			});
	}

	render() {
		const t = this.props.t;

		return (
			<div className={`w-full flex flex-row font-glametrix text-white text-center`}>
				<div className="grow relative group">
					<input name="E-mail" type="email" ref={this.input} className={`w-full text-center text-primary-300 outline-none peer
						text-[1rem]
						md:text-[1.5rem]
						lg:text-[1.5rem]
						4xl:text-[3rem]
					`} />

					<label className={`text-p-black absolute left-0 bottom-full text-[1.25rem] bg-secondary-500 px-1 mb-2 duration-500 select-none ${this.state.hasSubmittedIncorrectly ? 'peer-invalid:visible peer-invalid:opacity-100 peer-valid:invisible peer-valid:opacity-0' : 'invisible opacity-0'}
						after:content-[""] after:absolute after:left-0 after:top-full after:border-4 after:border-x-transparent after:border-b-transparent after:border-t-secondary-500
					`}>{ t('footer.newsletter.invalidEmail') }</label>
				</div>
				<button className={`bg-secondary-500 text-p-black px-3 shrink-0 duration-200 hover:bg-secondary-300
					text-[1.25rem] leading-[1.25rem]
					md:text-[2rem] md:leading-[2rem]
					lg:text-[2rem] lg:leading-[2rem]
					4xl:text-[4rem] 4xl:leading-[4rem]
				`}
					onClick={this.submit}
				>{ t('footer.newsletter.button') }</button>
			</div>
		)
	}
}

export default withTranslations(NewsletterForm, 'common');
