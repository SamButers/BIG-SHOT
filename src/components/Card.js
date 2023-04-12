import React from 'react';

class Card extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="group">
				<div className={`flex justify-center items-center bg-p-black relative z-20 duration-500 ${this.props.isOpen ? 'translate-y-0' : 'translate-y-1/2'} ${this.props.sizeClassNames}`}
					style={{
						transitionDelay: `${this.props.transitionDelay}ms`
					}}
				>
					<this.props.Icon className="text-primary-500 text-[8rem]" />
				</div>

				<div className={`w-[286px] h-[172px] flex flex-col items-center bg-white relative z-10 duration-500 ${this.props.isOpen ? 'translate-y-0 shadow-2xl' : '-translate-y-1/2 shadow-none'} ${this.props.sizeClassNames}`}
					style={{
						transitionDelay: `${this.props.transitionDelay}ms`
					}}
				>
					{ this.props.children }
				</div>
			</div>
		);
	}
}

Card.defaultProps = {
	isOpen: true,
	sizeClassNames: '',
	transitionDelay: 1000
};

export default Card;
