import React from 'react';
import { withRouter } from 'next/router';

import Transition from './Transition';

class TransitionWrapper extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currentChildren: null
		}

		this.updateChildren = this.updateChildren.bind(this);
	}

	updateChildren(callback) {
		this.setState({
			currentChildren: this.props.children
		}, callback);
	}

	componentDidMount() {
		this.updateChildren();
	}

	render() {
		return (
			<>
				<Transition updateChildren={this.updateChildren}></Transition>

				{ this.state.currentChildren }
			</>
		);
	}
}

export default withRouter(TransitionWrapper);
